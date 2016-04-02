
/**
The event database holds all events 
@constructor
@this {EventDatabase}
@property {Array.<PastEvent>} _past Private. Those events that have already happend.
@property {Array.<FutureEvent>} _present Private. Those events that are in the near future.
@property {Array.<FutureEvent>} _future Private. Those events that are in the far future.
@property {Array.<function>} _past_listeners Private. The listeners that care about the past.
@property {Array.<function>} _present_listeners Private. The listeners that care about the present.
@property {Array.<function>} _future_listeners Private. The listeners that care about the future.
*/
function EventDatabase() {
  this._data = new Array(3);
  this._names = ["past", "present", "future"];
  this.needsSaving = false;
  this.whatNeedsSaving = new Array(3);
  this._listeners = [[], [], []];
}

EventDatabase.PAST = 0;
EventDatabase.PRESENT = 1;
EventDatabase.FUTURE = 2;

/**
Starts asynchronous loading of past events
@param {function} callback Callback function
*/
EventDatabase.prototype.loadPast = function (callback) {
  this._loadGeneral(callback, EventDatabase.PAST);
};

/**
Starts asynchronous loading of typed events
@private
@param {function} callback Callback function
@param {Number} type The type index of the event set to be loaded.
*/
EventDatabase.prototype._loadGeneral = function (callback, type) {
  if (typeof callback !== "function" && callback)
    throw new TypeError("Callback must be a function if defined");
  if (this._data[type]) {
    if (callback)
      callback(this._data[type]);
    return;
  }
  if (callback)
    this._listeners[type].push(callback);
  var key = "__EventDatabase_" + this._names[type];
  if (window && window.localStorage) {
    this._loadedCallback({
      [key]: JSON.parse(localStorage.getItem(key))
    }, type);
  } else {
    var self = this;
    chrome.storage.sync.get(key, function (data) {
      self._loadedCallback(data, type);
    });
  }
};

/**
Starts asynchronous loading of present events
@param {function} callback Callback function
*/
EventDatabase.prototype.loadPresent = function (callback) {
  this._loadGeneral(callback, EventDatabase.PRESENT);
};

/**
Starts asynchronous loading of future events
@param {function} callback Callback function
*/
EventDatabase.prototype.loadFuture = function (callback) {
  this._loadGeneral(callback, EventDatabase.FUTURE);
};

/**
Async callback is finished for type events,
calls all callbacks associated with past
@param {Object} data Chrome's data object
@param {Number} type The type index of the event set to be loaded.
*/
EventDatabase.prototype._loadedCallback = function (data, type) {
  var key = "__EventDatabase_" + this._names[type];
  if (data[key])
    this._data[type] = data[key];
  else
    this._data[type] = [];

  for (var i = 0; i < this._listeners[type].length; i++) {
    this._listeners[type][i](this._data[type]);
  }
};

/*
ex
*/
var MainDatabase = new EventDatabase();
MainDatabase.loadPast(function (e) {
  console.log(e);
});

/**
This is an event object held by a student organization
@constructor
@this {Event}
@property {String} title holds the title of the event
@property {Integer} start holds the start UTC time of
the event
@property {Integer} end holds the end UTC time of the event
@property {String} desc holds a description of the event
@property {Array.<String>} holds all tags of the event
*/
function Event(tit, start, end, desc, tags){
  /*
  title should be simple enough: title of the Event
  time should be given as a UTC time.
  */
  this.title = tit;
  this.startTime = start;
  this.description=desc;
  this.endTime=end;
  this.tags=tags;
}

/**
Converts the UTC time of the event into the Date object
@return a Date object that is equivalent to the object's
time
*/
Event.prototype.displayTime=function(){
  return new Date(this.time);
};

/**
Sets the description of the event to a new value
@param {String} the new description of the event
*/
Event.prototype.setDescription(Description){
  this.description=Description;
};

/**
Sets the title of the event to a new value
@param {String} the new title of the event
*/
Event.prototype.setTitle=function(Title){
  this.title = Title;
};

/**
Sets the start time of the event to a new value
@param {Integer} the new start time of the event (UTC)
*/
Event.prototype.setStartTime=function(Time){
  this.startTime = Time;
};

/**
  Sets the end time of the event to a new value
  @param {Integer} the new start time of the event (UTC)
*/
Event.prototype.setEndTime=funtion(Time){
  this.endTime = Time;
}

/**
Sets the tags of the event to a new value
@param {Array.<String>} the new tags of the event
*/
Event.prototype.setTags=function(tags){
  this.tags=tags;
};

/**
Prints the event in a human readable format
@return a human readable format of the event
*/
Event.prototype.printEvent=function(){
  return this.getTitle() + "    " +this.getDate()+" "+this.getStartTime()+"-"this.getEndTime();
};

/**
  Gives the title of the event
  @return the title of the event
*/
Event.prototype.getTitle=function(){
  return this.title
};

/**
  Gives the start time of the event
  @return the start time of the event
*/
Event.prototype.getStartTime=function(){
  return timeTransform(this.startTime);
};

/**
  Gives the tags of the event
  @return the tags of the event
*/
Event.prototype.getTags=function(){
  return this.tags;
};

/**
Gives the end time of the eventTime
@return the end time of the event
*/
Event.prototype.getEndTime=function(){
  return timeTransform(this.endTime);
};

/**
converts the UTC time to the format used in printing
@param the time passed in UTC
@return the time passed in a readable HH:MM AM/PM
*/
function timeTransform(timeUTC){
  var hour = this.displayTime().getHours();
  var morn = true;
  if (hour >= 12){
    morn = false;
    hour -= 12;
  }
  return hour+":"+this.displayTime().getMinutes()+(morn ? " AM":" PM");
}

/**
gives the date of the function in a readable format
@return the date in a readable format
*/
Event.prototype.getDate=function(){
  var monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var eventTime= this.displayTime();
  return monthArray[eventTime.getMonth()]+" "+eventTime.getDate();
};

/**
gives the description of the function
@return the descrition of the event
*/
Event.prototype.getDescription=function(){
  return this.description;
};

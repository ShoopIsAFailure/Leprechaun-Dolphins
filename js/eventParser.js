
function Event(){
  /*
  title should be simple enough: title of the Event
  time should be given as a UTC time.
  */
  this.title = "";
  this.time = 0;
}

Event.prototype.displayTime=function(){
  //returns the time of the event in a human readable
  //format.
  return new Date(this.time);
};
Event.prototype.setTitle=function(Title){
  this.title = Title;
};
Event.prototype.setTime=function(Time){
  this.time = Time;
};
Event.prototype.printEvent=function(){
  return this.getTitle() + "    " + this.getDate();
};
Event.prototype.getTitle=function(){
  return this.title
};
Event.prototype.getDate=function(){
  var monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var eventTime= this.displayTime();
  return monthArray[eventTime.getMonth()]+" "+eventTime.getDate();
};
function readLocal(file, eventId){
  /*
  reads the given file and returns the printing of said
  event
  */

}

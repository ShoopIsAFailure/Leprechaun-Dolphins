
function Event(){
  /*
  title should be simple enough: title of the Event
  time should be given as a UTC time.
  */
  this.title = "";
  this.startTime = 0;
  this.description="";
  this.endTime=0;
}

Event.prototype.displayTime=function(){
  //returns the time of the event in a human readable
  //format.
  return new Date(this.time);
};
Event.prototype.setDescription(Description){
  this.description=Description;
};
Event.prototype.setTitle=function(Title){
  this.title = Title;
};
Event.prototype.setStartTime=function(Time){
  this.startTime = Time;
};
Event.prototype.setStartTime=function(Time){
  this.endTime=Time;
};
Event.prototype.printEvent=function(){
  return this.getTitle() + "    " +this.getDate()+" "+this.getStartTime()+"-"this.getEndTime();
};
Event.prototype.getTitle=function(){
  return this.title
};
Event.prototype.getStartTime=function(){
  return timeTransform(this.startTime);
};
Event.prototype.getEndTime=function(){
  return timeTransform(this.endTime);
};
function timeTransform(timeUTC){
  var hour = this.displayTime().getHours();
  var morn = true;
  if (hour >= 12){
    morn = false;
    hour -= 12;
  }
  return hour+":"+this.displayTime().getMinutes()+(morn ? " AM":" PM");
}
Event.prototype.getDate=function(){
  var monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var eventTime= this.displayTime();
  return monthArray[eventTime.getMonth()]+" "+eventTime.getDate();
};
Event.prototype.getDescription=function(){
  return this.description;
};

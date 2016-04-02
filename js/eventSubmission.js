function submitEvent(){
    var info = {title:"event-name", date:"event-date", start:"event-start",end:"event-end",desc:"event-description", tags:"event-tags"};
    for(var key in info){
      info[key]=document.getElementById(info[key]).value();
    }
    info[tags] = info[tags].split(",");
    var startDate = new Date(info[date]+" "+info[start]).getTime();
    var endDate = new Date(info[date]+" "+info[end]).getTime();
    var newEvent = Event(info[title],startDate,endDate,info[desc],info[tags]);
    MainDatabase.addEvent(newEvent);
    MainDatabase.save();
}
function retrieveEvent(title, date,startTime){
  var searchTerm = title + new Date(title+" "+startTime).getTime();
  return document.getElementById("event-found").innerHTML=localStorage.getItem(searchTerm);
}

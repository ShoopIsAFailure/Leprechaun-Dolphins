/**
@param {Array.<FutureEvent>} event - This is the list containing the events
@param {History} history - This is the object with history for event types
@return {Array} returns array with top events containing top three tags
*/
function Get(event, history) {
    //init value for value of an event
    var value = 0;
    //for every event for all the tags in that event
    //add all the values of those even up if they are defined in
    //the history
    for(var i = 0; i < event.length; i++) {
        for(var j = 0; j < event[i].tags.length; j++) {
            if(history.tag !== undefined) {
                value += history.tag[j];
            }
            //store that in the value for that event
            event[i].sortingValue = value;
            value = 0;
        }
        
    }
    
    //sort by those values
    event.sort(function(a,b) {return b.sortingValue-a.sortingValue});
    
    //check if they said they are not going to an event
    //if they are remove the event
    for(var k = 0; k < event.length; k++) {
            if(event[k].going === 0) {
                event.splice(k,1);
            }
        
    }
    
    //return top 5 results
    return event.slice(0,5);
}


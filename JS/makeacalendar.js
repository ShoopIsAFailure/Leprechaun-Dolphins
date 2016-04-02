function eventFromLocalEvent(event){
    return {
        title : event.title + ' ' + event.className,
        start : event.start,
        end : event.end
    }
}

$(document).ready(function() {

    // page is now ready, initialize the calendar...
console.log("halp");
    $('#calendar').fullCalendar({
        height: 550,
        eventLimit: true,
        views: {
            agenda: {
                eventLimit: 3
            }
        },
        eventSources:[
            {
                //events: [
                // the format is eventFromLocalEvent({
                // title: varTitle,
                // start: varStart,
                // end: varEnd,
                // location/className: varloc,
                //  }),
                // *more events info
                // ...
                //],
                events:[
                    eventFromLocalEvent({
                        title : 'Yo yo 1',
                        start : '2016-04-02T16:00:00',
                        end : '2016-04-02T17:00:00', 
                        className: 'Babbio 120'
                    }),
                     eventFromLocalEvent({
                        title : 'Yo yo 2',
                        start : '2016-04-02T16:00:00',
                        end : '2016-04-02T17:00:00',
                        className: 'Babbio 120'
                    }),
                     eventFromLocalEvent({
                        title : 'Yo yo 3',
                        start : '2016-04-02T16:00:00',
                        end : '2016-04-02T17:00:00',
                        className: 'Babbio 120'
                    }),
                    eventFromLocalEvent({
                        title : 'second?',
                        start : '2016-04-02T18:00:00',
                        end : '2016-04-02T19:00:00',
                        className: 'Babbio 120'
                    })
                ],
                color : 'red'
            }
        ]
    })

});
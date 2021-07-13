
import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';


const ColoredDateCellWrapper = ({ children }) =>


    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: '#f2f4f9',
        },
    })

const Basic = ({ localizer }) => {


    const events = [
        {
            id: 0,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2021, 3, 0),
            end: new Date(2021, 3, 1),
        },
        {
            id: 1,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2021, 7, 13),
            end: new Date(2021, 7, 13),
        },
        {
            id: 2,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2021, 6, 10),
            end: new Date(2021, 6, 13),
        }
    ]

    const handleSelect = props => {
        const title = window.prompt('New Event name')
        if(title) {
            console.log(props)
        }
        
    }

    return (
        <Calendar
            events={events}
            views={['month', 'week', 'day']}
            step={30}
            onSelecting= {slot => true}
            selectable
            selected
            onSelectEvent={event => alert(event.title)}
            /* max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')} */
            defaultDate={new Date(2021, 6, 13)}
            components={{
                timeSlotWrapper: ColoredDateCellWrapper,
            }}
            localizer={localizer}
            onSelectSlot={handleSelect}
        />
    )
}

export default Basic
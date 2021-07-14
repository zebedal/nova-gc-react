
import React, { useContext } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ModalContext } from '../../UI/ModalWrapper';
import moment from 'moment';

const ColoredDateCellWrapper = ({ children }) =>


    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: '#f2f4f9',
        },
    })

const Basic = ({ localizer }) => {


    const modalContext = useContext(ModalContext);

    const events = [
        {
            id: 0,
            title: 'All Day Event very long title',
            desc: 'Reprehenderit do duis voluptate est dolore tempor consequat anim eiusmod ut anim amet velit. Esse consectetur dolore ex fugiat consequat. Culpa proident fugiat ut ex laboris.',
            allDay: true,
            start: new Date(2021, 3, 0),
            end: new Date(2021, 3, 1),
        },
        {
            id: 1,
            title: 'All Day Event very long title',
            title: 'All Day Event very long title',
            desc: 'Reprehenderit do duis voluptate est dolore tempor consequat anim eiusmod ut anim amet velit. Esse consectetur dolore ex fugiat consequat. Culpa proident fugiat ut ex laboris. ',
            allDay: true,
            start: new Date(2021, 7, 13),
            end: new Date(2021, 7, 13),
        },
        {
            id: 2,
            title: 'All Day Event very long title',
            title: 'All Day Event very long title',
            desc: 'Reprehenderit do duis voluptate est dolore tempor consequat anim eiusmod ut anim amet velit. Esse consectetur dolore ex fugiat consequat. Culpa proident fugiat ut ex laboris.',
            allDay: true,
            start: new Date(2021, 6, 10),
            end: new Date(2021, 6, 13),
        }
    ]

    const handleEventSelect = props => {

        const obj = {
            title: props.title,
            desc: props.desc,
            start: moment(props.start).format('DD-MM-YYYY')
        }
        modalContext.setContent(obj);
        modalContext.openModal(true);
    }

    return (

        <Calendar
            events={events}
            views={['month', 'week', 'day']}
            step={30}
            onSelecting={slot => true}
            selectable
            messages={{ 'today': "Hoje", "previous": 'Anterior', "next": "Seguinte" }}
            onSelectEvent={event => handleEventSelect(event)}
            /* max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')} */
            defaultDate={new Date(2021, 6, 13)}
            components={{
                timeSlotWrapper: ColoredDateCellWrapper,
            }}
            localizer={localizer}

        />

    )
}

export default Basic
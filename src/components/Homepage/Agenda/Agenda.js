import React, { useState, useEffect } from "react"
import Card from "../../UI/Card"
import styles from './Agenda.module.css'
import AgendaItem from './AgendaItem'
import axios from "axios"
import { momentLocalizer   } from 'react-big-calendar'
import moment from 'moment'
import Basic from "../../Calendar/Calendar"
import mais from '../../../assets/img/mais.svg'
import MoreOptions from '../../UI/MoreOptions'

const localizer = momentLocalizer(moment)

const Agenda = props => {

    const [agendaItems, setAgendaItems] = useState([]);
    const [calendarEvents, setCalendarEvents] = useState();

    useEffect(() => {

        (async () => {
           const response = await axios.get('/data/agendaItems.json');
           setAgendaItems(response.data);
        })();


    }, [])


    return (
        <div className={styles.wrapper}>
            <Card >
                <MoreOptions />
                <h5>Agenda</h5>
                <p className="subtitle">Últimos 15 dias</p>
                <div className={styles['agenda-items-wrapper']}>
                   {agendaItems && agendaItems.map(item => <AgendaItem {...item} key={item.id}/>)} 
                </div>
                <div className={styles.button}><img src={mais} alt="" />  </div>
              <Basic localizer={localizer}/>
            </Card>
        </div>
    )
}


export default Agenda
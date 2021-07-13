import React, { useState, useEffect } from "react"
import Card from "../../UI/Card"
import styles from './Agenda.module.css'
import AgendaItem from './AgendaItem'
import axios from "axios"

const Agenda = props => {

    const [agendaItems, setAgendaItems] = useState([]);

    useEffect(() => {
        (async () => {
           const response = await axios.get('/data/agendaItems.json');
           setAgendaItems(response.data);
        })();
    }, [])


    return (
        <div className={styles.wrapper}>
            <Card >
                <h5>Agenda</h5>
                <p className="subtitle">Últimos 15 dias</p>
                <div className={styles['agenda-items-wrapper']}>
                   {agendaItems && agendaItems.map(item => <AgendaItem {...item} key={item.id}/>)} 
                </div>
            </Card>
        </div>
    )
}


export default Agenda
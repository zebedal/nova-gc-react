import styles from './Pipeline.module.css'
import React, { useEffect } from 'react'
import Card from '../../UI/Card'
import buildChart from '../Charts/Chart'

const Pipeline = props => {

    useEffect(() => {
        buildChart();
    }, []);

    return (
        <div className={styles.wrapper}>
            <h5>O meu pipeline</h5>
            <p className="subtitle">Informação relativa ao meu awesome pipeline</p>
            <Card >
                <div id="chartdiv" className={styles.chartdiv} >

                </div>

            </Card>
        </div>
    )
}


export default Pipeline
import Card from "../Card"
import styles from './TabsContent.module.css'
import { useRef } from 'react'
import Filtro from '../Filtro'
import Snapshot from "../../Gerir/Snapshot"
import { useState, useEffect } from "react"
import axios from 'axios'
import Tables from "../../Gerir/Tables"
import Details from '../../Gerir/Details'

const TabsContent = ({ activeTab }) => {

    const content1 = useRef(0)
    const content2 = useRef(1)
    const content3 = useRef(2)

    const [snapshotData, setSnapshotData] = useState(null)
    const [tablesData, setTablesData] = useState(null)
    const [detailsData, setDetailsData] = useState(null)

    useEffect(() => {
        console.log('Tabs Content has been rendered...')

        if(activeTab === content1.current) {
            setTimeout(async () => {
                const res = await axios.get('/data/snapshotGerir.json')
                setSnapshotData(res.data)
            }, 2000)
        }

        if(activeTab === content2.current) {
            setTimeout(async () => {
                const res = await axios.get('/data/snapshotGerir.json')
                setTablesData(res.data)
            }, 2000)
        }

        if(activeTab === content3.current) {
            setTimeout(async () => {
                const res = await axios.get('/data/snapshotGerir.json')
                setDetailsData(res.data)
            }, 2000)
        }
        
    }, [])

    

    return (
        <Card margin={0} padding={40}>

            <div className={styles['card-header']}>
                <p>Como estão as oportunidades de negócio? </p>
                <Filtro />
            </div>

            {activeTab === content1.current && <div className={`${styles['tab-content']}`} >
                <Snapshot data={snapshotData} />
            </div>}

            {activeTab === content2.current && <div className={`${styles['tab-content']}`} >
                <Tables data={tablesData} />
            </div>}

            {activeTab === content3.current && <div className={`${styles['tab-content']}`} >
                <Details data={detailsData} />
            </div>}

        </Card>
    )
}



export default TabsContent
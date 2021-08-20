import Card from "../Card"
import styles from './TabsContent.module.css'
import MoreOptions from '../../UI/MoreOptions'
import Snapshot from "../../Gerir/Snapshot"
import { useState, useEffect } from "react"
import axios from 'axios'
import Tables from "../../Gerir/Tables"
import Details from '../../Gerir/Details'

const snapShotSelectorOptions = ['Volume', 'Valor']

const TabsContent = ({ activeTab }) => {

    const content1 = 0
    const content2 = 1
    const content3 = 2

    const [snapshotData, setSnapshotData] = useState(null)
    const [tablesData, setTablesData] = useState(null)
    const [detailsData, setDetailsData] = useState(null)

    useEffect(() => {

        if(activeTab === content1) {
            setTimeout(async () => {
                const res = await axios.get('/data/snapshotGerir.json')
                setSnapshotData(res.data)
            }, 2000)
        }

        if(activeTab === content2) {
            setTimeout(async () => {
                const res = await axios.get('/data/snapshotGerir.json')
                setTablesData(res.data)
            }, 2000)
        }

        if(activeTab === content3) {
            setTimeout(async () => {
                const res = await axios.get('/data/snapshotGerir.json')
                setDetailsData(res.data)
            }, 2000)
        }
        
    }, [activeTab])

    

    return (
        <Card margin={0} padding={40}>

            <div className={styles['card-header']}>
                <p>Como estão as oportunidades de negócio?</p>
               <div className={styles['more-options-wrapper']}><span>Filtro:</span><MoreOptions absolute={false} options={snapShotSelectorOptions} /></div>
            </div>

            {activeTab === content1 && <div className={`${styles['tab-content']}`} >
                <Snapshot data={snapshotData} />
            </div>}

            {activeTab === content2 && <div className={`${styles['tab-content']}`} >
                <Tables data={tablesData} />
            </div>}

            {activeTab === content3 && <div className={`${styles['tab-content']}`} >
                <Details data={detailsData} />
            </div>}

        </Card>
    )
}



export default TabsContent
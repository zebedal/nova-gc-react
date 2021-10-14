import { useState, Fragment, useEffect } from 'react'
import TabsHeader from './TabHeader'
import Camera from '../../svg/camera'
import Table from '../../svg/tables'
import Det from '../../svg/details'
import axios from 'axios'
import Spinner from '../Spinner'
import Card from '../Card'
import Snapshot from '../../Gerir/Snapshot/Snapshot'
import Tables from '../../Gerir/Tables'
import Details from '../../Gerir/Details/Details'
import styles from './TabList.module.css'

const tabsHeader = [
    {
        tabId: 0,
        tabTitle: 'Snapshot',
        tabIcon: <Camera />
    },
    {
        tabId: 1,
        tabTitle: 'Tables',
        tabIcon: <Table />
    },
    {
        tabId: 2,
        tabTitle: 'Details',
        tabIcon: <Det />
    }
]


const TabList = (props) => {

 
    const [data, setData] = useState(null)
    const [activeTab, setActiveTab] = useState(0)


    useEffect(() => {
        setTimeout(async () => {
            const res = await axios.get('/data/oportunidades.json')

            const {GerirValor} =  res.data
            const {GerirVolume} =  res.data
            const snapshotData = {valor: GerirValor, volume: GerirVolume, dataGraficos:res.data.GraficoEstado }
            const {GerirOportEstado} = res.data
            const {GerirDetalhe} = res.data

            const obj = {
                GerirValor,
                GerirVolume,
                snapshotData,
                GerirOportEstado,
                GerirDetalhe
            }
            setData(obj)
        }, 1000)

    }, [])


    if(!data) {
        return <Card margin={0} padding={30}>
        <div style={{padding:'50px 0'}}>
            <Spinner text="A carregar dados, por favor aguarde..." width={30} height={35} />
        </div>
        </Card>
    }

    console.log('RENDERING TABS LIST WITH ACTIVE TAB: ', activeTab)

    return (
      
        <Fragment>
            <TabsHeader  items={tabsHeader} activeTab={activeTab} setActive={setActiveTab}/>
            <Card margin={0} padding={30}>
                <div className={`${styles.tabsContentWrapper} ${activeTab === 0 ? styles.active : ""}`}><Snapshot data={data.snapshotData} /></div>
                <div className={`${styles.tabsContentWrapper} ${activeTab === 1 ? styles.active : ""}`}><Tables data={data.GerirOportEstado} /></div>
                <div className={`${styles.tabsContentWrapper} ${activeTab === 2 ? styles.active : ""}`}><Details data={data.GerirDetalhe} /></div>
            </Card>
        </Fragment>
  
    )
}



export default TabList
import Card from "../Card"
import styles from './TabsContent.module.css'
import Snapshot from '../../Gerir/Snapshot/Snapshot'
import { useState, useEffect } from "react"
import axios from 'axios'
import Tables from "../../Gerir/Tables"
import Details from '../../Gerir/Details/Details'
import Spinner from "../Spinner"


const TabsContent = ({ activeTab }) => {


    const [data, setData] = useState(null)


    useEffect(() => {
        console.log('Running tabs content')
        setTimeout(async () => {
            const res = await axios.get('/data/oportunidades.json')
            setData(res.data)
        }, 1000)

    }, [])


    if(!data) {
        return <Card margin={0} padding={30}>
        <div style={{padding:'50px 0'}}>
            <Spinner text="A carregar dados, por favor aguarde..." width={30} height={35} />
        </div>
        </Card>
        
    }

    const {GerirValor} =  data
    const {GerirVolume} =  data
    const snapshotData = {valor: GerirValor, volume: GerirVolume, dataGraficos:data.GraficoEstado }
    
    

    return (
        <Card margin={0} padding={30}>

            {activeTab === 0 && <div className={`${styles['tab-content']}`} >
                <Snapshot data={snapshotData} />
            </div>}

            {activeTab === 1 && <div className={`${styles['tab-content']}`} >
                <Tables data={data.GerirOportEstado} />
            </div>}

            {activeTab === 2 && <div className={`${styles['tab-content']}`} >
                <Details data={data.GerirDetalhe} />
            </div>}

        </Card>
        
    )
}



export default TabsContent
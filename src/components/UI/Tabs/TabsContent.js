import Card from "../Card"
import styles from './TabsContent.module.css'
import Snapshot from '../../Gerir/Snapshot/Snapshot'
import Tables from "../../Gerir/Tables"
import Details from '../../Gerir/Details/Details'
import React from "react"


const TabsContent = ({dados}) => {



    const {GerirValor} =  dados
    const {GerirVolume} =  dados
    const snapshotData = {valor: GerirValor, volume: GerirVolume, dataGraficos:dados.GraficoEstado }
    
    console.log('RENDERING TABS CONTENT...')

    return (
        <Card margin={0} padding={30}>

            <div className={`${styles['tab-content']}`} >
                <Snapshot data={snapshotData} />
            </div>

           <div className={`${styles['tab-content']}`} >
                <Tables data={dados.GerirOportEstado} />
            </div>

            <div className={`${styles['tab-content']}`} >
                <Details data={dados.GerirDetalhe} />
            </div>

        </Card>
        
    )
}



export default React.memo(TabsContent)
import Card from "../Card"
import styles from './TabsContent.module.css'
import MoreOptions from '../../UI/MoreOptions'
import Snapshot from "../../Gerir/Snapshot"
import { useState, useEffect } from "react"
import axios from 'axios'
import Tables from "../../Gerir/Tables"
import Details from '../../Gerir/Details'
import Spinner from "../Spinner"

const snapShotSelectorOptions = ['Volume', 'Valor'];


const TabsContent = ({ activeTab }) => {


    const content1 = 0
    const content2 = 1
    const content3 = 2

    const [data, setData] = useState(null)


    useEffect(() => {
        console.log('TABS CONTENT COMPONENT RENDERED...')
        setTimeout(async () => {
            const res = await axios.get('/data/snapshotGerir.json')
            setData(res.data)
        }, 2000)

    }, [])


    if (!data) {
        return (
            <Card margin={0} padding={40}>
                <div className={styles.wrapper}>
                    <Spinner text="A carregar dados, por favor aguarde" textColor="" />
                </div>
            </Card>
        )
    }

    return (
        <Card margin={0} padding={40}>

            <div className={styles['card-header']}>
                <p>Como estão as oportunidades de negócio?</p>
                <div className={styles['more-options-wrapper']}><span>Filtro:</span>
                    <MoreOptions absolute={false} selectorOptions={snapShotSelectorOptions} />
                </div>
            </div>

            {activeTab === content1 && <div className={`${styles['tab-content']}`} >
                <Snapshot data={data} />
            </div>}

            {activeTab === content2 && <div className={`${styles['tab-content']}`} >
                <Tables data={data} />
            </div>}

            {activeTab === content3 && <div className={`${styles['tab-content']}`} >
                <Details data={data.GerirDetalhe} />
            </div>}

        </Card>
    )
}



export default TabsContent
import Card from "../Card"
import styles from './TabsContent.module.css'
import { useRef } from 'react'
import Filtro from '../Filtro'
import Snapshot from "../../Gerir/Snapshot"

const TabsContent = ({ activeTab }) => {

    const content1 = useRef(0)
    const content2 = useRef(1)
    const content3 = useRef(2)

    return (
        <Card margin={0}>

            <Filtro />

            {activeTab === content1.current && <div className={`${styles['tab-content']}`} >
                <Snapshot />
            </div>}

            {activeTab === content2.current && <div className={`${styles['tab-content']}`} >
                <h1>Content da tab 2</h1>
            </div>}

            {activeTab === content3.current && <div className={`${styles['tab-content']}`} >
                <h1>Content da tab 3</h1>
            </div>}

        </Card>
    )
}



export default TabsContent
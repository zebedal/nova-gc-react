import { useState, Fragment, useEffect } from 'react'
import TabsHeader from './TabHeader'
import TabsContent from './TabsContent'
import Camera from '../../svg/camera'
import Trends from '../../svg/trends'
import Tables from '../../svg/tables'
import Details from '../../svg/details'
import styles from './TabList.module.css'
import { motion } from "framer-motion"
import { config } from '../../../qlikConfig/config'

const qlikObj = [
    {
        id: "QV_FiltroDireccao",
        qlikId: "PCKFfjH"
    },
    {
        id: "QV_FiltrosCanal",
        qlikId: "EHVXT"
    },
    {
        id: "QV_FiltrosManager",
        qlikId: "jwVUMgE"
    },
    {
        id: "QV_FiltrosEquipa",
        qlikId: "TJrsG"
    },
    {
        id: "QV_FiltrosResponsavel",
        qlikId: "mrJwRu"
    },
    {
        id: "QV_FiltrosCarteira",
        qlikId: "PqWV"
    },
    {
        id: "QV_FiltrosCoord1",
        qlikId: "mLBNCf"
    },
    {
        id: "QV_FiltrosVendedor",
        qlikId: "QBKg"
    },
    {
        id: "QV_Filtros",
        qlikId: "JPAgFQ"
    },
    {
        id: "QV_FiltroNIF",
        qlikId: "Ckhe"
    },
    {
        id: "QV_FiltroLivre",
        qlikId: "jJGUjvc"
    },
    {
        id: "QV_Filtros_V_Gov",
        qlikId: "nWGNN"
    },
    {
        id: "QV_Filtros_LongTail",
        qlikId: "RWTudp"
    },
    {
        id: "QV_Filtro_PorFidel",
        qlikId: "XRbKND"
    }
]

const tabsHeader = [
    {
        tabId: 0,
        tabTitle: 'Snapshot',
        tabIcon: <Camera />
    },
    {
        tabId: 1,
        tabTitle: 'Trends',
        tabIcon: <Trends />
    },
    {
        tabId: 2,
        tabTitle: 'Tables',
        tabIcon: <Tables />
    },
    {
        tabId: 3,
        tabTitle: 'Details',
        tabIcon: <Details />
    }
]

const variants = {

    hover: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const circle = {
    start: {
        x: 0
    },
    hover: (custom) => ({
        x: custom,
        transition: {
            type: 'spring',
            stiffness: 400
        }

    })
}


const TabList = props => {

    useEffect(() => {
        if(window.appCarteira !== undefined){
            window.appCarteira.getObject("CurrentSelections", "CurrentSelections");
            document.getElementById("CurrentSelections").style.display = "";
        }
        return () => {
            document.getElementById("CurrentSelections").style.display = "none";
            document.getElementById("CurrentSelections").innerHTML = "";
        }
    }, []);

    if(window.appCarteira === undefined){
        window.appCarteira = window.qlik.openApp('c672d09e-58d4-4dba-a35d-62a3eeff8ff3', config);
        window.appCarteira.getObject("CurrentSelections", "CurrentSelections");
    }

    if(window.appCarteira !== undefined){
        qlikObj.forEach((item) => {
			window.appCarteira.getObject(item.id, item.qlikId);
		})
    }

    const [activeTab, setActiveTab] = useState(0)

    const toggleActiveTab = (tabId) => {
        setActiveTab(tabId)
    }

    /* const [selected, setSelected] = useState(0) */
    const [selectorWrapperOpen, setSelectorWrapperOpen] = useState(false)

    /* const handleSelectorClick = (id, option) => {
        setSelected(id)
        setTimeout(() => {
            setSelectorWrapperOpen(false)
        }, 1500)
    } */

    const toggleSelectorWrapper = () => {
        //window.qlik.resize();
        setSelectorWrapperOpen(!selectorWrapperOpen)
    }

    return (
        <Fragment>
            <div className={styles.wrapper}>
                <motion.svg width="24" height="21" viewBox="0 0 37 40" fill="none"
                    style={{ position: 'absolute', top: '-52', right: '-60px', cursor: 'pointer' , zIndex: '9999' }}
                    variants={variants} whileHover="hover" onClick={toggleSelectorWrapper}
                >
                    <line x1="1.5" y1="6.5" x2="35.5" y2="6.5" stroke="#363636" strokeWidth="3" strokeLinecap="round" />
                    <motion.circle variants={circle} custom={14} cx="18.5" cy="6.5" r="5" transform="rotate(90 18.5 6.5)" fill="white" stroke="#363636" strokeWidth="3" />
                    <line x1="1.5" y1="33.5" x2="35.5" y2="33.5" stroke="#363636" strokeWidth="3" strokeLinecap="round" />
                    <motion.circle variants={circle} custom={12} cx="12.5" cy="33.5" r="5" transform="rotate(90 12.5 33.5)" fill="white" stroke="#363636" strokeWidth="3" />
                    <line x1="1.5" y1="19.5" x2="35.5" y2="19.5" stroke="#363636" strokeWidth="3" strokeLinecap="round" />
                    <motion.circle variants={circle} custom={-15} cx="30.5" cy="20" r="5" transform="rotate(90 30.5 20)" fill="white" stroke="#363636" strokeWidth="3" />
                </motion.svg>
                <div className={`${styles.selectorWrapper} ${selectorWrapperOpen ? styles.open : ""}`}>
                    <div id="QV_FiltroDireccao" className={styles.filterObj}></div>
                    <div id="QV_FiltrosCanal" className={styles.filterObj}></div>
                    <div id="QV_FiltrosManager" className={styles.filterObj}></div>
                    <div id="QV_FiltrosEquipa" className={styles.filterObj}></div>
                    <div id="QV_FiltrosResponsavel" className={styles.filterObj}></div>
                    <div id="QV_FiltrosCarteira" className={styles.filterObj}></div>
                    <div id="QV_FiltrosCoord1" className={styles.filterObj}></div>
                    <div id="QV_FiltrosVendedor" className={styles.filterObj}></div>

                    <div id="QV_Filtros" className={styles.filterObj}></div>
                    <div id="QV_FiltroNIF" className={styles.filterObj}></div>
                    <div id="QV_FiltroLivre" className={styles.filterObj}></div>
                    
                    <div id="QV_Filtros_LongTail" className={styles.filterObj}></div>
                    <div id="QV_Filtros_V_Gov" className={styles.filterObj}></div>
                    <div id="QV_Filtro_PorFidel" className={styles.filterObj}></div>
                </div>
            </div>
            <TabsHeader toggleActive={toggleActiveTab} items={tabsHeader} activeTab={activeTab} />
            <TabsContent activeTab={activeTab}/>
        </Fragment>
    )
}

export default TabList
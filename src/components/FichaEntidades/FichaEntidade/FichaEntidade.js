
import { useState, useEffect } from 'react'
import Card from '../../UI/Card'
import AvatarArea from './AvatarArea/AvatarArea'
import DynamicArea from './DynamicArea/DynamicArea'
import Metricas from './Metricas/Metricas'
import Semaforos from './Semaforos/Semaforos'
import styles from './FichaEntidade.module.css'
import { motion } from 'framer-motion'
import Avatar from '../../svg/FichaEntidade/Avatar'

const variants = {
    start: {
        width: 400,
    },
    end: {
        width: 60,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

const config = {
    host: "qlikdev.internal.vodafone.com",
    prefix: "/imgticket/",
    port: 443,
    isSecure: window.location.protocol === "https:"
};

const qlikObj = [
	{
		id: "QV_EtdTjc",
		qlikId: "EtdTjc"
	},{
		id: "QV_aPmPM",
		qlikId: "aPmPM"
	},{
		id: "QV_daAeebC",
		qlikId: "daAeebC"
	},{
		id: "QV_MPmVp",
		qlikId: "MPmVp"
	},{
		id: "QV_caPxJ",
		qlikId: "caPxJ"
	},{
		id: "QV_TtGHTP",
		qlikId: "TtGHTP"
	},{
		id: "QV_JmxHD",
		qlikId: "JmxHD"
	},{
		id: "QV_jqKqZP",
		qlikId: "jqKqZP"
	},{
		id: "QV_mHSa",
		qlikId: "mHSa"
	},{
		id: "QV_TqMT",
		qlikId: "TqMT"
	},{
		id: "QV_jjjFLvW",
		qlikId: "jjjFLvW"
	},{
		id: "QV_nYgKA",
		qlikId: "nYgKA"
	},{
		id: "QV_PwgCj",
		qlikId: "PwgCj"
	},{
		id: "QV_mrkZRX",
		qlikId: "mrkZRX"
	},{
		id: "QV_QHQQG",
		qlikId: "QHQQG"
	},{
		id: "QV_WEffv",
		qlikId: "WEffv"
	},{
		id: "QV_JfrMK",
		qlikId: "JfrMK"
	},{
		id: "QV_CXNmmkh",
		qlikId: "CXNmmkh"
	},{
		id: "QV_KsfLwfC",
		qlikId: "KsfLwfC"
	},{
		id: "QV_prmyUe",
		qlikId: "prmyUe"
	},{
		id: "QV_PJqsmh",
		qlikId: "PJqsmh"
	},{
		id: "QV_hsAuLgU",
		qlikId: "hsAuLgU"
	},{
		id: "QV_MUfMAK",
		qlikId: "MUfMAK"
	},{
		id: "QV_jUhgQbx",
		qlikId: "jUhgQbx"
	},{
		id: "QV_YSckE",
		qlikId: "YSckE"
	},{
		id: "QV_SUWBBeW",
		qlikId: "SUWBBeW"
	},{
		id: "QV_MZHKqX",
		qlikId: "MZHKqX"
	},{
		id: "QV_VDDMjk",
		qlikId: "VDDMjk"
	},{
		id: "QV_jMUDAKM",
		qlikId: "jMUDAKM"
	},{
		id: "QV_jdgTC",
		qlikId: "jdgTC"
	},{
		id: "QV_BrVzGSW",
		qlikId: "BrVzGSW"
	},{
		id: "QV_xtCFD",
		qlikId: "xtCFD"
	},{
		id: "QV_BYGYnMH",
		qlikId: "BYGYnMH"
	},{
		id: "QV_JdNuuh",
		qlikId: "JdNuuh"
	},{
		id: "QV_ZdtTs",
		qlikId: "ZdtTs"
	},{
		id: "QV_JPLLGw",
		qlikId: "JPLLGw"
	},{
		id: "QV_uaPjMt",
		qlikId: "uaPjMt"
	},{
		id: "QV_PCcyDde",
		qlikId: "PCcyDde"
	},{
		id: "QV_RUPZsJ",
		qlikId: "RUPZsJ"
	},{
		id: "QV_ZRXmRsv",
		qlikId: "ZRXmRsv"
	}
]

const FichaEntidade = props => {

    useEffect(() => {
        return () => {
            document.getElementById("CurrentSelections").style.display = "none";
        }
    }, []);

    const [collapsed, setCollapsed] = useState(false)

    const togglePanel = () => {
        setCollapsed(!collapsed)
        setTimeout(() => {
            window.qlik.resize();
        }, 500)
    }

    if(window.appFichaEntidade === undefined){
        window.appFichaEntidade = window.qlik.openApp('d6efc0c9-b356-4428-9251-5e80e5e9fafe', config);
        window.appFichaEntidade.getObject("CurrentSelections", "CurrentSelections");
    }

    return (

        <Card padding={0} margin={'57px 0 0 0'}>
            <motion.div className={styles.wrapper} variants={variants} initial="start" animate={collapsed ? "end" : ""}>

                {!collapsed && <div>
                    <svg width="9.832" height="14.257" viewBox="0 0 6.832 11.257" style={{ position: 'absolute', top: '20px', left: '20px', cursor: 'pointer' }} onClick={togglePanel}>
                        <path d="M2.114,7.839l5.01-5.01a.619.619,0,0,1,.875,0l.584.584a.619.619,0,0,1,0,.874L4.614,8.277l3.97,3.989a.618.618,0,0,1,0,.874L8,13.724a.619.619,0,0,1-.875,0l-5.01-5.01A.619.619,0,0,1,2.114,7.839Z" transform="translate(-1.933 -2.648)" fill="#363636" />
                    </svg>
                    <AvatarArea />
                    <DynamicArea />
                    <Metricas />
                    <Semaforos />
                </div>}

                {collapsed && <div style={{display:'flex', flexDirection:'column', alignItems:'center', paddingTop:'20px'}}>
                        <Avatar width={38}/>
                        <p style={{writingMode: 'tb-rl', transform: 'rotate(-180deg)', marginTop:'15px', color: 'var(--text-color)', fontFamily:'montserrat-medium'}}>Zé das Couves, Lda. - 500527417</p>
                        <svg width="9.832" height="14.257" viewBox="0 0 6.832 11.257" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(180deg)', cursor: 'pointer' }} onClick={togglePanel}>
                            <path d="M2.114,7.839l5.01-5.01a.619.619,0,0,1,.875,0l.584.584a.619.619,0,0,1,0,.874L4.614,8.277l3.97,3.989a.618.618,0,0,1,0,.874L8,13.724a.619.619,0,0,1-.875,0l-5.01-5.01A.619.619,0,0,1,2.114,7.839Z" transform="translate(-1.933 -2.648)" fill="#363636" />
                        </svg>
                    </div>
                }

            </motion.div>
        </Card>

    )
}
export default FichaEntidade
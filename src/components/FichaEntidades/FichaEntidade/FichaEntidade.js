
import { useState, useEffect, Fragment } from 'react'
import Card from '../../UI/Card'
import AvatarArea from './AvatarArea/AvatarArea'
import DynamicArea from './DynamicArea/DynamicArea'
import Metricas from './Metricas/Metricas'
import Semaforos from './Semaforos/Semaforos'
import styles from './FichaEntidade.module.css'
import { motion } from 'framer-motion'
import Avatar from '../../svg/FichaEntidade/Avatar'
import { config } from '../../../qlikConfig/config'

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

const qlikObj = [
	{
		id: "QV_FiltroDireccao",
		qlikId: "Umrepm"
	},
	{
		id: "QV_FiltrosCanal",
		qlikId: "JMHqGv"
	},
	{
		id: "QV_FiltrosManager",
		qlikId: "BJXvMR"
	},
	{
		id: "QV_FiltrosEquipa",
		qlikId: "ktEVvJZ"
	},
	{
		id: "QV_FiltrosPtVenda",
		qlikId: "FvLX"
	},
	{
		id: "QV_FiltrosResponsavel",
		qlikId: "PThsjuQ"
	},
	{
		id: "QV_FiltrosCoord1",
		qlikId: "Nxm"
	},
	{
		id: "QV_FiltrosCoord2",
		qlikId: "PYFmW"
	},
	{
		id: "QV_FiltrosVendedor",
		qlikId: "TJpdZa"
	},
	{
		id: "QV_FiltrosCliente",
		qlikId: "hYRZzv"
	},
	{
		id: "QV_FiltrosDistrito",
		qlikId: "MXUMjP"
	},
	{
		id: "QV_FiltrosLocalidade",
		qlikId: "QRJeJC"
	},
	{
		id: "QV_Filtros_V_Gov",
		qlikId: "SUYLc"
	},
	{
		id: "QV_Filtros_LongTail",
		qlikId: "SjVb"
	}
]

const FichaEntidade = props => {

    useEffect(() => {
        if(window.appFichaEntidade !== undefined){
            window.appFichaEntidade.getObject("CurrentSelections", "CurrentSelections");
            document.getElementById("CurrentSelections").style.display = "";
        }
        return () => {
            document.getElementById("CurrentSelections").style.display = "none";
            document.getElementById("CurrentSelections").innerHTML = "";
        }
    }, []);

    const [collapsed, setCollapsed] = useState(false)

    const togglePanel = () => {
        setCollapsed(!collapsed)
        setTimeout(() => {
            window.qlik.resize();
        }, 500)
    }

	const [selectorWrapperOpen, setSelectorWrapperOpen] = useState(false)

    const toggleSelectorWrapper = () => {
        setSelectorWrapperOpen(!selectorWrapperOpen)
    }

    if(window.appFichaEntidade === undefined){
		if(window.qlik !== undefined){
			window.appFichaEntidade = window.qlik.openApp('d6efc0c9-b356-4428-9251-5e80e5e9fafe', config);
        	window.appFichaEntidade.getObject("CurrentSelections", "CurrentSelections");
		}
    }

	if(window.appFichaEntidade !== undefined){
        qlikObj.forEach((item) => {
			window.appFichaEntidade.getObject(item.id, item.qlikId);
		})
    }

    return (
		<Fragment>
			<div className={styles.filterWrapper}>
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
					<div id="QV_FiltrosPtVenda" className={styles.filterObj}></div>
					<div id="QV_FiltrosResponsavel" className={styles.filterObj}></div>
					<div id="QV_FiltrosCoord1" className={styles.filterObj}></div>
					<div id="QV_FiltrosCoord2" className={styles.filterObj}></div>
					<div id="QV_FiltrosVendedor" className={styles.filterObj}></div>
					<div id="QV_FiltrosCliente" className={styles.filterObj}></div>
					<div id="QV_FiltrosDistrito" className={styles.filterObj}></div>
					<div id="QV_FiltrosLocalidade" className={styles.filterObj}></div>
					<div id="QV_Filtros_V_Gov" className={styles.filterObj}></div>
					<div id="QV_Filtros_LongTail" className={styles.filterObj}></div>
                </div>
            </div>

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
		</Fragment>
    )
}
export default FichaEntidade
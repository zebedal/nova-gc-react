
import { useState } from 'react'
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

const FichaEntidade = props => {

    const [collapsed, setCollapsed] = useState(false)

    const togglePanel = () => {
        setCollapsed(!collapsed)
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
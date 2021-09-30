import styles from './Metricas.module.css'
import { motion } from 'framer-motion'

const variants = {
    start: {
        y: 50,
        opacity:0
    },
    end: {
        y: 0,
        opacity:1,
        transition: {
            delay:0.5,
            duration: 0.5
        }
    }
}

const Metricas = props => (
    <motion.div className={styles.flexWrapper} variants={variants} initial="start" animate="end">

        <div className={styles.box}>
            <p className={styles.title}>Qualificado</p>
            <p className={styles.value}>xx%</p>
        </div>

        <div className={styles.box}>
            <p className={styles.title}>Fidelizado</p>
            <p className={styles.value}>xx%</p>
        </div>

        <div className={styles.box}>
            <p className={styles.title}>Act. Siebel</p>
            <p className={styles.value}>10</p>
        </div>

        <div className={styles.box}>
            <p className={styles.title}>Ped. Contacto</p>
            <p className={styles.value}>100</p>
        </div>

        <div className={styles.box}>
            <p className={styles.title}>Reclamações</p>
            <p className={styles.value}>2</p>
        </div>

    </motion.div>
)

export default Metricas
import styles from './Semaforos.module.css'
import { motion } from 'framer-motion'

const variants = {
    start: {
        opacity:0,
        y: 50,
    },
    end: {
        opacity:1,
        y: 0,
        transition: {
            delay:0.5,
            duration: 0.5
        }
    }
}

const Semaforos = props => (
    <motion.div className={styles.wrapper} variants={variants} initial="start" animate="end">

        <div>
            <svg width="16.25" height="16.25" viewBox="0 0 16.25 16.25">
                <path d="M11.5,3.375A8.125,8.125,0,1,0,19.625,11.5,8.149,8.149,0,0,0,11.5,3.375ZM9.832,15.832,5.668,11.668,6.836,10.5l3,3,6.332-6.332,1.168,1.168Z" transform="translate(-3.375 -3.375)" fill="#10800c" />
            </svg>
            <span className={styles.title}>Cliente</span>
        </div>

        <div>
            <svg width="17" height="17" viewBox="0 0 17 17">
                <circle cx="8.5" cy="8.5" r="8.5" fill="#c20707" />
            </svg>
            <span className={styles.title}>Hotline</span>
        </div>

        <div>
            <svg width="17" height="17" viewBox="0 0 17 17">
                <circle cx="8.5" cy="8.5" r="8.5" fill="#BEB036" />
            </svg>
            <span className={styles.title}>Rede</span>
        </div>

        <p className={styles.title}>-- Índice Digital</p>

    </motion.div>
)

export default Semaforos
import styles from './Button.module.css'
import { motion } from 'framer-motion'

const Button = ({ component, title, active, click, id, wtf }) => {

    return (
        <motion.div className={`${styles.buttonWrapper} ${active ? styles.active : ""}`} onClick={() => click(id)} variants={wtf} >
            {component}
            <p className={styles.title} style={{color: `${active ? 'var(--red)' : ''}`}}>{title}</p>
        </motion.div>
    )
}



export default Button
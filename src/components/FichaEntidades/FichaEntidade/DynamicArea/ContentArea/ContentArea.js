import styles from './ContentArea.module.css'
import Contas from "./Contas"
import Facturacao from './Facturacao'
import Fidelizacao from './Fidelizacao'
import Servicos from './Servicos'
import { motion } from 'framer-motion'

const variants = {
    start: {
        y: 30,
        opacity:0
    },
    end: {
        y:0,
        opacity:1,
        transition: {
            delay: 0.9,
            type: 'spring',
            stiffness: 400,
            damping: 5
        }
    }
}

const ContentArea = ({activeContent}) =>  {

    return (
        <motion.div className={styles.wrapper} variants={variants} initial="start" animate="end">
            {activeContent === 1 ? <Contas /> : null}
            {activeContent === 2 ? <Facturacao /> : null}
            {activeContent === 3 ? <Fidelizacao /> : null}
            {activeContent === 4 ? <Servicos /> : null}
        </motion.div>
    )
}

export default ContentArea
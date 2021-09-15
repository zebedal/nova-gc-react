import styles from './ActionButtons.module.css'
import Button from './Button'
import { motion } from 'framer-motion'

const ActionButtons = ({ buttons, activeButton, setSelected }) => {

    const variants = {
        start: {
            scaleY: 0,
            originY: 1
        },
        end: {
            scaleY: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren:1
                
            }
        }
    }

    return (
        <motion.div className={styles.wrapper} variants={variants} initial="start" animate="end">
            {buttons.map(button =>
                <Button
                    key={button.id}
                    component={button.component}
                    title={button.title}
                    active={button.id === activeButton ? true : false}
                    click={setSelected}
                    id={button.id}
                    wtf={variants}
                />)}
        </motion.div>
    )
}

export default ActionButtons
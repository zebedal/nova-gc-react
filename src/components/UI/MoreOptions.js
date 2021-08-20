import styles from './MoreOptions.module.css'
import { motion } from "framer-motion"
import SelectorOption from './SelectorOption'
import {useState} from 'react'

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
        r: 5,
        transition: {
            type: 'spring',
            stiffness: 400
        }

    })
}



const MoreOptions = ({ absolute, options }) => {

  const [selected, setSelected] = useState(0)

  const handleSelectorClick = id => {
      setSelected(id)
  }
  

    return (
        <div className={styles.wrapper}>
            <motion.svg width="27" height="24" viewBox="0 0 37 40" fill="none"
                style={{ position: `${absolute ? 'absolute' : ""}`, top: '30px', right: '30px', cursor: 'pointer' }}
                variants={variants} whileHover="hover"

            >
                <line x1="1.5" y1="6.5" x2="35.5" y2="6.5" stroke="#363636" strokeWidth="3" strokeLinecap="round" />
                <motion.circle variants={circle} custom={14} cx="18.5" cy="6.5" r="5" transform="rotate(90 18.5 6.5)" fill="white" stroke="#363636" strokeWidth="3" />
                <line x1="1.5" y1="33.5" x2="35.5" y2="33.5" stroke="#363636" strokeWidth="3" strokeLinecap="round" />
                <motion.circle variants={circle} custom={12} cx="12.5" cy="33.5" r="5" transform="rotate(90 12.5 33.5)" fill="white" stroke="#363636" strokeWidth="3" />
                <line x1="1.5" y1="19.5" x2="35.5" y2="19.5" stroke="#363636" strokeWidth="3" strokeLinecap="round" />
                <motion.circle variants={circle} custom={-15} cx="30.5" cy="20" r="5" transform="rotate(90 30.5 20)" fill="white" stroke="#363636" strokeWidth="3" />
            </motion.svg>
            <div className={styles.selectorWrapper}>
                    {options.map((option, index) =>
                        <SelectorOption option={option} toggle={handleSelectorClick} key={index} id={index} selected={selected} />
                    )}
            </div>
        </div>

    )
}




export default MoreOptions
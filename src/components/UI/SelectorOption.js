import React, {useState} from 'react'
import { motion } from 'framer-motion'
import styles from './SelectorOption.module.css'

const checkCircleStroke = {
    start: {
        pathLength: 0,
        fill: '#fff'
    },
    end: {
        pathLength: 1,
        fill: '#C20707',
        transition: {
            duration: 0.4,
            fill: {
                delay: 0.3
            }
        }
    }
}

const SelectorOption = ({option, toggle, id, selected}) => {

    const anim = id === selected;

 

    return (
        <div className={styles.selectorLine} onClick={() => toggle(id, option)}>
            <div>
                <input type="checkbox" name="item-21" />
                <label htmlFor="item-21" className={styles.text}>{option}</label>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <motion.path variants={checkCircleStroke} initial="start" animate={anim ? "end" : ""} d="M0.5,10a9.5,9.5 0 1,0 19,0a9.5,9.5 0 1,0 -19,0" cx="10" cy="10" r="9.5" fill="none" stroke="#C20707" style={{ zIndex: 1 }} />
                <motion.path initial={{ pathLength: 0 }} animate={anim ? { pathLength: 1, stroke: '#fff', transition: { delay: 0.5 } } : ""} d="M5 9.5L9 13.5L15.5 7" stroke="#fff" style={{ zIndex: 9 }} />
            </svg>
        </div>
    )

}



export default SelectorOption
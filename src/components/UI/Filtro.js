
import styles from './Filtro.module.css'
import { useState } from 'react'

const Filtro = ({absolute}) => {

    const [open, setOpen] = useState(false)
    const [filterValue, setFilterValue] = useState('Valor')

    const toggleOpen = () => {
        setOpen(!open)
    }

    const optionHandler = e => {
        setFilterValue(e.target.textContent)
        setOpen(false)
    }

  

    return (
        <div className={styles['filter-bar']}>
            <div>
                <span>Filtrar por:</span>
                <div className={styles['filter-wrapper']}>
                    <div>{filterValue}</div>
                    <div onClick={toggleOpen}>
                        <svg className={styles.toggler} width="11" height="7" viewBox="0 0 11 7">
                            <path d="M8.1,11.6,2.6,6.041,4.026,4.6,8.1,8.718,12.174,4.6,13.6,6.041Z" transform="translate(-2.6 -4.6)" fill="#fff" />
                        </svg>
                    </div>
                    <div className={`${styles.options} ${open ? styles.open : ""}`}>
                        <div onClick={optionHandler}>Volume</div>
                        <div onClick={optionHandler}>Valor</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Filtro
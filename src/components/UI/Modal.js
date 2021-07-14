import React from 'react'
import styles from './Modal.module.css'
import Button from './Button'

const Modal = ({title, start, desc, opened, openModal }) => {

    const handleClick = () => {
        openModal(opened => !opened);
    }

    return (
        <React.Fragment>
            <div className={`${styles.backdrop} ${opened ? styles.open : ""}`} onClick={handleClick}></div>
            <div className={`${styles.modal} ${opened ? styles.open : ""}`}>
                <h5>Evento Calendário</h5>
                <div className={styles.desc}>
                    <p><span className={styles.bold}>Evento: </span>{title}</p>
                    <p><span className={styles.bold}>Data: </span>{start}</p>
                    <p><span className={styles.bold}>Descrição: </span>{desc}</p>
                </div>
                <div className={styles.footer}>
                    <Button text="Confirmar" />
                </div>
            </div>
        </React.Fragment>

    )


}

export default Modal
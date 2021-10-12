import { Fragment } from 'react'
import styles from './QlikWarning.module.css'
import Button from './Button'

const QlikWarning = ({title, start, desc, opened, openModal }) => {

    const handleClick = () => {
        openModal(opened => !opened);
    }

    return (
        <Fragment>
            <div className={`${styles.backdrop} ${opened ? styles.open : ""}`} onClick={handleClick}></div>
            <div className={`${styles.modal} ${opened ? styles.open : ""}`}>
                <h5>Evento Calendário</h5>
                <div className={styles.desc}>
                </div>
                <div className={styles.footer}>
                    <Button text="Confirmar" />
                </div>
            </div>
        </Fragment>

    )


}

export default QlikWarning
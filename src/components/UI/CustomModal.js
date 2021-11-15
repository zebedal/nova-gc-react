import ReactDOM from 'react-dom'
import styles from './CustomModal.module.css'
import { Fragment } from 'react'

const CustomModal = ({ open, onClose, modalTitle, children }) => {

    if (!open) return null

    return ReactDOM.createPortal(
        <Fragment>
            <div className={styles.backdrop} onClick={onClose}></div>
            <div className={`${styles.wrapper}`}>
                <div className={styles.modalHeader}>{modalTitle}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" onClick={onClose}>
                <path d="M12.2028 10.0004L19.6805 2.52235C19.8862 2.3165 19.9997 2.04187 20 1.74902C20 1.45601 19.8865 1.18105 19.6805 0.975524L19.0252 0.320402C18.8192 0.114061 18.5446 0.00105286 18.2514 0.00105286C17.9587 0.00105286 17.6841 0.114061 17.478 0.320402L10.0003 7.79796L2.52228 0.320402C2.31659 0.114061 2.04179 0.00105286 1.74878 0.00105286C1.4561 0.00105286 1.1813 0.114061 0.97561 0.320402L0.32 0.975524C-0.106667 1.40219 -0.106667 2.09617 0.32 2.52235L7.79789 10.0004L0.32 17.4781C0.114146 17.6843 0.000813008 17.9589 0.000813008 18.2518C0.000813008 18.5446 0.114146 18.8193 0.32 19.0253L0.975447 19.6804C1.18114 19.8866 1.4561 19.9998 1.74862 19.9998C2.04163 19.9998 2.31642 19.8866 2.52211 19.6804L10.0002 12.2027L17.4779 19.6804C17.6839 19.8866 17.9585 19.9998 18.2512 19.9998H18.2515C18.5444 19.9998 18.819 19.8866 19.025 19.6804L19.6803 19.0253C19.886 18.8194 19.9995 18.5446 19.9995 18.2518C19.9995 17.9589 19.886 17.6843 19.6803 17.4783L12.2028 10.0004Z" fill="white"/>
                </svg>

                </div>
                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>
        </Fragment>
        ,document.getElementById('custom-modal'))

}

export default CustomModal
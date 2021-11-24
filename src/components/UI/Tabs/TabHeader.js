import styles from './TabHeader.module.css'
import NifSelector from '../../../store/NifSelectorContext'
import { useContext } from 'react'

const TabsHeader = ({ items, setActive, activeTab }) => {

    const selectedNif = useContext(NifSelector)

    const removeSelectedNifs = () => {
        selectedNif.setNif([])
    }

    return (
        <div className={styles['tabs-header']}>
            <div>
                {items.map((item, index) => {
                    return <span className={`${styles['tab-title']} ${item.tabId === activeTab ? styles.active : null}`}
                        onClick={() => setActive(index)}
                        key={index}><div className={styles.wrapper}>{item.tabIcon}
                            <span className={styles['tab-title-name']}>{item.tabTitle}</span></div></span>
                })}
            </div>
            <div className={styles.nifSelector}>
                <span>Seleção:&nbsp;</span>
                {selectedNif.nif.length > 0 && <div className={styles.nifList}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={removeSelectedNifs} >
                        <circle cx="8" cy="8" r="8" fill="#C20707" />
                        <path d="M5.27665 4.56953C5.08139 4.37426 4.7648 4.37426 4.56954 4.56953C4.37428 4.76479 4.37428 5.08137 4.56954 5.27663L5.27665 4.56953ZM11.3388 12.0459C11.534 12.2411 11.8506 12.2411 12.0459 12.0459C12.2411 11.8506 12.2411 11.534 12.0459 11.3388L11.3388 12.0459ZM4.56954 5.27663L11.3388 12.0459L12.0459 11.3388L5.27665 4.56953L4.56954 5.27663Z" fill="white" />
                        <path d="M4.56954 11.3388C4.37428 11.534 4.37428 11.8506 4.56954 12.0459C4.7648 12.2411 5.08139 12.2411 5.27665 12.0459L4.56954 11.3388ZM12.0459 5.27663C12.2411 5.08137 12.2411 4.76478 12.0459 4.56952C11.8506 4.37426 11.534 4.37426 11.3388 4.56952L12.0459 5.27663ZM5.27665 12.0459L12.0459 5.27663L11.3388 4.56952L4.56954 11.3388L5.27665 12.0459Z" fill="white" />
                    </svg>
                    {selectedNif.nif.slice(0,2).map((nif, idx) => {
                        if(idx === 0) {
                            return <span key={idx}>{nif}</span>
                        } else return <span key={idx}>, {nif} {selectedNif.nif.length > 2 ? <span>...</span> : null}</span>
                    })}
                </div>}
                
            </div>
        </div>
    )
}
export default TabsHeader
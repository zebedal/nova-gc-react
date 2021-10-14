import styles from './TabHeader.module.css'

const TabsHeader = ({ items, setActive, activeTab }) => {

  

    console.log('RENDERING TABS HEADER...')

    return (
        <div className={styles['tabs-header']}>

            {items.map((item, index) => {
                return <span className={`${styles['tab-title']} ${item.tabId === activeTab ? styles.active : null}`}
                    onClick={() => setActive(index)}
                    key={index}><div className={styles.wrapper}>{item.tabIcon}
                        <span className={styles['tab-title-name']}>{item.tabTitle}</span></div></span>
            })}

    </div>
    )
}
export default TabsHeader
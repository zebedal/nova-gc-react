import styles from './TabHeader.module.css'


const TabsHeader = ({ toggleActive, items, activeTab }) => (
    <div className={styles['tabs-header']}>

            {items.map((item, index) => {
                return <span className={`${styles['tab-title']} ${item.tabId === activeTab ? styles.active : null}`}
                    onClick={() => toggleActive(index)}
                    key={index}><div className={styles.wrapper}>{item.tabIcon}
                        <span className={styles['tab-title-name']}>{item.tabTitle}</span></div></span>
            })}

    </div>
)

export default TabsHeader
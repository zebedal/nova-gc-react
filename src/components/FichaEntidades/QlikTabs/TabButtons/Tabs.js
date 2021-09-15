import styles from './Tabs.module.css'

const Tabs = ({tabs, activeTab, changeTab}) => (
	<div className={styles['tabs-header']}>

            {tabs.map((item, index) => {
                return <span className={`${styles['tab-title']} ${item.tabId === activeTab ? styles.active : null}`}
                    onClick={() => changeTab(index)}
                    key={index}><div className={styles.wrapper}>{item.tabIcon}
                        <span className={styles['tab-title-name']}>{item.tabTitle}</span></div></span>
            })}

    </div>
)

export default Tabs

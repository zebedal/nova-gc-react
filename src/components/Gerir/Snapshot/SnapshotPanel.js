import styles from './SnapshotPanel.module.css'
import Chart from 'react-apexcharts'

const SnapshotPanel = ({headerData, chartData, title, filterValor}) => {
   
    const {novaReceitaUser, novaReceitaVodafone, refidelizaçãoUser, refidelizaçãoVodafone, tcv, total } =  headerData
  
    

    return (

        <div className={styles.column}>
            <div className={styles['header-wrapper']}>
                <div className={styles.header}>
                    <span className={`${styles['big-number']} ${filterValor ? styles.reduce : ""}`}>{total}</span>
                    <span className={`${styles['header-title']} ${filterValor ? styles.reduce : ""}`}>{title}</span>
                </div>
                <div className={styles['header-content']}>
                    <div className={styles.grid}>
                        <span></span>
                        <span className={styles['grid-title']}>VFD</span>
                        <span className={styles['grid-title']}>USER</span>
                        <span className={styles['grid-row-title']}>Nova receita</span>
                        <span className={styles['grid-row-value']}>{novaReceitaVodafone}</span>
                        <span className={styles['grid-row-value']}>{novaReceitaUser}</span>
                        <span className={styles['grid-row-title']}>Refidelização</span>
                        <span className={styles['grid-row-value']}>{refidelizaçãoVodafone}</span>
                        <span className={styles['grid-row-value']}>{refidelizaçãoUser}</span>
                    </div>
                    <div className={styles.tcv}>
                        <p><span style={{ color: '#920EA1' }}>{tcv}</span> TCV</p>
                    </div>
                </div>
            </div>

            <div className={styles['chart-wrapper']}>
                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="bar"
                    height="250px"
                />
            </div>
        </div>

    )
}

export default SnapshotPanel
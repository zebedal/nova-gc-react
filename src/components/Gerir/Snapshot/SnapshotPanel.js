import styles from './SnapshotPanel.module.css'
import Chart from 'react-apexcharts'

const SnapshotPanel = ({headerData, chartData, chartOptions, title, filterValor, color, gridItemsColor}) => {
   
    const {novaReceitaUser, novaReceitaVodafone, refidelizaçãoUser, refidelizaçãoVodafone, tcv, total } =  headerData
  

    return (

        <div className={styles.column}>
            <div className={styles['header-wrapper']}>
                <div className={styles.header}>
                    <span className={`${styles['big-number']} ${filterValor ? styles.reduce : ""}`} style={{color: color}}>{total}</span>
                    <span className={`${styles['header-title']} ${filterValor ? styles.reduce : ""}`} >{title}</span>
                </div>
                <div className={styles['header-content']}>
                    <div className={styles.grid}>
                        <span></span>
                        <span className={styles['grid-title']}>VFD</span>
                        <span className={styles['grid-title']}>USER</span>
                        <span className={styles['grid-row-title']}>Nova receita</span>
                        <span className={styles['grid-row-value']} style={{color: gridItemsColor}}>{novaReceitaVodafone}</span>
                        <span className={styles['grid-row-value']} style={{color: gridItemsColor}}>{novaReceitaUser}</span>
                        <span className={styles['grid-row-title']}>Refidelização</span>
                        <span className={styles['grid-row-value']} style={{color: gridItemsColor}}>{refidelizaçãoVodafone}</span>
                        <span className={styles['grid-row-value']} style={{color: gridItemsColor}}>{refidelizaçãoUser}</span>
                    </div>
                    <div className={styles.tcv}>
                        <p><span style={{color: color}}>{tcv}</span> TCV</p>
                    </div>
                </div>
            </div>

            <div className={styles['chart-wrapper']}>

                {chartData.length !== 0 ?  <Chart
                    options={chartOptions}
                    series={chartData}
                    type="bar"
                    height="250px"
                /> : <p style={{textAlign: 'center'}}>Não existem dados para o gráfico</p>}
                
            </div>
        </div>

    )
}

export default SnapshotPanel
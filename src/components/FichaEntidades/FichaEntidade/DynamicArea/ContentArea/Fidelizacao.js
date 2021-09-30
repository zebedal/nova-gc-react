
import styles from './Fidelizacao.module.css'

const Fidelizacao = props => (
    <div className={styles.grid}>
        <span className={styles.gridTitles}>VM</span>
        <span className={styles.gridTitles}>DM</span>
        <span className={styles.gridTitles}>Fixo</span>
        <span className={styles.gridTitles}>IOT</span>
        <span className={styles.gridValues}>XXX</span>
        <span className={styles.gridValues}>--</span>
        <span className={styles.gridValues}>XXX&nbsp;</span>
        <span className={styles.gridValues}>XX%</span>
    </div>
)

export default Fidelizacao
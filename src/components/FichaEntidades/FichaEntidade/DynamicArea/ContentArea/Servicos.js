import styles  from './Servicos.module.css'

const Servicos = props => (
    <div className={styles.grid}>
        <span className={styles.gridTitles}>VM</span>
        <span className={styles.gridTitles}>DM</span>
        <span className={styles.gridTitles}>Fixo</span>
        <span className={styles.gridTitles}>IOT</span>
        <span>
            <span className={styles.gridValues}>XXX&nbsp;</span>
            <svg width="14" height="12" viewBox="0 0 14 12">
                <path d="M7,0l7,12H0Z" fill={'var(--red)'} />
            </svg>
        </span>
        <span className={styles.gridValues}>--</span>
        <span>
            <span className={styles.gridValues}>XXX&nbsp;</span>
            <svg width="14" height="12" viewBox="0 0 14 12">
                <path d="M7,0l7,12H0Z" fill={'var(--green)'} />
            </svg>
        </span>
        <span className={styles.gridValues}>XX%</span>

    </div>
)

export default Servicos
import styles from './Metricas.module.css'

const Metricas = props => (
    <div className={styles.flexWrapper}>

        <div className={styles.box}>
            <p className={styles.title}>Qualificado</p>
            <p className={styles.value}>xx%</p>
        </div>

        <div className={styles.box}>
            <p className={styles.title}>Fidelizado</p>
            <p className={styles.value}>xx%</p>
        </div>

        <div className={styles.box}>
            <p className={styles.title}>Act. Siebel</p>
            <p className={styles.value}>10</p>
        </div>

        <div className={styles.box}>
            <p className={styles.title}>Ped. Contacto</p>
            <p className={styles.value}>100</p>
        </div>

        <div className={styles.box}>
            <p className={styles.title}>Reclamações</p>
            <p className={styles.value}>2</p>
        </div>

    </div>
)

export default Metricas
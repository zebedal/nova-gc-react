import styles from './Contas.module.css'

const Contas = props => (
    <div className={styles.grid}>
         <span><strong>Pontos</strong></span>
         <span><strong>Ciclo</strong></span>
         <span>1</span>
         <span>9</span>
         <span>16</span>
         <span>23</span>
         <span><strong>Total pts.</strong></span>
         <span><strong># contas</strong></span>
         <span>-</span>
         <span>-</span>
         <span>2</span>
         <span>5</span>
    </div>
)

export default Contas
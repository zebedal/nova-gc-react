import styles from './Contrato.module.css'
import check from '../../../../assets/img/checkmark.svg'
import icon from '../../../../assets/img/entidade.svg'

const Contrato = ({ NIF, Entity, BusinessLine, SFID, Id, Date, selected, click }) => {

    const entidadeSliced = Entity.length >= 25 ? Entity.slice(0, 25) + '...' : Entity

    return (
        <div className={`${styles.wrapper} ${selected ? styles.selected : ""}`} onClick={() => click(Id)}>

            <div className={styles.header} style={{background: selected ? 'var(--green)' : ''}}>
                <img src={icon} alt=""/>&nbsp;
                <p title={Entity} >{entidadeSliced}</p>
                {selected ? <img src={check} className={styles.check} alt="" /> : null}
            </div>
            <div className={styles.content}>
                <p><span className={styles.titles}>NIF: </span>&nbsp;{NIF}</p>
                <p><span className={styles.titles}>L. Negócio: </span>&nbsp;{BusinessLine}</p>
                <p><span className={styles.titles}>Data criação: </span>&nbsp;{Date}</p>
                <p style={{marginBottom:'5px'}}><span className={styles.titles}>SFID: </span>&nbsp;{SFID}</p>
                <p className={styles.tipoUser}><span className={styles.titles}>Id contrato:</span>&nbsp;{Id}</p>
            </div>
            

        </div>
    )
}


export default Contrato
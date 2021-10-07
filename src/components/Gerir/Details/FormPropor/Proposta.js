import styles from './Proposta.module.css'
import check from '../../../../assets/img/checkmark.svg'
import icon from '../../../../assets/img/entidade.svg'

const Oportunidade = ({ nif, entidade, linhaNegocio, estado, sfid, id, dataCriacao, selected, click }) => {

    const entidadeSliced = entidade.length >= 25 ? entidade.slice(0, 25) + '...' : entidade

    return (
        <div className={`${styles.wrapper} ${selected ? styles.selected : ""}`} onClick={() => click(id)}>

            <div className={styles.header}>
                <img src={icon} />&nbsp;
                <p title={entidade}>{entidadeSliced}</p>
                {selected ? <img src={check} className={styles.check} alt="" /> : null}
            </div>
            <div className={styles.content}>
                <p><span className={styles.titles}>NIF: </span>&nbsp;{nif}</p>
                <p><span className={styles.titles}>L. Negócio: </span>&nbsp;{linhaNegocio}</p>
                <p><span className={styles.titles}>Estado: </span>&nbsp;{estado}</p>
                <p><span className={styles.titles}>Data criação: </span>&nbsp;{dataCriacao}</p>
                <p style={{marginBottom:'5px'}}><span className={styles.titles}>SFID: </span>&nbsp;{sfid}</p>
            
            </div>
            <p className={styles.tipoUser}><span className={styles.titles}>Id proposta:</span>&nbsp;{id}</p>

        </div>
    )
}


export default Oportunidade
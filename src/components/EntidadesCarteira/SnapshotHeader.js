import styles from './SnapshotHeader.module.css'
import IncreaseArrow from '../svg/IncreaseArrow'
import DecreaseArrow from '../svg/DecreaseArrow'
import Fidelizacao from '../svg/FichaEntidade/ActionButtons/Fidelizacao'

const SnapshotHeader = props => {

    return (
        <header className={styles.Header}>
            <div>
                <IncreaseArrow />
                <p>Entidades com acréscimo de facturação XX.XX%</p>
            </div>
            <div>
                <DecreaseArrow />
                <p>Entidades com decréscimo de facturação</p>
            </div>
            <div>
                <Fidelizacao width={40}/>
               <p>Entidades com contratos em renegociação</p>
            </div>
        </header>
    )
}

export default SnapshotHeader
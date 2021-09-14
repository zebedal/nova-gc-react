import styles from './ContentArea.module.css'
import Contas from "./Contas"
import Facturacao from './Facturacao'
import Fidelizacao from './Fidelizacao'
import Servicos from './Servicos'

const ContentArea = ({activeContent}) =>  {

    return (
        <div className={styles.wrapper}>
            {activeContent === 1 ? <Contas /> : null}
            {activeContent === 2 ? <Facturacao /> : null}
            {activeContent === 3 ? <Fidelizacao /> : null}
            {activeContent === 4 ? <Servicos /> : null}
        </div>
    )
}

export default ContentArea
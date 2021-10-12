import styles from './FichaEntidades.module.css'
import FichaEntidade from '../components/FichaEntidades/FichaEntidade/FichaEntidade'
import QlikTabs from '../components/FichaEntidades/QlikTabs/QlikTabs'

const FichaEntidades = props => {

    return (
        <div className={styles.wrapper}>
            <FichaEntidade />
            <QlikTabs />
        </div>
    )

}

export default FichaEntidades
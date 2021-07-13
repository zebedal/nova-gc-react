import styles from './HomePage.module.css'
import Carteira from '../components/Homepage/Carteira/Carteira'
import Pipeline from '../components/Homepage/Pipeline/Pipeline'
import Agenda from '../components/Homepage/Agenda/Agenda'

const HomePage = props => (
    <div className={styles.wrapper}>
        <div className={styles['title-wrapper']}><h5>Bem vindo à <span>Gestão Comercial</span></h5></div>
        <Carteira />
        <Pipeline />
        <Agenda />
    </div>
)

export default HomePage
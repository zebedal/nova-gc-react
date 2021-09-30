import { useEffect } from 'react'
import styles from './HomePage.module.css'
import Carteira from '../components/Homepage/Carteira/Carteira'
import Pipeline from '../components/Homepage/Pipeline/Pipeline'
import Agenda from '../components/Homepage/Agenda/Agenda'



const HomePage = props => {

    useEffect(() => {
        document.getElementById("CurrentSelections").style.display = "none";
    }, []);


    return (
        <div className={styles.wrapper} >
          
            <div className={styles['title-wrapper']}><h5 style={{ textTransform: 'none' }}>Bem vindo à <span>Gestão Comercial</span></h5></div>
            <Carteira />
            <Pipeline />
            <Agenda />
        </div>
    )

}

export default HomePage
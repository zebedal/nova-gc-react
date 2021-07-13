import React, {useEffect, useState} from 'react'
import styles from './Carteira.module.css'
import Card from '../../UI/Card'
import CarteiraBox from './CarteiraBox'
import money from '../../../assets/img/money.svg'
import contract from '../../../assets/img/contract.svg'
import axios from 'axios'

const Carteira = props => {

    const [carteiras, setCarteiras] = useState([]);

    useEffect(() => {
        (async() => {
            const response = await axios.get('/data/carteiras.json');
            setCarteiras(response.data);
            console.log(carteiras)
        })();
    }, [])

    return (
        <div className={styles.wrapper}>
            <h5>A minha carteira</h5>
            <p className="subtitle">Informação relativa a <span className={styles.bold}>45</span> grupos e <span className={styles.bold}>120</span> entidades</p>
            <Card >
                <div className={styles['boxes-wrapper']}>
                    {carteiras && carteiras.map(item => <CarteiraBox up={false} {...item} />)}
                </div>
            </Card>
        </div>

    )
}




export default Carteira
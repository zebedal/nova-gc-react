import React from 'react'
import styles from './Carteira.module.css'
import Card from '../../UI/Card'
import CarteiraBox from './CarteiraBox'

const Carteira = props => {

    return (
        <div className={styles.wrapper}>
            <h5>A minha carteira</h5>
            <p className="subtitle">Informação relativa a 45 grupos e 120 entidades</p>
            <Card >
                <div className={styles['boxes-wrapper']}>
                    <CarteiraBox />
                    <CarteiraBox />
                    <CarteiraBox />
                    <CarteiraBox />
                </div>
            </Card>
        </div>

    )
}




export default Carteira
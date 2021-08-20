import React, { useEffect, useState, useRef } from 'react'
import styles from './Carteira.module.css'
import Card from '../../UI/Card'
import CarteiraBox from './CarteiraBox'
import axios from 'axios'
import Carousel from 'react-elastic-carousel';
import chevron from '../../../assets/img/chevron-right.svg'


const Carteira = props => {

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 300, itemsToShow: 2, itemsToScroll: 1 },
        { width: 500, itemsToShow: 3, itemsToScroll: 1 },
        { width: 700, itemsToShow: 4, itemsToScroll: 1, pagination: false },
      ]

    const [carteiras, setCarteiras] = useState([]);
    const carousel = useRef();

    useEffect(() => {
        (async () => {
            const response = await axios.get('/data/carteiras.json');
            setCarteiras(response.data);
        })();
    }, []);

 
    return (
        <div className={styles.wrapper}>
            <h5>A minha carteira</h5>
            <p className="subtitle">Informação relativa a <span className={styles.bold}>45</span> grupos e <span className={styles.bold}>120</span> entidades</p>
            <Card padding={13}>
                <div className={styles['boxes-wrapper']}>
                    <Carousel itemsToShow={3} pagination={false} showArrows={false} ref={carousel} breakPoints={breakPoints}>
                        {carteiras && carteiras.map(item => <CarteiraBox up={false} {...item} key={item.id} />)} 
                    </Carousel>
                </div>
                <img src={chevron} alt="" className={styles.chevron} onClick={() => carousel.current.slideNext()} />
                <img src={chevron} alt="" className={`${styles.chevron} ${styles.left}`} onClick={() => carousel.current.slidePrev()}/>
            </Card>
        </div>

    )
}




export default Carteira
import React, {useState, useEffect} from 'react'
import styles from './AgendaItem.module.css'
/* import proposta from '../../../assets/img/proposta.svg'
import visita from '../../../assets/img/visita.svg'
import nota from '../../../assets/img/nota.svg' */

const AgendaItem = ({type, title, date}) => {

    const [image, setImage] = useState(null); 

    useEffect(() => {
        const loadImage = imageName => {
            import(`../../../assets/img/${imageName}.svg`).then(image => {
                setImage(image);
            })
        }
        loadImage(type);
        
    }, [type]);

    let img;

    if(image) {
        img = image.default
    }
    
    return(
        <div className={styles.wrapper}>
            <img className={styles.imagem} src={img} alt=""/>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.date}>{date}</p>
            </div>
        </div>
    )
}
    


export default AgendaItem
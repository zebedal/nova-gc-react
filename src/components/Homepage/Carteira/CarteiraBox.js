import styles from './CarteiraBox.module.css'
import React, {useEffect, useState} from 'react'

const CarteiraBox = ({ up, title, value, src }) => {

    const [image, setImage] = useState(null);

    useEffect(() => {
        import(`../../../assets/img/${src}`).then(img => {
            setImage(img.default);
        })
    });

    return (
        <div className={styles.box}>
        <div className={`${up ? styles.triangleUp : styles.triangleDown}`}></div>
        <div className={styles['text-content']}>
            <p className={styles.title}>{title}</p>
            <p className={styles.value} style={{color: `${up ? '#48a700' : "#c20707"}` }}>{value}</p>
        </div>
        <div className={styles['image-wrapper']}><img src={image} /></div>
    </div>
    )

}
    
    


export default CarteiraBox
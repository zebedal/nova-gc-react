import styles from './CarteiraBox.module.css'
import React, { useEffect, useState } from 'react'

const CarteiraBox = ({ up, title, value, src }) => {

    const [image, setImage] = useState(null);

    useEffect(() => {
        import(`../../../assets/img/${src}`).then(img => {
            setImage(img.default);
        })
    });

    return (
        <div className={styles.box}>
            <div className={styles['text-content']}>
                <p className={styles.title}>{title}</p>
                <div className={styles.value} style={{ color: `${up ? '#48a700' : "#c20707"}` }}>{value}
                    <span className={`${up ? styles.triangleUp : styles.triangleDown}`}></span>
                </div>
            </div>
            <div className={styles['image-wrapper']}><img src={image} alt=""/></div>
        </div>
    )

}


export default CarteiraBox
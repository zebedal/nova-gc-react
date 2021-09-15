import styles from './Facturacao.module.css'
import { Fragment } from 'react'

const Facturacao = props => (
    <div style={{textAlign: 'center'}}>

        <div className={styles.total}>
            <span>€X.XXX.XXX</span>
            <svg width="14" height="12" viewBox="0 0 14 12">
                <path d="M7,0l7,12H0Z" fill="#10800c" />
            </svg>
        </div>


        <div className={styles.services}>

            <div className={styles.serviceBox}>
                <p className={styles.title}>Móvel</p>
                <div>
                    <span className={styles.value}>1.252.425€</span>
                    <svg width="14" height="12" viewBox="0 0 14 12">
                        <path d="M7,0l7,12H0Z" fill={'var(--red)'} />
                    </svg>
                </div>
            </div>

            <div className={styles.serviceBox}>
                <p className={styles.title}>Fixo</p>
                <div>
                    <span className={styles.value}>2.341.000€</span>
                    <svg width="14" height="12" viewBox="0 0 14 12">
                        <path d="M7,0l7,12H0Z" fill={'var(--green)'} />
                    </svg>
                </div>
            </div>

        </div>

    </div>
)

export default Facturacao
import styles from './Card.module.css'

const Card = ({ padding, margin, children, flex = 0, absolute, height= 'auto' }) => {


    return (
        <div
            className={styles.card}
            style={{ padding: padding, margin: margin, flex: flex, height: height }}>{children}
        </div>

    )
}






export default Card
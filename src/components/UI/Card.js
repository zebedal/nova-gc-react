import styles from './Card.module.css'

const Card = ({padding, margin, children, flex = 0}) => (
    <div
        className={styles.card}
        style={{ padding: padding, margin: margin, flex: flex }}>{children}
    </div>
)

export default Card
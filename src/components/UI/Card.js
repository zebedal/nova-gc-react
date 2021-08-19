import styles from './Card.module.css'

const Card = (props) => (
    <div className={styles.card} style={{padding: props.padding, margin: props.margin}}>{props.children}</div>
)

export default Card
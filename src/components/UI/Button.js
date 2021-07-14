import styles from './Button.module.css'

const Button = ({text}) => (
    <div className={styles.Button}>{text}</div>
)

export default Button
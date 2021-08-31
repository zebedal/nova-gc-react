import styles from './Button.module.css'

const Button = ({text, backgroundColor, marginTop}) => (
    <div className={styles.Button} style={{background: backgroundColor, marginTop:`${marginTop}px` }}>{text}</div>
)

export default Button
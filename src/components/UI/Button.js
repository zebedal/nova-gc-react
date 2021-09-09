import styles from './Button.module.css'

const Button = ({text, backgroundColor, marginTop, click}) => (
    <div 
    className={styles.Button} 
    style={{background: backgroundColor, 
    marginTop:`${marginTop}px` }}
    onClick={click}
    >{text}</div>
)

export default Button
import styles from './Button.module.css'

const Button = ({ component, title }) => (
    <div className={styles.buttonWrapper}>
        {component}
        <p>{title}</p>
    </div>
)

export default Button
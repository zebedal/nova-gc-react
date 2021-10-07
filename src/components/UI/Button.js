import styles from './Button.module.css'

const Button = ({ text, backgroundColor, marginTop, click, id, disable, children }) => (
    <div
        className={styles.Button}
        style={{
            background: disable ? 'lightgrey' : backgroundColor,
            pointerEvents: disable ? 'none' : 'all',
            marginTop: `${marginTop}px`
        }}
        onClick={() => click(text, id)}
    >{children}{text}</div>
)

export default Button
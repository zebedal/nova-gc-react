import styles from './ActionButtons.module.css'
import Button from './Button'

const ActionButtons = ({ buttons }) => {
    
    return (
        <div className={styles.wrapper}>
            {buttons.map(button => <Button key={button.id} component={button.component} title={button.title} />)}
        </div>
    )
}

export default ActionButtons
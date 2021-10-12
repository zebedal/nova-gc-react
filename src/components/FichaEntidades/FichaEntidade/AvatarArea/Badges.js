import styles from './Badges.module.css'

const Badges = ({badges}) => {
  
  return (
    <div className={styles.wrapper}>
        {badges.map(badge => <span key={badge.id}>{badge.component}</span>)}
    </div>
  )
}

export default Badges
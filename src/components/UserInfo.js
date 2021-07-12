import styles from './UserInfo.module.css'
import Cogwheel from '../assets/img/cogwheel.svg'
import Bell from '../assets/img/bell.svg'
import Avatar from '../assets/img/avatar.jpg'

const userInfo = props => (
    <div className={styles.wrapper}>
        <img src={Cogwheel} alt=""/>
        <img src={Bell} alt=""/>
        <div className={styles.line}></div>
        <div className={styles.userName}>
            <span style={{fontSize: '14px'}}>Joanne Doe</span>
            <svg style={{marginLeft: '5px'}} width="12.471" height="7.568" viewBox="0 0 12.471 7.568">
                <path d="M6.149,16.051.6,10.5a.685.685,0,0,1,0-.969l.647-.647a.685.685,0,0,1,.968,0l4.419,4.4,4.419-4.4a.685.685,0,0,1,.968,0l.647.647a.685.685,0,0,1,0,.969l-5.55,5.55A.685.685,0,0,1,6.149,16.051Z"
                    transform="translate(-0.398 -8.683)" fill="#363636" />
            </svg>
        </div>
        <div className={styles['avatar-wrapper']}><img className={styles.avatar} src={Avatar} alt="" /></div>
    </div>
)

export default userInfo
import React from 'react'
import styles from './NavLink.module.css'
import { Link } from 'react-router-dom'

const NavLink = ({ MenuText, MenuToolTip, MenuHTMLId, subMenuItems }) => {


    const htmlId = MenuToolTip.replace(/[ ]/g, "\u00a0");

    return (
        <li className={styles.navlink}>
            <Link className={styles.link} to={'#'}>{MenuText}</Link>
            <svg width="12.471" height="7.568" viewBox="0 0 12.471 7.568">
                <path d="M6.149,16.051.6,10.5a.685.685,0,0,1,0-.969l.647-.647a.685.685,0,0,1,.968,0l4.419,4.4,4.419-4.4a.685.685,0,0,1,.968,0l.647.647a.685.685,0,0,1,0,.969l-5.55,5.55A.685.685,0,0,1,6.149,16.051Z"
                    transform="translate(-0.398 -8.683)" fill="#363636" />
            </svg>
            {subMenuItems && <ul className={styles.subMenu}>
                {subMenuItems.map((item, index) => <li className={styles['subMenu-link']} key={index}><Link to={item.subMenuUrl}>{item.menuText}</Link></li>)}
            </ul>}
        </li>
    )
}

export default NavLink
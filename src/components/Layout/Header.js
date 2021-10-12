import React, { useState, useEffect, Fragment } from 'react'
import Logo from '../UI/Logo'
import styles from './Header.module.css'
import axios from 'axios';
import NavLink from './NavLink';
import UserInfo from './UserInfo'

const Header = props => {

    const [menuItems, setMenuItems] = useState([]);


    useEffect(() => {
         (async () => {
            const response = await axios.get('/data/menus.json');
            setMenuItems(response.data);
        })();
        
    }, []);

    return (
    <Fragment>
        <header className={styles.Header}>
            <nav>
                <Logo />
                <ul>
                    {menuItems.map((item, index) => <NavLink {...item} key={index}/>)} 
                </ul>
            </nav>
            <UserInfo />
        </header>
        <div id="CurrentSelections" style={{height: "40px", display: "none", position: "sticky", top: "70px", "zIndex": "999"}}></div>
    </Fragment>
    )
}



export default Header
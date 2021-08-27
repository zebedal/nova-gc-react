import React, { useState, useEffect } from 'react'
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
    <header className={styles.Header}>
        <nav>
            <Logo />
            <ul>
                 {menuItems.map((item, index) => <NavLink {...item} key={index}/>)} 
            </ul>
        </nav>
        <UserInfo />
    </header>
    )
}



export default Header
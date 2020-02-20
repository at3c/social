import React from 'react';
import clasess from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={clasess.nav}>
            <div  className={clasess.item}><a>Profile</a></div>
            <div  className={`${clasess.item} ${clasess.active}`}><a>Messages</a></div>
            <div className={clasess.item}><a>News</a></div>
            <div className={clasess.item}><a>Music</a></div>
            <div className={clasess.item}><a>Settings</a></div>
        </nav>
    )
}

export default Navbar;
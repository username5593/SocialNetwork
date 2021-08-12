import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><a href='http://localhost:3001/'>Main</a></li>
                <li className={classes.item}><a href='http://localhost:3001/'>Messages</a></li>
                <li className={classes.item}><a href='http://localhost:3001/'>News</a></li>
                <li className={classes.item}><a href='http://localhost:3001/'>Music</a></li>
                <li className={classes.item}><a href='http://localhost:3001/'>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Nav;
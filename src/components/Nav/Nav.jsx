import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><NavLink to='/Main' activeClassName={classes.active}>Main</NavLink></li>
                <li className={classes.item}><NavLink to='/Dialogs' activeClassName={classes.active}>Messages</NavLink></li>
                <li className={classes.item}><NavLink to='/News' activeClassName={classes.active}>News</NavLink></li>
                <li className={classes.item}><NavLink to='/Music' activeClassName={classes.active}>Music</NavLink></li>
                <li className={classes.item}><NavLink to='/Setting' activeClassName={classes.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;
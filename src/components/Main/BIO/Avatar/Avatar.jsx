import React from 'react';
import classes from './Avatar.module.css';
import './Avatar.module.css';


const Avatar = () => {
    return (
        <div className={classes.avatar}>
            <img src='img/avatar.jpg' width='180' />
            <p className={classes.status}>Online</p>
        </div>
    )
}

export default Avatar;
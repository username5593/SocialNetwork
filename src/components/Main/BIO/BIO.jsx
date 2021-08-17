import React from 'react';
import classes from './BIO.module.css';
import './BIO.module.css';
import Avatar from './Avatar/Avatar';
import Info from './Info/Info';


const BIO = () => {
    return (
        <div className={classes.bio}>
            <Avatar />
            <Info />
        </div>
    )
}

export default BIO;
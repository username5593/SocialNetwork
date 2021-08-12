import React from 'react';
import classes from './BIO.module.css';
import './BIO.module.css';


const BIO = () => {
    return (
        <div className={classes.bio}>
            <div className={classes.avatar}>
                <img src='img/avatar.jpg' width='180' />
                <p className={classes.status}>Online</p>
            </div>
            <div className={classes.info}>
                <h2>Ivan Ivanov</h2>
                <div className={classes.infoItem}><h3>Birthday:</h3><p>01.01.2000</p></div>
                <div className={classes.infoItem}><h3>City:</h3><p>Omsk</p></div>
                <div className={classes.infoItem}><h3>Education:</h3><p>OmGTU`19</p></div>
            </div>
        </div>
    )
}

export default BIO;
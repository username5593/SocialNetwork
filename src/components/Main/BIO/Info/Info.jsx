import React from 'react';
import classes from './Info.module.css';
import './Info.module.css';


const Info = () => {
    return (
        <div className={classes.info}>
            <h2>Ivan Ivanov</h2>
            <div className={classes.infoItem}><h3>Birthday:</h3><p>01.01.2000</p></div>
            <div className={classes.infoItem}><h3>City:</h3><p>Omsk</p></div>
            <div className={classes.infoItem}><h3>Education:</h3><p>OmGTU`19</p></div>
        </div>
    )
}

export default Info;
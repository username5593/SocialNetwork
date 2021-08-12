import React from 'react';
import classes from './MainHeadImage.module.css';
import './MainHeadImage';

const MainHeadImage = () => {
    return (
        <main className={classes.content}>
            <div>
                <img src='img/city.png' alt='city' width='100%' />
            </div>
        </main>
    )
}

export default MainHeadImage;
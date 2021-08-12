import React from 'react';
import classes from './Post.module.css';
import './Post.module.css'

const Post = () => {
    return (
        <div className={classes.post}>
            <div className={classes.postAvatar}>
                <img src='img/avatar.jpg' width='50' />
                <p className={classes.date}>08.08.2021</p>
            </div>
            <div className={classes.postText}>
                <p>Hello my social network!</p>
            </div>
        </div>
    )
}

export default Post;
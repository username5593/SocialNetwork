import React from 'react';
import classes from './Post.module.css';
import './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.postAvatar}>
                <img src='img/avatar.jpg' width='50' />
                <p className={classes.likes}>Likes:{props.likesCount}</p>
            </div>
            <div className={classes.postText}>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Post;
import React from 'react';
import classes from './NewPost.module.css';
import './NewPost';

const NewPost = () => {
    return (
        <main className={classes.content}>
            <div className={classes.newPost}>
                <h2>My posts</h2>
                <textarea name="New post" cols="40" rows="3"></textarea>
                <button className={classes.buttonNewPost}>Send</button>
            </div>
        </main>
    )
}

export default NewPost;
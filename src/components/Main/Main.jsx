import React from 'react';
import classes from './Main.module.css';
import MainHeadImage from './MainHeadImage/MainHeadImage';
import BIO from './BIO/BIO'
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'


const Main = () => {
    return (
        <main className={classes.content}>
            <MainHeadImage /> 
            <BIO />
            <NewPost />
            <Post />
            <Post />
        </main>
    )
}

export default Main;
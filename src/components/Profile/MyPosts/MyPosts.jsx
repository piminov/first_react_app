import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarrea></textarrea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;
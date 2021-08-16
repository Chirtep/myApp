import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likeCount:'12'},
        {id: 2, message: 'It\'s my first post', likeCount:'7'},
        {id: 3, message: 'BlaBla', likeCount:'3'},
        {id: 4, message: 'FooBar', likeCount:'6'}
    ]

    let postsElems =
        posts.map( p => <Post message={p.message} likeCount={p.likeCount} /> )

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
        <div className={s.posts}>
            {postsElems}
        </div>
    </div>
}
export default MyPosts


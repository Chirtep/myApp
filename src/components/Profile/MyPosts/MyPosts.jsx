import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts  = (props) => {

    let postsElems =
       props.p.map( p => <Post message={p.message} likeCount={p.likeCount} /> )

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


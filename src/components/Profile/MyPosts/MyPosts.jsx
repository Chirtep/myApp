import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElems =
        props.p.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElem = React.createRef();

    let addPost = () => {
        let text = newPostElem.current.value;
        alert(text);
    }

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElem}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
        <div className={s.posts}>
            {postsElems}
        </div>
    </div>
}
export default MyPosts


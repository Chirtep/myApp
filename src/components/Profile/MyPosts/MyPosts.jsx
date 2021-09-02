import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElems =
        props.p.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElem = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
    }

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElem} value={props.newPostText}/>
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


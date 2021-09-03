import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElems =
        props.store.getState().profilePage.posts
            .map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    let newPostElem = React.createRef();

    let addPost = () => {
        props.store.setPost();
    }

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.store.setNewPostText(text);
    }

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElem}
                              value={props.store.getState().profilePage.newPostText}/>
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


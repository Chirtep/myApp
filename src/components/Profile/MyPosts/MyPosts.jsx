import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {setNewPostTextActionCreator, setPostActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElems =
        props.posts
            .map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    let newPostElem = React.createRef();

    let addPost = () => {
        props.dispatch(setPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.dispatch(setNewPostTextActionCreator(text));
    }

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElem}
                              value={props.newPostText}/>
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


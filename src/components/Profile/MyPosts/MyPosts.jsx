import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {reduxForm} from "redux-form";
import {PostsForm} from "./MyPostsForm/MyPostsForm";


const MyPosts = (props) => {

    let postsElems =
        props.posts
            .map(p => <Post message={p.message} key={p.id} likeCount={p.likeCount}/>);

    const PostReduxForm = reduxForm({
        form: 'posts'
    })(PostsForm)

    const onSubmit = (formData) => {
        props.addPost(formData.newPostText);
    }

    return <div className={s.postsBlock}>
        <div>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={onSubmit}/>
        </div>

        <div className={s.posts}>
            {postsElems}
        </div>
    </div>
}

export default MyPosts
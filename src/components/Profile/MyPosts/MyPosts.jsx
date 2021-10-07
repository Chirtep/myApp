import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElems =
        props.posts
            .map(p => <Post message={p.message} key={p.id} likeCount={p.likeCount}/>);

    const PostsForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'New Post'} name={'newPostText'} component={'textarea'}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </form>

        )
    }

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
import React, {useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsForm} from "./MyPostsForm/MyPostsForm";
import styles from "../../common/FormsControls/FormControls.module.css";

const MyPosts = (props) => {

    const [id, setId] = useState(1),
        [hide, setHide] = useState(styles.hide)

    let userId = props.userId,
        authId = props.authId,
        postsElems =
            props.posts
                .map(p => <Post
                    message={p.message}
                    key={p.id}
                    likeCount={p.likeCount}
                    userProfile={props.userProfile}
                    isAuth={props.isAuth}
                    comments={p.comments}
                    sendReply={props.sendReply}
                    replies={props.replies}
                    cutReply={props.cutReply}
                    cutPost={props.cutPost}
                    id={p.id} time={p.time}
                    userId={p.userId}/>);

    const onSubmit = (formData, form) => {
        props.addPost(formData.newPostText, id);
        setId(id + 1)
        form.restart()
        setHide(styles.hide)
    }

    return <>
        {(Number(userId) === Number(authId) || !userId) ? <div className={s.postsBlock}>
            <div className={s.postsForm}>
                <PostsForm onSubmit={onSubmit} hide={hide} setHide={setHide}/>
            </div>

            <div className={s.posts}>
                {postsElems}
            </div>
        </div> : undefined}
    </>
}

export default MyPosts
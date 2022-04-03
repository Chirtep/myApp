import React, {useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsForm} from "./MyPostsForm/MyPostsForm";
import styles from "../../common/FormsControls/FormControls.module.css";
import {RandomNum} from "../../common/Randomizers/RandomNum/RandomNum";
import {setPost, setReplies} from "../../../redux/profile-reducer";
import {dateGen} from "../../common/utils/dateGen";
import {RandomMessageGen} from "../../common/Randomizers/RandomMessageGen/RandomMessageGen";
import {useDispatch, useSelector} from "react-redux";

const MyPosts = (props) => {

    const [id, setId] = useState(1),
        [hide, setHide] = useState(styles.hide),
        [value, setValue] = useState(0),
        dispatch = useDispatch(),
        profilePage = useSelector(state => state.profilePage),
        auth = useSelector(state => state.auth),
        dialogsPage = useSelector(state => state.dialogsPage),
        addPost = (newPostText, id) => {
            let comments = profilePage.comUsers.slice(0, RandomNum(1, 10)).map(function () {
                return this.splice(Math.floor(Math.random() * this.length), 1)[0]
            }, profilePage.comUsers.slice())

            dispatch(setPost(newPostText, id, RandomNum(0, profilePage.comUsers.length), comments, dateGen(), auth.userId))
        },
        sendReply = (id, reply, repliedUser, repliedUserPic, count, replier, flag) => {
            dispatch(setReplies(id, reply, repliedUser, repliedUserPic, RandomNum(0, count), replier.userName, flag, dateGen()))
            setValue(RandomNum(0, 2))
            value === 1 && setTimeout(() => {
                dispatch(setReplies(id,
                    auth.userProfile.fullName + ', ' + RandomMessageGen(dialogsPage.words),
                    auth.userProfile.fullName, repliedUserPic, RandomNum(0, count), replier.name, 'reply', dateGen()))
            }, 2000)
        }

    let userId = props.userId,
        authId = auth.userId,
        postsElems =
            profilePage.posts
                .map(p => <Post
                    message={p.message}
                    key={p.id}
                    likeCount={p.likeCount}
                    comments={p.comments}
                    id={p.id} time={p.time}
                    userId={p.userId}
                    sendReply={sendReply}
                />);

    const onSubmit = (formData, form) => {
        addPost(formData.newPostText, id);
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
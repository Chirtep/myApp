import React, {useState} from "react";
import s from './Post.module.css';
import defaultPic from "../../../../assets/images/logo-user-icon.png";
import Comments from "./Comments/Comments";
import {NavLink} from "react-router-dom";
import {removePost} from "../../../../redux/profile-reducer";
import {useDispatch, useSelector} from "react-redux";

const Post = (props) => {

    const [value, setValue] = useState("favorite_border"),
        [num, setNum] = useState(props.likeCount),
        [hide, setHide] = useState(s.hide),
        [comments, setComments] = useState(props.comments),
        dispatch = useDispatch(),
        cutPost = (id) => {
            dispatch(removePost(id))
        },
        auth = useSelector(state => state.auth)

    const handleClick = () => {
        if (value === "favorite_border") {
            setValue("favorite")
            setNum(num + 1)
        } else {
            setValue("favorite_border")
            setNum(num - 1)
        }
    }

    const removeComment = (id) => {
            setComments(comments.filter(c => c.id !== id))
        }

    return <div className={s.item + ' blue-grey-text text-darken-3'}>
        <div className={s.profilePlate}>
            <div className={s.profileBox}>
                {auth.userProfile && auth.isAuth === true &&
                <NavLink to={'/profile/' + props.userId}>
                    <img className={s.postPic + ' circle'}
                         src={auth.userProfile.photos.small || defaultPic}
                         alt={'#'}/>
                </NavLink>
                }
                <div className={s.profilePanel}>
                    <NavLink to={'/profile/' + props.userId}>
                        <span className={s.profileText}>{auth.userProfile.fullName}</span>
                    </NavLink>
                    <span className={s.time}>{props.time}</span>
                </div>

            </div>

            <i onClick={() => {
                cutPost(props.id)
            }
            } className={s.likeIcon + ' small material-icons'}>clear</i>
        </div>

        <span className={s.message}>{props.message}</span>

        <div className={s.iconBox}>
            <div className={s.likeBox}>
                <i onClick={handleClick} className={s.likeIcon + ' small material-icons'}>{value}</i>
                <span>{num}</span>
            </div>

            <div className={s.likeBox}>
                <i onClick={() => {
                    hide === s.hide ? setHide(s.commentBox) : setHide(s.hide)
                }
                } className={s.likeIcon + ' small material-icons'}>comment</i>
                <span>{props.comments.length}</span>
            </div>
        </div>

        <div className={hide}>
            {comments.map(c => <Comments
                removeComment={removeComment}
                key={c.id}
                id={c.id}
                photo={c.photos.small}
                name={c.name}
                message={c.message}
                likeCount={c.likeCount}
                time={c.time} userId={props.userId}
                sendReply={props.sendReply}
            />)}
        </div>
    </div>
}

export default Post


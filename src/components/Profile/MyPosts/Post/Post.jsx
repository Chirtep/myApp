import React, {useState} from "react";
import s from './Post.module.css';
import defaultPic from "../../../../assets/images/logo-user-icon.png";
import Comments from "./Comments/Comments";
import {NavLink} from "react-router-dom";

const Post = (props) => {

    const [value, setValue] = useState("favorite_border"),
        [num, setNum] = useState(props.likeCount),
        [hide, setHide] = useState(s.hide),
        [comments, setComments] = useState(props.comments)

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
                {props.userProfile && props.isAuth === true &&
                <NavLink to={'/profile/' + props.userId}>
                    <img className={s.postPic + ' circle'}
                         src={props.userProfile.photos.small || defaultPic}
                         alt={'#'}/>
                </NavLink>
                }
                <div className={s.profilePanel}>
                    <NavLink to={'/profile/' + props.userId}>
                        <span className={s.profileText}>{props.userProfile.fullName}</span>
                    </NavLink>
                    <span className={s.time}>{props.time}</span>
                </div>

            </div>

            <i onClick={() => {
                props.cutPost(props.id)
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
                replies={props.replies}
                userProfile={props.userProfile}
                sendReply={props.sendReply}
                isAuth={props.isAuth}
                id={c.id}
                photo={c.photos.small}
                name={c.name}
                message={c.message}
                likeCount={c.likeCount}
                cutReply={props.cutReply}
                time={c.time} userId={props.userId}/>)}
        </div>
    </div>
}

export default Post


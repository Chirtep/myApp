import s from "../../Post.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Comment = (props) => {
    return <div>
        <div className={s.namePlate}>
            <NavLink to={'/profile/' + props.id}>
                <span className={s.commentName}>{props.name}</span>
            </NavLink>
            <i onClick={() => {
                props.removeComment(props.id)
            }
            } className={s.likeIcon + ' small material-icons'}>clear</i>
        </div>
        <span>{props.message}</span>
        <div className={s.replyLikeBox}>
                 <span className={s.replyPanel}>
                    <span className={s.time}>{props.time}</span>
                    <span onClick={() => {
                        props.setReply(props.id)
                        props.setFlag('reply')
                        props.setInputFocus()
                        props.setName(props.name + ', ')
                    }} className={s.reply}>Reply</span>
                </span>
            <div className={s.likeBox}>
                <i onClick={props.handleClick} className={s.likeIcon + ' small material-icons'}>{props.value}</i>
                <span>{props.num}</span>
            </div>
        </div>
    </div>
}

export default Comment
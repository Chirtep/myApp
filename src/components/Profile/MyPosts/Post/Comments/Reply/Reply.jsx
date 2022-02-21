import React, {useState} from "react";
import s from "../../Post.module.css";
import defaultPic from "../../../../../../assets/images/logo-user-icon.png";
import {NavLink} from "react-router-dom";

const Reply = (props) => {
    const [value, setValue] = useState("favorite_border"),
        [num, setNum] = useState(props.likeCount),
        handleClick = () => {
            if (value === "favorite_border") {
                setValue("favorite")
                setNum(num + 1)
            } else {
                setValue("favorite_border")
                setNum(num - 1)
            }

        },
        userPhoto = (props.userPhoto || defaultPic),
        repliedUserPic = (props.repliedUserPic || defaultPic)

    return <div className={s.replyBox}>
        <NavLink to={'/profile/' + (props.flag === 'user'? props.userId : props.id)}>
            <img className={s.replyPic + ' circle'}
                 src={props.replier === props.userName ? userPhoto : repliedUserPic}
                 alt={'#'}/>
        </NavLink>
        <div className={s.replyContainer}>
            <div className={s.namePlate}>
                <div className={s.nameBox}>
                    <NavLink to={'/profile/' + (props.flag === 'user'? props.userId : props.id)}>
                        <span className={s.replier}>{props.replier}</span>
                    </NavLink>
                    {!props.reply.includes(props.repliedUser) &&
                    <span className={s.repliedUser}>{'to ' + props.repliedUser}</span>}
                </div>

                <i onClick={() => {
                    props.cutReply(props.i)
                }
                } className={s.likeIcon + ' small material-icons'}>clear</i>
            </div>
            <span>{props.reply}</span>
            <div className={s.replyLikeBox}>
                <span className={s.replyPanel}>
                    <span className={s.time}>{props.time}</span>
                    <span onClick={() => {
                        props.setReplyFocus(props.id, props.replier, props.userName)
                        props.flag === 'user' ? props.setName(props.userName + ', ') : props.setName(props.replier + ', ')
                    }} className={s.reply}>Reply</span>
                </span>
                <div className={s.likeBox}>
                    <i onClick={handleClick} className={s.likeIcon + ' small material-icons'}>{value}</i>
                    <span>{num}</span>
                </div>
            </div>
        </div>
    </div>
}

export default Reply
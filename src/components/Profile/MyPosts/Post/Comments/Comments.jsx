import React, {useState} from "react";
import s from "../Post.module.css";
import defaultPic from "../../../../../assets/images/logo-user-icon.png";
import Reply from "./Reply/Reply";
import {UseFocus} from "../../../../common/utils/UseFocus";
import {NavLink} from "react-router-dom";
import Comment from "./Comment/Comment";
import {useSelector} from "react-redux";

const Comments = (props) => {
    const [reply, setReply] = useState(0),
        [flag, setFlag] = useState(''),
        [value, setValue] = useState("favorite_border"),
        [num, setNum] = useState(props.likeCount),
        [inputRef, setInputFocus] = UseFocus(),
        [name, setName] = useState(props.name),
        handleClick = () => {
            if (value === "favorite_border") {
                setValue("favorite")
                setNum(num + 1)
            } else {
                setValue("favorite_border")
                setNum(num - 1)
            }
        },
        setReplyFocus = (id, replier, userName) => {
            setReply(id)
            replier === userName ? setFlag('user') : setFlag('reply')
            setInputFocus()
        },
        replies = useSelector(state => state.profilePage.replies),
        userProfile = useSelector(state => state.auth.userProfile)

    return <div className={s.postBox} key={props.id}>
        <NavLink to={'/profile/' + props.id}>
            <img className={s.postPic + ' circle'} src={props.photo || defaultPic} alt={'#'}/>
        </NavLink>
        <div className={s.postData}>
            <Comment
                id={props.id}
                name={props.name}
                removeComment={props.removeComment}
                message={props.message}
                time={props.time} setReply={setReply}
                setFlag={setFlag} num={num}
                setInputFocus={setInputFocus} setName={setName}
                handleClick={handleClick} value={value}/>

            {replies.length !== 0 &&
            replies.filter(r => r.id === props.id).map((f, index) => <Reply key={index}
                                                                                  setReplyFocus={setReplyFocus}
                                                                                  repliedUserPic={f.repliedUserPic}
                                                                                  replier={f.replier} flag={f.flag}
                                                                                  repliedUser={f.repliedUser}
                                                                                  reply={f.reply} id={f.id}
                                                                                  setName={setName}
                                                                                  likeCount={f.likeCount}
                                                                                  i={index} time={f.time}
                                                                                  userId={props.userId}/>)}

            {reply === props.id &&
            <div className={s.replyPlate} key={name}>
                {userProfile && props.isAuth &&
                <img className={s.replyPic + ' circle'}
                     src={userProfile.photos.small || defaultPic}
                     alt={'#'}/>}

                <input ref={inputRef} autoFocus={true} defaultValue={name}/>
                <i onClick={() => {
                    inputRef.current.value.length !== 0 &&
                    props.sendReply(props.id, inputRef.current.value,
                        flag === 'user' ? userProfile.fullName : props.name, props.photo, 10,
                        {
                            userName: userProfile.fullName,
                            name: props.name
                        }, flag)
                    inputRef.current.value = ''
                    setName('')
                }} className={s.likeIcon + ' material-icons'}>send</i>
            </div>
            }
        </div>
    </div>
}

export default Comments
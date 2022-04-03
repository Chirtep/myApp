import React from "react";
import s from "./Dialogs.module.css";
import {SendMessageForm} from "./SendMessageForm/SendMessageForm";
import {NavLink} from "react-router-dom";
import defaultPic from "../../assets/images/logo-user-icon.png"
import {useSelector} from "react-redux";

const Messages = (props) => {

    const dialogsPage = useSelector(state => state.dialogsPage),
        auth = useSelector(state => state.auth)

    const onSubmit = (formData, form) => {
        props.sendMessage(formData.newMessageBody);
        form.restart()
    }

    let currentUser = dialogsPage.dialogs.filter(d => Number(d.id) === Number(props.userId))

    let messagesElems =
        dialogsPage.messages.filter(m => Number(m.id) === Number(props.userId)).map((m, index) => <div
            className={s.messagesElems} key={index}>

            <NavLink to={'/profile/' + (!m.flag ? m.id : auth.userId)}>
                {!m.flag ? <img src={currentUser[0].photos.small ? currentUser[0].photos.small : defaultPic} alt={'#'}/>
                    : <img src={auth.userProfile.photos.small ? auth.userProfile.photos.small : defaultPic}
                           alt={'#'}/>}
            </NavLink>

            <p>
                <span className={s.name}>{!m.flag ? currentUser[0].name : auth.userProfile.fullName}</span>
                <span>{m.message}</span>
            </p>
        </div>)

    return <div className={s.messages}>
        <NavLink to={'/dialogs'}>
            <button className={'waves-effect waves-light btn small indigo accent-1'}>Back</button>
        </NavLink>
        {messagesElems}
        <div>
            <SendMessageForm onSubmit={onSubmit}/>
        </div>
    </div>
}

export default Messages
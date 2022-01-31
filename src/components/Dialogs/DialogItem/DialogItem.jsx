import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import defaultPic from "../../../assets/images/logo-user-icon.png"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id,
        message = props.messages.filter(m => Number(m.id) === Number(props.id)).map((m, index) => <span
            className={s.message} key={index}
            id={props.id}>{m.message.slice(0, 92) + '...'}</span>)

    return <NavLink to={path} className={'blue-grey-text text-darken-3 collection-item avatar'}>
        <div className={s.dialog}>
            <img src={props.photo != null ? props.photo : defaultPic} alt={'#'}/>
            <div className={s.user}>
                <span className={s.name}>{props.name}</span>
                {message[message.length - 1]}
            </div>
        </div>
    </NavLink>
}

export default DialogItem
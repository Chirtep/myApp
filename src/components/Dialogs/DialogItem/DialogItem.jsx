import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return <div className={s.dialog + ' ' + s.active}>
        <img src='https://www.pinclipart.com/picdir/middle/499-4992513_avatar-avatar-png-clipart.png'/> <br/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem
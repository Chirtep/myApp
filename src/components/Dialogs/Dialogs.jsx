import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id

    return <div className={s.dialog = ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem  name="Raweater" id="1"/>
                <DialogItem  name="Force_maker" id="2"/>
                <DialogItem  name="Vikanya" id="3"/>
                <DialogItem  name="Stolgi4enko" id="4"/>
                <DialogItem  name="Foxy" id="5"/>
                <DialogItem  name="MaxMayer" id="6"/>
            </div>

            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How is your IT Kamasutra?" />
                <Message message="WAZAAAAAAAAAAAAAP?" />
            </div>
        </div>
    );
}

export default Dialogs
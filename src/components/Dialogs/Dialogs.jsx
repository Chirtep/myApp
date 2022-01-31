import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages";

const Dialogs = (props) => {

    let dialogsElems =
        props.dialogsPage.dialogs
            .map(d => <DialogItem name={d.name} key={d.id} id={d.id} photo={d.photos.small}
                                  messages={props.dialogsPage.messages}/>);

    let finalElems = []

    for (let i = 0; (i < 6) && (i < dialogsElems.length); i++) {
        finalElems.push(dialogsElems[i])
    }
    return (
        <div className={s.dialogsBox}>
            {!props.userId &&
            <div className={s.dialogsItems + ' collection'}>{finalElems}</div>}

            {props.userId &&
            <Messages
                messages={props.dialogsPage.messages}
                sendMessage={props.sendMessage}
                userId={props.userId}
                dialogs={props.dialogsPage.dialogs}
                authUserProfile={props.authUserProfile}
                authUserId={props.authUserId}
            />}
        </div>
    )
}

export default Dialogs

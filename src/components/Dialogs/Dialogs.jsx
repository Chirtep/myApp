import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let dialogsElems =
        props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElems =
        props.dialogsPage.messages
        .map(m => <Message message={m.message} key={m.id}/>)

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    if(!props.isAuth) return <Redirect to={"/login"}/>;

    let newMessageBody = props.dialogsPage.newMessageBody;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElems}
            </div>

            <div className={s.messages}>
                <div>{messagesElems}</div>
                <br/>
                <div>
                    <textarea
                        onChange={onNewMessageChange}
                        placeholder={'Введи сообщение'}
                        value={newMessageBody}
                    />
                </div>

                <div>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs
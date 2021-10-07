import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {reduxForm} from "redux-form";
import {MessagesForm} from "./SendMessageForm/SendMessageForm";


const Dialogs = (props) => {

    let dialogsElems =
        props.dialogsPage.dialogs
            .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElems =
        props.dialogsPage.messages
            .map(m => <Message message={m.message} key={m.id}/>)

    const MessagesReduxForm = reduxForm({
        form: 'messages'
    })(MessagesForm)

    const onSubmit = (formData) => {
        props.sendMessage(formData.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElems}
            </div>

            <div className={s.messages}>
                <div>{messagesElems}</div>
                <br/>
                <MessagesReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

export default Dialogs

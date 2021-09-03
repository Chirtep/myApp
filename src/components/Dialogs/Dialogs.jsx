import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElems =
        props.store.getState().dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElems =
        props.store.getState().dialogsPage.messages
        .map(m => <Message message={m.message}/>)

    let newMessageElem = React.createRef();

    let addMessage = () => {
        props.store.setMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElem.current.value;
        props.store.setNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElems}
            </div>

            <div className={s.messages}>
                {messagesElems}
                <br/>
                <div>
                    <textarea
                        onChange={onMessageChange}
                        ref={newMessageElem}
                        value={props.store.getState().dialogsPage.newMessage}
                    />
                </div>

                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs
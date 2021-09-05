import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {setMessageActionCreator, setNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElems =
        props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElems =
        props.dialogsPage.messages
        .map(m => <Message message={m.message}/>)

    let newMessageElem = React.createRef();

    let addMessage = () => {
        props.dispatch(setMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElem.current.value;
        props.dispatch(setNewMessageTextActionCreator(text))
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
                        value={props.dialogsPage.newMessage}
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
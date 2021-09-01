import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElems = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElems = props.state.messages
        .map(m => <Message message={m.message}/>)

    let newMessageElem = React.createRef();

    let addPost = () => {
        let text = newMessageElem.current.value;
        alert(text);
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
                    <textarea ref={newMessageElem}></textarea>
                </div>

                <div>
                    <button onClick={addPost}>Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs
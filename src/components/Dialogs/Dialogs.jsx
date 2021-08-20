import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Raweater'},
        {id: 2, name: 'Force_maker'},
        {id: 3, name: 'Vikanya'},
        {id: 4, name: 'Stolgi4enko'},
        {id: 5, name: 'Foxy'},
        {id: 6, name: 'MaxMayer'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your IT Kamasutra?'},
        {id: 3, message: 'WAZAAAAAAAAAAAAAP'},
        {id: 4, message: 'Hello there!'},
        {id: 5, message: 'Oh, hi Mark!'},
        {id: 6, message: 'lol'}
    ]

    let dialogsElems = dialogs
        .map( d => <DialogItem name={d.name} id={d.id} />);

    let messagesElems = messages
        .map( m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElems}
            </div>

            <div className={s.messages}>
                {messagesElems}
            </div>
        </div>
    );
}

export default Dialogs
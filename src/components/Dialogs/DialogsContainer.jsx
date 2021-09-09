import React from "react";
import {setMessageCreator, setNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                let onSendMessageClick = () => {
                    store.dispatch(setMessageCreator())
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(setNewMessageBodyCreator(body));
                }

                return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state.dialogsPage}
                />
            }

        }
    </StoreContext.Consumer>

}

export default DialogsContainer
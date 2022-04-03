import React, {useEffect} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages";
import {useDispatch, useSelector} from "react-redux";
import {getDialogs, getMessages, setUserMessage} from "../../redux/dialogs-reducer";
import {RandomMessageGen} from "../common/Randomizers/RandomMessageGen/RandomMessageGen";
import {Redirect, withRouter} from "react-router-dom";
import Preloader from "../common/Preloader/Preolader";

const Dialogs = (props) => {

    const dialogsPage = useSelector(state => state.dialogsPage),
        auth = useSelector(state => state.auth),
        dispatch = useDispatch(),
        sendMessage = (newMessageBody) => {
            dispatch(setUserMessage(newMessageBody, Number(userId), 'user'))
            dispatch(getMessages(Number(userId), RandomMessageGen(dialogsPage.words)))
        },
        isFetching = useSelector(state => state.usersPage.isFetching),
        cn = require('classnames')

    let userId = props.match.params.Id,
        finalElems = [],
        dialogsElems =
            dialogsPage.dialogs
                .map(d => <DialogItem name={d.name} key={d.id} id={d.id} photo={d.photos.small}
                                      messages={dialogsPage.messages}/>);

    for (let i = 0; (i < 6) && (i < dialogsElems.length); i++) {
        finalElems.push(dialogsElems[i])
    }

    useEffect(() => {
        dispatch(getDialogs(1, 6))
    }, [dispatch])

    useEffect(() => {
        if (dialogsPage.messages.length === 0) {
            for (let i = 0; i < dialogsPage.dialogs.length; i++) {
                dispatch(getMessages(dialogsPage.dialogs[i].id, RandomMessageGen(dialogsPage.words)))
            }
        }
    }, [dispatch, dialogsPage.words, dialogsPage.dialogs, dialogsPage.messages.length])


    if (!auth.isAuth) return <Redirect to={'login'}/>

    return (
        <>
            {isFetching ? <Preloader/> :
                <div className={s.dialogsBox}>
                    {!userId &&
                    <div className={cn(s.dialogsItems, 'collection')}>{finalElems}</div>}

                    {userId &&
                    <Messages
                        sendMessage={sendMessage}
                        userId={userId}
                    />}
                </div>}
        </>
    )
}

export default withRouter(Dialogs)

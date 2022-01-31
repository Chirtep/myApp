import {getDialogs, getMessages, setUserMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import React, {useEffect} from "react";
import Preloader from "../common/Preloader/Preolader";
import {RandomMessageGen} from "../common/Randomizers/RandomMessageGen/RandomMessageGen";

const DialogsContainer = (props) => {

    const dialogsPage = useSelector(state => state.dialogsPage),
        auth = useSelector(state => state.auth),
        dispatch = useDispatch(),
        sendMessage = (newMessageBody) => {
            dispatch(setUserMessage(newMessageBody, Number(userId), 'user'))
            setTimeout(() => {
                dispatch(getMessages(Number(userId), RandomMessageGen(dialogsPage.words)))
            }, 2000)
        },
        isFetching = useSelector(state => state.usersPage.isFetching)

    useEffect(() => {
        dispatch(getDialogs(1, 6))
    }, [dispatch])

    let userId = props.match.params.Id

    useEffect(() => {
        if (dialogsPage.messages.length === 0) {
            for (let i = 0; i < dialogsPage.dialogs.length; i++) {
                dispatch(getMessages(dialogsPage.dialogs[i].id, RandomMessageGen(dialogsPage.words)))
            }
        }
    }, [dispatch, dialogsPage.words, dialogsPage.dialogs, dialogsPage.messages.length])

    if (!auth.isAuth) return <Redirect to={'login'}/>

    return <>
        {isFetching ? <Preloader/> :
            <Dialogs
                dialogsPage={dialogsPage}
                isAuth={auth.isAuth}
                sendMessage={sendMessage}
                userId={userId}
                authUserProfile={auth.userProfile}
                authUserId={auth.userId}
            />}
    </>
}

export default withRouter(DialogsContainer)
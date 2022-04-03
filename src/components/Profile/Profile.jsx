import React, {useEffect} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from '../Profile/Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {getComUsers, getProfile, getStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

const Profile = (props) => {

    const authId = useSelector(state => state.auth.userId),
        profilePage = useSelector(state => state.profilePage),
        dialogsPage = useSelector(state => state.dialogsPage),
        dispatch = useDispatch()

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = authId;
            props.history.push('/profile/' + userId)
            if (!userId) {
                props.history.push('/login')
            }
        }

        dispatch(getProfile(userId))
        dispatch(getStatus(userId))
    }, [authId, dispatch, props.history, props.match.params.userId])

    useEffect(() => {
        if (profilePage.comUsers.length === 0) {
            dispatch(getComUsers(dialogsPage.words))
        }
    }, [dispatch, profilePage.comUsers.length, dialogsPage.words])


    return (
        <div className={s.profileContainer}>
            <ProfileInfo
                isOwner={Number(props.match.params.userId) === Number(authId)}
                userId={props.match.params.userId}
            />
            <MyPosts
                userId={props.match.params.userId}
            />
        </div>
    )
}

export default withRouter(Profile)

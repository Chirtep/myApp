import React, {useEffect, useState} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {
    getComUsers,
    getProfile,
    getStatus,
    removePost,
    removeReply,
    setPost,
    setReplies,
    updateStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {follow, unfollow} from "../../redux/users-reducer";
import {RandomNum} from "../common/Randomizers/RandomNum/RandomNum";
import {dateGen} from "../common/utils/dateGen";
import {RandomMessageGen} from "../common/Randomizers/RandomMessageGen/RandomMessageGen";

const ProfileContainer = (props) => {
    const profilePage = useSelector(state => state.profilePage),
        auth = useSelector(state => state.auth),
        usersPage = useSelector(state => state.usersPage),
        dialogsPage = useSelector(state => state.dialogsPage),
        dispatch = useDispatch(),
        [value, setValue] = useState(0),
        userUnfollow = (id) => {
            dispatch(unfollow(id))
            dispatch(getProfile(id))
        },
        userFollow = (id) => {
            dispatch(follow(id))
            dispatch(getProfile(id))
        },
        addPost = (newPostText, id) => {
            let comments = profilePage.comUsers.slice(0, RandomNum(1, 10)).map(function () {
                return this.splice(Math.floor(Math.random() * this.length), 1)[0]
            }, profilePage.comUsers.slice())

            dispatch(setPost(newPostText, id, RandomNum(0, profilePage.comUsers.length), comments, dateGen(), auth.userId))
        },
        sendReply = (id, reply, repliedUser, repliedUserPic, count, replier, flag) => {
            dispatch(setReplies(id, reply, repliedUser, repliedUserPic, RandomNum(0, count), replier.userName, flag, dateGen()))
            setValue(RandomNum(0, 2))
            value === 1 && setTimeout(() => {
                dispatch(setReplies(id,
                    auth.userProfile.fullName + ', ' + RandomMessageGen(dialogsPage.words),
                    auth.userProfile.fullName, repliedUserPic, RandomNum(0, count), replier.name, 'reply', dateGen()))
            }, 2000)
        },
        cutReply = (i) => {
            dispatch(removeReply(i))
        },
        cutPost = (id) => {
            dispatch(removePost(id))
        }

    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = auth.userId;
            props.history.push('/profile/' + userId)
            if (!userId) {
                props.history.push('/login')
            }
        }

        dispatch(getProfile(userId))
        dispatch(getStatus(userId))
    }, [auth.userId, dispatch, props.history, props.match.params.userId])

    useEffect(() => {
        if (profilePage.comUsers.length === 0) {
            dispatch(getComUsers(dialogsPage.words))
        }
    }, [dispatch, profilePage.comUsers.length, dialogsPage.words])

    const updateUserStatus = (status) => {
        dispatch(updateStatus(status))
    }

    return <Profile
        profilePage={profilePage}
        updateStatus={updateUserStatus}
        userId={props.match.params.userId}
        auth={auth}
        userUnfollow={userUnfollow}
        userFollow={userFollow}
        followingInProgress={usersPage.followingInProgress}
        cutReply={cutReply}
        cutPost={cutPost}
        addPost={addPost}
        sendReply={sendReply}/>
}

export default withRouter(ProfileContainer)
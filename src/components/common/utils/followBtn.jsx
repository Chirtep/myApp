import React from "react";
import {follow, unfollow} from "../../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../../redux/profile-reducer";

const FollowBtn = (props) => {

    const dispatch = useDispatch(),
        followingInProgress = useSelector(state => state.usersPage.followingInProgress)

    return <button className={'waves-effect waves-light btn-small indigo accent-1'}
                   disabled={followingInProgress.some(id => id === props.id)}
                   onClick={() => {
                       props.followed ? dispatch(unfollow(props.id)) : dispatch(follow(props.id))
                       if (props.flag) {
                           dispatch(getProfile(props.id))
                       }
                   }}>{props.followed ? 'Unfollow' : 'Follow'}</button>
}

export default FollowBtn
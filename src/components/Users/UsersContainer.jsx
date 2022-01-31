import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage, setFlag,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preolader";

const UsersContainer = (props) => {
    const usersPage = useSelector(state => state.usersPage),

        dispatch = useDispatch(),

        userUnfollow = (id) => {
            dispatch(unfollow(id))
        },

        setPage = (page) => {
            dispatch(setCurrentPage(page))
        },

        userFollow = (id) => {
            dispatch(follow(id))
        },

        toggleFlag = () => {
            dispatch(setFlag(!usersPage.flag))
            setPage(1)
        }

    useEffect(() => {
        dispatch(getUsers(usersPage.currentPage, usersPage.pageSize, usersPage.flag))
    }, [usersPage.currentPage, usersPage.pageSize, dispatch, usersPage.flag])


    return <>
        {usersPage.isFetching ? <Preloader/> : <Users
            totalUsersCount={usersPage.totalUsersCount}
            pageSize={usersPage.pageSize}
            currentPage={usersPage.currentPage}
            setPage={setPage}
            users={usersPage.users}
            followingInProgress={usersPage.followingInProgress}
            unfollow={userUnfollow}
            follow={userFollow}
            toggleFlag={toggleFlag}
            flag={usersPage.flag}
        />}
    </>
}

export default UsersContainer
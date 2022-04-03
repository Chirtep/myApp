import React, {useEffect} from "react";
import Pagination from "./Pagination/Pagination";
import UsersCards from "./UsersCards/UsersCards";
import s from "./users.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getUsers, setCurrentPage, setFlag} from "../../redux/users-reducer";

let Users = (props) => {
    const usersPage = useSelector(state => state.usersPage),
        dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(usersPage.currentPage, usersPage.pageSize, usersPage.flag))
    }, [usersPage.currentPage, usersPage.pageSize, dispatch, usersPage.flag])

    return (
        <div className={s.usersWrapper}>
            <Pagination />

            <div className={s.switcher}>
                <button className={'waves-effect waves-light btn-small indigo accent-1'}
                        onClick={() => {
                            dispatch(setFlag(!usersPage.flag))
                            dispatch(setCurrentPage(1))
                        }}>{usersPage.flag === true ? 'Show all' : 'Show followed'}</button>
            </div>

            <UsersCards follow={props.follow}
                        unfollow={props.unfollow}/>
        </div>
    );
}

export default Users;
import React from "react";
import Pagination from "./Pagination/Pagination";
import UsersCards from "./UsersCards/UsersCards";
import s from "./users.module.css"

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = Math.max(1, props.currentPage - 3); i <= Math.min(props.currentPage + 3, pagesCount); i++) {
        pages.push(i)
    }

    return (
        <div className={s.usersWrapper}>
            <Pagination pages={pages} pagesCount={pagesCount} currentPage={props.currentPage} setPage={props.setPage}/>

            <div className={s.switcher}>
                <button className={'waves-effect waves-light btn-small indigo accent-1'}
                        onClick={props.toggleFlag}>{props.flag === true ? 'Show all' : 'Show followed'}</button>
            </div>

            <UsersCards users={props.users} followingInProgress={props.followingInProgress} follow={props.follow}
                        unfollow={props.unfollow}/>
        </div>
    );
}

export default Users;
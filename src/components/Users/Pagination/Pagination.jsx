import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../../redux/users-reducer";

const Pagination = (props) => {
    const usersPage = useSelector(state => state.usersPage),
        dispatch = useDispatch(),
        pagesCount = Math.ceil(usersPage.totalUsersCount / usersPage.pageSize),
        cn = require('classnames')

    let pages = [];
    for (let i = Math.max(1, usersPage.currentPage - 3); i <= Math.min(usersPage.currentPage + 3, pagesCount); i++) {
        pages.push(i)
    }

    return <ul className={'pagination'}>
        <li onClick={(e => {
            if (usersPage.currentPage !== 1) {
                dispatch(setCurrentPage(usersPage.currentPage - 1))
            }
        })} className={usersPage.currentPage === 1 ? 'disabled' : undefined}>
            <a href="#!"><i className="material-icons">chevron_left</i></a></li>

        {pages.map(p => {
            let chosen = usersPage.currentPage === p ? 'active' : usersPage.currentPage;
            return <li key={p} className={cn(chosen, 'waves-effect')}
                       onClick={(e) => {
                           dispatch(setCurrentPage(p))
                       }}><a href={'#!'}>{p}</a>
            </li>
        })}

        <li onClick={(e => {
            if (usersPage.currentPage !== pagesCount) {
                dispatch(setCurrentPage(usersPage.currentPage + 1))
            }
        })} className={usersPage.currentPage === pagesCount ? 'disabled' : undefined}>
            <a href="#!"><i className="material-icons">chevron_right</i></a></li>
    </ul>
}

export default Pagination
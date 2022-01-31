import React from "react";

const Pagination = (props) => {
    return <ul className={'pagination'}>
        <li onClick={(e => {
            if (props.currentPage !== 1) {
                props.setPage(props.currentPage - 1)
            }
        })} className={props.currentPage === 1? 'disabled' : undefined}>
            <a href="#!"><i className="material-icons">chevron_left</i></a></li>

        {props.pages.map(p => {
            let chosen = props.currentPage === p ? 'active' : props.currentPage;
            return <li key={p} className={chosen + ' waves-effect'}
                       onClick={(e) => {
                           props.setPage(p)
                       }}><a href={'#!'}>{p}</a>
            </li>
        })}

        <li onClick={(e => {
            if (props.currentPage !== props.pagesCount) {
                props.setPage(props.currentPage + 1)
            }
        })} className={props.currentPage === props.pagesCount? 'disabled' : undefined}>
            <a href="#!"><i className="material-icons">chevron_right</i></a></li>
    </ul>
}

export default Pagination
import React from "react";
import s from './Friend.module.css';
import userPhoto from "../../../../assets/images/logo-user-icon.png";
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return <div className={s.friend}>
        <NavLink to={'/profile/' + props.id}>
            <img src={props.avatar || userPhoto} alt={'#'}/>
        </NavLink> <br/>
        <NavLink to={'/profile/' + props.id}>
            <span className={'indigo-text text-darken-1'}>{props.name}</span>
        </NavLink>
    </div>
}

export default Friend
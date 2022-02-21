import React from "react";
import s from './MyFriends.module.css';
import Friend from "./Friend/Friend";
import {NavLink} from "react-router-dom";

const MyFriends = (props) => {

    let friendsElems =
        props.friends.map(f => <Friend avatar={f.photos.small} key={f.id} name={f.name} id={f.id}/>)


    return <div className={s.friendBar}>
            <div>
                <span className={s.title + ' brand-logo blue-grey-text text-darken-3'}>Followed</span>
            </div>
            <div className={s.friends}>
                {friendsElems}
            </div>
            <div>
                <NavLink activeClassName={s.hideButton} onClick={props.setFollowedFlag} to='/users'>
                    <button className={'waves-effect waves-light btn-small indigo accent-1 '}>Show followed</button>
                </NavLink>
            </div>
        </div>
}

export default MyFriends
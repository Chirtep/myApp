import React from "react";
import s from './MyFriends.module.css';
import Friend from "./Friend/Friend";

const MyFriends = (props) => {
    let friendsElems =
        props.sideBar.friends.map(f => <Friend img={f.img} name={f.name}/>)

    return <div className={s.friendBar}>
        <div>
            <h1>Friends</h1>
        </div>
        <div className={s.friends}>
            {friendsElems}
        </div>
    </div>
}

export default MyFriends
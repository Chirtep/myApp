import React from "react";
import s from './MyFriends.module.css';
import Friend from "./Friend/Friend";

const MyFriends = (props) => {

    let friendsElems =
        props.friends.map(f => <Friend img={f.img} key={f.id} name={f.name}/>)

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
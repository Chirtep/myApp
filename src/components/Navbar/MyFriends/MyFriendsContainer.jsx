import React from "react";
import MyFriends from "./MyFriends";

const MyFriendsContainer = (props) => {

    let state = props.store.getState()

    return <MyFriends friends={state.sideBar.friends}/>
}

export default MyFriendsContainer
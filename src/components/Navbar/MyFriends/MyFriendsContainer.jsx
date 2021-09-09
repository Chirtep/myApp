import React from "react";
import MyFriends from "./MyFriends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.sideBar.friends
    }
}


const MyFriendsContainer = connect(mapStateToProps)(MyFriends)


export default MyFriendsContainer
import React from "react";
import MyFriends from "./MyFriends";
import StoreContext from "../../../StoreContext";

const MyFriendsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    return <MyFriends friends={state.sideBar.friends}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyFriendsContainer
import MyFriends from "./MyFriends";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFollowedUsers} from "../../../redux/sidebar-reducer";
import {setFlag} from "../../../redux/users-reducer";

const MyFriendsContainer = (props) => {
    const sideBar = useSelector(state => state.sideBar),
        flag = useSelector(state => state.usersPage.flag),
        auth = useSelector(state => state.auth),
        dispatch = useDispatch(),
        toggleFlag = () => {
            dispatch(setFlag(!flag))
        }

    useEffect(() => {
        dispatch(getFollowedUsers(1, sideBar.pageSize))
    },[sideBar.pageSize, dispatch])

    return <MyFriends friends={sideBar.friends} setFollowedFlag={toggleFlag} isAuth={auth.isAuth}/>
}

export default MyFriendsContainer
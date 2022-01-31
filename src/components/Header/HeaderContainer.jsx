import React from "react";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const HeaderContainer = (props) => {
    const auth = useSelector(state => state.auth),
        dispatch = useDispatch(),
        logoutMe = () => {
            dispatch(logout())
        }

    return (
        <Header auth={auth} logout={logoutMe}/>
    )
}

export default withRouter(HeaderContainer)
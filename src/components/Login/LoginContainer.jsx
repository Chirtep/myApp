import React from "react";
import Login from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {loginMe} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginContainer = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth),
        dispatch = useDispatch(),
        login = (email, password, rememberMe) => {
            dispatch(loginMe(email, password, rememberMe))
        }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <Login loginMe={login}/>
}

export default LoginContainer
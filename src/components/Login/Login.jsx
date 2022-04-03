import React from "react";
import s from './Login.module.css'
import LoginForm from "./LoginForm/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {getAuthMe, getCaptcha} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {authAPI} from "../../api/api";
import {FORM_ERROR} from "final-form";

const Login = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth),
        dispatch = useDispatch(),
        cn = require('classnames')

    const onSubmit = async (formData, form) => {
        let response = await authAPI.login(formData.email, formData.password, formData.rememberMe, formData.captcha)

        if (response.data.resultCode === 0) {
            dispatch(getAuthMe());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptcha())
            }
            return {[FORM_ERROR]: response.data.messages}
        }

        form.restart()
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={cn(s.loginBlock, 'row')}>
        <h1>Login</h1>
        <div>
            <LoginForm onSubmit={onSubmit}/>
            <div className={s.testLoginData}>
                <h5>Тестовые данные для входа:</h5>
                <span>Email: free@samuraijs.com</span>
                <span>Password: free</span>
            </div>
        </div>
    </div>
}

export default Login
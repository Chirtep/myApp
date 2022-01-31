import React from "react";
import s from './Login.module.css'
import LoginForm from "./LoginForm/LoginForm";

const Login = (props) => {
    const onSubmit = (formData, form) => {

        let email = formData.email,
            password = formData.password,
            rememberMe = formData.rememberMe

        props.loginMe(email, password, rememberMe)
        form.restart()
    }

    return <div className={s.loginBlock + ' row'}>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login
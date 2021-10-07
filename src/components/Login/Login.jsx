import React from "react";
import {Field, reduxForm} from "redux-form";
import {LoginForm} from "./LoginForm/LoginForm";

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {

        let email = formData.login,
            password = formData.password,
            rememberMe = formData.rememberMe

        props.loginMe(email, password, rememberMe)

    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login
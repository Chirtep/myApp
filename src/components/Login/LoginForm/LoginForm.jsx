import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {FormControl} from "../../common/FormsControls/FormsControls";
import React from "react";

export const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} validate={[required]} component={FormControl} type={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} validate={[required]} component={FormControl} type={'password'}/>
            </div>
            <div>
                <Field component={FormControl} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
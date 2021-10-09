import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {FormControl} from "../../common/FormsControls/FormsControls";
import React from "react";
import style from '../../common/FormsControls/FormControls.module.css'

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
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
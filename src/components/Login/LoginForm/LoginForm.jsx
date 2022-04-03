import {required} from "../../common/utils/validators";
import React from "react";
import styles from "../../common/FormsControls/FormControls.module.css";
import {Form} from "react-final-form";
import CreateField from "../../common/FormsControls/CreateField";
import {useSelector} from "react-redux";

const LoginForm = (props) => {
    let formData = {},
        captchaUrl = useSelector(state => state.auth.captchaUrl),
        cn = require('classnames')

    return (
        <Form
            initialValues={{
                formData,
                form: 'login',
                value: props.value || ""
            }}
            onSubmit={props.onSubmit}
            render={({handleSubmit, submitting, submitError}) => (
                <form onSubmit={handleSubmit}>

                    <CreateField
                        name={'email'}
                        type={'textarea'}
                        label={'Email'}
                        validate={required}
                        id={'email'}
                        fieldClassName={'input-field col s6'}
                    />

                    <br/>
                    <br/>

                    <CreateField
                        type={'password'}
                        name={'password'}
                        label={'Password'}
                        validate={required}
                        id={'password'}
                        fieldClassName={'input-field col s6'}
                    />

                    <CreateField
                        type={'checkbox'}
                        name={'rememberMe'}
                        label={'Remember me'}
                    />

                    <div className={styles.loginSubmit}>
                        {captchaUrl && <img src={captchaUrl} className={styles.captchaImg} alt={'#'}/>}
                        {captchaUrl && <CreateField
                            name={'captcha'}
                            type={'textarea'}
                            label={'Captcha'}
                            id={'captcha'}
                            fieldClassName={'input-field col s12'}
                        />}
                    </div>

                    <button disabled={submitting}
                            className={cn(styles.loginBtn, 'btn waves-effect waves-light indigo accent-1')}>Login
                        <i className="material-icons right">send</i>
                    </button>

                    {submitError && (
                        <div className={cn(styles.formSummaryError, styles.loginError)}>{submitError}</div>
                    )}
                </form>
            )}
        >
        </Form>
    )
}

export default LoginForm
import {required} from "../../common/utils/validators";
import React from "react";
import styles from "../../common/FormsControls/FormControls.module.css";
import {Form, Field} from "react-final-form";

const LoginForm = (props) => {
    let formData = {}

    return (
        <Form
            initialValues={{
                formData,
                form: 'login',
                value: props.value || ""
            }}
            onSubmit={props.onSubmit}
            render={({handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <Field name={'email'}
                           validate={required}>
                        {({input, meta}) =>
                            (
                                <div
                                    className={styles.formControl + ' ' + styles.passWrapper + ' ' + (meta.touched && meta.error && styles.error) + ' row'}>
                                    <div className={'input-field col s6'}>
                                        <input {...input} type={'text'} className={'materialize-textarea'} id="email"/>
                                        <label htmlFor="email">Email</label>
                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                    </div>
                                </div>
                            )}
                    </Field>

                    <Field name={'password'}
                           validate={required}>
                        {({input, meta}) =>
                            (
                                <div
                                    className={styles.formControl + ' ' + (meta.touched && meta.error && styles.error) + ' row'}>
                                    <div className={'input-field col s6'}>
                                        <input {...input} type={'password'} className={'materialize-textarea'}
                                               id="password"/>
                                        <label htmlFor="password">Password</label>
                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                    </div>
                                </div>
                            )}
                    </Field>

                    <Field name={'rememberMe'} type={'checkbox'}>
                        {({input}) =>
                            (
                                <div
                                    className={styles.formControl + ' ' + styles.checkboxWrapper + ' row'}>
                                    <div className={styles.checkBoxContainer + ' input-field'}>
                                        <label><input {...input} type={'checkbox'}/><span>Remember me</span></label>
                                    </div>
                                </div>
                            )}
                    </Field>

                    <button disabled={submitting}
                            className={styles.loginBtn + ' btn waves-effect waves-light indigo accent-1'}>Login
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            )}
        >
        </Form>
    )
}

export default LoginForm
import React, {useRef} from "react";
import {composeValidators, maxLengthCreator, required} from "../../common/utils/validators";
import {Form, Field} from "react-final-form";
import styles from '../../common/FormsControls/FormControls.module.css'

const maxLength500 = maxLengthCreator(500)

export const SendMessageForm = (props) => {
    let formData = {}

    const textArea = useRef(null);

    function handleClick() {
        textArea.current.focus();
    }

    return (
        <Form
            initialValues={{
                formData,
                form: 'messages'
            }}
            onSubmit={props.onSubmit}
            render={({handleSubmit, submitting, form}) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        name={'newMessageBody'}
                        validate={composeValidators(required, maxLength500)}>
                        {({input, meta, ...rest}) =>
                            (
                                <div
                                    className={styles.formControl + ' ' + (meta.touched && meta.error && styles.error) + ' row'}>
                                    <div className={'input-field'}>
                                <textarea  {...input} type={'textarea'} ref={textArea}
                                           className={'materialize-textarea'} id="textarea1"/>
                                        <label htmlFor="textarea1">New Message</label>
                                        {meta.touched && meta.error && <span>{meta.error}</span>}

                                    </div>
                                </div>
                            )}
                    </Field>

                    <div>
                        <button type={'submit'} disabled={submitting} onClick={handleClick}
                                className={'waves-effect waves-light btn indigo accent-1'}>Send message
                        </button>
                    </div>

                </form>
            )}
        >
        </Form>
    )
}

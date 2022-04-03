import React from "react";
import {maxLengthCreator, required, composeValidators} from "../../../common/utils/validators";
import {Form, Field} from "react-final-form";
import styles from "../../../common/FormsControls/FormControls.module.css";

const maxLength500 = maxLengthCreator(500),
    cn = require('classnames')

export const PostsForm = (props) => {
    let formData = {}

    return (
        <Form
            initialValues={{
                formData,
                form: 'posts'
            }}
            onSubmit={props.onSubmit}
            render={({handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <Field name={'newPostText'}
                           validate={composeValidators(required, maxLength500)}>
                        {({input, meta}) =>
                            (
                                <div
                                    className={cn(styles.formControl, (meta.touched && meta.error && styles.error), 'row')}>
                                    <div className={'input-field'}>
                                <textarea {...input} type={'textarea'} onFocus={() => props.setHide('')}
                                           className={'materialize-textarea'} id="textarea1"/>
                                        <label htmlFor="textarea1">What's up?</label>
                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                    </div>
                                </div>
                            )}
                    </Field>

                    <button type={'submit'} disabled={submitting}
                             className={cn(styles.postsBtn, props.hide, 'waves-effect waves-light btn indigo accent-1')}>Add post
                    </button>
                </form>
            )}
        >
        </Form>
    )
}

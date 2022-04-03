import React from "react";
import {Form} from "react-final-form";
import styles from "../../../common/FormsControls/FormControls.module.css";
import CreateField from "../../../common/FormsControls/CreateField";
import {FORM_ERROR} from "final-form";
import {profileAPI} from "../../../../api/api";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../../../redux/profile-reducer";

const ProfileDataForm = ({setEditMode, ...props}) => {
    const profilePage = useSelector(state => state.profilePage),
        authId = useSelector(state => state.auth.userId)

    let dispatch = useDispatch()

    let contacts = (a, b) => {
        return profilePage.contactsForm.slice(a, b).map((contact, key) =>
            <CreateField key={key} name={contact.name} type={contact.type} label={contact.label} id={contact.id}
                         fieldClassName={'input-field col s12'}/>)
    }

    const onSubmit = async (formData) => {
            let response = await profileAPI.saveProfile(formData)
            if (response.data.resultCode === 0) {
                dispatch(getProfile(authId))
                setEditMode(false)
            } else {
                return {[FORM_ERROR]: response.data.messages}
            }
        },
        cn = require('classnames')

    return (
        <Form
            initialValues={{}}
            onSubmit={onSubmit}
            render={({handleSubmit, submitting, submitError}) => (

                <form className={styles.profileForm} onSubmit={handleSubmit}>
                    {profilePage.forms.map((form, key) => <CreateField key={key} name={form.name} type={form.type}
                                                                 label={form.label} id={form.id}
                                                                 fieldClassName={'input-field col s12'}/>)}
                    <h5 className={styles.header}>Contacts:</h5>
                    <div className={styles.contactsWrapper}>
                        <div className={cn(styles.contactsCol, styles.contactsColSeparate)}>
                            {contacts(0, 4)}
                        </div>
                        <div className={styles.contactsCol}>
                            {contacts(4)}
                        </div>
                    </div>

                    <div className={styles.submitWrapper}>
                        <button type={'submit'} disabled={submitting}
                                className={cn(styles.postsBtn, props.hide, 'waves-effect waves-light btn indigo accent-1')}>Save
                            changes
                        </button>

                        {submitError && (
                            <div className={styles.formSummaryError}>{submitError}</div>
                        )}
                    </div>
                </form>
            )}
        >
        </Form>
    )
}

export default ProfileDataForm
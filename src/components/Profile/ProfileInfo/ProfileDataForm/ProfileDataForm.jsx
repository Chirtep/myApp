import React from "react";
import {Form} from "react-final-form";
import styles from "../../../common/FormsControls/FormControls.module.css";
import CreateField from "../../../common/FormsControls/CreateField";
import {FORM_ERROR} from "final-form";


const ProfileDataForm = ({profile, setEditMode, ...props}) => {

    let contacts = (a, b) => {
        return props.contactsForm.slice(a, b).map((contact, key) =>
            <CreateField key={key} name={contact.name} type={contact.type} label={contact.label} id={contact.id}/>)
    }


    const onSubmit = (formData) => {
        props.saveProfile(formData)
        // if (errors.length === 0) {
        //     setEditMode(false)
        // } else {
        //     return {[FORM_ERROR]: 'ERROR'}
        // }

        console.log(props.errors)
    }


    return (
        <Form
            initialValues={{}}
            onSubmit={onSubmit}
            render={({handleSubmit, submitting, submitError}) => (

                <form className={styles.profileForm} onSubmit={handleSubmit}>
                    {props.forms.map((form, key) => <CreateField key={key} name={form.name} type={form.type}
                                                                 label={form.label} id={form.id}/>)}
                    <h5 className={styles.header}>Contacts:</h5>
                    <div className={styles.contactsWrapper}>
                        <div className={styles.contactsCol}>
                            {contacts(0, 4)}
                        </div>
                        <div>
                            {contacts(4)}
                        </div>
                    </div>

                    {submitError && (
                        <div className={styles.formSummaryError}>{submitError}</div>
                    )}


                    <button type={'submit'} disabled={submitting}
                            className={styles.postsBtn + ' ' + props.hide + ' waves-effect waves-light btn indigo accent-1'}>Save
                        changes
                    </button>
                </form>
            )}
        >
        </Form>
    )
}

export default ProfileDataForm
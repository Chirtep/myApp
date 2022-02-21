import styles from "./FormControls.module.css";
import {Field} from "react-final-form";
import React from "react";

const CreateField = (props) => {
    if (props.type === 'textarea') {
        return <Field name={props.name}>
            {({input, meta}) =>
                (
                    <div
                        className={styles.formControl + ' row'}>
                        <div className={styles.formField + ' input-field'}>
                            <props.type {...input} type={'textarea'} className={'materialize-textarea'}
                                        id={props.id}/>
                            <label htmlFor={props.id}>{props.label}</label>
                        </div>
                    </div>
                )}
        </Field>
    } else if (props.type === 'checkbox') {
        return <Field name={props.name} type={'checkbox'}>
            {({input}) =>
                (
                    <div
                        className={styles.formControl + ' ' + styles.checkboxWrapper + ' row'}>
                        <div className={styles.checkBoxContainer + ' input-field'}>
                            <label><input {...input} type={'checkbox'}/><span>{props.label}</span></label>
                        </div>
                    </div>
                )}
        </Field>
    }
}

export default CreateField
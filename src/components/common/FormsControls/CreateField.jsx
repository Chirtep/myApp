import styles from "./FormControls.module.css";
import {Field} from "react-final-form";
import React from "react";

const CreateField = (props) => {

    const cn = require('classnames')

    if (props.type === 'checkbox') {
        return <Field name={props.name} type={'checkbox'}>
            {({input}) =>
                (
                    <div
                        className={cn(styles.formControl, styles.checkboxWrapper, 'row')}>
                        <div className={cn(styles.checkBoxContainer, 'input-field')}>
                            <label><input {...input} type={'checkbox'}/><span>{props.label}</span></label>
                        </div>
                    </div>
                )}
        </Field>
    } else {
        return <Field name={props.name} validate={props.validate}>
            {({input, meta}) =>
                (
                    <div
                        className={cn(styles.formControl, (meta.touched && meta.error && styles.error), 'row')}>
                        <div className={cn(styles.formField, props.fieldClassName)}>

                            {props.type === 'password'? <input {...input} type={props.type} className={'materialize-textarea'}
                                                                    id={props.id}/>
                                : <props.type {...input} type={props.type} className={'materialize-textarea'}
                                              id={props.id}/>}
                            <label htmlFor={props.id}>{props.label}</label>
                            {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                    </div>
                )}
        </Field>

    }
}

export default CreateField
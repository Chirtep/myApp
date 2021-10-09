import React from "react";
import styles from './FormControls.module.css'

export const FormControl = (props) => {

    const hasError = props.meta.touched && props.meta.error;

    return (
        <div className={styles.formControl + ' ' + (hasError && styles.error)}>
            {
                (props.type === 'checkbox' ? <input type='checkbox'/>
                    : props.type === 'password' ?
                        <input type='password' {...props.input} placeholder={props.placeholder}/>
                        : <props.type {...props.input} placeholder={props.placeholder}/>)
            }
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
};

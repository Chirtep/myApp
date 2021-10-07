import React from "react";
import styles from './FormControls.module.css'

export const FormControl = (props) => {
    const hasError = props.meta.touched && props.meta.error;
    return (
        <div className={styles.formControl + ' ' + (hasError && styles.error)}>
            {
                (props.type !== 'checkbox' && <props.type {...props.input} placeholder={props.placeholder}/>)
                || <input type="checkbox"/>
            }
            {hasError && <span>{props.meta.error}</span>}
        </div>
    );
};

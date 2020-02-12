import React from 'react';
import { Field } from 'formik';
import ErrorMessage from '../ErrorForm/ErrorFormMessage';


const FormInput = (props: Record<string, any>) => (
    <div className="form-group">
        <label htmlFor={props.uniqueId}>{props.labelText}</label>
        <Field id={props.uniqueId} type={props.type} className={props.className} name={props.name} required />
        <ErrorMessage isValid={props.isValid} message={props.errorMessage}/>
    </div>
);

export default FormInput;
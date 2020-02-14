import React from 'react';

const ErrorMessage = (props: Record<string, any>) => (props.isValid ? null : <small className="error-color">{props.message}</small>);

export default ErrorMessage;

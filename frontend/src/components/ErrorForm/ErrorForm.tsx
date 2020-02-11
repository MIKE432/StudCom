import React from 'react'

const ErrorMessage = (props) => {
    return props.isValid ? <small>{props.message}</small> : null
}

export default ErrorMessage;
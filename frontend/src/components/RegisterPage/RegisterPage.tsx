import React from 'react'
import RegisterForm from './RegisterForm'


class RegisterPage extends React.Component {

    onSubmit = (formikValues: Record<string, any>) => {

    }

    render() {
        return (
           <div className="register-form-container">
               <RegisterForm />
           </div>
        )
    }
}

export default RegisterPage
import React from 'react';
import RegisterForm from './RegisterForm';

type PropsType = Record<string, any>;

class RegisterPage extends React.Component<PropsType, {}> {

  render() {
    return (
      <div className="register-form-container">
        <h1>Zarejestruj się</h1>
        <RegisterForm />
      </div>
    );
  }
}

export default RegisterPage;

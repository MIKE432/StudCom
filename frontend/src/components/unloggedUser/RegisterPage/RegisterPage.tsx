import React from 'react';
import RegisterForm from './RegisterForm';
import { ChangeUserMethods } from '../../../types/generalTypes';

type PropsType = Record<string, any> & ChangeUserMethods;

class RegisterPage extends React.Component<PropsType, {}> {

  render() {
    return (
      <div className="register-form-container">
        <h1>Zarejestruj się</h1>
        <RegisterForm loginUser={this.props.loginUser} />
      </div>
    );
  }
}

export default RegisterPage;

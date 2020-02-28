import React from 'react';
import LoginForm from './LoginForm';
import { ChangeUserMethods } from '../../../types/generalTypes';

type PropsType = Record<string, any> & ChangeUserMethods;
class LandingPage extends React.Component<PropsType, {}> {

  render() {
    return (
      <div className="login-form-container">
        <LoginForm />
      </div>

    );
  }
}

export default LandingPage;

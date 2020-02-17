import React from 'react';
import { Formik, Form } from 'formik';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import * as yup from 'yup';
import FormInput from '../../core/Input/FormInput'
import { ChangeUserMethods } from '../../../types/generalTypes';
import { loginUser } from '../../../rest/requests/User'
import { mapUserToLoginModel } from '../../../services/userService';
import { LoginUser, User } from '../../../types/userTypes';

const loginSchema = () => yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

type StateType = { isAfterSubmit: boolean; isError: boolean };

type PathParamsType = {
  param1: string;
}

type PropsType = RouteComponentProps<PathParamsType> & Record<string, any> & ChangeUserMethods

class LoginForm extends React.Component<PropsType, StateType> {
  _isMounted = false;

  constructor(props: PropsType) {
    super(props);

    this.state = {
      isAfterSubmit: false, 
      isError: false
    }
  }

  onSubmit = (formikValues: LoginUser) => {
    this._isMounted = true
    loginUser(mapUserToLoginModel(formikValues)).then(res => {
      if(res.data) {

        const user: User = {
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,          
        }

        this.props.loginUser(user)
        this.props.history.push('/');
        
      } else if(res.status === 401) {
        this.setState({ isError: true })
      }
      
    })
  }

  render() {
    return (
      <Formik
        onSubmit={this.onSubmit}
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={loginSchema}
        render={(formikBag) => (
          <Form className="login-form">
            <FormInput
              labelText="Email"
              uniqueId="login-form-email"
              type="text"
              className={`form-control ${this.state.isError ? 'is-invalid'
                : (this.state.isAfterSubmit ? 'is-valid' : '')}`}
              error={this.state.isError}
              isValid={!(formikBag.errors.email && formikBag.touched.email)}
              touched={formikBag.touched.email}
              name="email"
              errorMessage=""
            />
            <FormInput
              labelText="Hasło"
              uniqueId="login-form-password"
              type="password"
              className={`form-control ${this.state.isError ? 'is-invalid'
                : (this.state.isAfterSubmit ? 'is-valid' : '')}`}
              error={this.state.isError}
              isValid={!(formikBag.errors.password && formikBag.touched.password)}
              touched={formikBag.touched.password}
              name="password"
              errorMessage="Nieprawidłowe hasło lub email"
            />
            <button type="submit" className="btn btn-success">Zaloguj się</button>
          </Form>
        )}
      />
    );
  }
}

export default withRouter(LoginForm);

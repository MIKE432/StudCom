import React from 'react';
import { Formik, Form } from 'formik';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import * as yup from 'yup';
import FormInput from '../../core/Input/FormInput'
import { mapUserToLoginModel } from '../../../services/userService';
import { LoginUser } from '../../../types/userTypes';
import { loginUser } from '../../../state/actions/userActions'
import { connect } from 'react-redux';
import { select } from '../../../state/actions/generalAction';

const loginSchema = () => yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

type StateType = { isAfterSubmit: boolean; isError: boolean };

type PathParamsType = {
  param1: string;
}

const mapDispatchToProps = (dispatch: any) => ({
  loginUser: (user: LoginUser) => dispatch(loginUser(user))
})

const mapStateToProps = (state: any) => ({
  registerUserResponse: select(state, 'api').lastResponses && select(state, 'api').lastResponses.LOGIN_USER
})

type PropsType = RouteComponentProps<PathParamsType> & Record<string, any>

class LoginForm extends React.Component<PropsType, StateType> {

  constructor(props: PropsType) {
    super(props);

    this.state = {
      isAfterSubmit: false, 
      isError: false
    }
  }

  onSubmit = (user: LoginUser) => {
    this.props.loginUser(mapUserToLoginModel(user))
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
      >{(formikBag) => (
        <Form className="login-form">
          <FormInput
            labelText="Email"
            uniqueId="login-form-email"
            type="text"
            className={`form-control ${(this.state.isError || (this.props.registerUserResponse && this.props.registerUserResponse.status === 401)) ? 'is-invalid'
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
            className={`form-control ${(this.state.isError || (this.props.registerUserResponse && this.props.registerUserResponse.status === 401)) ? 'is-invalid'
              : (this.state.isAfterSubmit ? 'is-valid' : '')}`}
            error={this.state.isError}
            isValid={!((formikBag.errors.password && formikBag.touched.password) || (this.props.registerUserResponse && this.props.registerUserResponse.status === 401))}
            touched={formikBag.touched.password}
            name="password"
            errorMessage="Nieprawidłowe hasło lub email"
          />
          <button type="submit" className="btn btn-success">Zaloguj się</button>
        </Form>
      )}</Formik>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));

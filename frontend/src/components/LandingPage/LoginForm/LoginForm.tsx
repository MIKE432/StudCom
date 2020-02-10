import React from 'react';
import { Formik, Form, Field } from 'formik';


class LoginForm extends React.Component {

  onSubmit = (formikValues: Record<string, any>) => {
    console.log(formikValues)
  }

  render() {
    return (
      <Formik
        onSubmit={this.onSubmit}
        initialValues={{
          email: '',
          password: ''
        }}
        render={() => (
              <Form className="login-form">
                  <div className="form-group">
                        <label htmlFor='login-form-email'>Email</label>
                        <Field id="login-form-email" type="email" className="form-control" name="email" />
                  </div>
                  <div className="form-group">
                        <label htmlFor='login-form-password'>Hasło</label>
                        <Field id="login-form-password" type="password" className="form-control" name="password" />
                  </div>
                  <button type="submit" className="btn btn-success">Zaloguj się</button>
              </Form>
        )}
      />
    );
  }
}

export default LoginForm
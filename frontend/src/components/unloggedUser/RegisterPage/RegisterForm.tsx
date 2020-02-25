import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import FormInput from '../../core/Input/FormInput';
import { registerUser } from '../../../state/actions/userActions';
import { mapUserToRequestModel } from '../../../services/userService';
import { RegisterUser } from '../../../types/userTypes';
import { ChangeUserMethods } from '../../../types/generalTypes';
import { connect } from 'react-redux';

const registerSchema = () => yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required('min 6 znaków'),
  password1: yup.string().min(6).required('min 6 znaków')
});

type StateType = { isAfterSubmit: boolean };

type PathParamsType = {
  param1: string;
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & Record<string, any> & ChangeUserMethods;

const mapDispatchToProps = (dispatch: any) => ({
  registerUser: (user: RegisterUser) => dispatch(registerUser(user))
})

class RegisterForm extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = {
      isAfterSubmit: false
    };
  }

  onSubmit = (formikValues: RegisterUser) => {
    this.setState({ isAfterSubmit: true });
    this.props.registerUser(mapUserToRequestModel(formikValues));
  }

  render() {
    return (
      <Formik
        onSubmit={this.onSubmit}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          password1: ''
        }}
        validationSchema={registerSchema}
      >{(formikBag) => (
        <Form className="register-form needs-validation" noValidate>
          <FormInput
            labelText="Imie"
            uniqueId="register-form-firstName"
            type="text"
            className={`form-control ${formikBag.errors.firstName && formikBag.touched.firstName ? 'is-invalid'
              : (this.state.isAfterSubmit ? 'is-valid' : '')}`}
            error={formikBag.errors.firstName}
            isValid={!(formikBag.errors.firstName && formikBag.touched.firstName)}
            touched={formikBag.touched.firstName}
            name="firstName"
            errorMessage="Podaj imię"
          />
          <FormInput
            labelText="Nazwisko"
            uniqueId="register-form-lastName"
            type="text"
            className={`form-control ${formikBag.errors.lastName && formikBag.touched.lastName ? 'is-invalid'
              : (this.state.isAfterSubmit ? 'is-valid' : '')}`}
            error={formikBag.errors.lastName}
            isValid={!(formikBag.errors.lastName && formikBag.touched.lastName)}
            touched={formikBag.touched.lastName}
            name="lastName"
            errorMessage="Podaj nazwisko"
          />
          <FormInput
            labelText="Email"
            uniqueId="register-form-email"
            type="text"
            className={`form-control ${formikBag.errors.email && formikBag.touched.email ? 'is-invalid'
              : (this.state.isAfterSubmit ? 'is-valid' : '')}`}
            error={formikBag.errors.email}
            isValid={!(formikBag.errors.email && formikBag.touched.email)}
            touched={formikBag.touched.email}
            name="email"
            errorMessage="Podaj email"
          />
          <FormInput
            labelText="Hasło"
            uniqueId="register-form-password"
            type="password"
            className={`form-control ${formikBag.errors.password && formikBag.touched.password ? 'is-invalid'
              : (this.state.isAfterSubmit ? 'is-valid' : '')}`}
            error={formikBag.errors.password}
            isValid={!(formikBag.errors.password && formikBag.touched.password)}
            touched={formikBag.touched.password}
            name="password"
            errorMessage="Podaj hasło"
          />
          <FormInput
            labelText="Powtórz hasło"
            uniqueId="register-form-password1"
            type="password"
            className={`form-control ${(formikBag.touched.password1 && ((formikBag.errors.password1)
                                                  || (formikBag.values.password !== formikBag.values.password1))) ? 'is-invalid'
              : (this.state.isAfterSubmit ? 'is-valid' : '')}`}
            isValid={!(formikBag.touched.password1 && ((formikBag.errors.password1) || (formikBag.values.password !== formikBag.values.password1)))}
            name="password1"
            errorMessage={formikBag.values.password1 === '' ? 'Podaj hasło' : 'Hasło różni się od pierwszego'}
          />
          <button type="submit" disabled={!formikBag.isValid} className="btn btn-success">Zaloguj się</button>
        </Form>
      )}</Formik>
    );
  }
}

export default connect(null, mapDispatchToProps)(withRouter(RegisterForm));

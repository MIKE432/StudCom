import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const registerSchema = () => yup.object({
    firstName: yup.string(),
    lastName: yup.string(),
    email: yup.string().email(),
    password: yup.string().min(6).required('min 6 znaków'),
    password1: yup.string().min(6).required('min 6 znaków')
});

type RegisterUser = yup.InferType<typeof registerSchema>;

class RegisterForm extends React.Component {

    onSubmit = (formikValues: Record<string, any>) => {
        console.log(formikValues)
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
                    password2: ''
                }}
                validationSchema={registerSchema}
                render={() => (
                <Form className="register-form needs-validation" noValidate>
                    <div className="form-group">
                        <label htmlFor="register-form-firstName">Imię</label>
                        <Field id="register-form-firstName" type="text" className="form-control" name="firstName" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="register-form-lastName">Nazwisko</label>
                        <Field id="register-form-lastName" type="text" className="form-control" name="lastName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register-form-email">Email</label>
                        <Field id="register-form-email" type="email" className="form-control" name="email" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="register-form-password">Hasło</label>
                        <Field id="register-form-password" type="password" className="form-control" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="register-form-password1">Powtórz hasło</label>
                        <Field id="register-form-password1" type="password" className="form-control" name="password1" />
                    </div>
                    <button type="submit" className="btn btn-success">Zaloguj się</button>
                </Form>
                )}
            />
        )
    }
}

export default RegisterForm
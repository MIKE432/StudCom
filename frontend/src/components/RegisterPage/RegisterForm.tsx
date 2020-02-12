import React from 'react'
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import ErrorMessage from '../ErrorForm/ErrorFormMessage';
import FormInput from '../Input/FormInput'

const registerSchema = () => yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required('min 6 znaków'),
    password1: yup.string().min(6).required('min 6 znaków')
});

type MyProps = Record<string, any>;
type MyState = { isAfterSubmit: Boolean };

class RegisterForm extends React.Component<MyProps, MyState> {
    constructor(props: Record<string, any>) {
        super(props)

        this.state = {
            isAfterSubmit: false
        }
    }

    onSubmit = (formikValues: Record<string, any>) => {
        console.log(formikValues)
        this.setState({isAfterSubmit: true})
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
                render={(formikBag) => (
                <Form className="register-form needs-validation" noValidate>
                    <FormInput 
                        labelText="Imie" 
                        uniqueId="register-form-firstName" 
                        type="text" 
                        error={formikBag.errors.firstName} 
                        touched={formikBag.touched.firstName} 
                        name="firstName" 
                        errorMessage="Podaj imię"
                    />
                    <FormInput 
                        labelText="Nazwisko" 
                        uniqueId="register-form-lastName" 
                        type="text" 
                        error={formikBag.errors.lastName} 
                        touched={formikBag.touched.lastName} 
                        name="lastName" 
                        errorMessage="Podaj nazwisko"
                    />
                    <FormInput 
                        labelText="Email" 
                        uniqueId="register-form-email" 
                        type="text" 
                        error={formikBag.errors.email} 
                        touched={formikBag.touched.email} 
                        name="email" 
                        errorMessage="Podaj email"
                    />
                    <FormInput 
                        labelText="Hasło" 
                        uniqueId="register-form-password" 
                        type="password" 
                        error={formikBag.errors.password} 
                        touched={formikBag.touched.password} 
                        name="password" 
                        errorMessage="Podaj hasło"
                    />
                    <FormInput 
                        labelText="Powtórz hasło" 
                        uniqueId="register-form-password1" 
                        type="password" 
                        error={formikBag.errors.password1} 
                        touched={formikBag.touched.password1} 
                        name="password1" 
                        errorMessage="Hasło różni się od pierwszego"
                    />
                    <button type="submit" className="btn btn-success">Zaloguj się</button>
                </Form>
                )}
            />
        )
    }
}

export default RegisterForm
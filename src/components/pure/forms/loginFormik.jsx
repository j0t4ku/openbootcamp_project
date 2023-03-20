import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid Email Format')
            .required('Email is required'),
        password: Yup.string().required('Password is requireed')
    }
)


const LoginFormik = () => {
    const initialCredentials = {
        email: '',
        password: ''
    }
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // Initial Values
                initialValues={initialCredentials}
                //Yup Validation
                validationSchema={loginSchema}
                //Onsubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    //Save values in the localStorage
                    localStorage.setItem('credentials', values)
                }}
            >
                {/* We obtain props from formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => {
                    return (
                        < Form >
                            <label htmlFor="">Email</label>
                            {/* Email Errors */}
                            {
                                errors.email && touched.email && (
                                    <div className='errors'>
                                        <p>{errors.email}</p>
                                    </div>
                                )
                            }
                            <Field id="email" name="email" ></Field>
                            <label htmlFor="">Password</label>
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && (
                                        <ErrorMessage name="password" component='div'>
                                        </ErrorMessage>
                                )
                            }
                            <Field type="password" id="password" name="password"></Field>
                            <button type="submit">Login</button>
                            {
                                isSubmitting ? (
                                        <ErrorMessage name="password" component='div'>
                                        </ErrorMessage>
                                ) : null
                            }
                        </Form>
                    )
                }}


            </Formik>
        </div >
    );
}

export default LoginFormik;

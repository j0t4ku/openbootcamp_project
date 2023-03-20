import React from 'react';
import { User } from '../../../models/user.class'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    const submit = (values) => {
        alert.log('Register User')

    }
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username must too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid Email Format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: USer/Admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .oneOf([Yup.ref('password')], 'Password must match!')
                .required('You must confirm the password')

        }
    )

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                //Yup Validation
                validationSchema={registerSchema}
                // Submit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {
                    ({ values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur }) => {
                        return (
                            <Form>
                                <label htmlFor="username">Username</label>
                                {/* Email Errors */}
                                {
                                    errors.username && touched.username && (
                                        <div className='errors'>
                                            <p>{errors.username}</p>
                                        </div>
                                    )
                                }
                                <Field id="username" name="username" ></Field>

                                <label htmlFor="email">Email</label>
                                {/* Email Errors */}
                                {
                                    errors.email && touched.email && (
                                        <div className='errors'>
                                            <p>{errors.email}</p>
                                        </div>
                                    )
                                }
                                <Field id="email" name="email" ></Field>

                                <label htmlFor="password">Password</label>
                                {/* Password Errors */}
                                {
                                    errors.password && touched.password && (
                                        <ErrorMessage name="password" component='div'>
                                        </ErrorMessage>
                                    )
                                }
                                <Field type="password" id="password" name="password"></Field>

                                <label htmlFor="confirm">Confirm</label>
                                {/* Confirm Errors */}
                                {
                                    errors.confirm && touched.confirm && (
                                        <ErrorMessage name="confirm" component='div'>
                                        </ErrorMessage>
                                    )
                                }
                                <Field type="password" id="confirm" name="confirm"></Field>

                                <button type="submit">Login</button>
                                {
                                    isSubmitting ? (<p>Sending register credentials</p>) : null
                                }
                            </Form>


                        )
                    }
                }
            </Formik>
        </div>
    );
}

export default RegisterFormik;

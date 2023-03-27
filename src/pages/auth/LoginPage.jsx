import { Link } from 'react-router-dom'
import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import RegisterPage from './RegisterPage';

const LoginPage = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik></LoginFormik>
            <Link to='/register'>Register</Link>
        </div>
    );
}

export default LoginPage;

import React from 'react';

import LoginIn from '../../components/login-in/login-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './login-in-and-login-up.style.scss';

const LoginInAndOut = () => {
    return(
        <div className = 'sign-in-and-sign-up'>
            <LoginIn />
            <SignUp />
        </div>
    )
}

export default LoginInAndOut;
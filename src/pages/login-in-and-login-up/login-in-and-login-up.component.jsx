import React from 'react';

import LoginIn from '../../components/login-in/login-in.component';

import './login-in-and-login-up.style.scss';

const LoginInAndOut = () => {
    return(
        <div>
            <LoginIn />
            <div>logout</div>
        </div>
    )
}

export default LoginInAndOut;
import React from 'react';

import './login-in.style.scss';

import FormInput from '../formItem/formItem.component';
import CustomButton from '../costom-button/costom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class LoginIn extends React.Component {
    constructor(){
        super();

        this.state = {
            email:'',
            password:'',
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange =(event)=>{
        const {name, value} =event.target;
        console.log(name);
        this.setState({[name]:value})
    }

    handleSubmit = (event) => {
        event.preventDefault();



        
    }

    render(){
        return(
            <div className='sign-in'>

                <h2 className='title'>already have account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name='email' 
                        label='email'
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <FormInput 
                        type="password" 
                        name='password' 
                        label='password'
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">login in</CustomButton>
                        <CustomButton onClick ={signInWithGoogle} googleSignIn>sign in with google</CustomButton>
                    </div>
           
                </form>
                
            </div>

        )
    }
}

export default LoginIn;
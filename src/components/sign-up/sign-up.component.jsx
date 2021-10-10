import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../formItem/formItem.component';
import CustomButton from '../costom-button/costom-button.component';

import {auth, storeUserToFirestore} from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange =(event)=>{
        const {name, value} =event.target;
       
        this.setState({[name]:value})
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('password dont match');
            return;
        }

        try{
            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            await storeUserToFirestore(user,{displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }catch(e){
            console.error(e);
        }
        
    }

    render(){
        return(
            <div className='sign-up'>

                <h2 className='title'>create a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text" 
                        name='displayName' 
                        label='displayName'
                        value={this.state.displayName} 
                        handleChange={this.handleChange} 
                        required
                    />
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
                    <FormInput 
                        type="password" 
                        name='confirmPassword' 
                        label='confirm password'
                        value={this.state.confirmPassword} 
                        handleChange={this.handleChange} 
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">sign up</CustomButton>
                        
                    </div>
           
                </form>
                
            </div>
        )
    }
}

export default SignUp;
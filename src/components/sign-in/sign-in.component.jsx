import React from 'react'

import './sign-in.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (event) => {
        //we want to take full control of submit event, hence preventDefault().
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name] : value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>
                <form onSubmit= {this.handleSubmit} >
                    <FormInput
                        name='email'
                        type="email"
                        value={this.state.email}
                        required
                        handleChange = {this.handleChange}
                        label='Email'
                    />
                    <FormInput
                        name='password'
                        type="password"
                        value={this.state.password}
                        required
                        handleChange = {this.handleChange}
                        label='Password'
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
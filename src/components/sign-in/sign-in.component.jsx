import React from 'react'

import './sign-in.styles.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

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
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
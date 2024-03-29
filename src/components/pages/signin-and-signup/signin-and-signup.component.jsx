import React from 'react'

import './signin-and-signup.styles.scss'

import SignIn from "../../sign-in/sign-in.component";
import SignUp from "../../sign-up/sign-up.component";

const SignInAndSignUp = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;
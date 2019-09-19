import React from 'react'

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
                    <input
                        name='email'
                        type="email"
                        value={this.state.email}
                        required
                        onChange = {this.handleChange}
                    />
                    <label>Email</label>

                    <input
                        name='password'
                        type="password"
                        value={this.state.password}
                        required
                        onChange = {this.handleChange}
                    />
                    <label>Password</label>

                    <input type="submit" value='Submit'/>
                </form>
            </div>
        )
    }
}

export default SignIn;
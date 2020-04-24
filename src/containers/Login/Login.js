import React, { Component } from 'react';
import './Login.scss';
import {Form, Button} from 'react-bootstrap'
import userApi from '../../api/userApi';

import {userAuth} from '../../auth/userAuth'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.handleChageMail = this.handleChageMail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.login = this.login.bind(this);
    }

    handleChageMail(e){
        this.setState({email: e.target.value});
    }

    handleChangePassword(e){
        this.setState({password: e.target.value})
    }

    login(e){
        e.preventDefault();
        const {email, password} = this.state;
        if(email && password) {
            userApi.login({
                email: email,
                password: password
            }).then(res => {
                if(res.data.cookie){ // login
                    localStorage.setItem('access_tooken', res.data.cookie);
                    const {history, location} = this.props;
                    let { from } = location.state || { from: { pathname: "/" } };
                    userAuth.authenticate(() => history.replace(from));
                    
                } else { // not login
                    // Account not exist
                    // Wrong password
                }
            })
            

        }
        var errors = {};
        if(!email) errors.email = 'Email is required!';
        if(!password) errors.password = 'Password is required!';
        this.setState({errors: errors});
    }

    test = () => {
        
    }

    render() {
        return (
            <div className="login d-flex flex-column align-items-center justify-content-center">
                <h4>Login</h4>
                <Form className="login__form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleChageMail} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handleChangePassword} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save login accout for next time" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.login}>
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Login;
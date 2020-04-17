import React, { Component } from 'react';
import './Login.scss';
import {Form, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
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
        console.log(this.state);
        console.log(useHistory);
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
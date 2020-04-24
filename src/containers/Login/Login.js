import React, { Component } from 'react';
import './Login.scss';
import {Form, Button} from 'react-bootstrap'
import userApi from '../../api/userApi';
import { setUserToken } from '../../auth/userAuth';


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
            console.log(JSON.stringify({
                email: email,
                password: password
            }))
            userApi.login(JSON.stringify({
                email: email,
                password: password
            })).then(res => {
                if(res.data.cookies){ // login success
                    setUserToken(res.data.cookies);
                    const {location, history} = this.props;
                    var from = {pathname: '/'};
                    if(location.state){
                        from = location.state.from;
                    }
                    history.replace(from);
                } else { // login fail
                    const errors = {message: res.data.message};
                    this.setState({errors: errors});
                }
            })

        }
        var errors = {};
        if(!email) errors.email = 'Email is required!';
        if(!password) errors.password = 'Password is required!';
        this.setState({errors: errors});
    }

    testLogin = (e) => {
        e.preventDefault();
        setUserToken('abc')
        const {location, history} = this.props;
        const from = location.state.from || {pathname: '/'};
        history.replace(from);
    }


    render() {
        const {errors, email, password} = this.state;
        return (
            <div className="login d-flex flex-column align-items-center justify-content-center">
                <h4>Login</h4>
                <Form className="login__form">
                    {
                        errors.message && <p className="alert">Login fail: {errors.message} </p>
                    }
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        {
                            errors.email && <p className="alert">* {errors.email} </p>
                        }
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={this.handleChageMail} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        {
                            errors.password && <p className="alert">* {errors.email} </p>
                        }
                        <Form.Control type="password" placeholder="Password" value={password} onChange={this.handleChangePassword} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save login account for next time" />
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
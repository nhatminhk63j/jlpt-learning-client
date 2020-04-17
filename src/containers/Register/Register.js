import React, { Component } from 'react';
import './Register.scss';
import {Form, Button} from 'react-bootstrap'

class Register extends Component {
    render() {
        return (
            <div className="register d-flex flex-column align-items-center justify-content-center">
                <h4>Register</h4>
                <Form className="login__form">
                    <Form.Group>
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Re-password</Form.Label>
                        <Form.Control type="password" placeholder="Re-password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Register;
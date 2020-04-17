import React, { Component } from 'react';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faChartLine, faAngleDoubleRight, faSignInAlt, faKey} from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './Menu.scss';
import Home from '../Home/Home';
import Chart from '../Chart/Chart';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Exams from '../Exams/Exams';

class Menu extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="light" expand="lg" className="menupage">
                    <Container>
                        <Navbar.Brand href="#"><img height="50px" src="https://dethijlpt.com/static/media/dethijlpt-logo.png" alt=""/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <NavLink exact={true} to="/" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                            <NavLink to="/chart" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faChartLine} /> Chart</NavLink>
                            </Nav>
                            <div>
                                <NavLink to="/practise" activeClassName="active-link" className="menupage__link">
                                    <Button variant="danger" className="menupage__link__button"><FontAwesomeIcon icon={faAngleDoubleRight} /> Practise</Button>
                                </NavLink>
                                <NavLink to="/login" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faSignInAlt} /> Login</NavLink>
                                <NavLink to="/register" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faKey} /> Register</NavLink>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Route exact path="/" component={Home} />
                <Route exact path="/chart" component={Chart} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/exams/:id" component={Exams} />
            </BrowserRouter>
        );
    }
}

export default Menu;
import React, { Component } from 'react';
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faChartLine, faAngleDoubleRight, faSignInAlt, faKey} from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom';
import './Menu.scss';
import Home from '../Home/Home';
import Chart from '../Chart/Chart';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Exams from '../Exams/Exams';
import Practice from '../Practise/Practice';
import PracticeTest from '../Practise/PracticeTest/PracticeTest';
import EntryPractice from '../Practise/EntryPractice/EntryPractice';

import {isLogin} from '../../auth/userAuth';


class Menu extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="light" expand="lg" className="menupage">
                    <Container>
                        <Navbar.Brand href="#"><img height="50px" src="/assets/dethijlpt-logo.png" alt=""/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <NavLink exact={true} to="/" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                            <NavLink to="/chart" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faChartLine} /> Chart</NavLink>
                            </Nav>
                            <div>
                                <NavLink to="/practice" activeClassName="active-link" className="menupage__link">
                                    <Button variant="danger" className="menupage__link__button"><FontAwesomeIcon icon={faAngleDoubleRight} /> Practise</Button>
                                </NavLink>
                                <NavLink to="/login" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faSignInAlt} /> Login</NavLink>
                                <NavLink to="/register" activeClassName="active-link" className="menupage__link"><FontAwesomeIcon icon={faKey} /> Register</NavLink>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Route exact path="/" component={Home} />

                <Route exact path="/chart" >
                    <Chart />
                </Route>

                <Route exact path="/practice" component={Practice} />

                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/exams/:id" component={Exams} />

                <Route exact path="/practice/:level/:category" component={PracticeTest} />

                <PrivateRoute exact path="/practice/:level/:category/:id">
                      <EntryPractice />
                </PrivateRoute>
            </BrowserRouter>
        );
    }
}

function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLogin() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default Menu;
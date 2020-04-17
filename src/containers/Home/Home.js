import React, { Component } from 'react';
import './Home.scss';
import Select from 'react-select';
import {Button, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilter} from '@fortawesome/free-solid-svg-icons';
import CardTest from '../../components/CardTest/CardTest';

const options = [
    { value: '1', label: 'N1' },
    { value: '2', label: 'N2' },
    { value: '3', label: 'N3' },
    { value: '4', label: 'N4' },
    { value: '5', label: 'N5' }
  ];

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption: null,
        };
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <div className="homepage">
                <div className="homepage__header">
                    <p className="homepage__header__title">
                        Warehouse of Japanese exam questions for free
                    </p>
                    <p>Now there is an app for phones</p>
                    <img height="70px" src="https://dethijlpt.com/static/media/app_store_icon.png" alt=""/>
                    <img height="70px" src="https://dethijlpt.com/static/media/google_play_store_icon.png" alt=""/>
                    <br/>

                    <div className="homepage_header_sort">
                        <Select
                            className="homepage__header__select"
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            placeholder="Level"
                        />
                        <Button variant="primary" className="homepage__header__button"><FontAwesomeIcon icon={faFilter} /> Sort</Button>
                    </div>
                </div>
                <div className="homepage__content">
                    <div className="homepage__content__title">
                        <div className="container">
                        <h2>Standardized test</h2>
                        <p>Standard exam questions are updated continuously</p>
                        </div>
                    </div>
                    <div className="container">
                        <Row>
                            <Col md={4}>
                                <CardTest id="1" />
                            </Col>
                            <Col md={4}>
                                <CardTest id="2" />
                            </Col>
                            <Col md={4}>
                                <CardTest id="3" />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import './PracticeTest.scss'
import Axios from 'axios';

class PracticeTest extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            path: window.location.pathname
        }
    }

    componentDidMount(){
        Axios.get('https://jplt-server.herokuapp.com' + this.state.path).then((res) => {
            this.setState({data: res.data});
        })
    }

    render() {
        const {data, path} = this.state;
        const title = path.split('/').join(" ");
        return (
            <div className="practice-test">
                <div className="container">
                    <h2>{title}</h2>

                    <div className="row practice-list">
                        {data.map((item, index) => (
                            <div className="practice-item col-md-12">
                                <div className="d-flex justify-content-around">
                                <h5>Exam number {` ${++index}`}</h5>
                                    <button className="btn btn-primary">
                                        <a href={path + '/' + item._id}>Practice now</a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        );
    }
}

export default PracticeTest;
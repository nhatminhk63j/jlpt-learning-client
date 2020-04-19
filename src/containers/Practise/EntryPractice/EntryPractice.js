import React, { Component } from 'react';
import './EntryPractice.scss'
import Axios from 'axios';
import QuestionRadio from '../../../components/QuestionRadio/QuestionRadio';

class EntryPractice extends Component {
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
        return (
            <div className="entry-practice">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h2 className="text-center">Practice Exam</h2>
                            <p className="title-entry-practice"> 質問を注意深く読み、最も正確な答えを選択してください。</p>
                            {this.state.data.map((item, index) => (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.radioOnchange} />
                            ))}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EntryPractice;
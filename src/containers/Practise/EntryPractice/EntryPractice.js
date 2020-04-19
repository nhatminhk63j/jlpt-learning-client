import React, { Component } from 'react';
import './EntryPractice.scss'
import Axios from 'axios';
import QuestionRadio from '../../../components/QuestionRadio/QuestionRadio';

class EntryPractice extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [],
            path: window.location.pathname,
            result: {},
            displayResult: false,
            displayCorrect: false,
            point: 0
        }

        this.radioOnchange = this.radioOnchange.bind(this);
    }

    radioOnchange(event){
        var result = {...this.state.result};
        result[event.target.name] = event.target.value;
        this.setState({result: result});
    }

    componentDidMount(){
        Axios.get('https://jplt-server.herokuapp.com' + this.state.path).then((res) => {
            this.setState({data: res.data});
        })
    }

    finishExam = (e) => {
        e.preventDefault();
        const {data, result} = this.state;
        let point = 0;
        for(let item of data) {
            if(result[item._id] === item.key) {
                let styleLabel = document.getElementById(item._id + '.' + result[item._id]).parentNode.style;
                styleLabel.backgroundColor = "#d4edda";
                styleLabel.color = "#155724";
                point++;
            }
            else if(result[item._id]){
                let styleLabel = document.getElementById(item._id + '.' + result[item._id]).parentNode.style;
                styleLabel.backgroundColor = "#f8d7da";
                styleLabel.color = "#721c24";
            }
        }
        this.setState({point: point, displayResult: true, displayCorrect: true});
    }

    displayResult = (e) => {
        e.preventDefault();
        this.setState({displayResult: false});
    }

    render() {
        let path = this.state.path;
        var arrPath = path.split('/');
        arrPath.splice(arrPath.length - 1, 1);
        path = arrPath.join('/');
        return (
            <div className="entry-practice">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="router">
                                <a href="#">N5</a><span> > </span>
                                <a href={'/' + arrPath[1]}>Practice</a> <span> > </span>
                                <a href={path}>Vocabulary</a>
                            </div>
                            <h2 className="text-center">Practice Exam</h2>
                            <div style={this.state.displayResult ? {display: 'block'} : {display: 'none'}}>
                                <h3 >Result: {` ${this.state.point}/10`} </h3>
                                <a href="" onClick={this.displayResult}>See result</a>
                            </div>
                            <div style={this.state.displayResult ? {display: 'none'} : {display: 'block'}}>
                                <p className="title-entry-practice"> 質問を注意深く読み、最も正確な答えを選択してください。</p>
                                <div 
                                    className="text-center" 
                                    style={this.state.data.length === 0 ? {display: 'block'} : {display: 'none'}}
                                >
                                    <img src="https://thumbs.gfycat.com/SimilarPlumpBarasingha-max-1mb.gif" alt=""/>
                                </div>
                                {this.state.data.map((item, index) => (
                                    <div>
                                        <QuestionRadio item={item} id={item._id} index={index} key={item._id} radioOnchange={this.radioOnchange} />
                                        <p 
                                            style={this.state.displayCorrect ? {display: 'block'} : {display: 'none'}} 
                                            className="correct"
                                        >
                                            Corect answer:  {item["answer" + item.key]} 
                                        </p>
                                    </div>
                                ))}
                                <button 
                                    className="btn btn-primary btn-block" 
                                    onClick={this.finishExam}
                                    style={this.state.displayCorrect ? {display: 'none'} : {display: 'block'}}
                                >
                                    Finish
                                </button>

                                <button 
                                    className="btn btn-primary"
                                    style={this.state.displayCorrect ? {display: 'block'} : {display: 'none'}}
                                >
                                    <a href={path}>Practice more...</a>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EntryPractice;
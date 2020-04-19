import React, { Component } from 'react';
import './Practice.scss'

class Practice extends Component {
    render() {
        return (
            <div className="practice">
                <h2 className="practice-title text-center">practice</h2>
                <div className="container">
                    <h3 className="n5-practice<h2>{title}</h2> practice-category">N5</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-practice text-center">
                                <h4>Vocabulary</h4>
                                <p>This practice section will help you get the most out of your vocabulary test. Suitable for Japanese certification exams such as natest, jlpt ...</p>
                                <div className="btn btn-danger btn-practice"><a href="/practice/n5/vocabulary">practice vocabulary now</a></div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card-practice text-center">
                                <h4>Kanji</h4>
                                <p>This practice section will help you get the most out of your kanji test. Suitable for Japanese certification exams such as natest, jlpt ...</p>
                                <div className="btn btn-danger btn-practice"><a href="/practice/n5/kanji">practice kanji now</a></div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card-practice text-center">
                                <h4>Grammar</h4>
                                <p>This practice section will help you get the most out of your grammar test. Suitable for Japanese certification exams such as natest, jlpt ...</p>
                                <div className="btn btn-danger btn-practice"><a href="/practice/n5/grammar">practice grammar now</a></div>
                            </div>
                        </div>
                    </div>

                    <h3 className="n4-practice practice-category">N4</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-practice text-center">
                                <h4>Vocabulary</h4>
                                <p>This practice section will help you get the most out of your vocabulary test. Suitable for Japanese certification exams such as natest, jlpt ...</p>
                                <div className="btn btn-danger btn-practice"><a href="/practice/n4/vocabulary">practice vocabulary now</a></div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="card-practice text-center">
                                <h4>Kanji</h4>
                                <p>This practice section will help you get the most out of your kanji test. Suitable for Japanese certification exams such as natest, jlpt ...</p>
                                <div className="btn btn-danger btn-practice"><a href="/practice/n4/kanji">practice kanji now</a></div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card-practice text-center">
                                <h4>Grammar</h4>
                                <p>This practice section will help you get the most out of your grammar test. Suitable for Japanese certification exams such as natest, jlpt ...</p>
                                <div className="btn btn-danger btn-practice"><a href="/practice/n4/grammar">practice grammar now</a></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Practice;
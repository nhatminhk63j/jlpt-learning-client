import React, { Component } from 'react';
import "./Exam.scss";
import QuestionRadio from '../../components/QuestionRadio/QuestionRadio';

import {part1, part2, part3, part4} from '../../DataTest/Kotoba';
import {part5, part6, part7, part8, part9, part10} from '../../DataTest/BunboAndDokkai';

function convertNumberHighlight(str){
    return str.replace(/%/g, '<span class="numberHighLight">').replace(/#/g, '</span>').replace(/\n/g, '<br><br>');
}

class Exams extends Component {
    constructor(props){
        super(props);
        this.state = {
            vocabularyDisplay: false,
            readDisplay: true,
            listenDisplay: false
        };

        this.radioOnchange = this.radioOnchange.bind(this);
        this.vocabularySubmit = this.vocabularySubmit.bind(this);
        this.readSubmit = this.readSubmit.bind(this);
    }

    radioOnchange(event){
        console.log(event.target.value);
    }

    vocabularySubmit(){
        this.setState({vocabularyDisplay: false, readDisplay: true});
        document.getElementById('test').scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    readSubmit(){
        this.setState({readDisplay: false});
    }

    render() {
        return (
            <div className="test" id="test">
                <div className="row" style={this.state.vocabularyDisplay ? {} : {display: 'none'}}>
                    <div className="col-md-12 text-center test__header">
                        <h2>N5</h2>
                        <h3>げんごちしき（もじ・ごい）</h3>
                        <p>（25ぷん）</p>
                    </div>

                    {/* Mondai 1 */}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題1: ＿＿＿の言葉の読み方として最もよいものを、1・2・3・4から一つ選びなさい。</h4>

                        {part1.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 2 */}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題2: ＿＿＿の言葉を漢字で書く時、最もよいものを、1・2・3・4から一つ 選びなさい。</h4>

                        {part2.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 3 */}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題3: （　　　）に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。</h4>

                        {part3.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 4 */}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題4: ＿＿＿の言葉に意味が最も近いものを、1・2・3・4から一つ選びなさい。</h4>

                        {part4.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.radioOnchange} />
                            )
                        })}

                        <div className="text-right m-5">
                            <div className="btn btn-primary" onClick={this.vocabularySubmit}>Finish</div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>

{/* ------------------------------------dokkai-------------------------------------------------------------------- */}

                <div className="row" style={this.state.readDisplay ? {display: 'flex'} : {display: 'none'}}>
                    <div className="col-md-12 text-center test__header">
                        <h2>N5</h2>
                        <h3>言語知識 （文法）・読解</h3>
                        <p>（50ぷん）</p>
                    </div>

                    {/* Mondai 1 part 5*/}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題1: 次の文の（　　　）に入れるのに最もよいものを、1・2・3・4から一つ選びなさい。</h4>

                        {part5.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 2 part 6*/}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題2: 次の文の　★　に入る最もよいものを、1・2・3・4から一つ選びなさい。</h4>

                        {part6.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>


                    {/* Mondai 3 part 7*/}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題3: 次の文章を読んで、後の問いに対する答えとして最もよいものを1・2・3・4から一つ選びなさい。</h4>
                        <p style={{lineHeight: 2}} dangerouslySetInnerHTML={{__html: convertNumberHighlight(part7.content)}}></p>
                        {part7.data.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 4 part8*/}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題4: 次の文章を読んで、後の問いに対する答えとして最もよいものを1・2・3・4から一つ選びなさい。</h4>

                        {part8.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.radioOnchange}>
                                    {item.content}
                                </QuestionRadio>
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 5 part 9*/}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題5: 次の文章を読んで、後の問いに対する答えとして最もよいものを1・2・3・4から一つ選びなさい。</h4>
                        <p dangerouslySetInnerHTML={{__html: convertNumberHighlight(part9.content)}}></p>
                        {part9.data.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.radioOnchange} />
                            )
                        })}
                    </div>
                    <div className="col-md-3"></div>

                    {/* Mondai 6 */}
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h4>問題6: 下のページを見て、下の問いに対する答えとして最もよいものを、1・2・3・4から1つ選びなさい。</h4>

                        {part10.map((item, index) => {
                            return (
                                <QuestionRadio item={item} index={index} key={index} radioOnchange={this.radioOnchange} />
                            )
                        })}

                        <div className="text-right m-5">
                            <div className="btn btn-primary" onClick={this.readSubmit}>Finish</div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

export default Exams;
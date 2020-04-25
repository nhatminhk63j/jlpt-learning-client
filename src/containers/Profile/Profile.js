import React, { Component } from 'react';
import './Profile.scss';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(sessionStorage.getItem("user")),
            data: dataFromBackend
        }
    }

    componentDidMount(){
        // call API to get data exam by this.state.user.id => this.setState({data: ...})
    }

    render() {
        return (
            <div className="profile">
                <div className="container">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 profile-container">
                        <div className="profile-process">
                            <h2>{this.state.user.name}' process: </h2>
                            <table className="table table-lg">
                                <tr>
                                    <th className="exam-name">Exam's name</th>
                                    <th>Level</th>
                                    <th>Type</th>
                                    <th>Resuilt</th>
                                    <th>Retest</th>
                                </tr>
                                {
                                    this.state.data.map(exam => (
                                        <tr>
                                            <td className="exam-name"> {exam.name} </td>
                                            <td> {exam.level} </td>
                                            <td> {exam.type} </td>
                                            <td> {exam.result} </td>
                                            <td> <a href={`/${exam.name.toLowerCase()}/${exam.level}/${exam.type}/${exam.id}`}>Retest</a> </td>
                                        </tr>
                                    ))
                                }
                            </table>

                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

const dataFromBackend = [
    {
        name: 'Practice',
        level: 'N5',
        type: 'grammar',
        id: '1',
        result: '8/10',
        date: '20-4-2020'
    },
    {
        name: 'Practice',
        level: 'N5',
        type: 'vocabulary',
        id: '10',
        result: '10/10',
        date: '21-4-2020'
    },
    {
        name: 'Practice',
        level: 'N5',
        type: 'grammar',
        id: '4',
        result: '6/10',
        date: '22-4-2020'
    },
    {
        name: 'Practice',
        level: 'N5',
        type: 'kanji',
        id: '15',
        result: '9/10',
        date: '22-4-2020'
    }
]

export default Profile;
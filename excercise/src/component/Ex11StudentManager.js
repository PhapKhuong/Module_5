import {Component} from "react";

class Ex11StudentManager extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                    name: 'Khuong Quoc Phap',
                    phone: '0905897891',
                    email: 'phapkhuong@gmail.com'
                },
                {
                    name: 'Khuong Tu Thanh',
                    phone: '0912818911',
                    email: 'thanhkhuong@gmail.com'
                },
                {
                    name: 'abc def',
                    phone: '4634618911',
                    email: 'thanhg@gmail.com'
                },
                {
                    name: 'grh dfa',
                    phone: '0955768911',
                    email: 'hdfgjyi@gmail.com'
                },
                {
                    name: 'fjk dkf',
                    phone: '4907650462',
                    email: 'ldkgsfdhs@gmail.com'
                }
            ],
            studentName: "",
            phone: "",
            email: ""
        }
    }

    setStudentName(name) {
        this.setState({
            studentName: name
        })
    }

    setPhone(phone) {
        this.setState({
            phone: phone
        })
    }

    setEmail(email) {
        this.setState({
            email: email
        })
    }

    addNew() {
        let name = this.state.studentName;
        let phone = this.state.phone;
        let email = this.state.email;

        let test = name && phone && email;
        if (!!test) {
            if (+phone) {
                this.setStudentList();
            } else {
                alert("Phone is a number!")
            }
        } else {
            alert("Let you enter full information!")
        }
    }

    setStudentList() {
        let student = {
            name: this.state.studentName,
            phone: this.state.phone,
            email: this.state.email
        }
        this.setState({
            studentList: [...this.state.studentList, student],
            studentName: "",
            phone: "",
            email: ""
        })
    }

    deleteStudent(index) {
        let tempArr = [...this.state.studentList];
        tempArr.splice(index, 1);
        this.setState({
            studentList: [...tempArr]
        })
    }

    updateStudent(index) {
        let student = this.state.studentList[index];
        let tempArr = [...this.state.studentList];
        tempArr.splice(index, 1);
        this.setState({
            studentList: [...tempArr],
            studentName: student.name,
            phone: student.phone,
            email: student.email
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Let you enter student's information</h2>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <label className="col-form-label">Name</label>
                            </td>
                            <td>
                                <input className="form-control" placeholder="Name" value={this.state.studentName}
                                       onChange={(event) => {
                                           this.setStudentName(event.target.value)
                                       }}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="col-form-label">Phone</label>
                            </td>
                            <td>
                                <input className="form-control" placeholder="Phone" value={this.state.phone}
                                       onChange={(event) => {
                                           this.setPhone(event.target.value)
                                       }}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="col-form-label">Email</label>
                            </td>
                            <td>
                                <input className="form-control" placeholder="Email" value={this.state.email}
                                       onChange={(event) => {
                                           this.setEmail(event.target.value)
                                       }}/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button className="btn btn-outline-success"
                                        onClick={() => {
                                            this.addNew()
                                        }}>Submit
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2>List of student</h2>
                    <table className={'table'}>
                        <thead>
                        <tr>
                            <th scope={'col'}>Name</th>
                            <th scope={'col'}>Phone</th>
                            <th scope={'col'}>Email</th>
                            <th scope={'col'}></th>
                            <th scope={'col'}></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.studentList.map((student, index) =>
                                (
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.email}</td>
                                        <td>
                                            <button className="btn btn-outline-success"
                                                    onClick={() => {
                                                        this.updateStudent(index)
                                                    }}>Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-success"
                                                    onClick={() => {
                                                        this.deleteStudent(index)
                                                    }}>Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Ex11StudentManager;
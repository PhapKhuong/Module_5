import {Component} from "react";

class Ex10ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workList: ["Hoc react", "Lam BPTC"],
            workName: ""
        }
    }

    addNewWork() {
        this.setState({
            workList: [...this.state.workList, this.state.workName],
            workName: ""
        })
    }

    setWorkName(name) {
        this.setState({
            workName: name
        })
    }


    render() {
        return (
            <>
                <label>
                    Nhap cong viec can lam
                </label>
                <input className={'form-control me-2'} value={this.state.workName}
                       onChange={(event) => {
                           this.setWorkName(event.target.value)
                       }}/>
                <button className={'btn btn-outline-success'} onClick={() => {
                    this.addNewWork()
                }}>Add new work
                </button>
                <h3>Danh sach cong viec can lam:</h3>
                <ul>
                    {this.state.workList.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
            </>
        )
    }
}

export default Ex10ToDoApp;
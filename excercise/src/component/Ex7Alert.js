import {Component} from "react";

class Ex7Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }

    setContent(content) {
        this.setState({
            content: content
        })
    }

    showPopup(content) {
        alert(content);
    }


    render() {
        return (
            <>
                <div className={'container'}>
                    <p>Nhap vao noi dung can thong bao</p>
                    <input className={'form-control me-2'} value={this.state.content} onChange={(event) =>
                        this.setContent(event.target.value)
                    }/>

                    <button className={'btn btn-outline-success'}
                            onClick={() => this.showPopup(this.state.content)}>Alert
                    </button>
                </div>
            </>
        )
    }
}

export default Ex7Alert;
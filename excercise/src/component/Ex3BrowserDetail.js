import {Component} from "react";

class Ex3BrowserDetail extends Component {
      render() {
        return (
            <>
                <h3>Thong tin trinh duyet</h3>
                <p>{navigator.userAgent}</p>
            </>
        )
    }
}

export default Ex3BrowserDetail;
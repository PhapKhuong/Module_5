import {Component} from "react";

class Ex2Fibonacci extends Component {
    constructor() {
        super();
        this.state = {
            numberValue: 0,
            fibonacciArr: []
        }
    }

    fibonacci(n) {
        if (n === 0) {
            return 0;
        } else if (n === 1 || n === 2) {
            return 1;
        } else {
            return this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
    }

    getFibonacciArr(n) {
        let fibonacciArr = [];
        for (let i = 0; i <= n; i++) {
            fibonacciArr = [...fibonacciArr, this.fibonacci(i)]
        }
        this.setState({
            fibonacciArr: fibonacciArr,
            // numberValue: 0
        });
    }

    findSum() {
        return this.state.fibonacciArr.reduce((prev, cur) => (prev += cur), 0);
    }

    setNumberValue(value) {
        this.setState({
            numberValue: value
        })
    }

    render() {
        return (
            <>
                <h3>Day so Fibonacci</h3>
                <p>Nhap vao mot so nguyen duong:</p>
                <input type={"number"} className={'form-control me-2'} value={this.state.numberValue}
                       onChange={(event) =>
                           this.setNumberValue(event.target.value)}/>

                <button className={'btn btn-outline-success'}
                        onClick={() => this.getFibonacciArr(this.state.numberValue)}>OK
                </button>

                <p>Day so Fibonacci la:</p>
                {
                    this.state.fibonacciArr.map((value, index) => {
                        return <span key={index}>{value + ", "}</span>
                    })
                }
                <p>Tong day so Fibonacci la:</p>
                <p>{this.findSum()}</p>
            </>
        )
    }
}

export default Ex2Fibonacci;
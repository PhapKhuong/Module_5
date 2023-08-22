import {Component} from "react";

class Ex8Calculator extends Component {
    constructor() {
        super();
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            result: 0
        }
    }

    add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    subtract(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }

    multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }

    divide(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }

    setResult(value) {
        this.setState({
            result: value
        })
    }

    render() {
        return (
            <>
                <input type={'number'} className={'form-control me-2'} value={this.state.firstNumber}
                       onChange={(event) => this.setState({firstNumber: event.target.value})}/>
                <input type={'number'} className={'form-control me-2'} value={this.state.secondNumber}
                       onChange={(event) => this.setState({secondNumber: event.target.value})}/>
                <button className={'btn btn-outline-success'} onClick={() =>
                    this.setResult(this.add(+this.state.firstNumber, +this.state.secondNumber))}>+
                </button>
                <button className={'btn btn-outline-success'} onClick={() =>
                    this.setResult(this.subtract(+this.state.firstNumber, +this.state.secondNumber))}>-
                </button>
                <button className={'btn btn-outline-success'} onClick={() =>
                    this.setResult(this.multiply(+this.state.firstNumber, +this.state.secondNumber))}>x
                </button>
                <button className={'btn btn-outline-success'} onClick={() =>
                    this.setResult(this.divide(+this.state.firstNumber, +this.state.secondNumber))}>-:-
                </button>

                <p>Ket qua: {this.state.result}</p>
            </>
        )
    }
}

export default Ex8Calculator;
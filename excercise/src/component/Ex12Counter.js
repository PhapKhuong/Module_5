import {useState} from "react";

export function Ex12Counter() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);

    const addOne = () => {
        setFirstNumber((prev) => prev + 1)
    }

    const addTwo = () => {
        setSecondNumber((prev) => prev + 1)
        setSecondNumber((prev) => prev + 1)
    }

    return (
        <>
            <span>Count: {firstNumber}</span>
            <button className="btn btn-outline-success" onClick={() => {
                addOne()
            }}>Add 1
            </button>

            <span>Count: {secondNumber}</span>
            <button className="btn btn-outline-success" onClick={() => {
                addTwo()
            }}>Add 2
            </button>
        </>
    )
}

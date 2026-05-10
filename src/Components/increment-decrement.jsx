import { useState } from "react";


export default function IncremenetDecrement() {
    const currentValue = 0;
    const [value, setValue] = useState(currentValue);


    function hanldeIncrement() {
        const increment = value + 1;
        setValue(increment);
        console.log(value);

    }

    function handleeDecrement() {
        if (value < 1) {
            alert("Current Value cant be Negative");
        } else {
            const decrement = value - 1;
            setValue(decrement);
        }
    }


    return (
        <>
            <div className="p-5 m-5 bg-dark text-white h-25 w-25 d-flex flex-column justify-content-center align-ietms-center">
                <div>
                    <span className="d-inline text-center">{value}</span>
                </div>
                <div>
                    <button onClick={hanldeIncrement} className="btn btn-primary">Increment</button>
                    <button onClick={handleeDecrement} className="btn btn-secondary ms-4">Decrement</button>
                </div>
            </div>
        </>
    )
}
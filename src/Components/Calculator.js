import { getValue } from "@testing-library/user-event/dist/utils";
import { evaluate, log } from "mathjs";
import { useState } from "react"


export default function Calculator(){

    
    
    const [data, setData] = useState("");

    function getValue(event){
             
        // const btnVal = event.target.value.toString();
        setData(data.concat(event.target.value));
    }

    function handleCalculation(){
        
        setData(evaluate(data).toString());
        console.log(evaluate(data).toString());
        
    }

    function handleCleearScreen(){
        setData("")
    }

    function handleBack(){
       const trimData = data.slice(0, -1);
       setData(trimData);
    }
    return(
        <>
            <div className="container">
                <input value={data} type="text" placeholder="0"/>



                <button onClick={getValue} value={"("}>(</button>
                <button onClick={getValue} value={")"}>)</button>
                <button onClick={getValue} value={"%"}>%</button>
                <button onClick={handleCleearScreen} >AC</button>

                <button onClick={getValue} value={"7"}>7</button>
                <button onClick={getValue} value={"8"}>8</button>
                <button onClick={getValue} value={"9"}>9</button>
                <button onClick={getValue} value={"*"}>*</button>

                <button onClick={getValue} value={"4"}>4</button>
                <button onClick={getValue} value={"5"}>5</button>
                <button onClick={getValue} value={"6"}>6</button>
                <button onClick={getValue} value={"-"}>-</button>

                <button onClick={getValue} value={"1"}>1</button>
                <button onClick={getValue} value={"2"}>2</button>
                <button onClick={getValue} value={"3"}>3</button>
                <button onClick={getValue} value={"+"}>+</button>

                <button onClick={getValue} value={"0"}>0</button>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleCalculation} >=</button>
                <button onClick={getValue} value={"/"}>/</button>


            </div>
        </>
    )
}
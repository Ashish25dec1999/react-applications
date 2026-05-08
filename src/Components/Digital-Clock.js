import { useEffect, useState } from "react"

export default function DigitalClock(){

    const [dg, setDg] = useState("");

    function Execute(){
        const now = new Date().toLocaleTimeString().toLocaleUpperCase();
        setDg(now)
    }

    useEffect(()=>{
        const now = new Date().toLocaleTimeString().toLocaleUpperCase();
        setDg(now)
    }, [setInterval(Execute, 1000)])


    return(
        <>
            <div className="container">
                <h1>Digital Clock</h1>
                <h1>{dg}</h1>
            </div>
        </>
    )
}
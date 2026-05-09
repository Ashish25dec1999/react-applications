import { useEffect, useState } from "react"

export function GreetWebsite() {

    const now = new Date().toLocaleTimeString(undefined, {hour12: false}).toLocaleUpperCase();
    const [timeMsg, setTimeMsg] = useState(now);
    const [hourMsg, setHourMsg] = useState("");

    function interval() {
        const now = new Date().toLocaleTimeString(undefined, {hour12: false}).toLocaleUpperCase();
        setTimeMsg(now);
    }

    function Message() {
        const timeMsg = new Date().getHours();
        const hours = timeMsg;

        if (hours > 5 && hours <= 12) {
            setHourMsg("Good Morning")
        } else if (hours > 12 && hours <= 17) {
            setHourMsg("Good Afternoon")
        } else if (hours > 17 && hours <= 21) {
            setHourMsg("Good Evening")
        } 
        else {
            setHourMsg("Good Night")
        }
    }

    useEffect(() => {
        setTimeMsg(now)
        Message();
    }, [setInterval(interval, 1000)])


    return (
        <>
            <div className="container">
                <div>Greeting Website</div>
                <div>{timeMsg}</div>
                <div>{hourMsg}</div>
               
            </div>
        </>
    )
}
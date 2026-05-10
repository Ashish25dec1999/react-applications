import { useEffect, useState } from "react"

export function GreetWebsite() {

    const now = new Date().toLocaleTimeString(undefined, {hour12: false}).toLocaleUpperCase();
    const [timeMsg, setTimeMsg] = useState(now);
    const [hourMsg, setHourMsg] = useState("");
    const [img, setImg] = useState("");
    function interval() {
        const now = new Date().toLocaleTimeString(undefined, {hour12: false}).toLocaleUpperCase();
        setTimeMsg(now);
    }

    function Message() {
        const timeMsg = new Date().getHours();
        const hours = timeMsg;

        if (hours > 5 && hours <= 12) {
            setHourMsg("Good Morning")
            setImg("bi bi-alarm-fill")
        } else if (hours > 12 && hours <= 17) {
            setHourMsg("Good Afternoon")
            setImg("bi bi-cloud-sun-fill")
        } else if (hours > 17 && hours <= 21) {
            setHourMsg("Good Evening")
            setImg("bi bi-sunset")
        } 
        else {
            setHourMsg("Good Night")
            setImg("bi bi-moon-fill")
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
                <div className={img} style={{fontSize: "80px"}}></div>
            </div>
        </>
    )
}
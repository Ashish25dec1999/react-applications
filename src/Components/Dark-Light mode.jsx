import { useEffect, useState } from "react"

export function LightmodeDarkmode() {

    const [light, setLight] = useState("bg-dark text-white");

    function handleBtnClick() {
        const box = document.getElementById("box");
        if (box.className == "bg-dark text-white") {
            setLight("bg-white text-dark")
        } else {
            setLight("bg-dark text-white")
        }
    }
    return (
        <>
            <div id="box" className={light}>
                <div className="p-4 fs-4 d-flex justify-content-between" >
                    <div>CODE</div>
                    <div>
                        <span className="me-5">Home</span>
                        <span className="me-5">Login</span>
                        <span className="me-5">About</span>
                        <span>Contact</span>
                    </div>
                    <button className="bi bi-gear rounded border-0 text-black" onClick={handleBtnClick} ></button>
                </div>
                <div className="mt-3 h-100 w-100 rows d-flex" >
                    <div className="col-6 p-5">
                        <h2>Trends With Generations</h2>
                        <span className="fs-5 mt-1">Shop now Exisiting offer</span><br></br>
                        <span> Hic quisquam delectus accusamus excepturi exercitationem maiores, quos obcaecati possimus ratione praes.</span> <br />
                        <button className="btn btn-primary mt-3 w-25">Submit</button>
                    </div>
                    <div className="">
                        <img src="https://tse4.mm.bing.net/th/id/OIP.0zoa_PJMOfK-xZwF8OexNQHaGz?w=1112&h=1021&rs=1&pid=ImgDetMain&o=7&rm=3" height={"400px"} width={"450vh"} />
                    </div>
                </div>
            </div>
        </>
    )
}
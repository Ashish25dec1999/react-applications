import { index } from "mathjs";
import { useState } from "react"

export default function ToDo() {

    const [initial, setInitial] = useState("");
    const [data, setData] = useState([])



    function handleTxtChange(event) {
        setInitial(event.target.value);
    }

    function handleAddClick() {
        let store = [...data, initial];
        setData(store);
        setInitial("")
    }

    function handleDeleteItem(ind) {
        const filterData = data.filter((_, index) =>  index !== ind);
        setData(filterData)
    }

    return (
        <>
            <div className="w-25 m-3 p-3 border">
                <h2>To Do Application</h2>
                <div className="input-group">
                    <input type="text" placeholder="Enter Your Task" className="border-0 input-group-text " style={{ textAlign: "left" }} onChange={handleTxtChange} value={initial} />
                    <button className="btn btn-primary input-group-text" onClick={handleAddClick}>Add</button>
                </div>
                <div className="mt-3">


                    {data.map((element, index) => {
                        return <li key={element} style={{ listStyle: "none" }} className="me-5 d-flex justify-content-between align-items-center">{element}<span onClick={() => { handleDeleteItem(index) }} style={{cursor: "pointer"}} className="bi bi-trash-fill ms-5"></span></li>
                    })}
                </div>
            </div>

        </>
    )
}
import { useState } from "react";
import {data} from "./SearchRecipeData"


export default function SearchRecipe(){

    const [val, setVal] = useState("");
    const [store, setStore] = useState(data);

    function handleInputData(e){
        setVal(e.target.value);
    }

    const res = store.filter((curValue)=>{
            return curValue.name.toLowerCase().includes(val) || curValue.brand.toLowerCase().includes(val);
        })




    return(
        <>
            <div className="border border-2 w-100 h-100 m-3 p-3 d-flex flex-column justify-content-center align-items-center">
                <div className="input-group mt-3 justify-content-center ">
                    <input onChange={handleInputData} type="text" placeholder="Search Item" className="input-group-text text-start"/>
                    <button  className="btn btn-outline-primary">Search</button>
                </div>
                <div className="mt-3 mb-3 searchRecipe fs-5 ">
                    <div>Name</div>
                    <div>Brand</div>
                    <div>Image</div>
                </div>
                {
                    res.map((element)=>{
                        return <div className="searchRecipe mt-3">
                            <div>{element.name}</div>
                            <div>{element.brand}</div>
                            <div className="mb-3 "><img src={element.Image} style={{height: "70px", width: "80px"}} alt="" /></div>
                        </div>
                    })
                }
            </div>
        </>
    )
}
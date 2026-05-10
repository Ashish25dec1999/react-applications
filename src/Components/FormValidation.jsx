import { useState } from "react"

export default function FromValidation(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const [confrimPass, setConfirmPass] = useState("")
    const[error, setError] = useState("");
    const [emailError, setEmailError] = useState("")

    function handleNameChange(e){
        if(e.target.value.length == 0){
            setError("Name is Required");
        }else if(e.target.value.length <= 4){
            setError("Name is too short");
        }else{
            setError("");
        }
    }


    function handlePassChange(e){
        setPassword(e.target.value);
    }
    

    function handleFormSubmit(){
        if(name && email && password && confrimPass){
            if(password === confrimPass){
                alert(" Form is submitted...");
            }else{
                alert("Password and Confirm password is not same");
            }
        }else{
            alert("Please update all the fields");
        }
    }

    function handleEmailChange(e){
        const exp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
       const emailVal = e.target.value;
       if(emailVal.match(exp)){
        setEmailError("");
       }else{
        setEmailError("Please enter a valid email address")
       }

    }

    return(
        <>
            <form className="container mt-3 p-3" onSubmit={handleFormSubmit}>
                <div className="d-flex flex-column">
                <h2>SingUP Page</h2>
                <div className="input-container">
                    <label htmlFor="txtName">Name</label>
                    <input type="text" name="txtName" onChange={handleNameChange} />
                    <span className={(name? "": "text-danger")}>{error}</span>
                </div>
                <div>
                    <label htmlFor="txtName">Email</label>
                    <input type="email" name="txtName" onChange={handleEmailChange} />
                     <span className={(email? "": "text-danger")}>{emailError}</span>
                </div>
                <div>
                    <label htmlFor="txtName">Password</label>
                    <input type="password" name="txtName" onChange={handlePassChange}/>
                     <span className={(password? "": "text-danger")}>{(password)? "": "Password is Required"}</span>
                </div>
                <div>
                    <label htmlFor="txtName">Confirm Password</label>
                    <input type="password" name="txtName" onChange={(e)=>{setConfirmPass(e.target.value)}}/>
                     <span className={(confrimPass? "": "text-danger")}>{confrimPass ? "": "Confrim Password is Required"}</span>
                </div>
                <div>
                    <button className="btn btn-primary text-bg-secondary w-100">SingUP</button>
                </div>
            </div>
            </form>
        </>
    )
}
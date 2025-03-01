import React, { useState } from "react";
function ControlledFunction(){
    const [name,setName] =useState("Priyanga")
    const HandleForm =(e)=>{
        e.preventDefault()
        console.log(e.target)
    }
    return(
        <div>
            <form onSubmit={HandleForm}>
                <label >Enter Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value.toLowerCase().substring(0,9))}></input>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}export default ControlledFunction
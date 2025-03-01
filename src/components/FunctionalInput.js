import React, { useState } from "react";
function FunctionaInput(){
    const [data,setData]=useState(
        {
            name:" ",
            email:" "
        }
    )
     let ChangeHandle=(e)=>{
        setData({
            name:e.traget.name,
            email:e.target.email
        })
    }
    return(
        <div>
            <form>
                <label>Enter Name</label>
                <input type="text" placeholder="enter name" name="name" value={data.name} onChange={ChangeHandle}></input>
                <br/>
                <label>Enter Email</label>
                <input type="text" placeholder="enter email" name="email" value={data.email} onChange={ChangeHandle}></input>
                <br/>
                <button>Submit </button>

            </form>
        </div>
    )
}export default FunctionaInput
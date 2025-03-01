import React, { useState } from "react";
function FunctionaInput(){
    const [data,setData]=useState(
        {
            name:"",
            email:""
        }
    )
    const [textArea,setTestArea] =useState("")
    const [dropDown,setDropDown] =useState("")
    const [checkBox,setCheckBox] =useState(false)
    const [genderArray,setGender] =useState([])
     const ChangeHandle=(e)=>{
        setData((prev)=> {
            return{
                ...prev,[e.target.name]: e.target.value

            }
        })
    }
    const HandleCheckbox=(e)=>{
        const value= e.target.value
        console.log(value)
        console.log(e.target.value)
        console.log(e.target.checked)
        if(e.target.checked){
           setGender([...genderArray,value])
        }else{
            setGender(genderArray.filter((e)=>{console.log(e,value)}))
        }

    }
    const HandleSubmit =(e)=>{
        e.preventDefault()
        console.log(data)
        console.log(e.target[2].value)
        console.log(e.target[3].value)
        console.log(e.target[4].checked)
    }
    return(
        <div>
            <form onSubmit={HandleSubmit}>
                <label>Enter Name</label>
                <input type="text" placeholder="enter name" name="name" value={data.name} onChange={ChangeHandle}></input>
                <br/>
                <label>Enter Email</label>
                <input type="email" placeholder="enter email" name="email" value={data.email} onChange={ChangeHandle}></input>
                <br/>
                <label style={{verticalAlign: "top"} }value ={textArea} onChange={(e) => {setTestArea(e.target.value)}}>Comments</label>
                <textarea cols="30" rows="5"></textarea>
                <br/>
                <label>Country</label>
                <select value={dropDown} onChange={(e)=>{setDropDown(e.target.value)}}>
                    <option>USA</option>
                    <option>India</option>
                    <option>france</option>
                    <option>iran</option>
                </select>
                <br/>
                <label>male</label>
                <input type="checkbox"  name="gender" value="male" onChange={HandleCheckbox}></input>
                <label>female</label>
                <input type="checkbox"  name="gender" value="female" onChange={HandleCheckbox}></input>
                <br/><label>I agree</label>
                <input type="checkbox"  checked={checkBox} value="male" onChange={(e)=>{setCheckBox(e.target.checked)}}></input>
                <button>Submit </button>

            </form>
        </div>
    )
}export default FunctionaInput
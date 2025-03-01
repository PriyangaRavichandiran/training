import React, { useState } from "react";
function USComponent(){
    const MyArray =useState("Rohan")
    const [name,setName]=useState("Rohan")
    let changeState=()=>{
         setName('Aryan')
    }
    return(
        <div>
            <h1>Use State example {MyArray[0]}</h1>
            <h1>Use State example {name}</h1>
            <button onClick={()=> MyArray[1]('fran')}>usestate</button>
            <button onClick ={changeState}>
                Update with useState 
            </button>
            
        
        </div>
    )
}
export default USComponent
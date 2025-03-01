import React,{useState} from "react";
function USarray(){
    let num=[2,4,7,8];
    let [numbers,setNumber] = useState(num)
    let changeArray=()=>{
        setNumber([23,45,67,89])
    }
    let addArray=()=>{
        setNumber(previousState=>{
            return[
                ...previousState,
                Math.floor(Math.random()*30)
            ]
        })
    }
    return(
        <div>
            <h1>Usestate in array</h1>
            <ul>
                {numbers.map((n,index)=><li key={index}>{n}</li>)}
                <button onClick={changeArray}>change array</button>
                <button onClick={addArray}>add an element to array</button>
            </ul>
            
        </div>
    )
}export default USarray
import React, { useState } from "react";
function FunctionState(){
   let [counter,setCounter] = useState(0)
   let Increse=()=>{
    setCounter(counter+1)
   }
   let Decrese=()=>{
    setCounter(counter-1)
   }
    return(

        <div>
            <h1>{counter}</h1>
            <button onClick={Increse}> Increment</button>
            <button onClick={Decrese}> Decrement</button>
        </div>
    )
}export default FunctionState
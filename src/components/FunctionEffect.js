import React, { useEffect, useState } from "react";
function FunctionEffect() {
    let [counter, setCounter] = useState(0)
    useEffect(() => { 
        console.log("increment done" + counter); 
    },[counter])
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
} export default FunctionEffect
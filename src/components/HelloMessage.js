import React from "react";

function HelloMessage(props){
    return(
    <div>
       <h1>Hello {props.name} is {props.age} old</h1>
       {props.children}
    </div>
    )
}
export default HelloMessage
import React,{useState} from "react";
function USobject (){
    const obj ={
        name: "Priyanga",
        age: 24,
        isYoung: true
    }
    let changeState= ()=>{
        setPerson({
            name: "ravi",
        age: 60,
        isYoung: false
        })
    }
    const [person,setPerson] = useState(obj);
    return(
        <div>
            <h1>Usestate in object</h1>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.isYoung.toString()}</h1>
            <button onClick={changeState}>text Update</button>

        </div>
    )
}export default USobject
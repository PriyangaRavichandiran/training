import React from "react";
let name =" Priyanga"
const car_obj= {name:"bmw",color:" red"};
let a = 2
if(a<2){
 name =" Priyanga"
}
else{
    name ="Everyone"
}
function Hello(){
    return(
    <div>
         {/*  jsx expresion within{} */}
        <h1>Hello {name} </h1>  
        <h1>{car_obj.name }{ car_obj.red} </h1>
        </div>
    )

}
export default Hello;
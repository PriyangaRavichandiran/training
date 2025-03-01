import React from "react";
function CustomerFun(props) {
    const { name, age } = props

    return (
        <div>
            <h1>{name}  {age}</h1>
        </div>
    )


}
export default CustomerFun
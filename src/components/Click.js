import React from "react";
function Click(){
    function HelloFuntion(){
        alert('Hello world')
    }
    return(
        <div>
            <button onClick={HelloFuntion}>Event  </button>
        </div>
    )
}
export default Click
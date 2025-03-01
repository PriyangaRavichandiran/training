import React, { Component } from "react";
class ClassEvent extends Component{
    HelloFuntion(){
        alert('Hello world')
    }
    render(){
        return(
            <div>
                <button onClick={this.HelloFuntion}>Event  </button>
            </div>
        )
    
    }
}
export default ClassEvent
import React, { Component } from "react";  
class Class extends Component{
    render(){
        return(
            <div>
                <h1>
                    Class {this.props.name}
                </h1>
            </div>
        )
    }
}
export default Class
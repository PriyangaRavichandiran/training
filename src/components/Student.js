import React, { Component } from "react";
class Student extends Component{
    constructor(props){
        super(props);
        console.log('its a constructor')
    }
    render(){
        return(
            <div>
                <h1>Hello world {this.props.name}</h1>
            </div>
        )
    }
}
export default Student
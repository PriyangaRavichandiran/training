import React, { Component } from "react";
class Customer extends Component{
    constructor(){
        super();
        this.state ={
            color: "red",
            pet:"cat"
        }
    }
    render()
    {
        const  {color, pet} = this.state
        const  {name, age} = this.props
        return(

            <div>
                <h1>
                    Hello {name} and {age } old and like {color} has {pet}
                </h1>
            </div>
        )
    }
}export default Customer
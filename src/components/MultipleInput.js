import React, { Component } from "react";
class MultipleInput extends Component{
    constructor(){
        super();
        this.state={
            name:" ",
            email:" "
        }
    }
    HandleChange=(e)=>{
        this.setState(
            {
                name:e.target.value,
                email:e.target.value
            }
        )
    }
    render(){
        return(
            <div>
                <form>
                    <label>Enter Name</label>
                    <input type="text"name="name" value={this.name} onChange={this.HandleChange}></input>
                    <br/>
                    <label>Enter Email</label>
                    <input type="text" name="email" value={this.email}></input>
                    <br/>
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}export default MultipleInput
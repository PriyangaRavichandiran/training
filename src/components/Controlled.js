import React, { Component } from "react";
class Controlled extends Component{
    constructor(props){
        super(props);
        this.state={
            data :"Rohan"
        }
    }
    HandleForm=(e)=>{
        this.setState({
            data:e.target.value.toUpperCase().substring(0,7)
        })
    }
    HandleForms=(e)=>{
        e.preventDefault()
        console.log(e.target[1].value)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.HandleForms}>
                    <h1>"controlledcomponent in form"</h1>
                    <label>Enter name</label>
                    <input type="text" value={this.state.data} onChange={this.HandleForm}></input>
                    <br/>
                    <button>Submit</button>
                  
                </form>
            </div>
        )
    }
}export default Controlled
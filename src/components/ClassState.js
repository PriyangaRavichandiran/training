import React, { Component } from "react";
class ClassState extends Component{
    constructor(props){
        super(props);
        this.state={
            counter :0
        }
    }
    Increse=()=>{
        this.setState({
            counter: this.state.counter+1
        }
        )
    }
    Decrese=()=>{
        this.setState({
            counter: this.state.counter-1
        }
        )
    }
    render(){
        return(
            <div>
                
                <h1>{this.state.counter}</h1>
                <button onClick={this.Increse}>
                    Increment
                </button>
                <button onClick={this.Decrese}>
                    Decrement
                </button>
            </div>
        )
    }
}export default ClassState

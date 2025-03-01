import React, { Component } from "react";
class EventBind extends Component{
    constructor(){
        super();
        this.HelloEvent= this.HelloEvent.bind(this)
        this.state ={
            name:'Someone'
        }
    }
    HelloEvent(){
        this.setState({
            name: 'Priyanga'
        })
    }
    render(){
        return(
            <div>
                <h1> {this.state.name}</h1>
                <button onClick ={this.HelloEvent}>Who is this</button>
            </div>
        )

    }
}export default EventBind
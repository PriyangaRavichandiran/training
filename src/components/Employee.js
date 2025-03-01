import React, { Component } from "react";
class Employee extends Component {
    // constructor(props){
    //     super(props);
    //     this.state ={name :this.props.name,
    // age: 0}
    // }
    state = {
        name: 'Priya',
        age: 0
    }
    changeName(){ 
            this.setState({
                name: "Riya",
            })
        }
    
    clickCount() {
        this.setState({
            age: this.state.age + 1
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name} : {this.state.age}</h1>
                <button onClick={() => this.changeName()}>click</button>
                <button onClick={() => this.clickCount()}>count</button>
            </div>
        )

    }
}

export default Employee;
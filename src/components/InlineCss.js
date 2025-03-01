import React, { Component } from "react";
class InlineCss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    changeState = () => {
        this.setState({ active: true })
    }
        
        render() {
            let Styling = {
                color: "red",
                backgroundColor: "yellow"
            }
            let Styling1 = {
                fontSize: 50
            }
            if (this.state.active) {
                Styling.backgroundColor = "blue"
            }
            return (
                <div>
                    <h1 style={{ color: "red", backgroundColor: "yellow", fontSize: 50 }}>Styling</h1>
                    <h1 style={Styling}>Styling with js object</h1>
                    <h1 style={{ ...Styling, ...Styling1 }}>Styling with js with multiple object using spreadoprator ...</h1>
                    <button style={Styling} onClick={this.changeState}>styleCheck</button>
                </div>
            )
        }
    } export default InlineCss
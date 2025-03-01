import React,{Component} from "react";
class ChildrenComponent extends Component{
    render(){
        return(
            <div>
            <button onClick={() => this.props.callMethod("Hello mychild")}>Alert</button>
            </div>
        )
    }
}export default ChildrenComponent
import React,{Component} from "react";
import ChildrenComponent from "./ChildrenComponent";
class ParentComponent extends Component{
    ParentMethod=(childName) =>{
        alert('from parent ' + childName)
    }
    render(){
        return(
            <div>
                <ChildrenComponent callMethod={this.ParentMethod}>  </ChildrenComponent>
            </div>
        )
    }
}export default ParentComponent
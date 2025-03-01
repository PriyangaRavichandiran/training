import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import HelloMessage from './components/HelloMessage';
import Class from './components/Class';
import Student from './components/Student';
import Employee from './components/Employee';
import Customer from './components/Customer';
import CustomerFun from './components/CustomerFun';
import Click from './components/Click';
import ClassEvent from './components/ClassEvent';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import InlineCss from './components/InlineCss';
import USComponent from './components/USComponent';
import USobject from './components/USobject';
import USarray from './components/USarray';
import ClassState from './components/ClassState';
import FunctionState from './components/FunctionState';
import FunctionEffect from './components/FunctionEffect';
import Controlled from './components/Controlled';
import ControlledFunction from './components/ControlledFunction';
import TodoApp from './components/Todo';
import MultipleInput from './components/multipleInput';
import FunctionalInputs from './components/FunctionalInput';

function App() {
  return (
    <div className="App">
      <FunctionalInputs/>

      <MultipleInput/>
      <TodoApp/>
      <ControlledFunction/>
      <Greet/><Hello/>
      <Class name ="priya "/>
      <HelloMessage name ="priya"age="24">
        <p>children 1</p>
      </HelloMessage>
      <HelloMessage name ="riya"age="24">
      <p>children 2</p>
      </HelloMessage>
      <Student  name ="aryan"/>
      <Employee name ="virat"/>
      <Customer name ="riya"age={24}/>
      <CustomerFun name ="riya"age={24}/>
      <Click/>
      <ClassEvent/>
      <EventBind/>
      <ParentComponent/>
      <InlineCss/>
      <USComponent/>
      <USobject/>
      <USarray/>
      <ClassState/>
      <FunctionState/>
      <FunctionEffect/>
      <Controlled/>
    </div>
  )
}

export default App;

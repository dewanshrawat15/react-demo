import React from "react";

class HelloWorldClass extends React.Component {

  render(){
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

function HelloWorldFn(props){
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <>
    <HelloWorldFn name={'test user'} />
    <HelloWorldClass name={'test user'} />
  </>
}

export default App;

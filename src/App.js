import React from "react";

class HelloWorldClass extends React.Component {

  state = {
    name: "World"
  }

  render(){
    return <h1>Hello, {this.state.name}!</h1>;
  }
}

function App() {
  return (
    <HelloWorldClass />
  );
}

export default App;

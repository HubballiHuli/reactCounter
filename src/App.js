import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

 

  render() {
    return (
      <div className="App">
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

class Counter extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    };
  }

  increment(c){
    this.setState({count:c+1})
  }

  decrement(c){
    this.setState({count:c-1})
  }
  render(){
    return(
      <div>
        <div><h1>{this.state.count}</h1></div>
        <button onClick = {()=>this.increment(this.state.count)}>Increment</button>
        <button onClick = {()=>this.decrement(this.state.count)}>Decrement</button>
      </div>
    )
  }
}

export default App;

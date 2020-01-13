import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'Tobi',
    age: 21
  };
  render() {
    const { name, age } = this.state;
    return (
      <div class='App'>
        <h1>
          Hi, my name is {name} and I am {age} years old.
        </h1>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Ninjas from './components/Ninjas';
import AddNinjas from './components/AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Tobi', age: 21, belt: 'black', id: 1 },
      { name: 'John', age: 23, belt: 'blue', id: 2 },
      { name: 'Sam', age: 26, belt: 'green', id: 3 }
    ]
  };

  render() {
    return (
      <div className='App'>
        <h1>My React Application</h1>

        <Ninjas ninjas={this.state.ninjas} />
        <AddNinjas />
      </div>
    );
  }
}

export default App;

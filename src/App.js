import React, { Component } from 'react';
import './App.css';
import Ninjas from './components/Ninjas';

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
      </div>
    );
  }
}

export default App;

// We're going to pass the array in the state down to the Ninjas in the rendered component Ninjas, by passing it down as prop called ninjas
// and set it equaul to {this.state.ninjas}, so we'll have access to the ninjas array in the Ninjas component. Then in ninjas file
// We get the original array which is ninjas, then we map through the array then we receive the inidivdual ninja. Then we perform
// a function for each individual item, inside that function we'll perform a bit of JSX that we want to output for each individual ninja.
// So it cycles through those, stores that JSX in a new array called ninjaList, then we output that ninjaList and it outpts that whole of JSX.

import React, { Component } from 'react';
import './App.css';
import Ninjas from './components/Ninjas';

class App extends Component {
  state = {
    name: 'Tobi',
    age: 21
  };

  handleChange = e => {
    this.setState({
      name: e.target.value // To get value of whatever is being typed into the input field being targeted.
    });
  };

  handleSubmit = e => {
    e.preventDefault(); // Prevent default reloading of page
    console.log('Form has been submitted', this.state.name);
  };
  render() {
    const { name, age } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className='App'>
        <h1>
          Hi, my name is {name} and I am {age} years old.
        </h1>
        {/* adding Event to onSubmit covers button (clicking it) and when a user types enter. Best of both worlds!*/}
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChange} />
          <button>Type to update name</button>
        </form>
        <Ninjas />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'Tobi',
    age: 21
  };
  handleClick = e => {
    // console.log(e.target);
    console.log(this.state);
  };

  handleHover = e => {
    console.log(e.target);
  };
  handleCopy = e => {
    console.log('Try being original bro');
  };
  render() {
    const { name, age } = this.state;
    const { handleClick, handleHover, handleCopy } = this;
    return (
      <div className='App'>
        <h1>
          Hi, my name is {name} and I am {age} years old.
        </h1>
        <button onClick={handleClick}>Click Me</button>
        <button onMouseOver={handleHover}>Hover me</button>
        <p onCopy={handleCopy}>What we think, we become</p>
      </div>
    );
  }
}

export default App;

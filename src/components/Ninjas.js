import React, { Component } from 'react';

class Ninjas extends Component {
  render() {
    console.log(this.props); // You can see the name, age and belt that was passed by the App Component.
    const { name, age, belt } = this.props; // Destructuring, so you can pass props now without using 'this.props.___' just '____'
    return (
      <div className='ninja'>
        <ul>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          <li>Belt: {belt}</li>
        </ul>
      </div>
    );
  }
}

export default Ninjas;

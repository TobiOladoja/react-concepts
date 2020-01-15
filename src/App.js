import React, { Component } from 'react';
import './App.css';
import Ninjas from './components/Ninjas';
import AddNinjas from './components/AddNinja';
import Navbar from './components/views/Navbar';
import Home from './components/views/Home';
import About from './components/views/About';
import Contact from './components/views/Contact';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Tobi', age: 21, belt: 'black', id: 1 },
      { name: 'John', age: 23, belt: 'blue', id: 2 },
      { name: 'Sam', age: 26, belt: 'green', id: 3 }
    ]
  };

  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas
    });
  };

  deleteNinja = id => {
    // console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <div className='App'>
            <h1>My React Application</h1>

            <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
            <AddNinjas addNinja={this.addNinja} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

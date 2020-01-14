import React, { Component } from 'react';

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNinja(this.state);
  };
  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' onChange={handleChange} />
          <label htmlFor='age'>Age:</label>
          <input type='text' id='age' onChange={handleChange} />
          <label htmlFor='belt'>Belt:</label>
          <input type='text' id='belt' onChange={handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;

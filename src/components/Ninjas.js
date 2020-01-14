import React, { Component } from 'react';

class Ninjas extends Component {
  render() {
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className='ninja' key={ninja.id}>
          <ul>
            <li>Name: {ninja.name}</li>
            <li>Age: {ninja.age}</li>
            <li>Belt: {ninja.belt}</li>
          </ul>
        </div>
      );
    });
    return <div className='ninja-list'>{ninjaList}</div>;
  }
}

export default Ninjas;

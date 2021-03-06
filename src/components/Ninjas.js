import React from 'react';

const Ninjas = props => {
  const { ninjas, deleteNinja } = props;
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 21 ? (
      <div className='ninja' key={ninja.id}>
        <ul>
          <li>Name: {ninja.name}</li>
          <li>Age: {ninja.age}</li>
          <li>Belt: {ninja.belt}</li>
          <button onClick={() => deleteNinja(ninja.id)}>Delete Ninja</button>
        </ul>
      </div>
    ) : null;
  });
  return <div className='ninja-list'>{ninjaList}</div>;
};

export default Ninjas;

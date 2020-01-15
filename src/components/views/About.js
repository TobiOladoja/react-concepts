import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className='container'>
      <h4 className='center'>About</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel
        voluptatum ratione, necessitatibus distinctio nostrum? Nobis, corporis
        mollitia numquam voluptatibus animi quae id accusantium culpa nam, rerum
        eos fugit cum.
      </p>
    </div>
  );
};

export default Rainbow(About);

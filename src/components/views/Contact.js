import React from 'react';

const Contact = props => {
  setTimeout(() => {
    console.log('Going to about page');
    props.history.push('/about');
  }, 2000);
  return (
    <div className='container'>
      <h4 className='center'>Contact</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vel
        voluptatum ratione, necessitatibus distinctio nostrum? Nobis, corporis
        mollitia numquam voluptatibus animi quae id accusantium culpa nam, rerum
        eos fugit cum.
      </p>
    </div>
  );
};

export default Contact;

import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className='flex'>
        <Cousin name='Salman'></Cousin>
        <Cousin name='Ohi'></Cousin>
        <Cousin name='Mahi'></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
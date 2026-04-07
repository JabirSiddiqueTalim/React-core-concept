import React from 'react';
import Cousin from './Cousin';

const Aunty = () => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className='flex'>
        <Cousin name='Faiza'></Cousin>
        <Cousin name='Rabi'></Cousin>
        <Cousin name='Shahi'></Cousin>
      </section>
      
    </div>
  );
};

export default Aunty;
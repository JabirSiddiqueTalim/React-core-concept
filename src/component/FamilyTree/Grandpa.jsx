import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunty from './Aunty';

const Grandpa = () => {
  return (
    <div>
      <h2>Grandpa</h2>
      <section className='flex'>
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunty></Aunty>
      </section>
      
    </div>
  );
};

export default Grandpa;
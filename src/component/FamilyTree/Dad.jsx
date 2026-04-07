import React from 'react';
import Myself from './Myself';
import Brother from './Brother';

const Dad = ({asset}) => {
  return (
    <div>
      <h2>Dad</h2>
      <section className='flex'>
        <Myself asset={asset}></Myself>
        <Brother></Brother>
      </section>
      
    </div>
  );
};

export default Dad;
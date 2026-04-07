import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunty = ({asset}) => {
  const [money,setMoney]=use(MoneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className='flex'>
        <Cousin name='Faiza' asset={asset}></Cousin>
        <Cousin name='Rabi'></Cousin>
        <Cousin name='Shahi'></Cousin>
        <button onClick={()=>{setMoney(money+5000)}}>Add 5000$</button>
      </section>
      
    </div>
  );
};

export default Aunty;
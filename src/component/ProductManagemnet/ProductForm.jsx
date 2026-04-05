import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
  const [error,setError]=useState();
  const handleOnclick=(e)=>
  {
    e.preventDefault()
    const name=e.target.name.value;
    const price=e.target.price.value;
    const product=e.target.product.value;
    if(name.length==0)
    {
      setError('Enter the name properly');
      return;
    }else if(price.length==0)
      {
        setError('Enter the price properly');
        return;
      }else if(product.length==0)
        {
          setError('Enter the product properly');
          return;
        }else
        {
          setError('')
        }
    const newProduct=
    {
      name,
      price,
      product
    }
    // console.log(newProduct)
    handleAddProduct(newProduct)

  }
  return (
    <div>
      <h2>My product details</h2>
      <form onSubmit={handleOnclick} >
        <input type="text" name="name" id="" placeholder='Name' />
        <input type="text" name="price" id="" placeholder='Price' />
        <input type="text" name="product" id="" placeholder='Product' />
        <input type="submit" value="Submit" />
      </form>
      <p style={{color:'red'}}><small>{error}</small></p>
      
    </div>
  );
};

export default ProductForm;
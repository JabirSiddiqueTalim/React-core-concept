import React from 'react';

const ProductForm = () => {
  const handleOnclick=(e)=>
  {
    e.preventDefault()
    const name=e.target.name.value;
    const price=e.target.price.value;
    const product=e.target.product.value;
    const newProduct=
    {
      name,
      price,
      product
    }
    console.log(newProduct)
    

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
      
    </div>
  );
};

export default ProductForm;
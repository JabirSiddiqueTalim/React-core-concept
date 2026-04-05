import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagment = () => {

const [product,setProduct]=useState([])
const handleAddProduct=p=>
{
  const newProduct=[...product,p];
  setProduct(newProduct)
  console.log(product);
}


return (
    <div>
      <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
      <ProductTable product={product}></ProductTable>
      
    </div>
  );
};

export default ProductManagment;
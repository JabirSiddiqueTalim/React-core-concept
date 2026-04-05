import React from 'react';

const ProductTable = ({ product }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No </th>
            <th>Product Name </th>
            <th>Product Price</th>
            <th>Product </th>
          </tr>
        </thead>
        <tbody>
          
            {
              product.map((product,index) => <tr key={index}> 
                <td>{index+1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.product}</td>
                </tr>)
            }
          
        </tbody>
      </table>

    </div>
  );
};

export default ProductTable;
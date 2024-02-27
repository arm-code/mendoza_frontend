import React, { useState } from 'react';
import './ProductoStyles.css';

export const ProductoCard = ({ producto }) => { 
  
  return (
    <div className='cardProduct'>
      <label>{producto.product_name}</label>
      <hr />
      <label htmlFor="">Costo: </label>
      <label><strong>$ {Math.floor(producto.product_cost)}</strong></label>
    </div>
  );
};

export default ProductoCard;

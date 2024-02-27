import React from 'react';
import './ProductoCard.css';


export const ProductoCard = ({ producto, onAddToTroca }) => {
  return (
    <div className='card-product'>
      <label>{producto.product_name}</label>
      <label>Costo: ${producto.product_cost}</label>
      <button onClick={onAddToTroca}>Subir a la troca</button>
    </div>
  );
};

export default ProductoCard;

import React from 'react';
import './InventarioStyles.css';

export const InventarioCard = ({ disponibilidad }) => {
  return (
    <div className='card'>
      <div className='cardPart1'>
        <p>{disponibilidad.description}</p>
      </div>
      <div className='cardPart2'>
        <p>TOTAL:</p>
        <p className='qty'>
          <strong>{disponibilidad.total_quantity}</strong>
        </p>
      </div>
    </div>
  );
};

export default InventarioCard;

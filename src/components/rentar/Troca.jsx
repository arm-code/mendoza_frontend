import React, { useId } from 'react';
import './Troca.css';
import { FaTruckMonster } from 'react-icons/fa6';

export const Troca = () => {
  const trocaCheckBoxId = useId();

  return (
    <div className='trocaCart'>
      <label htmlFor={trocaCheckBoxId} className='cart-button'>
        <FaTruckMonster />
      </label>
      <input type='checkbox' hidden id={trocaCheckBoxId} />

      <div className='cart'>        
        <h2>Que llevas en la troca</h2>
        <ul className='cartList'>
          <li>mesa grande - 180</li>
          <li>mesa grande - 120</li>
          <li>mesa grande - 150</li>
          <li>mesa grande - 180</li>
        </ul>
        <hr />
        <p className='textNormal'>Total a pagar:</p>
        <p className='totalCost'>$650</p>
        <button className='deleteTrocaButton'>Borrar carga</button>
        <button className='goToRentarButton'>Proceder con la renta</button>
      </div>
    </div>
  );
};

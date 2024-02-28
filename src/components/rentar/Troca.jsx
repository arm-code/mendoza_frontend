import React, { useId } from 'react';
import './Troca.css';
import { FaTruckMonster } from 'react-icons/fa6';

export const Troca = ({ inTruck, deleteTruck }) => {
  const trocaCheckBoxId = useId();
  console.log('from truck', inTruck);
  let totalCost = 0;
  inTruck.map((p) => {
    totalCost += parseInt(p.product_cost);
  });
  console.log(totalCost);

  return (
    <div className='trocaCart'>
      <label htmlFor={trocaCheckBoxId} className='cart-button'>
        <FaTruckMonster />
      </label>
      <input type='checkbox' hidden id={trocaCheckBoxId} />

      <div className='cart'>
        <h2>Que llevas en la troca</h2>
        <div className='cartList'>
          {inTruck.map((p, i) => (
            <div key={i}>
              <p className='item'>{p.product_name}</p>
              <p className='item'>$ {Math.floor(p.product_cost)}</p>
            </div>
          ))}
        </div>
        <p className='textNormal'>Total a pagar:</p>
        <p className='totalCost'>$ {totalCost}</p>

        <button className='goToRentarButton'>Proceder con la renta</button>
        <button className='deleteTrocaButton' onClick={deleteTruck}>
          Borrar carga
        </button>
      </div>
    </div>
  );
};

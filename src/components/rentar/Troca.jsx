import React, { useId } from 'react';
import './Troca.css';
import { FaTruckMonster } from 'react-icons/fa6';

export const Troca = ({ inTruck }) => {
  const trocaCheckBoxId = useId();
  const idproduct = useId();
  console.log('from truck', inTruck);

  return (
    <div className='trocaCart'>
      <label htmlFor={trocaCheckBoxId} className='cart-button'>
        <FaTruckMonster />
      </label>
      <input type='checkbox' hidden id={trocaCheckBoxId} />

      <div className='cart'>
        <h2>Que llevas en la troca</h2>
        <ul className='cartList'>
          {inTruck.map((p, i) => (
            <div key={i}>
              <p>{p.product_name}</p>
              <p>{p.product_cost}</p>
            </div>
          ))}
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

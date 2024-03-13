import React, { useEffect, useId } from 'react';
import './Troca.css';
import { FaTruckMonster } from 'react-icons/fa6';

export const Troca = ({ inTruck, deleteTruck }) => {
  const trocaCheckBoxId = useId(); 

  let totalCost = 0;
  inTruck.map((p) => {
    totalCost += parseInt(p.product_cost);
  });


  return (
    <div className='trocaCart'>
      <label htmlFor={trocaCheckBoxId} className='cart-button'>
        <FaTruckMonster />
      </label>
      <input type='checkbox' hidden id={trocaCheckBoxId} />

      <div className='cart'>
        <h2>Que llevas en la troca</h2>

        <table className='cartList'>
          <thead>
            <tr>
              <th>descripcion</th>
              <th>cantidad</th>
              <th>costo</th>
              <th>monto</th>
              <th>opciones</th>
            </tr>
          </thead>
          <tbody>
            {inTruck.map((p, i) => (
              <tr key={i}>
                <td>{p.product_name}</td>
                <td>{p.quantity}</td>
                <td>$ {Math.floor(p.product_cost)}</td>
                <td>{Math.floor(p.product_cost * p.quantity)}</td>
                <td className='buttons'>
                  <button className='deleteItem'>quitar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className='textNormal'>Total a pagar:</p>
        <p className='totalCost'>$ {totalCost}</p>

        <button className='goToRentarButton'>Proceder con la renta</button>
        <button className='deleteTrocaButton' onClick={deleteTruck}>
          vaciar troca
        </button>
      </div>
    </div>
  );
};

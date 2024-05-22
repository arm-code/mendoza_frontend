import React, { useEffect, useId } from 'react';
import './Troca.css';

export const Troca = ({ inTruck, deleteTruck, agendarPedido, deleteItem }) => {
  let totalCost = 0;
  inTruck.map((p) => {
    totalCost += parseInt(p.price * p.quantity);
  });

  return (
    <div className='trocaCart'>
      <table className='cartList'>
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>Costo</th>
            <th>Monto</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {inTruck.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.quantity}</td>
              <td>$ {Math.floor(p.price)}</td>
              <td>$ {Math.floor(p.price * p.quantity)}</td>
              <td className='buttons'>
                <button
                  className='deleteItem'
                  title='Eliminar producto'
                  onClick={() => deleteItem(p.id)}
                >
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='totalCost'>Total a pagar: $ {totalCost}</p>
      <div className='buttons-container'>
        <button
          className='goToRentarButton'
          disabled={inTruck.length == 0 ? true : false}
          onClick={agendarPedido}
        >
          Proceder con la renta
        </button>
        <button
          className='deleteTrocaButton'
          disabled={inTruck.length == 0 ? true : false}
          title='Eliminar todos los productos de la troca'
          onClick={deleteTruck}
        >
          Vaciar troca
        </button>
      </div>
    </div>
  );
};

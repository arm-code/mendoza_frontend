import React from 'react';
import './ChecarPedidos.css';
import PedidoCard from '../../components/pedidoCard/PedidoCard';


export const ChecarPedidos = () => {
  return (
    <div className='pedidos-container'>
      <div className='pedidos'>
        <h3>Lista de pedidos...</h3>
        <hr />
        <div className='cards-container'>
          <PedidoCard/>
          <PedidoCard/>
          <PedidoCard/>
          <PedidoCard/>
          <PedidoCard/>
        </div>
      </div>
    </div>
  );
};

export default ChecarPedidos;

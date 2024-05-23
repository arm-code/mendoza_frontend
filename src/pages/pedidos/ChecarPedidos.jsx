import React, { useEffect, useState } from 'react';
import './ChecarPedidos.css';
import PedidoCard from '../../components/pedidoCard/PedidoCard';
import { getOrder } from '../../api/mobiliario.api';

export const ChecarPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function loadOrder() {
      const resp = await getOrder();
      setPedidos(resp.data);
    }

    loadOrder();
  }, []);

  console.log(pedidos);

  return (
    <div className='pedidos-container'>
      <div className='pedidos'>
        <h3>Lista de pedidos...</h3>
        <hr />
        <div className='cards-container'>
          {pedidos.map((p) => (
            <PedidoCard key={p.id} pedido={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

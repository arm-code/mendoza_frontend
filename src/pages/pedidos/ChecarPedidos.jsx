import React, { useEffect, useState } from 'react';
import './ChecarPedidos.css';
import { getOrder } from '../../api/mobiliario.api';
import { PedidoDetail } from '../../components/pedidoDetailed/PedidoDetail';

export const ChecarPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [pedido, setPedido] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const onMostrarDetallado = (p) => {
    setShowDetails(true);
    setPedido(p);
  };

  useEffect(() => {
    async function loadOrder() {
      const resp = await getOrder();
      const sortedOrders = resp.data.sort((a, b) => b.id - a.id);
      setPedidos(sortedOrders);
    }

    loadOrder();
  }, []);

  console.log('pedido: ', pedidos);

  return (
    <div className='pedidos-container'>
      <div className='pedidos'>
        <h3>Lista de pedidos...</h3>
        <hr />

        <table className='test'>
          <thead>
            <tr>
              <th>Num. Orden</th>
              <th>Fecha Entrega</th>
              <th>Total</th>
              <th>Telefono</th>
              <th>Cliente</th>
              <th>Status</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.deadline.substring(0, 10)}</td>
                <td>$ {p.total}</td>
                <td>{p.customer.phone}</td>
                <td>
                  {p.customer.name.toUpperCase()}{' '}
                  {p.customer.last_name.toUpperCase()}
                </td>
                <td>{p.status}</td>
                <td>
                  <button onClick={() => onMostrarDetallado(p)}>
                    detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showDetails && (
          <PedidoDetail pedido={pedido} setShowDetails={setShowDetails} />
        )}
      </div>
    </div>
  );
};

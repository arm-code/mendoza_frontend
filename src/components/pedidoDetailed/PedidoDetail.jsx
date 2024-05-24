import { useEffect, useState } from 'react';
import './PedidoDetail.css';

export const PedidoDetail = ({ pedido, setShowDetails }) => {
  const { order_details } = pedido;
  const [pack, setPack] = useState([])

  useEffect(() => {
    async function loadPacks(){

    }

    loadPacks()
  }, [])


  console.log('order: ', order_details);
  return (
    <div className='details'>
      <div>
        <h3>Detalles del pedido</h3>
        <hr />
      </div>
      <div>
        <p>Vas a cobrar: ${pedido.total}</p>
        {order_details.map((d) => (
          <p key={d.id}>            
            {d.quantity} {d.product.name}
          </p>
        ))}
        <hr />
      </div>
      <div>
        <p>Telefono: {pedido.customer.phone}</p>
        <p>Direccion: {pedido.address.street}, {pedido.address.number}, {pedido.address.colony}</p>
      </div>
      <div>
        <button className='btn-close' onClick={() => setShowDetails(false)}>Cerrar</button>
      </div>
    </div>
  );
};

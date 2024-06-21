import './PedidoCard.css';
import { dateFormater } from '../../utils/date-formatter/dateFormater.js';
import { PedidoDetail } from '../pedidoDetailed/PedidoDetail.jsx';
import { useState } from 'react';

export const PedidoCard = ({ pedido }) => {
  const [showDetails, setShowDetails] = useState(false);

  const onMostrarDetallado = () => {
    setShowDetails(true);
  };  

  const statusClasses = {
    Generada: 'generated',
    Completada: 'completed',
    Cancelada: 'cancelada',
    EnProceso: 'enproceso',
    Entregada: 'entregada',
  };

  const defaultClass = 'generated';

  return (
    <div className='card-pedido'>
      <div className='cardID'>
        <p>N. Orden</p>
        <p>{pedido.id}</p>
      </div>
      <div className='customerDetails'>
        <p>
          Direccion: {pedido.address.street}, {pedido.address.number},{' '}
          {pedido.address.colony}
        </p>
        <p>
          Cliente: {pedido.customer.name} {pedido.customer.last_name}
        </p>
        <p>Telefono: {pedido.customer.phone}</p>
        <p>
          Fecha de entrega: {dateFormater(pedido.deadline.substring(0, 10))}
        </p>
      </div>
      <div className='mesasCosto'>
        <p>$ {pedido.total}</p>
      </div>
      <div className='mesasDetails'>
        <div className={statusClasses[pedido.status] || defaultClass}>
          <p>Status: {pedido.status}</p>
        </div>
        <div>
          <button onClick={onMostrarDetallado}>Mostrar detallado</button>
        </div>
      </div>

      {showDetails && (
        <PedidoDetail pedido={pedido} setShowDetails={setShowDetails} />
      )}
    </div>
  );
};

export default PedidoCard;

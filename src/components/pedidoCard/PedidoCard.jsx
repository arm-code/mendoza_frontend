import './PedidoCard.css';
import { dateFormater } from '../../utils/date-formatter/dateFormater.js';

export const PedidoCard = ({ pedido }) => {
  return (
    <div className='card-pedido'>
      <div className='cardID'>{pedido.id}</div>
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
        <div className='statusOrder'>
          <p>Status: pendiente</p>
        </div>
        <div>
          <button>Mostrar detallado</button>
        </div>
      </div>
    </div>
  );
};

export default PedidoCard;

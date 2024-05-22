// ESTE COMPONENTE ES PARA VISUALIZAR LA ORDEN DE COMPRA DESPUES DE QUE SE HAN CONFIRMADO LOS DATOS DEL CLIENTE Y LOS PRODUCTOS SE HAN SELECCIONADO.
import { useTruck } from '../../hooks/useTruck';
import './OrdenRenta.css';
import { useClient } from '../../hooks/useClient';
import { convertirFecha } from '../../utils/date-formatter/dateFormater';
import { useNavigate } from 'react-router-dom';
import { createOrder, createOrderDetailed } from '../../api/mobiliario.api';

export const OrdenRenta = () => {
  const { troca } = useTruck();
  const { client } = useClient();
  const navigate = useNavigate();

  console.log('CLIENT: ', client);
  console.log('TRUCK: ', troca);

  let totalCost = 0;

  troca.map((p) => {
    totalCost += parseInt(p.price * p.quantity);
  });

  const onConfirmarRenta = async () => {
    console.log('confirmando renta!!');
    try {
      const response = await createOrder({
        total: totalCost,
        deadline: client.fechaEntrega,
        customer: client.idCustomer,
        address: client.idAddress,
      });

      for (let i = 0; i < troca.length; i++) {
        await createOrderDetailed({
          quantity: troca[i].quantity,
          price: troca[i].price,
          order: response.data.id,
          product: troca[i].id,
        });
      }
      alert('Orden generada correctamente!! alv')
      
      navigate('/');
    } catch {
      console.log('Algo salio mal al comunicarse con el servidor.. sptm');
    }
  };

  return (
    <div className='orden-compra'>
      <div className='orden'>
        <h3>Orden de compra</h3>
        <table className='cartList'>
          <thead>
            <tr>
              <th>Descripcion</th>
              <th>Cantidad</th>
              <th>Costo</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {troca.map((p, i) => (
              <tr key={i}>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>$ {Math.floor(p.price)}</td>
                <td>$ {Math.floor(p.price * p.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='dataclient-container'>
          <div className='total-cost'>
            <p>Total a pagar: ${totalCost}</p>
          </div>
          <div className='fecha-entrega'>
            <p>Fecha de entrega: {convertirFecha(client.fechaEntrega)}</p>
          </div>
          <div className='datos-cliente'>
            <p>
              Cliente: {client.nombreCliente.toUpperCase()}{' '}
              {client.apellidosCliente.toUpperCase()}
            </p>
            <p>
              Direccion: {client.calle} {client.numeroCalle}, {client.colonia}{' '}
            </p>
            <p>Telefono: {client.telefonoCliente}</p>
          </div>
        </div>

        <button className='confirmar-renta' onClick={onConfirmarRenta}>
          Confirmar renta
        </button>
      </div>
    </div>
  );
};

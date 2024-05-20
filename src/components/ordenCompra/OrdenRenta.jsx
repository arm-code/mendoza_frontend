// ESTE COMPONENTE ES PARA VISUALIZAR LA ORDEN DE COMPRA DESPUES DE QUE SE HAN CONFIRMADO LOS DATOS DEL CLIENTE Y LOS PRODUCTOS SE HAN SELECCIONADO.
import { useTruck } from '../../hooks/useTruck';
import './OrdenRenta.css';
import { useClient } from '../../hooks/useClient';
import { convertirFecha } from '../../utils/date-formatter/dateFormater';
import { createClient } from '../../api/mobiliario.api';
import { useNavigate } from 'react-router-dom';

export const OrdenRenta = () => {
  const { troca } = useTruck();
  const { client } = useClient();
  const navigate = useNavigate();

  console.log(client);

  let totalCost = 0;

  troca.map((p) => {
    totalCost += parseInt(p.product_cost * p.quantity);
  });

  const onConfirmarRenta = async () => {
    console.log('confirmando renta!!');
    try {
      await createClient({
        name_client: client.nombreCliente,
        last_name_client: client.apellidosCliente,
        phone: client.telefonoCliente,
      });

      alert('Orden agendada correctamente.');

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
                <td>{p.product_name}</td>
                <td>{p.quantity}</td>
                <td>$ {Math.floor(p.product_cost)}</td>
                <td>$ {Math.floor(p.product_cost * p.quantity)}</td>
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

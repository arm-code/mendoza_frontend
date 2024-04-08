// ESTE COMPONENTE ES PARA VISUALIZAR LA ORDEN DE COMPRA DESPUES DE QUE SE HAN CONFIRMADO LOS DATOS DEL CLIENTE Y LOS PRODUCTOS SE HAN SELECCIONADO.
import { useTruck } from '../../hooks/useTruck';
import './OrdenRenta.css';
import { useClient } from '../../hooks/useClient';

export const OrdenRenta = () => {
  const { troca } = useTruck();
  const { client } = useClient();

  let totalCost = 0;

  troca.map((p) => {
    totalCost += parseInt(p.product_cost * p.quantity);
  });

  return (
    <div className='orden-compra'>
      <h1>Orden de compra</h1>
      <hr />
      <table className='cartList'>
        <thead>
          <tr>
            <th>descripcion</th>
            <th>cantidad</th>
            <th>costo</th>
            <th>monto</th>
          </tr>
        </thead>
        <tbody>
          {troca.map((p, i) => (
            <tr key={i}>
              <td>{p.product_name}</td>
              <td>{p.quantity}</td>
              <td>$ {Math.floor(p.product_cost)}</td>
              <td>{Math.floor(p.product_cost * p.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='total-cost'>
        <p>Total a pagar:</p>
        <h2> ${totalCost}</h2>
      </div>
      <div className='fecha-entrega'>
        <p>fecha de entrega</p>
        <h2>{client.fechaEntrega}</h2>
      </div>
      <div className='datos-cliente'>
        <p>Cliente: {client.nombreCliente} {client.apellidosCliente}</p>
        <p>Direccion: {client.calle} {client.numeroCalle}, {client.colonia} </p>
        <p>Telefono: {client.telefonoCliente}</p>
      </div>
      <button className='btn btn-primary mt-2'>Confirmar renta</button>
    </div>
  );
};

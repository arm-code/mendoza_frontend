import { useEffect, useState } from 'react';
import './PedidoDetail.css';
import { getProductos } from '../../api/mobiliario.api';

export const PedidoDetail = ({ pedido, setShowDetails }) => {
  const { order_details } = pedido;

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function loadProductos() {
      const resp = await getProductos();
      setProductos(resp.data);
    }

    loadProductos();
  }, []);

  const findProductNameById = (id) => {
    const product = productos.find((product) => product.id === id);
    return product ? product.name : 'not find';
  };

  const allComponents = order_details.flatMap((item) =>
    item.product.components.map((component) => ({
      ...component,
      productName: item.product.name,
      productPrice: item.price,
    }))
  );

  console.log('order: ', order_details);

  console.log('productos: ', productos);
  return (
    <div className='details'>
      <div>
        <h3>Detalles del pedido</h3>
        <hr />
      </div>
      <div>
        <p>Vas a cobrar: ${pedido.total}</p>

        <table>
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
            </tr>
          </thead>
          <tbody>
            {order_details.map((d) => (
              <tr key={d.id}>
                <td>{d.quantity} </td>
                <td>{d.product.name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        
      </div>
      <div>
        <p>Telefono: {pedido.customer.phone}</p>
        <p>
          Direccion: {pedido.address.street}, {pedido.address.number},{' '}
          {pedido.address.colony}
        </p>
      </div>
      <div>
        <button className='btn-close' onClick={() => setShowDetails(false)}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

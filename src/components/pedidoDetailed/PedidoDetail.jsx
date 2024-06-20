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
      <table>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Nombre del Pack</th>
          </tr>
        </thead>
        <tbody>
          {allComponents.map((component, index) => (
            <tr key={index}>              
              <td>{component.productPrice}</td>
              <td>{component.quantity}</td>
              <td>{findProductNameById(component.product_component)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Detalles del pedido</h3>
        <hr />
      </div>
      <div>
        <p>Vas a cobrar: ${pedido.total}</p>
        {order_details.map((d) => (
          <div key={d.id}>
            {d.quantity} {d.product.name}
          </div>
        ))}

        <hr />
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

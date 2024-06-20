import { useEffect, useState } from 'react';
import { getProductos } from '../../api/mobiliario.api.js';
import ProductoRentaCard from '../../components/rentar/ProductoRentaCard.jsx';
import './Rentar.css';
import { Troca } from '../../components/rentar/Troca.jsx';
import { useNavigate } from 'react-router-dom';
import { useTruck } from '../../hooks/useTruck.js';
import { useClient } from '../../hooks/useClient.js';

export const Rentar = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();
  const { client } = useClient();
  const { troca, addToTroca, vaciarTroca, deleteItem, delete1Product, add1Product, Toaster } = useTruck();

  console.log('client from rentar:', client);
  console.log('troca: ', troca);

  // cargamos los productos de nuestra API
  useEffect(() => {
    async function loadProductos() {
      const productos_obtenidos = await getProductos();
      setProductos(productos_obtenidos.data);
    }
    loadProductos();
  }, []);

  const agendarPedido = () => {
    console.log('agendando pedido!!');
    navigate('/ordenDeCompra');
  };

  return (
    <div className='rentarPage'>
      <Toaster />

      {/* section for the products */}
      <div className='products'>
        {productos.map((p) => (
          <ProductoRentaCard
            producto={p}
            key={p.id}
            onAddToTroca={() => addToTroca(p)}
          />
        ))}
      </div>

      <div className='truck'>
        <h3>Productos en la troca...</h3>
        <hr />

        {client.nombreCliente && (
          <h3>
            Cliente: {client.nombreCliente} {client.apellidosCliente}
          </h3>
        )}

        <h3>Fecha de entrega: {client.fechaEntrega}</h3>
        <Troca
          inTruck={troca}
          deleteTruck={() => vaciarTroca()}
          deleteItem={deleteItem}
          delete1Product={delete1Product}
          add1Product={add1Product}
          agendarPedido={agendarPedido}
        />
      </div>
    </div>
  );
};

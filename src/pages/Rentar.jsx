import { useEffect, useState } from 'react';
import Navegacion from '../components/Navegacion';
import { getProductos } from '../api/mobiliario.api';
import ProductoRentaCard from '../components/rentar/ProductoRentaCard';
import './Rentar.css';
import { Troca } from '../components/rentar/Troca';
import { useNavigate } from 'react-router-dom';
import { useTruck } from '../hooks/useTruck.js';

export const Rentar = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();
  const { troca, addToTroca, vaciarTroca, deleteItem, Toaster } = useTruck();

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
    navigate('/agendarPedido');
  };

  return (
    <div className='rentarPage'>
      <Toaster />
      <h1>RENTAR</h1>

      <Troca
        inTruck={troca}
        deleteTruck={() => vaciarTroca()}
        deleteItem={deleteItem}
        agendarPedido={agendarPedido}
      />

      <h3>Nuestros productos:</h3>
      <div className='productsRentaContainer'>
        {productos.map((p) => (
          <ProductoRentaCard
            producto={p}
            key={p.id}
            onAddToTroca={() => addToTroca(p)}
          />
        ))}
      </div>
      <Navegacion />
    </div>
  );
};

export default Rentar;

import React, { useEffect, useState } from 'react';
import Navegacion from '../components/Navegacion';
import { getProductos } from '../api/mobiliario.api';
import ProductoRentaCard from '../components/rentar/ProductoRentaCard';
import './Rentar.css';
import { Troca } from '../components/rentar/Troca';

export const Rentar = () => {
  const [productos, setProductos] = useState([]);
  const [troca, setTroca] = useState([]);

  // cargamos los productos de nuestra API
  useEffect(() => {
    async function loadProductos() {
      const productos_obtenidos = await getProductos();
      setProductos(productos_obtenidos.data);
    }
    loadProductos();
  }, []);

  const addToTroca = () => {
    console.log('agregado a la troca')
  };

  return (
    <div className='rentarPage'>
      <h1>RENTAR</h1>
      <Troca/>
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

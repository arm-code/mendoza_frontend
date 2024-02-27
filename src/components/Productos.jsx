import { React, useEffect, useState } from 'react';
import { getProductos } from '../api/mobiliario.api';
import { ProductoCard } from './ProductoCard';

export const Productos = () => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    async function loadProductos() {
      const resp = await getProductos();
      setProducto(resp.data);
    }
    loadProductos();
  }, []);

  return (
    <div className='products-container'>
      {producto.map((producto) => (
        <ProductoCard producto={producto} key={producto.id} />
      ))}
    </div>
  );
};

export default Productos;

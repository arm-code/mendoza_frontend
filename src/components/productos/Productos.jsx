import { React, useEffect, useState } from 'react';
import { getProductos } from '../../api/mobiliario.api';
import { ProductoCard } from './ProductoCard';
import './ProductoStyles.css';

export const Productos = () => {
  const [producto, setProducto] = useState([]);
  const onAddToTroca = () =>{
    console.log('agregado a la troca!!')
  }

  useEffect(() => {
    async function loadProductos() {
      const resp = await getProductos();
      setProducto(resp.data);
    }
    loadProductos();
  }, []);

  return (
    <div className='productsContainer'>
      {producto.map((producto) => (
        <ProductoCard producto={producto} key={producto.id} onAddToTroca={onAddToTroca} details={false}/>
      ))}
    </div>
  );
};

export default Productos;

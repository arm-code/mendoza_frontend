import React, { useEffect, useState } from 'react';
import Navegacion from '../components/Navegacion';
import { getProductos } from '../api/mobiliario.api';
import ProductoCard from '../components/productos/ProductoCard';
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

  const addToTroca = (producto_seleccionado) => {
    //comprobamos si el producto ya esta en la troca
    const existingProduct = troca.find((p) => {
      p.id === producto_seleccionado.id;
    });

    if (existingProduct) {
      //si el producto ya esta en la troca, aumentamos la cantidad
      setTroca((prevTroca) => {
        prevTroca.map((p) =>
          p.id === producto_seleccionado.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      });
    } else {
      //si el producto no esta en la troca lo agregamos
      console.log(troca);
      setTroca((prevTroca) => [
        ...prevTroca,
        { ...producto_seleccionado, cantidad: 1 },
      ]);
    }
  };

  return (
    <div className='rentar-container'>
      <h1>RENTAR</h1>
      <Troca/>
      <h3>Nuestros productos:</h3>
      <div className='products-container'>
        {productos.map((p) => (
          <ProductoCard
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

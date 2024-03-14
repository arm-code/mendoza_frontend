import React, { useEffect, useState } from 'react';
import Navegacion from '../components/Navegacion';
import { getProductos } from '../api/mobiliario.api';
import ProductoRentaCard from '../components/rentar/ProductoRentaCard';
import './Rentar.css';
import { Troca } from '../components/rentar/Troca';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const Rentar = () => {
  const [productos, setProductos] = useState([]);
  const [troca, setTroca] = useState([]);
  const navigate = useNavigate();

  // cargamos los productos de nuestra API
  useEffect(() => {
    async function loadProductos() {
      const productos_obtenidos = await getProductos();
      setProductos(productos_obtenidos.data);
    }
    loadProductos();
  }, []);

  const addToTroca = (p) => {
    const productInCartIndex = troca.findIndex((item) => item.id === p.id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(troca);
      newCart[productInCartIndex].quantity += 1;
      toast.success('Subido a la troca!');
      return setTroca(newCart);
    }

    setTroca((prevState) => [
      ...prevState,
      {
        ...p,
        quantity: 1,
      },
    ]);

    toast.success('Subido a la troca!');
  };

  const vaciarTroca = () => {
    setTroca([]);
  };

  const deleteItem = (idForDelete) => {
    const newTroca = troca.filter((p) => p.id !== idForDelete);
    console.log('se ha presionado quitar', idForDelete);
    setTroca(newTroca);
  };

  const agendarPedido = () => {
    console.log('agendando pedido!!');
    navigate('/agendarPedido')
  };

  // debido a la asincronia del useState, utilizamos un useEffect para poder mostrar el valor de la troca actualizado, ya que si intentamos imprimir el valor de troca, mostrara lo que tenga ese momento y puede suceder que  aun no se haya procesado el cambio de estado en useState.
  useEffect(() => {
    console.log('En la troca: ', troca);
  }, [troca]);

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

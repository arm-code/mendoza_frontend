import React from 'react';
import './MenuPrincipalStyles.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export const MenuPrincipal = () => {
  
  const navigate = useNavigate();

  const onRentar = () =>{
    navigate('/rentar')
  }

  const onProductos = () =>{
    navigate('/productos')
  }
  return (
    <div className='menu-principal'>
      <div>
        <h1>Mobiliario Mendoza</h1>        
        <h2>Renta de mesas y sillas para todo tipo de eventos...</h2>

        <button onClick={onRentar}>Ir rentar</button>
        
      </div>
    </div>
  );
};

export default MenuPrincipal;

import React from "react";
import { Link } from "react-router-dom";

export const MenuPrincipal = () => {
  return (
    <div className="mendoza-container">
      <h1>MOBILIARIO MENDOZA</h1>
      <hr />
      <h2>Menu principal:</h2>
      <ul className="menu-opciones">
        <Link to="/productos" className="ligas"><li>NUESTROS PRODUCTOS</li></Link>
        <Link to="/disponibilidad" className="ligas"><li>CHECAR DISPONIBILIDAD</li></Link>
        <Link to="/rentar" className="ligas"><li>RENTAR</li></Link>              
        <Link to="/pedidos" className="ligas"><li>CHECAR PEDIDOS</li></Link>
        <Link to="/inventario" className="ligas"><li>CHECAR INVENTARIO</li></Link>
      </ul>      
    </div>
  );
};

export default MenuPrincipal;

import React from "react";
import Navegacion from "../components/Navegacion";
import { Inventario } from "../components/inventario/Inventario";
import './ChecarInventario.css'

export const ChecarInventario = () => {
  return (
    <div className="ChecarInventarioPage">
      <h1>Inventario</h1>
      <Inventario />
      <Navegacion />
    </div>
  );
};

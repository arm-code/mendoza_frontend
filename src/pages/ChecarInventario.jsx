import React from "react";
import Navegacion from "../components/Navegacion";
import { Inventario } from "../components/Inventario";

export const ChecarInventario = () => {
  return (
    <div className="container-pages">
      <h1>Inventario</h1>
      <Inventario />
      <Navegacion />
    </div>
  );
};

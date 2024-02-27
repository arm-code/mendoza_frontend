import React from "react";
import { Link } from "react-router-dom";

export const Navegacion = () => {
  return <Link to="/" className="nave"><h3 className="volver">Volver al Menu principal</h3></Link>;
};

export default Navegacion;

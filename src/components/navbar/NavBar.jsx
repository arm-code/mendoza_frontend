import { Link } from "react-router-dom";
import './NavBarStyles.css'

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link to={'/'}>Menu Principal</Link>
        <Link to={'/disponibilidad'}>Checar Disponibilidad</Link>
        <Link to={'/pedidos'}>Checar Pedidos</Link>
        <Link to={'/inventario'}>Checar Inventario</Link>
        <Link to={'/rentar'}>Rentar</Link>
      </ul>
    </nav>
  );
};


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChecarDisponibilidad } from './pages/ChecarDisponibilidad.jsx';
import { ChecarInventario } from './pages/ChecarInventario.jsx';
import { Rentar } from './pages/Rentar.jsx';
import { ChecarPedidos } from './pages/ChecarPedidos.jsx';
import { MenuPrincipal } from './pages/MenuPrincipal.jsx';
import ChecarProductos from './pages/ChecarProductos.jsx';
import { AgendarPedido } from './components/rentar/AgendarPedido.jsx';
import { TruckProvider } from './context/TruckProvider.jsx';
import { OrdenRenta } from './components/rentar/OrdenRenta.jsx';
import { ClientProvider } from './context/ClientProvider.jsx';

export const Mendoza = () => {
  return (
    <TruckProvider>
      <ClientProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/principal' />} />
            <Route path='/principal' element={<MenuPrincipal />} />
            <Route path='/productos' element={<ChecarProductos />} />
            <Route path='/rentar' element={<Rentar />} />
            <Route path='/disponibilidad' element={<ChecarDisponibilidad />} />
            <Route path='/inventario' element={<ChecarInventario />} />
            <Route path='/pedidos' element={<ChecarPedidos />} />
            <Route path='/agendarPedido' element={<AgendarPedido />} />
            <Route path='/ordenDeCompra' element={<OrdenRenta />} />
          </Routes>
        </BrowserRouter>
      </ClientProvider>
    </TruckProvider>
  );
};

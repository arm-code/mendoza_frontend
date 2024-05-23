import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ChecarDisponibilidad } from './pages/ChecarDisponibilidad.jsx';
import { ChecarInventario } from './pages/ChecarInventario.jsx';
import { Rentar } from './pages/rentar/Rentar.jsx';
import { ChecarPedidos } from './pages/pedidos/ChecarPedidos.jsx';
import { MenuPrincipal } from './pages/principal/MenuPrincipal.jsx';
import ChecarProductos from './pages/productos/ChecarProductos.jsx';
import { RegistrarCliente } from './components/RegistrarCliente/RegistrarCliente.jsx';
import { TruckProvider } from './context/TruckProvider.jsx';
import { OrdenRenta } from './components/ordenCompra/OrdenRenta.jsx';
import { ClientProvider } from './context/ClientProvider.jsx';
import { NavBar } from './components/navbar/NavBar.jsx';
import { PedidoDetail } from './components/pedidoDetailed/PedidoDetail.jsx';

export const Mendoza = () => {
  return (
    <TruckProvider>
      <ClientProvider>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<Navigate to='/principal' />} />
            <Route path='/principal' element={<MenuPrincipal />} />
            <Route path='/productos' element={<ChecarProductos />} />
            <Route path='/rentar' element={<Rentar />} />
            <Route path='/disponibilidad' element={<ChecarDisponibilidad />} />
            <Route path='/inventario' element={<ChecarInventario />} />
            <Route path='/pedidos' element={<ChecarPedidos />} />
            <Route path='/registrarCliente' element={<RegistrarCliente />} />
            <Route path='/ordenDeCompra' element={<OrdenRenta />} />
            <Route path='/pedido-detalles' element={<PedidoDetail />} />
          </Routes>
        </BrowserRouter>
      </ClientProvider>
    </TruckProvider>
  );
};

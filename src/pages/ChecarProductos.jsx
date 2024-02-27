import React from 'react'
import Navegacion from '../components/Navegacion'
import Productos from '../components/productos/Productos'

export const ChecarProductos = () => {
  return (
    <div className='checarProductoPage'>
        <h1>Precios de nuestros productos</h1>        
        <Productos/>
        <Navegacion/>
    </div>
  )
}

export default ChecarProductos
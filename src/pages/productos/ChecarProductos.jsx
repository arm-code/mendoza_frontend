import React from 'react'
import Productos from '../../components/productos/Productos'

export const ChecarProductos = () => {
  return (
    <div className='checarProductoPage'>
        <h1>Precios de nuestros productos</h1>        
        <Productos/>        
    </div>
  )
}

export default ChecarProductos
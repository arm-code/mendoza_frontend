import React from 'react'
import Navegacion from '../components/Navegacion'
import Productos from '../components/Productos'

export const ChecarProductos = () => {
  return (
    <div className='container-pages'>
        <h1>Nuestros productos</h1>
        <Productos/>
        <Navegacion/>
    </div>
  )
}

export default ChecarProductos
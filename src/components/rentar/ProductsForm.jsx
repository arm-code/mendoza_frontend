import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProductos } from "../../api/mobiliario.api";
import "./ProductsForm.css";
import { useForm } from "react-hook-form";

export const ProductsForm = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();
  const [productoSeleccionado, setProductoSeleccionado] = useState("");
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState([]);

  // hay que obtener de la base de datos los diferentes productos disponibles
  useEffect(() => {
    async function loadProductos() {
      const productos_obtenidos = await getProductos();
      setProductos(productos_obtenidos.data);
    }
    loadProductos();
  }, []);

  const handleProductoChange = (event) => {
    setProductoSeleccionado(event.target.value);
  };

  const handleCantidadChange = (event) => {
    setCantidadSeleccionada(parseInt(event.target.value, 10) || 1);
  };

  const agregarProducto = () => {
    // Verificar que la opción seleccionada no esté vacía
    if (productoSeleccionado.trim() === "") {
      return;
    }

    // Obtener el producto seleccionado
    const producto = productos.find(
      (p) => p.product_name === productoSeleccionado
    );

    // Verificar si el producto existe
    if (!producto) {
      return;
    }

    // Calcular el total
    const total = producto.product_cost * cantidadSeleccionada;

    // Crear un nuevo objeto con la información
    const nuevoProducto = {
      nombre: producto.product_name,
      cantidad: cantidadSeleccionada,
      precioUnitario: producto.product_cost,
      total,
    };

    // Agregar el nuevo producto a la lista de productos seleccionados
    setOpcionesSeleccionadas([...opcionesSeleccionadas, nuevoProducto]);

    // Limpiar la opción y la cantidad seleccionada después de agregarla
    setProductoSeleccionado("");
    setCantidadSeleccionada(1);
  };

  // Calcular el total de la orden
  const totalOrden = opcionesSeleccionadas.reduce(
    (total, producto) => total + producto.total,
    0
  );

  return (
    <div>
      <h1>Usted está rentando...</h1>
      <div className="div-rentando">
        <label htmlFor="productos">Elija qué va rentar:</label>
        <select
          name="productos"
          id="productos"
          value={productoSeleccionado}
          onChange={handleProductoChange}
        >
          <option disabled value="" hidden></option>
          {productos.map((p) => (
            <option key={p.id} value={p.product_name}>
              {p.product_name} - $ {p.product_cost}
            </option>
          ))}
        </select>
        <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          value={cantidadSeleccionada}
          onChange={handleCantidadChange}
        />
        <button onClick={agregarProducto}>agregar</button>
      </div>
      <h2>Orden de compra:</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {opcionesSeleccionadas.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>{producto.cantidad}</td>
              <td>${producto.precioUnitario}</td>
              <td>${producto.total}</td>
            </tr>
          ))}
          <tr>
            <td>Total:</td>
            <td></td>
            <td></td>
            <td className="total-pagar">${totalOrden}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

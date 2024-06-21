import { useEffect, useRef, useState } from 'react';
import './PedidoDetail.css';
import { getProductos } from '../../api/mobiliario.api';
import html2canvas from 'html2canvas';

export const PedidoDetail = ({ pedido, setShowDetails }) => {
  const { order_details } = pedido;
  const divRef = useRef(null);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function loadProductos() {
      const resp = await getProductos();
      setProductos(resp.data);
    }

    loadProductos();
  }, []);

  const handleDownloadImage = () => {
    if (divRef.current) {
      html2canvas(divRef.current, { scrollY: -window.scrollY })
        .then((canvas) => {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = 'div_image.png';
          link.click();
        })
        .catch((err) => {
          console.error('Error generating image:', err);
        });
    }
  };

  return (
    <div ref={divRef} className='details'>
      <div className='encabezado'>
        <h4 style={{ margin: 0 }}>Detalles del pedido</h4>
        <button className='btn-close' onClick={() => setShowDetails(false)}>✖
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Producto</th>
            </tr>
          </thead>
          <tbody>
            {order_details.map((d) => (
              <tr key={d.id}>
                <td>{d.quantity} </td>
                <td>{d.product.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p style={{ margin: 0 }}>Telefono: {pedido.customer.phone}</p>

        <p style={{ margin: 0 }}>
          {' '}
          Direccion:
          {pedido.address.street} {pedido.address.number},{' '}
          {pedido.address.colony}
        </p>
        <p style={{ margin: 0 }}>Vas a cobrar: ${pedido.total}</p>
      </div>
      <div className='buttons-contain'>
        
        <button className='btn-verde' onClick={handleDownloadImage}>
          Generar imagen
        </button>
      </div>
    </div>
  );
};

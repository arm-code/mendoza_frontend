import './ProductoRentaCard.css';

export const ProductoRentaCard = ({ producto, onAddToTroca }) => {
  return (
    <div className='cardRenta'>
      <div className='partRenta'>
        <p>{producto.product_name}</p>
        <hr className='divider' />
        <p>Costo: </p>
        <p className='cost'>
          <strong>$ {Math.floor(producto.product_cost)}</strong>
        </p>
      </div>
      <button className='buttonRentar' onClick={onAddToTroca}>
        Subir a la troca
      </button>
    </div>
  );
};

export default ProductoRentaCard;

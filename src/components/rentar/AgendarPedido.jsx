import './AgendarPedido.css';

export const AgendarPedido = () => {
  return (
    <div className='agendarPedido'>
      <h1>AGENDANDO PEDIDO...</h1>
      <div className='containerForms'>
        <form method='POST' className='formAgendar'>
          <div className='fecha'>
            <label htmlFor='fechaEntrega'>Fecha de entrega</label>
            <input type='date' id='fechaEntrega' name='fechaEntrega' />
          </div>
          <div className='cliente'>
            <label htmlFor='nombreCliente'>Nombre del cliente</label>
            <input type='text' id='nombreCliente' name='nombreCliente' />
            <label htmlFor='apellidosCliente'>Apellidos</label>
            <input type='text' id='apellidosCliente' name='apellidosCliente' />
            <label htmlFor='telefonoCliente'>Telefono</label>
            <input type='text' id='telefonoCliente' name='telefonoCliente' />
          </div>
          <div className='direccion'>
            <label htmlFor='calle'>Calle</label>
            <input type='text' id='calle' name='calle' />
            <label htmlFor='numero'>Numero</label>
            <input type='text' id='numero' name='numero' />
            <label htmlFor='colonia'>Colonia</label>
            <input type='text' id='colonia' name='colonia' />
          </div>
          <div>
            <button>Continuar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

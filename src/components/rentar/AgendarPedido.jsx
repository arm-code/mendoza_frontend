import './AgendarPedido.css';

export const AgendarPedido = () => {
  return (
    <div className='agendarPedido'>
      <h1>AGENDANDO PEDIDO...</h1>
      <div className='containerForms'>
        <form action='' className='formAgendar'>
        <div className='fecha'>
            <label htmlFor='fechaEntrega'>fecha de entrega</label>
            <input type="date" id='fechaEntrega' name='fechaEntrega' />
            
          </div>
          <div className='cliente'>
            <label htmlFor='nombreCliente'>nombre del cliente</label>
            <input type="text" id='nombreCliente' name='nombreCliente' />
            <label htmlFor='apellidosCliente'>apellidos</label>
            <input type="text" id='apellidosCliente' name='apellidosCliente' />
            <label htmlFor='telefonoCliente'>telefono</label>
            <input type="text" id='telefonoCliente' name='telefonoCliente' />
          </div>
          <div className='direccion'>
            <label htmlFor='calle'>calle</label>
            <input type="text" id='calle' name='calle' />
            <label htmlFor='numero'>numero</label>
            <input type="text" id='numero' name='numero' />
            <label htmlFor='colonia'>colonia</label>
            <input type="text" id='colonia' name='colonia' />
          </div>
            <button>Continuar</button>
        </form>
      </div>
    </div>
  );
};

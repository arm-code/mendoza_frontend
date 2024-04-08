import './AgendarPedido.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useClient } from '../../hooks/useClient';

export const AgendarPedido = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setClient } = useClient();

  const onSubmit = (data) => {
    setClient(data);
    console.log('procediendo con la orden de compra...');
    navigate('/ordenDeCompra');
  };

  return (
    <div className='agendarPedido'>
      <h1>AGENDANDO PEDIDO...</h1>
      <div className='containerForms'>
        <form onSubmit={handleSubmit(onSubmit)} className='formAgendar'>
          <div className='fecha'>
            <label htmlFor='fechaEntrega'>Fecha de entrega</label>
            <input
              type='date'
              id='fechaEntrega'
              name='fechaEntrega'
              {...register('fechaEntrega')}
            />
          </div>
          <div className='cliente'>
            <label htmlFor='nombreCliente'>Nombre del cliente</label>
            <input
              type='text'
              id='nombreCliente'
              name='nombreCliente'
              placeholder='Ingrese el nombre'
              {...register('nombreCliente')}
            />
            <label htmlFor='apellidosCliente'>Apellidos</label>
            <input
              type='text'
              id='apellidosCliente'
              name='apellidosCliente'
              placeholder='Ingrese el apellido'
              {...register('apellidosCliente')}
            />
            <label htmlFor='telefonoCliente'>Telefono</label>
            <input
              type='text'
              id='telefonoCliente'
              name='telefonoCliente'
              placeholder='Ingrese el telefono'
              {...register('telefonoCliente')}
            />
          </div>
          <div className='direccion'>
            <label htmlFor='calle'>Calle</label>
            <input
              type='text'
              id='calle'
              name='calle'
              placeholder='Nombre de la calle'
              {...register('calle')}
            />
            <label htmlFor='numero'>Num</label>
            <input
              type='text'
              id='numero'
              name='numero'
              placeholder='Numero de calle'
              {...register('numeroCalle')}
            />
            <label htmlFor='colonia'>Colonia</label>
            <input
              type='text'
              id='colonia'
              name='colonia'
              placeholder='Ingrese la colonia'
              {...register('colonia')}
            />
          </div>
          <div>
            <button type='submit'>Continuar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

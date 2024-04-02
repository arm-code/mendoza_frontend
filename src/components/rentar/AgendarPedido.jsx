import { useEffect } from 'react';
import { useTruck } from '../../hooks/useTruck';
import './AgendarPedido.css';
import { useForm } from 'react-hook-form';

export const AgendarPedido = () => {
  const { troca } = useTruck();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log('truck content: ', troca);
  }, []);

  return (
    <div className='agendarPedido'>
      <h1>AGENDANDO PEDIDO...</h1>
      <div className='containerForms'>
        <form onSubmit={handleSubmit(onSubmit)} className='formAgendar'>
          <div className='fecha'>
            <label htmlFor='fechaEntrega'>fecha de entrega</label>
            <input
              type='date'
              id='fechaEntrega'
              name='fechaEntrega'
              {...register('fechaEntrega')}
            />
          </div>
          <div className='cliente'>
            <label htmlFor='nombreCliente'>nombre del cliente</label>
            <input
              type='text'
              id='nombreCliente'
              name='nombreCliente'
              {...register('nombreCliente')}
            />
            <label htmlFor='apellidosCliente'>apellidos</label>
            <input
              type='text'
              id='apellidosCliente'
              name='apellidosCliente'
              {...register('apellidosCliente')}
            />
            <label htmlFor='telefonoCliente'>telefono</label>
            <input
              type='text'
              id='telefonoCliente'
              name='telefonoCliente'
              {...register('telefonoCliente')}
            />
          </div>
          <div className='direccion'>
            <label htmlFor='calle'>calle</label>
            <input type='text' id='calle' name='calle' {...register('calle')} />
            <label htmlFor='numero'>numero</label>
            <input
              type='text'
              id='numero'
              name='numero'
              {...register('numeroCalle')}
            />
            <label htmlFor='colonia'>colonia</label>
            <input
              type='text'
              id='colonia'
              name='colonia'
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

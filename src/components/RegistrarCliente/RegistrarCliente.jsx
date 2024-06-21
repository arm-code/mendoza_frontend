import './RegistrarCliente.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useClient } from '../../hooks/useClient';
import { createAddress, createClient } from '../../api/mobiliario.api';

export const RegistrarCliente = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { setClient } = useClient();

  const onSubmit = async (data) => {
    const [idCustomer, idAddress] = await postClient(data);
    data.idCustomer = idCustomer;
    data.idAddress = idAddress;
    setClient(data);
    navigate('/rentar');
  };

  const postClient = async (dataClient) => {
    const responseClient = await createClient({
      name: dataClient.nombreCliente,
      last_name: dataClient.apellidosCliente,
      phone: dataClient.telefonoCliente,
    });

    const responseAddress = await createAddress({
      street: dataClient.calle,
      colony: dataClient.colonia,
      number: dataClient.numeroCalle,
      customer: responseClient.data.id,
    });
    return [responseClient.data.id, responseAddress.data.id];
  };

  return (
    <div className='agendarPedido'>      

      <div className='containerForms'>
      <h3>Primero hay que registrar los datos del cliente... Despues presione continuar.</h3>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className='formAgendar'>
          <div className='fecha'>
            <label htmlFor='fechaEntrega'>Fecha de entrega:</label>
            <input
              type='date'
              id='fechaEntrega'
              name='fechaEntrega'
              {...register('fechaEntrega', {
                required: 'Este campo es obligatorio!!',
              })}
            />
            {errors.fechaEntrega && (
              <span
                style={{ margin: 0, color: 'red', fontSize: 12, padding: 0 }}
              >
                {errors.fechaEntrega.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor='nombreCliente'>Nombre del cliente:</label>
            <input
              type='text'
              id='nombreCliente'
              name='nombreCliente'
              placeholder='Ingrese el nombre'
              {...register('nombreCliente')}
            />
          </div>

          <div>
            <label htmlFor='apellidosCliente'>Apellidos:</label>
            <input
              type='text'
              id='apellidosCliente'
              name='apellidosCliente'
              placeholder='Ingrese el apellido'
              {...register('apellidosCliente')}
            />
          </div>

          <div>
            <label htmlFor='telefonoCliente'>Telefono:</label>
            <input
              type='text'
              id='telefonoCliente'
              name='telefonoCliente'
              placeholder='Ingrese el telefono'
              {...register('telefonoCliente', {
                required: 'Este campo es obligatorio!!',
              })}
            />
            {errors.telefonoCliente && (
              <span
                style={{ margin: 0, color: 'red', fontSize: 12, padding: 0 }}
              >
                {errors.telefonoCliente.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor='calle'>Calle:</label>
            <input
              type='text'
              id='calle'
              name='calle'
              placeholder='Nombre de la calle'
              {...register('calle', {
                required: 'Este campo es obligatorio!!',
              })}
            />
            {errors.calle && (
              <span
                style={{ margin: 0, color: 'red', fontSize: 12, padding: 0 }}
              >
                {errors.calle.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor='numero'>Numero:</label>
            <input
              type='text'
              id='numero'
              name='numero'
              placeholder='Numero de calle'
              {...register('numeroCalle', {
                required: 'Este campo es obligatorio!!!',
              })}
            />

            {errors.numeroCalle && (
              <span
                style={{ margin: 0, color: 'red', fontSize: 12, padding: 0 }}
              >
                {errors.numeroCalle.message}
              </span>
            )}
          </div>

          <div>
            <label htmlFor='colonia'>Colonia:</label>
            <input
              type='text'
              id='colonia'
              name='colonia'
              placeholder='Ingrese la colonia'
              {...register('colonia', {
                required: 'Este campo es obligatorio!!',
              })}
            />

            {errors.colonia && (
              <span
                style={{ margin: 0, color: 'red', fontSize: 12, padding: 0 }}
              >
                {errors.colonia.message}
              </span>
            )}
          </div>

          <div className='button-continuar'>
            <button type='submit'>Continuar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

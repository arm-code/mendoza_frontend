import './RegistrarCliente.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useClient } from '../../hooks/useClient';
import { createAddress, createClient } from '../../api/mobiliario.api';

export const RegistrarCliente = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setClient } = useClient();

  const onSubmit = async (data) => {

    const [idCustomer, idAddress] = await postClient(data)
    data.idCustomer = idCustomer
    data.idAddress = idAddress
    setClient(data);
    navigate('/rentar');
  };

  const postClient = async (dataClient) => {

    const responseClient = await createClient({
      name: dataClient.nombreCliente,
      last_name: dataClient.apellidosCliente,
      phone: dataClient.telefonoCliente      
    });

      const responseAddress = await createAddress({
      street: dataClient.calle,
      colony: dataClient.colonia,
      number: dataClient.numeroCalle,
      customer: responseClient.data.id      
    });        
    return [responseClient.data.id, responseAddress.data.id]
  };

  return (
    <div className='agendarPedido'>
      <div className='container-information'>
        <h3>Primero vamos a registrar los datos del cliente...</h3>
      </div>
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
          <div className='button-continuar'>
            <button type='submit'>Continuar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

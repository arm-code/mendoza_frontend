import axios from 'axios';

export const getDisponibilidad = () => {
  return axios.get('http://localhost:8000/mobiliario/api/v1/forniture/');
};

export const getProductos = () => {
  return axios.get('http://localhost:8000/mobiliario/api/v1/products/');
};

export const createClient = (client) => {
  return axios.post('http://localhost:8000/mobiliario/api/v1/customers/', client);
};

export const createAddress = (address) => {
  return axios.post(
    'http://localhost:8000/mobiliario/api/v1/address/',
    address
  );
};

export const createOrder = (order) => {
  return axios.post(
    'http://localhost:8000/mobiliario/api/v1/order/',
    order
  );
};

export const createOrderDetailed = (detailed) => {
  return axios.post(
    'http://localhost:8000/mobiliario/api/v1/order-detailed/',
    detailed
  );
};

export const getOrder = () =>{
  return axios.get('http://localhost:8000/mobiliario/api/v1/order-check/')
}
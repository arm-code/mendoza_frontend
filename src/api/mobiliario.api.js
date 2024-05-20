import axios from 'axios';

export const getDisponibilidad = () => {
  return axios.get('http://localhost:8000/mobiliario/api/v1/forniture/');
};

export const getProductos = () => {
  return axios.get('http://localhost:8000/mobiliario/api/v1/products/');
};

export const createClient = (client) => {
  return axios.post('http://localhost:8000/mobiliario/api/v1/clients/', client);
};

export const createAddress = (address) => {
  return axios.post(
    'http://localhost:8000/mobiliario/api/v1/address/',
    address
  );
};

export const createCart = (cart) => {
  return axios.post('http://localhost:8000/mobiliario/api/v1/cart/', cart);
};

export const createPurchaseOrder = (order) => {
  return axios.post(
    'http://localhost:8000/mobiliario/api/v1/purchase-order/',
    order
  );
};

export const createDetailedOrder = (detailed) => {
  return axios.post(
    'http://localhost:8000/mobiliario/api/v1/detailed-order/',
    detailed
  );
};

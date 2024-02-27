import axios from "axios";

export const getDisponibilidad = () => {
  return axios.get("http://localhost:8000/mobiliario/api/v1/forniture/");
};

export const getProductos = () =>{
  return axios.get("http://localhost:8000/mobiliario/api/v1/products/")
};

export const createClient = (client) => {
    return axios.post("http://localhost:8000/mobiliario/api/v1/products/", client)
}

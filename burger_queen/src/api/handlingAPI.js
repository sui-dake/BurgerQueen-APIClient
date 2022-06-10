import axios from "axios";

const api = "http://localhost:4000";
//payload = DATA
export const getProducts = () =>
  axios.get(`${api}/products`).then((res) => res.data);

export const getProduct = (id) =>
  axios.get(`${api}/products/${id}`).then((res) => res.data);

export const deleteProduct = (id) => axios.delete(`${api}/products/${id}`);

export const updateProduct = (id, payload) =>
  axios.patch(`${api}/products/${id}`, payload);

export const getOrders = () =>
  axios.get(`${api}/orders`).then((res) => res.data);

export const getOrder = (id) =>
  axios.get(`${api}/orders/${id}`).then((res) => res.data);

export const deleteOrder = (id) => axios.delete(`${api}/order/${id}`);

export const updateOrder = (id, payload) =>
  axios.patch(`${api}/order/${id}`, payload);

export const postOrder = (payload) =>
  axios.post(`${api}/orders/`, payload)
import axios from 'axios';

export const URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';

const api = axios.create({
  baseURL: URL,
});

export const getImageUrl = (path) => {
  if (!path) return '';

  return `${URL}${path}`;
};

// Картинка товара
export const getProductImageUrl = (id) => {
  return `${URL}/product_img/${id}.jpeg`;
};

export const getCategories = () => api.get('/categories/all');

export const getCategoriesById = (id) => api.get(`/categories/${id}`);

export const getProducts = () => api.get('/products/all');

export const getProductsById = (id) => api.get(`/products/${id}`);

export const sendOrder = (data) => api.post('/order/send', data);

export const sendSale = (data) => api.post('/sale/send', data);

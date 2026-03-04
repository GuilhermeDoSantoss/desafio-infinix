import axios from 'axios';
import { Product, ProductFormData } from '../types/Product';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productService = {
  // Listar todos os produtos
  getAll: async (): Promise<Product[]> => {
    const response = await api.get<Product[]>('/products/');
    return response.data;
  },

  // Buscar produto por ID
  getById: async (id: number): Promise<Product> => {
    const response = await api.get<Product>(`/products/${id}/`);
    return response.data;
  },

  // Criar novo produto
  create: async (data: ProductFormData): Promise<Product> => {
    const payload = {
      name: data.name,
      price: parseFloat(data.price),
      in_stock: data.in_stock,
    };
    const response = await api.post<Product>('/products/', payload);
    return response.data;
  },

  // Atualizar produto
  update: async (id: number, data: ProductFormData): Promise<Product> => {
    const payload = {
      name: data.name,
      price: parseFloat(data.price),
      in_stock: data.in_stock,
    };
    const response = await api.put<Product>(`/products/${id}/`, payload);
    return response.data;
  },

  // Deletar produto
  delete: async (id: number): Promise<void> => {
    await api.delete(`/products/${id}/`);
  },
};

export default api;
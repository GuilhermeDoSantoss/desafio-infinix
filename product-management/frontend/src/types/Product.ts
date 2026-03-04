export interface Product {
  id: number;
  name: string;
  price: number;
  in_stock: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductFormData {
  name: string;
  price: string;
  in_stock: boolean;
}

export interface ApiError {
  errors: {
    [key: string]: string[];
  };
}
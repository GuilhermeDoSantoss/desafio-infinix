import React, { useState, useEffect, useCallback } from 'react';
import { Product, ProductFormData } from './types/Product';
import { productService } from './services/api';
import ProductForm from './components/ProductForm';
import ProductCard from './components/ProductCard';
import Toast from './components/Toast';
import axios from 'axios';

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    type: 'info',
  });

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({ show: true, message, type });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  const fetchProducts = useCallback(async () => {
    try {
      setIsFetching(true);
      const data = await productService.getAll();
      setProducts(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      showToast('Erro ao carregar produtos', 'error');
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleCreateProduct = async (formData: ProductFormData) => {
    try {
      setIsLoading(true);
      const newProduct = await productService.create(formData);
      
      // Adicionar ao estado local
      setProducts((prev) => [newProduct, ...prev]);
      
      showToast('Produto criado com sucesso!', 'success');
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      
      if (axios.isAxiosError(error) && error.response?.data?.errors) {
        const errors = error.response.data.errors;
        const errorMessages = Object.entries(errors)
          .map(([field, messages]) => `${field}: ${(messages as string[]).join(', ')}`)
          .join(' | ');
        showToast(`Erro: ${errorMessages}`, 'error');
      } else {
        showToast('Erro ao criar produto. Verifique os dados e tente novamente.', 'error');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir este produto?')) {
      return;
    }

    try {
      await productService.delete(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      showToast('Produto excluído com sucesso!', 'success');
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      showToast('Erro ao excluir produto', 'error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            Gerenciamento de Produtos
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Sistema completo de cadastro e listagem
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulário */}
          <div className="lg:col-span-1">
            <ProductForm onSubmit={handleCreateProduct} isLoading={isLoading} />
          </div>

          {/* Lista de Produtos */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Produtos Cadastrados
              </h2>
              <p className="text-gray-600">
                Total: {products.length} produto(s)
              </p>
            </div>

            {isFetching ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : products.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-500 text-lg">
                  Nenhum produto cadastrado ainda.
                </p>
                <p className="text-gray-400 mt-2">
                  Use o formulário ao lado para adicionar seu primeiro produto!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onDelete={handleDeleteProduct}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}
    </div>
  );
}

export default App;
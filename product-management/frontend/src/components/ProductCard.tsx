import React from 'react';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onDelete?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800 flex-1">
          {product.name}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            product.in_stock
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {product.in_stock ? 'Em Estoque' : 'Fora de Estoque'}
        </span>
      </div>

      <div className="mb-4">
        <p className="text-3xl font-bold text-blue-600">
          {formatPrice(product.price)}
        </p>
      </div>

      <div className="text-sm text-gray-500 mb-4">
        <p>Criado em: {new Date(product.created_at).toLocaleDateString('pt-BR')}</p>
      </div>

      {onDelete && (
        <button
          onClick={() => onDelete(product.id)}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
        >
          Excluir
        </button>
      )}
    </div>
  );
};

export default ProductCard;
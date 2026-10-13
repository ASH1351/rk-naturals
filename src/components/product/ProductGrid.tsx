import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
  onResetFilters?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  emptyMessage = 'No botanical products found matching your active criteria.',
  onResetFilters,
}) => {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-[#E4E8DF] p-12 text-center my-6">
        <div className="w-14 h-14 rounded-full bg-[#E8F0E3] text-[#15952F] flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-6 h-6" />
        </div>
        <h4 className="font-serif text-xl text-[#202820] mb-2">No matching products found</h4>
        <p className="text-xs text-[#777D73] max-w-md mx-auto mb-6">{emptyMessage}</p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="px-6 py-2.5 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors"
          >
            Clear All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';
import { Search, ArrowLeft } from 'lucide-react';

export const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    return PRODUCTS.filter((p) => {
      return (
        p.name.toLowerCase().includes(trimmed) ||
        p.tagline.toLowerCase().includes(trimmed) ||
        p.description.toLowerCase().includes(trimmed) ||
        p.category.toLowerCase().includes(trimmed) ||
        p.tags.some((t) => t.toLowerCase().includes(trimmed)) ||
        p.ingredients.some((ing) => ing.toLowerCase().includes(trimmed))
      );
    });
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <div>
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#15952F] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Collections</span>
        </Link>
      </div>

      <div className="border-b border-[#E4E8DF] pb-6">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
          Botanical Catalog Search
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#202820] mt-1">
          Search Results for &ldquo;{query}&rdquo;
        </h1>
        <p className="text-xs text-[#777D73] mt-2">
          Found <strong>{results.length}</strong> matching handcrafted products
        </p>
      </div>

      <ProductGrid
        products={results}
        emptyMessage={`We couldn't find any botanical products matching "${query}". Try searching for terms like "saffron", "rose", "oil", or "soap".`}
      />
    </div>
  );
};

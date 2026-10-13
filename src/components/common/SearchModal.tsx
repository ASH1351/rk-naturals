import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUICK_SEARCH_TERMS = ['Saffron', 'Rose Water', 'Hair Oil', 'Honey Soap', 'Body Butter', 'Scalp Tonic', 'Kumkumadi'];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      setResults([]);
      return;
    }

    const filtered = PRODUCTS.filter((p) => {
      return (
        p.name.toLowerCase().includes(trimmed) ||
        p.tagline.toLowerCase().includes(trimmed) ||
        p.description.toLowerCase().includes(trimmed) ||
        p.category.toLowerCase().includes(trimmed) ||
        p.tags.some((t) => t.toLowerCase().includes(trimmed)) ||
        p.ingredients.some((ing) => ing.toLowerCase().includes(trimmed))
      );
    });

    setResults(filtered.slice(0, 6));
  }, [query]);

  const handleSelectProduct = (slug: string) => {
    onClose();
    navigate(`/products/${slug}`);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E4E8DF] overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <form onSubmit={handleSearchSubmit} className="relative border-b border-[#E4E8DF] p-4 sm:p-5 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#15952F] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search natural face oils, soaps, hair tonics, ingredients..."
            className="w-full bg-transparent text-base sm:text-lg text-[#202820] placeholder-[#777D73] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-gray-600 rounded"
              aria-label="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs uppercase tracking-wider font-semibold text-[#777D73] hover:text-[#202820] px-2 py-1 rounded bg-[#FAF9F4] border border-[#E4E8DF]"
          >
            Esc
          </button>
        </form>

        {/* Content Body */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#777D73] mb-3">
                <Tag className="w-3.5 h-3.5 text-[#15952F]" />
                <span>Popular Botanical Searches</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {QUICK_SEARCH_TERMS.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 rounded-full bg-[#FAF9F4] hover:bg-[#E8F0E3] hover:text-[#15952F] text-xs font-medium text-[#202820] border border-[#E4E8DF] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[#E4E8DF]/60">
                <p className="text-xs text-[#777D73] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#49B82D]" />
                  <span>Looking for raw extracts? Visit our <button onClick={() => { onClose(); navigate('/ingredients'); }} className="text-[#15952F] font-semibold hover:underline">Botanical Ingredient Directory</button>.</span>
                </p>
              </div>
            </div>
          ) : results.length > 0 ? (
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#777D73] mb-3">
                Matching Products ({results.length})
              </p>
              <div className="space-y-2">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product.slug)}
                    className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#FAF9F4] cursor-pointer transition-colors border border-transparent hover:border-[#E4E8DF]"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded-lg shrink-0 border border-[#E4E8DF]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs uppercase font-medium text-[#15952F] tracking-wider">
                        {product.category} • {product.sizeOrVolume}
                      </p>
                      <h4 className="text-sm font-semibold text-[#202820] truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#777D73] truncate">
                        {product.tagline}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-bold text-[#202820]">₹{product.price}</p>
                      {product.compareAtPrice && (
                        <p className="text-xs line-through text-gray-400">₹{product.compareAtPrice}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleSearchSubmit}
                className="mt-4 w-full py-2.5 bg-[#FAF9F4] hover:bg-[#E8F0E3] text-[#15952F] text-xs font-semibold rounded-xl border border-[#E4E8DF] flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>View all search results for &ldquo;{query}&rdquo;</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm font-medium text-[#202820]">No botanical products found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-[#777D73] mt-1">
                Try searching for general terms like &quot;oil&quot;, &quot;soap&quot;, &quot;rose&quot;, or &quot;scalp&quot;.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

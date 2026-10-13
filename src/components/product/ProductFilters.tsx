import React from 'react';
import { Filter, X, ArrowUpDown } from 'lucide-react';
import { ProductCategory } from '../../types';

export interface FilterState {
  category: ProductCategory | 'all';
  priceRange: 'all' | 'under-500' | '500-1000' | 'over-1000';
  inStockOnly: boolean;
  sortBy: 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'name-asc';
}

interface ProductFiltersProps {
  filters: FilterState;
  onChange: (newFilters: FilterState) => void;
  onReset: () => void;
  totalProducts: number;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onChange,
  onReset,
  totalProducts,
  isOpenMobile,
  onCloseMobile,
}) => {
  const categories: { label: string; value: ProductCategory | 'all' }[] = [
    { label: 'All Products', value: 'all' },
    { label: 'Face Care & Elixirs', value: 'facecare' },
    { label: 'Hair Care & Scalp', value: 'haircare' },
    { label: 'Body Care & Soaps', value: 'bodycare' },
    { label: 'Pure Toners & Mists', value: 'skincare' },
    { label: 'Keepsake Gift Sets', value: 'giftsets' },
  ];

  const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₹500', value: 'under-500' },
    { label: '₹500 — ₹1,000', value: '500-1000' },
    { label: 'Over ₹1,000', value: 'over-1000' },
  ];

  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Newest Harvest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Botanical Name: A to Z', value: 'name-asc' },
  ];

  const filterContent = (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h4 className="text-xs uppercase tracking-wider font-semibold text-[#253D2A] mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.value}
              className="flex items-center gap-2.5 text-xs text-[#202820] cursor-pointer hover:text-[#15952F] transition-colors"
            >
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.value}
                onChange={() => onChange({ ...filters, category: cat.value })}
                className="w-3.5 h-3.5 text-[#15952F] focus:ring-[#15952F] border-[#E4E8DF]"
              />
              <span className={filters.category === cat.value ? 'font-semibold text-[#15952F]' : ''}>
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="pt-4 border-t border-[#E4E8DF]">
        <h4 className="text-xs uppercase tracking-wider font-semibold text-[#253D2A] mb-3">
          Price Range
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.value}
              className="flex items-center gap-2.5 text-xs text-[#202820] cursor-pointer hover:text-[#15952F] transition-colors"
            >
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange === range.value}
                onChange={() => onChange({ ...filters, priceRange: range.value as any })}
                className="w-3.5 h-3.5 text-[#15952F] focus:ring-[#15952F] border-[#E4E8DF]"
              />
              <span className={filters.priceRange === range.value ? 'font-semibold text-[#15952F]' : ''}>
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Stock availability */}
      <div className="pt-4 border-t border-[#E4E8DF]">
        <label className="flex items-center gap-2.5 text-xs text-[#202820] cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onChange({ ...filters, inStockOnly: e.target.checked })}
            className="w-3.5 h-3.5 rounded text-[#15952F] focus:ring-[#15952F] border-[#E4E8DF]"
          />
          <span className="font-medium">In-Stock Botanical Batches Only</span>
        </label>
      </div>

      {/* Reset button */}
      <div className="pt-4 border-t border-[#E4E8DF]">
        <button
          onClick={onReset}
          className="w-full py-2 bg-[#FAF9F4] hover:bg-[#E8F0E3] text-[#253D2A] text-xs font-semibold rounded-lg border border-[#E4E8DF] transition-colors"
        >
          Reset All Filters
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Filter Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 bg-white p-5 rounded-2xl border border-[#E4E8DF] h-fit sticky top-28">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E4E8DF]">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#253D2A]">
            <Filter className="w-3.5 h-3.5 text-[#15952F]" />
            <span>Refine Catalogue</span>
          </div>
          <span className="text-[11px] text-[#777D73]">{totalProducts} Items</span>
        </div>

        {filterContent}
      </aside>

      {/* Mobile Filter Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E4E8DF]">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#253D2A]">
                <Filter className="w-4 h-4 text-[#15952F]" />
                <span>Filters & Sorting</span>
              </div>
              <button
                onClick={onCloseMobile}
                className="p-1 text-gray-400 hover:text-gray-700 rounded"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Sorting Selector */}
            <div className="mb-6 pb-4 border-b border-[#E4E8DF]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#253D2A] mb-2 flex items-center gap-1.5">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#15952F]" />
                <span>Sort By</span>
              </h4>
              <select
                value={filters.sortBy}
                onChange={(e) => onChange({ ...filters, sortBy: e.target.value as any })}
                className="w-full text-xs p-2.5 bg-[#FAF9F4] border border-[#E4E8DF] rounded-xl text-[#202820] focus:outline-none focus:border-[#15952F]"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {filterContent}

            <button
              onClick={onCloseMobile}
              className="mt-6 w-full py-3 bg-[#15952F] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm"
            >
              Apply Filters ({totalProducts})
            </button>
          </div>
        </div>
      )}
    </>
  );
};

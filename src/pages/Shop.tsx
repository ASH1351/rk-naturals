import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductFilters, FilterState } from '../components/product/ProductFilters';
import { ProductGrid } from '../components/product/ProductGrid';
import { Filter, ArrowUpDown, X } from 'lucide-react';
import { ProductCategory } from '../types';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as ProductCategory) || 'all';

  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    priceRange: 'all',
    inStockOnly: false,
    sortBy: 'featured',
  });

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Sync state if URL query param changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && ['skincare', 'haircare', 'bodycare', 'facecare', 'giftsets'].includes(cat)) {
      setFilters((prev) => ({ ...prev, category: cat as ProductCategory }));
    }
  }, [searchParams]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    if (newFilters.category !== 'all') {
      setSearchParams({ category: newFilters.category });
    } else {
      setSearchParams({});
    }
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'all',
      priceRange: 'all',
      inStockOnly: false,
      sortBy: 'featured',
    });
    setSearchParams({});
  };

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category
    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price Range
    if (filters.priceRange === 'under-500') {
      result = result.filter((p) => p.price < 500);
    } else if (filters.priceRange === '500-1000') {
      result = result.filter((p) => p.price >= 500 && p.price <= 1000);
    } else if (filters.priceRange === 'over-1000') {
      result = result.filter((p) => p.price > 1000);
    }

    // In Stock
    if (filters.inStockOnly) {
      result = result.filter((p) => p.inventoryStatus === 'in_stock');
    }

    // Sorting
    if (filters.sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === 'newest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (filters.sortBy === 'featured') {
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [filters]);

  const hasActiveFilters =
    filters.category !== 'all' ||
    filters.priceRange !== 'all' ||
    filters.inStockOnly;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Page Title & Breadcrumb Header */}
      <div className="mb-8 sm:mb-12 text-center sm:text-left border-b border-[#E4E8DF] pb-8">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
          Complete Storefront
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202820] mt-1">
          Shop All Botanical Formulations
        </h1>
        <p className="text-xs sm:text-sm text-[#777D73] mt-2 max-w-2xl">
          Handcrafted in small batches with cold-pressed oils, single-origin hydrosols, and therapeutic botanicals.
        </p>
      </div>

      {/* Mobile Bar: Open Filters + Sort Dropdown */}
      <div className="flex lg:hidden items-center justify-between gap-3 mb-6 bg-white p-3.5 rounded-xl border border-[#E4E8DF]">
        <button
          onClick={() => setIsMobileFiltersOpen(true)}
          className="flex items-center gap-2 px-3 py-2 bg-[#FAF9F4] text-xs font-semibold text-[#253D2A] rounded-lg border border-[#E4E8DF]"
        >
          <Filter className="w-3.5 h-3.5 text-[#15952F]" />
          <span>Filters {hasActiveFilters ? '• Active' : ''}</span>
        </button>

        <div className="flex items-center gap-1.5 text-xs">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#15952F]" />
          <select
            value={filters.sortBy}
            onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
            className="bg-transparent text-xs font-medium text-[#202820] focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest Harvest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Active Filters Tag Bar */}
      {hasActiveFilters && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-[#777D73]">Active Filters:</span>
          {filters.category !== 'all' && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-semibold">
              Category: {filters.category}
              <button
                onClick={() => handleFilterChange({ ...filters, category: 'all' })}
                className="hover:text-black"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {filters.priceRange !== 'all' && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-semibold">
              Price: {filters.priceRange}
              <button
                onClick={() => setFilters({ ...filters, priceRange: 'all' })}
                className="hover:text-black"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {filters.inStockOnly && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-semibold">
              In Stock Only
              <button
                onClick={() => setFilters({ ...filters, inStockOnly: false })}
                className="hover:text-black"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          <button
            onClick={handleResetFilters}
            className="text-xs text-red-600 hover:underline font-semibold ml-2"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Layout: Sidebar + Grid */}
      <div className="flex items-start gap-8">
        <ProductFilters
          filters={filters}
          onChange={handleFilterChange}
          onReset={handleResetFilters}
          totalProducts={filteredProducts.length}
          isOpenMobile={isMobileFiltersOpen}
          onCloseMobile={() => setIsMobileFiltersOpen(false)}
        />

        <div className="flex-1 min-w-0">
          {/* Desktop Top Controls */}
          <div className="hidden lg:flex items-center justify-between pb-4 mb-6 border-b border-[#E4E8DF]">
            <p className="text-xs text-[#777D73]">
              Showing <strong className="text-[#202820]">{filteredProducts.length}</strong> botanical items
            </p>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#777D73]">Sort By:</span>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                className="bg-white border border-[#E4E8DF] rounded-lg px-3 py-1.5 text-xs text-[#202820] focus:outline-none focus:border-[#15952F]"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Newest Harvest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </div>
          </div>

          <ProductGrid
            products={filteredProducts}
            onResetFilters={handleResetFilters}
          />
        </div>
      </div>
    </div>
  );
};

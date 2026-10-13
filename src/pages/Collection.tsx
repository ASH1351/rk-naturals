import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';
import { ArrowLeft, Sparkles, ArrowUpDown } from 'lucide-react';

export const Collection: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name-asc'>('featured');

  // Match collection details
  const categoryMeta = CATEGORIES.find((c) => c.slug === categorySlug);

  let collectionTitle = 'Botanical Collection';
  let collectionDescription = 'Thoughtfully formulated natural personal care essentials.';
  let heroImage = 'https://images.unsplash.com/photo-1608248597359-2f22204c3298?auto=format&fit=crop&w=1200&q=80';

  if (categorySlug === 'bestsellers') {
    collectionTitle = 'Bestselling Botanical Rituals';
    collectionDescription = 'Our most cherished handcrafted products, returned to for everyday beauty and wellness.';
    heroImage = 'https://images.unsplash.com/photo-1608248597359-2f22204c3298?auto=format&fit=crop&w=1200&q=80';
  } else if (categorySlug === 'new-arrivals') {
    collectionTitle = 'New Botanical Harvest';
    collectionDescription = 'Freshly formulated small batches and seasonal botanical additions to your self-care cabinet.';
    heroImage = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80';
  } else if (categoryMeta) {
    collectionTitle = categoryMeta.name;
    collectionDescription = categoryMeta.description;
    heroImage = categoryMeta.image;
  }

  const products = useMemo(() => {
    let list = [...PRODUCTS];

    if (categorySlug === 'bestsellers') {
      list = list.filter((p) => p.bestseller || p.featured);
    } else if (categorySlug === 'new-arrivals') {
      list = list.filter((p) => p.isNew);
    } else if (categorySlug) {
      list = list.filter((p) => p.category === categorySlug);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [categorySlug, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Back button and breadcrumb */}
      <div>
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#15952F] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Collections</span>
        </Link>
      </div>

      {/* Collection Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-[#253D2A] text-white p-8 sm:p-12 lg:p-16 shadow-lg border border-[#15952F]/20">
        <div className="relative z-10 max-w-xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#A7D929] text-xs font-medium uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Botanical Edit</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
            {collectionTitle}
          </h1>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
            {collectionDescription}
          </p>
        </div>

        {/* Ambient image background */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img
            src={heroImage}
            alt={collectionTitle}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bar: Product count and sorting */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E4E8DF]">
        <p className="text-xs text-[#777D73]">
          Showing <strong className="text-[#202820]">{products.length}</strong> handcrafted products
        </p>

        <div className="flex items-center gap-2 text-xs">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#15952F]" />
          <span className="hidden sm:inline text-[#777D73]">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-[#E4E8DF] rounded-lg px-3 py-1.5 text-xs text-[#202820] focus:outline-none focus:border-[#15952F]"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <ProductGrid products={products} />
    </div>
  );
};

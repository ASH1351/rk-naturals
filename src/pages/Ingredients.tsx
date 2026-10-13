import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BOTANICAL_INGREDIENTS } from '../data/ingredients';
import { PRODUCTS } from '../data/products';
import { Search, Sparkles, ArrowRight, Tag } from 'lucide-react';

export const Ingredients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Floral Extracts', 'Herbs & Leaves', 'Oils & Butters', 'Resins & Roots'];

  const filteredIngredients = useMemo(() => {
    return BOTANICAL_INGREDIENTS.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.botanicalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.role.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat =
        selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
          Botanical Glossary
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202820] font-normal leading-tight">
          Rooted in Nature: Our Ingredients
        </h1>
        <p className="text-xs sm:text-sm text-[#777D73] leading-relaxed">
          We believe in radical ingredient transparency. Explore the plant extracts, cold-pressed seed oils, and botanical waters that power RK Naturals handmade formulations.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-5 rounded-2xl border border-[#E4E8DF] shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search saffron, rose, bhringraj, kokum..."
            className="w-full text-xs pl-10 pr-4 py-2.5 bg-[#FAF9F4] border border-[#E4E8DF] rounded-xl focus:outline-none focus:border-[#15952F]"
          />
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#15952F] text-white shadow-2xs'
                  : 'bg-[#FAF9F4] text-[#202820] border border-[#E4E8DF] hover:border-[#15952F]'
              }`}
            >
              {cat === 'all' ? 'All Botanicals' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Ingredients */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIngredients.map((ing) => {
          // Find matched products
          const matchedProducts = PRODUCTS.filter((p) =>
            ing.featuredInProductSlugs.includes(p.slug)
          );

          return (
            <div
              key={ing.id}
              className="bg-white rounded-2xl border border-[#E4E8DF] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#FAF9F4]">
                <img
                  src={ing.image}
                  alt={ing.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#15952F] font-bold uppercase tracking-wider">
                    <span>{ing.category}</span>
                    <span className="text-[#777D73] font-normal italic">
                      {ing.botanicalName}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-medium text-[#202820] mt-1">
                    {ing.name}
                  </h3>

                  <div className="mt-2 inline-block bg-[#E8F0E3] px-2.5 py-0.5 rounded text-[11px] font-semibold text-[#253D2A]">
                    Source: {ing.source}
                  </div>

                  <p className="text-xs text-[#202820] font-medium mt-3">
                    Role: <span className="text-[#777D73] font-normal">{ing.role}</span>
                  </p>

                  <p className="text-xs text-[#777D73] mt-2 leading-relaxed">
                    {ing.description}
                  </p>
                </div>

                {/* Featured in Products links */}
                {matchedProducts.length > 0 && (
                  <div className="pt-3 border-t border-[#E4E8DF]">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#253D2A] block mb-1.5">
                      Handcrafted in:
                    </span>
                    <div className="space-y-1">
                      {matchedProducts.map((p) => (
                        <Link
                          key={p.id}
                          to={`/products/${p.slug}`}
                          className="text-xs text-[#15952F] hover:underline flex items-center justify-between font-medium group"
                        >
                          <span className="truncate">{p.name}</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredIngredients.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#E4E8DF]">
          <p className="text-sm font-semibold text-[#202820]">No botanical ingredients found</p>
          <p className="text-xs text-[#777D73] mt-1">Try resetting your search query.</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
            className="mt-4 px-5 py-2 bg-[#15952F] text-white text-xs font-semibold rounded-full"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Trash2, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const WishlistPage: React.FC = () => {
  const { wishlistIds, toggleWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const savedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  if (savedProducts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-[#E8F0E3] text-[#15952F] flex items-center justify-center mx-auto mb-6">
          <Heart className="w-10 h-10 opacity-70" />
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#202820] mb-3">
          Your Wishlist is Empty
        </h1>
        <p className="text-xs sm:text-sm text-[#777D73] max-w-md mx-auto mb-8">
          Save your favorite handcrafted face oils, cold-process soaps, and botanical tonics to revisit later.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all"
        >
          <span>Explore Botanical Shop</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#E4E8DF] gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
            Saved Botanicals
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#202820] mt-1">
            My Wishlist ({savedProducts.length})
          </h1>
        </div>

        <button
          onClick={clearWishlist}
          className="text-xs text-red-600 hover:underline font-semibold"
        >
          Clear All Saved Items
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {savedProducts.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl border border-[#E4E8DF] overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-[#FAF9F4]">
              <Link to={`/products/${product.slug}`}>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-2.5 right-2.5 p-2 rounded-full bg-white text-red-500 shadow-xs hover:bg-red-50 transition-colors"
                aria-label="Remove from wishlist"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#15952F]">
                  {product.category}
                </span>
                <Link
                  to={`/products/${product.slug}`}
                  className="block text-xs sm:text-sm font-semibold text-[#202820] hover:text-[#15952F] transition-colors truncate mt-1"
                >
                  {product.name}
                </Link>
                <p className="text-xs font-bold text-[#202820] mt-2">₹{product.price}</p>
              </div>

              <button
                onClick={() => addToCart(product, product.variants[0], 1)}
                className="mt-4 w-full py-2.5 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-semibold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Move to Bag</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

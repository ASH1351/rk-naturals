import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isSaved = isInWishlist(product.id);
  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];

  const discountPercent = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product, product.variants[0], 1);
    setTimeout(() => setIsAdding(false), 800);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div
      className="group relative bg-white rounded-2xl border border-[#E4E8DF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#15952F]/40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Image Showcase */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#FAF9F4]">
        <Link to={`/products/${product.slug}`} className="block w-full h-full">
          <img
            src={isHovered ? secondaryImage : primaryImage}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = '/images/rk-naturals-hero-campaign.jpg';
            }}
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {discountPercent > 0 && (
            <span className="bg-[#15952F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs tracking-wider">
              {discountPercent}% OFF
            </span>
          )}
          {product.bestseller && (
            <span className="bg-[#253D2A] text-[#A7D929] text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-2xs">
              Loved
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#A7D929] text-[#253D2A] text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">
              New Harvest
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 shadow-xs ${
            isSaved
              ? 'bg-white text-red-500'
              : 'bg-white/80 text-gray-500 hover:text-red-500 hover:bg-white'
          }`}
          aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Add Overlay on Desktop Hover */}
        <div className="absolute bottom-3 inset-x-3 hidden sm:flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={handleQuickAdd}
            disabled={isAdding}
            className="w-full py-2.5 bg-[#253D2A]/90 hover:bg-[#15952F] text-white text-xs font-semibold uppercase tracking-wider rounded-xl backdrop-blur-md shadow-md flex items-center justify-center gap-1.5 transition-colors"
          >
            {isAdding ? (
              <>
                <Check className="w-4 h-4 text-[#A7D929]" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#A7D929]" />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Product Details info */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#777D73] font-medium uppercase tracking-wider mb-1">
            <span className="text-[#15952F]">{product.category}</span>
            <span>{product.sizeOrVolume}</span>
          </div>

          <Link
            to={`/products/${product.slug}`}
            className="block text-sm font-semibold text-[#202820] hover:text-[#15952F] transition-colors line-clamp-1 group-hover:underline"
          >
            {product.name}
          </Link>

          <p className="text-xs text-[#777D73] line-clamp-1 mt-1 font-normal">
            {product.tagline}
          </p>
        </div>

        {/* Price and Mobile Add */}
        <div className="mt-3 pt-3 border-t border-[#E4E8DF]/60 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-[#202820]">
              ₹{product.price}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs line-through text-gray-400">
                ₹{product.compareAtPrice}
              </span>
            )}
          </div>

          {/* Mobile Only Quick Add Button */}
          <button
            onClick={handleQuickAdd}
            className="sm:hidden p-2 rounded-lg bg-[#E8F0E3] text-[#15952F] hover:bg-[#15952F] hover:text-white transition-colors"
            aria-label="Add to bag"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

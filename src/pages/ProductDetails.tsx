import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  ShoppingBag, 
  Truck, 
  RotateCcw, 
  Sparkles, 
  Plus, 
  Minus, 
  ChevronDown, 
  ChevronRight, 
  Leaf, 
  CheckCircle2,
  Droplet
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductVariant } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ProductCard } from '../components/product/ProductCard';

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.slug === slug);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string>('description');
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Set default variant on product change
  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setSelectedImageIndex(0);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [product]);

  // Track scroll for mobile sticky bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product || !selectedVariant) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-2xl text-[#202820]">Botanical Formulation Not Found</h2>
        <p className="text-xs text-[#777D73] mt-2">The product you are looking for may have retired or changed its name.</p>
        <Link
          to="/shop"
          className="mt-6 inline-block px-6 py-2.5 bg-[#15952F] text-white text-xs font-semibold uppercase tracking-wider rounded-full"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const isSaved = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedVariant, quantity);
    navigate('/checkout');
  };

  const discountPercent = selectedVariant.compareAtPrice
    ? Math.round(
        ((selectedVariant.compareAtPrice - selectedVariant.price) /
          selectedVariant.compareAtPrice) *
          100
      )
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-16">
      
      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#777D73]">
        <Link to="/" className="hover:text-[#15952F] transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 opacity-50" />
        <Link to="/shop" className="hover:text-[#15952F] transition-colors">Shop</Link>
        <ChevronRight className="w-3.5 h-3.5 opacity-50" />
        <Link to={`/collections/${product.category}`} className="capitalize hover:text-[#15952F] transition-colors">
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 opacity-50" />
        <span className="text-[#202820] font-medium truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Two-Column Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-[#E4E8DF] shadow-xs">
            <img
              src={product.images[selectedImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-300"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = '/images/rk-naturals-saffron-elixir-ad.jpg';
              }}
            />
            {discountPercent > 0 && (
              <span className="absolute top-4 left-4 bg-[#15952F] text-white text-xs font-bold px-3 py-1 rounded-full shadow-2xs">
                {discountPercent}% OFF
              </span>
            )}
            <button
              onClick={() => toggleWishlist(product)}
              className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-colors shadow-sm ${
                isSaved
                  ? 'bg-white text-red-500'
                  : 'bg-white/80 text-gray-500 hover:text-red-500 hover:bg-white'
              }`}
              aria-label="Wishlist toggle"
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    selectedImageIndex === idx
                      ? 'border-[#15952F] shadow-xs'
                      : 'border-[#E4E8DF] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = '/images/rk-naturals-saffron-elixir-ad.jpg';
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Purchasing & Details */}
        <div className="lg:col-span-5 space-y-6">
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#15952F] bg-[#E8F0E3] px-2.5 py-0.5 rounded-full">
                {product.category}
              </span>
              {product.batchInfo && (
                <span className="text-[11px] text-[#777D73] font-medium">
                  • {product.batchInfo}
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-[#202820] font-normal leading-tight">
              {product.name}
            </h1>
            <p className="text-sm text-[#777D73] mt-2 italic font-serif">
              {product.tagline}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 pb-4 border-b border-[#E4E8DF]">
            <span className="text-2xl sm:text-3xl font-bold text-[#202820]">
              ₹{selectedVariant.price}
            </span>
            {selectedVariant.compareAtPrice && (
              <span className="text-base line-through text-gray-400">
                ₹{selectedVariant.compareAtPrice}
              </span>
            )}
            <span className="text-xs text-[#777D73]">
              (Inclusive of all taxes)
            </span>
          </div>

          {/* Variant Selector */}
          {product.variants.length > 1 && (
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider font-semibold text-[#202820]">
                Select Size / Format:
              </label>
              <div className="flex flex-wrap gap-2.5">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                      selectedVariant.id === v.id
                        ? 'border-[#15952F] bg-[#E8F0E3] text-[#15952F] shadow-2xs'
                        : 'border-[#E4E8DF] bg-white text-[#202820] hover:border-[#15952F]'
                    }`}
                  >
                    <span>{v.name}</span>
                    <span className="ml-2 font-bold">₹{v.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Actions */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-[#E4E8DF] rounded-xl bg-white px-2 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 text-gray-500 hover:text-black transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-sm font-bold text-[#202820]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 text-gray-500 hover:text-black transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 py-3.5 px-6 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Ritual Bag</span>
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              className="w-full py-3 px-6 bg-[#253D2A] hover:bg-[#15952F] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm transition-colors text-center"
            >
              Buy It Now (Quick Checkout)
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="bg-[#FAF9F4] rounded-2xl p-4 border border-[#E4E8DF] space-y-2 text-xs text-[#253D2A]">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#15952F] shrink-0" />
              <span>Complimentary botanical shipping across India on orders over ₹999</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#15952F] shrink-0" />
              <span>Slow cold-infused in small batches to preserve botanical nutrients</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#15952F] shrink-0" />
              <span>Full ingredient transparency with zero concealed fragrance fillers</span>
            </div>
          </div>

          {/* Accordion Tabs */}
          <div className="border-t border-[#E4E8DF] pt-4 space-y-2">
            
            {/* Description Accordion */}
            <div className="border-b border-[#E4E8DF] pb-2">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')}
                className="w-full flex items-center justify-between py-2 text-xs font-bold uppercase tracking-wider text-[#202820] text-left"
              >
                <span>Description & Botanical Story</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    openAccordion === 'description' ? 'rotate-180 text-[#15952F]' : ''
                  }`}
                />
              </button>
              {openAccordion === 'description' && (
                <div className="pt-1 pb-3 text-xs sm:text-sm text-[#777D73] leading-relaxed space-y-2">
                  <p>{product.description}</p>
                  {product.suitability && (
                    <p className="font-medium text-[#202820]">
                      Skin & Hair Suitability: <span className="text-[#777D73] font-normal">{product.suitability}</span>
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Ingredients Accordion */}
            <div className="border-b border-[#E4E8DF] pb-2">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'ingredients' ? '' : 'ingredients')}
                className="w-full flex items-center justify-between py-2 text-xs font-bold uppercase tracking-wider text-[#202820] text-left"
              >
                <span>Full Botanical Ingredients ({product.ingredients.length})</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    openAccordion === 'ingredients' ? 'rotate-180 text-[#15952F]' : ''
                  }`}
                />
              </button>
              {openAccordion === 'ingredients' && (
                <div className="pt-1 pb-3 text-xs text-[#777D73] space-y-2">
                  <ul className="list-disc pl-4 space-y-1">
                    {product.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                  {product.keyBotanicals.length > 0 && (
                    <div className="pt-2">
                      <p className="font-semibold text-xs text-[#202820] mb-1">Key Botanical Roles:</p>
                      <div className="space-y-1">
                        {product.keyBotanicals.map((kb, idx) => (
                          <div key={idx} className="bg-white p-2 rounded-lg border border-[#E4E8DF]">
                            <strong className="text-[#15952F]">{kb.name}:</strong> {kb.benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* How to Use Accordion */}
            <div className="border-b border-[#E4E8DF] pb-2">
              <button
                onClick={() => setOpenAccordion(openAccordion === 'directions' ? '' : 'directions')}
                className="w-full flex items-center justify-between py-2 text-xs font-bold uppercase tracking-wider text-[#202820] text-left"
              >
                <span>How to Use & Self-Care Ritual</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    openAccordion === 'directions' ? 'rotate-180 text-[#15952F]' : ''
                  }`}
                />
              </button>
              {openAccordion === 'directions' && (
                <div className="pt-1 pb-3 text-xs text-[#777D73] space-y-1.5">
                  <ol className="list-decimal pl-4 space-y-1">
                    {product.directions.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                  <p className="pt-2 text-[11px] text-[#253D2A] font-medium bg-[#E8F0E3] p-2 rounded-lg">
                    Storage Care: {product.storageAdvice}
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Related Products Recommendation */}
      {relatedProducts.length > 0 && (
        <section className="pt-10 border-t border-[#E4E8DF]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
                Complementary Care
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#202820] mt-1">
                You May Also Love
              </h3>
            </div>
            <Link
              to={`/collections/${product.category}`}
              className="text-xs font-semibold text-[#15952F] hover:underline"
            >
              View More
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}

      {/* Mobile Sticky Add to Cart Bottom Bar */}
      {showStickyBar && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-[#E4E8DF] p-3 shadow-xl z-30 flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-200">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-[#202820] truncate">{product.name}</p>
            <p className="text-xs font-bold text-[#15952F]">₹{selectedVariant.price}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="px-5 py-2.5 bg-[#15952F] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs shrink-0 flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      )}

    </div>
  );
};

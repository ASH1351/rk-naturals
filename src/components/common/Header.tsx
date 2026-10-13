import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  const { itemCount, toggleCart } = useCart();
  const { wishlistCount } = useWishlist();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F4]/95 backdrop-blur-md shadow-sm border-b border-[#E4E8DF]'
          : 'bg-[#FAF9F4] border-b border-[#E4E8DF]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-[#202820] hover:text-[#15952F] transition-colors focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={onOpenSearch}
              className="p-2 ml-1 text-[#202820] hover:text-[#15952F] transition-colors"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            <div
              className="relative py-4"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link
                to="/shop"
                className={`inline-flex items-center gap-1 text-sm tracking-wider uppercase font-medium transition-colors ${
                  location.pathname.startsWith('/shop') || location.pathname.startsWith('/collections')
                    ? 'text-[#15952F]'
                    : 'text-[#202820] hover:text-[#15952F]'
                }`}
              >
                <span>Shop</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>

              {/* Mega Menu Dropdown */}
              {isMegaMenuOpen && (
                <div className="absolute top-full -left-6 w-[740px] bg-white rounded-2xl shadow-2xl border border-[#E4E8DF] p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">Categories</p>
                    <ul className="space-y-2 text-sm text-[#777D73]">
                      <li>
                        <Link to="/shop" className="hover:text-[#15952F] font-medium text-[#202820] block transition-colors">
                          Shop All Products
                        </Link>
                      </li>
                      <li>
                        <Link to="/collections/facecare" className="hover:text-[#15952F] block transition-colors">
                          Face Care & Elixirs
                        </Link>
                      </li>
                      <li>
                        <Link to="/collections/haircare" className="hover:text-[#15952F] block transition-colors">
                          Hair Care & Scalp Tonics
                        </Link>
                      </li>
                      <li>
                        <Link to="/collections/bodycare" className="hover:text-[#15952F] block transition-colors">
                          Handmade Soaps & Body Butters
                        </Link>
                      </li>
                      <li>
                        <Link to="/collections/skincare" className="hover:text-[#15952F] block transition-colors">
                          Pure Hydrosols & Toners
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">Curated Edits</p>
                    <ul className="space-y-2 text-sm text-[#777D73]">
                      <li>
                        <Link to="/collections/bestsellers" className="hover:text-[#15952F] block transition-colors flex items-center justify-between">
                          <span>Bestsellers</span>
                          <span className="text-[10px] bg-[#E8F0E3] text-[#15952F] px-1.5 py-0.5 rounded-full font-semibold">Loved</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/collections/new-arrivals" className="hover:text-[#15952F] block transition-colors flex items-center justify-between">
                          <span>New Harvest Batch</span>
                          <span className="text-[10px] bg-[#A7D929]/20 text-[#253D2A] px-1.5 py-0.5 rounded-full font-semibold">New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/collections/giftsets" className="hover:text-[#15952F] block transition-colors">
                          Keepsake Gift Hampers
                        </Link>
                      </li>
                    </ul>
                    <div className="pt-2 border-t border-[#E4E8DF]">
                      <Link to="/ingredients" className="text-xs text-[#15952F] font-medium hover:underline inline-flex items-center gap-1">
                        <span>Explore Botanical Glossary</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                  <div className="bg-[#FAF9F4] rounded-xl p-4 border border-[#E4E8DF]/60 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] tracking-wider uppercase font-semibold text-[#15952F] bg-white px-2 py-0.5 rounded-full shadow-2xs">
                        Featured Ritual
                      </span>
                      <h4 className="font-serif text-lg font-normal text-[#202820] mt-2 leading-tight">
                        Kumkumadi & Kashmiri Saffron Youth Nectar
                      </h4>
                      <p className="text-xs text-[#777D73] mt-1.5 line-clamp-2">
                        Hand-steeped red gold saffron stigmas for overnight golden radiance.
                      </p>
                    </div>
                    <Link
                      to="/products/kumkumadi-saffron-youth-nectar"
                      className="mt-3 inline-flex items-center text-xs font-semibold text-[#15952F] hover:text-[#49B82D] group"
                    >
                      <span>Explore Elixir</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/collections/facecare"
              className={`text-sm tracking-wider uppercase font-medium transition-colors ${
                location.pathname === '/collections/facecare' ? 'text-[#15952F]' : 'text-[#202820] hover:text-[#15952F]'
              }`}
            >
              Face
            </Link>

            <Link
              to="/collections/haircare"
              className={`text-sm tracking-wider uppercase font-medium transition-colors ${
                location.pathname === '/collections/haircare' ? 'text-[#15952F]' : 'text-[#202820] hover:text-[#15952F]'
              }`}
            >
              Hair
            </Link>

            <Link
              to="/collections/bodycare"
              className={`text-sm tracking-wider uppercase font-medium transition-colors ${
                location.pathname === '/collections/bodycare' ? 'text-[#15952F]' : 'text-[#202820] hover:text-[#15952F]'
              }`}
            >
              Body
            </Link>

            <Link
              to="/about"
              className={`text-sm tracking-wider uppercase font-medium transition-colors ${
                location.pathname === '/about' ? 'text-[#15952F]' : 'text-[#202820] hover:text-[#15952F]'
              }`}
            >
              Our Story
            </Link>
          </nav>

          {/* Central Logo */}
          <div className="flex-1 lg:flex-initial text-center flex justify-center">
            <Link to="/" className="inline-block group focus:outline-none">
              <div className="flex items-center gap-3">
                <img
                  src="/images/rk-naturals-logo.png"
                  alt="RK Naturals Botanical Care"
                  className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Right Navigation & Actions */}
          <div className="flex items-center space-x-1 sm:space-x-4">
            <Link
              to="/our-process"
              className="hidden xl:inline-block text-xs uppercase tracking-wider font-semibold text-[#777D73] hover:text-[#15952F] transition-colors"
            >
              Handmade Process
            </Link>

            <button
              onClick={onOpenSearch}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E4E8DF] bg-white text-xs text-[#777D73] hover:border-[#15952F] hover:text-[#202820] transition-colors"
              aria-label="Search catalog"
            >
              <Search className="w-3.5 h-3.5 text-[#15952F]" />
              <span>Search botanicals...</span>
              <kbd className="hidden xl:inline-block text-[10px] bg-[#FAF9F4] px-1.5 py-0.5 rounded text-gray-400 border border-gray-200">
                /
              </kbd>
            </button>

            <Link
              to="/wishlist"
              className="p-2 text-[#202820] hover:text-[#15952F] transition-colors relative"
              aria-label="Saved wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#15952F] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              to="/account"
              className="hidden sm:inline-block p-2 text-[#202820] hover:text-[#15952F] transition-colors"
              aria-label="Account & orders"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Shopping Bag Button */}
            <button
              onClick={() => toggleCart(true)}
              className="p-2 text-[#202820] hover:text-[#15952F] transition-colors relative flex items-center gap-1.5"
              aria-label="View shopping bag"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#202820] hover:text-[#15952F]" />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#15952F] text-white text-[10px] font-bold min-w-4 h-4 px-1 rounded-full flex items-center justify-center shadow-xs">
                    {itemCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-sm bg-[#FAF9F4] h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="p-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#E4E8DF]">
                <img
                  src="/images/rk-naturals-logo.png"
                  alt="RK Naturals"
                  className="h-12 w-auto object-contain"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#202820] hover:text-[#15952F]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="py-4 space-y-1">
                <p className="text-[11px] uppercase tracking-wider font-semibold text-[#15952F] px-2 mb-2">
                  Botanical Collections
                </p>
                <Link
                  to="/shop"
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#202820] hover:bg-white transition-colors"
                >
                  Shop All Products
                </Link>
                <Link
                  to="/collections/facecare"
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#202820] hover:bg-white transition-colors"
                >
                  Face Care & Elixirs
                </Link>
                <Link
                  to="/collections/haircare"
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#202820] hover:bg-white transition-colors"
                >
                  Hair Care & Scalp Tonics
                </Link>
                <Link
                  to="/collections/bodycare"
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#202820] hover:bg-white transition-colors"
                >
                  Handmade Soaps & Body Butters
                </Link>
                <Link
                  to="/collections/skincare"
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#202820] hover:bg-white transition-colors"
                >
                  Pure Toners & Mists
                </Link>
                <Link
                  to="/collections/giftsets"
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#202820] hover:bg-white transition-colors"
                >
                  Keepsake Gift Hampers
                </Link>

                <div className="pt-4 mt-4 border-t border-[#E4E8DF]">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-[#15952F] px-2 mb-2">
                    Brand & Ethics
                  </p>
                  <Link
                    to="/about"
                    className="block px-3 py-2 text-sm text-[#777D73] hover:text-[#202820] transition-colors"
                  >
                    About RK Naturals
                  </Link>
                  <Link
                    to="/our-process"
                    className="block px-3 py-2 text-sm text-[#777D73] hover:text-[#202820] transition-colors"
                  >
                    Our Handmade Process
                  </Link>
                  <Link
                    to="/ingredients"
                    className="block px-3 py-2 text-sm text-[#777D73] hover:text-[#202820] transition-colors"
                  >
                    Botanical Ingredient Index
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-3 py-2 text-sm text-[#777D73] hover:text-[#202820] transition-colors"
                  >
                    Contact & Customer Support
                  </Link>
                  <Link
                    to="/account"
                    className="block px-3 py-2 text-sm text-[#777D73] hover:text-[#202820] transition-colors"
                  >
                    Account & Past Orders
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom info */}
            <div className="p-5 bg-white border-t border-[#E4E8DF]">
              <div className="flex items-center gap-2 text-xs text-[#253D2A] font-medium mb-2">
                <Sparkles className="w-4 h-4 text-[#15952F]" />
                <span>Nature-Inspired Care. Made with Love.</span>
              </div>
              <p className="text-[11px] text-[#777D73]">
                Handmade small batches with fresh botanical extracts.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

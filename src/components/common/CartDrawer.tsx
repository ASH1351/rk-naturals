import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Tag
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    shippingFee,
    total,
    itemCount,
    freeShippingThreshold,
    freeShippingRemaining,
    promoCode,
    promoError,
    applyPromo,
    removePromo,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const progressPercent = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );

  const handleCheckoutClick = () => {
    toggleCart(false);
    navigate('/checkout');
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      const ok = applyPromo(promoInput);
      if (ok) setPromoInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={() => toggleCart(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#FAF9F4] h-full shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E4E8DF] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#15952F]" />
            <h3 className="font-serif text-lg font-medium text-[#202820]">
              Your Self-Care Bag ({itemCount})
            </h3>
          </div>
          <button
            onClick={() => toggleCart(false)}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#E8F0E3]/70 px-5 py-3 border-b border-[#E4E8DF]">
          <div className="flex items-center justify-between text-xs font-medium text-[#253D2A] mb-1.5">
            {freeShippingRemaining > 0 ? (
              <span>Add ₹{freeShippingRemaining} more for complimentary delivery</span>
            ) : (
              <span className="flex items-center gap-1 text-[#15952F] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#15952F]" />
                You&apos;ve unlocked Free Botanical Shipping!
              </span>
            )}
            <span className="text-[11px] text-[#777D73]">{progressPercent}%</span>
          </div>
          <div className="w-full bg-white rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-[#15952F] h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full bg-[#E8F0E3] text-[#15952F] flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 opacity-80" />
              </div>
              <h4 className="font-serif text-xl text-[#202820] mb-2">
                Your ritual bag is empty
              </h4>
              <p className="text-xs text-[#777D73] max-w-xs mx-auto mb-6">
                Explore our handmade cold-infused face elixirs, botanical soaps, and herbal scalp tonics.
              </p>
              <button
                onClick={() => {
                  toggleCart(false);
                  navigate('/shop');
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm transition-colors"
              >
                <span>Discover Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 bg-white rounded-xl border border-[#E4E8DF] shadow-2xs"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-lg shrink-0 border border-[#E4E8DF]"
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/products/${item.product.slug}`}
                        onClick={() => toggleCart(false)}
                        className="text-xs font-semibold text-[#202820] hover:text-[#15952F] transition-colors line-clamp-1"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 p-0.5 transition-colors shrink-0"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[11px] text-[#777D73] mt-0.5">
                      Option: {item.selectedVariant.name}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#E4E8DF]/60">
                    <div className="flex items-center border border-[#E4E8DF] rounded-md bg-[#FAF9F4]">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-gray-500 hover:text-[#202820] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold text-[#202820]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-gray-500 hover:text-[#202820] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-bold text-[#202820]">
                        ₹{item.selectedVariant.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary if items present */}
        {items.length > 0 && (
          <div className="p-5 bg-white border-t border-[#E4E8DF] space-y-3.5">
            {/* Promo Code Input */}
            <div>
              {promoCode ? (
                <div className="flex items-center justify-between bg-[#E8F0E3] px-3 py-2 rounded-lg text-xs font-medium text-[#15952F]">
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    Coupon Applied: <strong>{promoCode}</strong>
                  </span>
                  <button
                    onClick={removePromo}
                    className="text-gray-500 hover:text-red-600 font-semibold underline text-[11px]"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Promo code (e.g. BOTANICAL10)"
                    className="flex-1 bg-[#FAF9F4] border border-[#E4E8DF] text-xs px-3 py-2 rounded-lg focus:outline-none focus:border-[#15952F] uppercase"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#253D2A] text-white text-xs font-semibold rounded-lg hover:bg-[#15952F] transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}
              {promoError && (
                <p className="text-[11px] text-red-500 mt-1">{promoError}</p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#777D73] pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#202820] font-medium">₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#15952F] font-medium">
                  <span>Savings ({promoCode})</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Botanical Delivery</span>
                <span className="text-[#202820] font-medium">
                  {shippingFee === 0 ? (
                    <span className="text-[#15952F] font-semibold">FREE</span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#202820] pt-2 border-t border-[#E4E8DF]">
                <span>Grand Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-1">
              <button
                onClick={handleCheckoutClick}
                className="w-full py-3.5 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all hover:shadow-md"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  toggleCart(false);
                  navigate('/cart');
                }}
                className="w-full py-2 bg-transparent text-[#777D73] hover:text-[#202820] text-xs font-medium text-center transition-colors"
              >
                View Full Bag Details
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-[#777D73] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#15952F]" />
              <span>Safe & Secure Indian Checkout • 100% Botanical Ingredients</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  Tag, 
  Sparkles, 
  ShieldCheck, 
  ArrowLeft 
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartPage: React.FC = () => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    discountAmount,
    shippingFee,
    total,
    freeShippingThreshold,
    freeShippingRemaining,
    promoCode,
    promoError,
    applyPromo,
    removePromo,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [orderNote, setOrderNote] = useState(() => {
    return localStorage.getItem('rkn_order_note') || '';
  });
  const navigate = useNavigate();

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim()) {
      const ok = applyPromo(promoInput);
      if (ok) setPromoInput('');
    }
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOrderNote(e.target.value);
    localStorage.setItem('rkn_order_note', e.target.value);
  };

  const progressPercent = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-[#E8F0E3] text-[#15952F] flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 opacity-70" />
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#202820] mb-3">
          Your Self-Care Bag is Empty
        </h1>
        <p className="text-xs sm:text-sm text-[#777D73] max-w-md mx-auto mb-8">
          Explore our handmade cold-infused face elixirs, botanical soaps, and herbal scalp tonics to begin your self-care ritual.
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#E4E8DF] gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
            Ritual Bag
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#202820] mt-1">
            Shopping Bag ({items.length} unique items)
          </h1>
        </div>
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#15952F] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      {/* Free shipping progress */}
      <div className="bg-[#E8F0E3] p-4 rounded-2xl border border-[#15952F]/20">
        <div className="flex items-center justify-between text-xs font-medium text-[#253D2A] mb-2">
          {freeShippingRemaining > 0 ? (
            <span>Add ₹{freeShippingRemaining} more for complimentary botanical delivery across India</span>
          ) : (
            <span className="flex items-center gap-1 text-[#15952F] font-semibold">
              <Sparkles className="w-4 h-4 text-[#15952F]" />
              You qualify for Free Botanical Delivery!
            </span>
          )}
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full bg-white rounded-full h-2 overflow-hidden">
          <div
            className="bg-[#15952F] h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Grid: Cart items table + Order Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-2xl border border-[#E4E8DF] overflow-hidden shadow-xs divide-y divide-[#E4E8DF]">
            {items.map((item) => (
              <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
                
                {/* Product info */}
                <div className="flex gap-4 items-center min-w-0">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl border border-[#E4E8DF] shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#15952F]">
                      {item.product.category}
                    </span>
                    <Link
                      to={`/products/${item.product.slug}`}
                      className="block text-sm sm:text-base font-semibold text-[#202820] hover:text-[#15952F] transition-colors truncate"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-[#777D73] mt-0.5">
                      Format: <strong>{item.selectedVariant.name}</strong> • Unit: ₹{item.selectedVariant.price}
                    </p>
                  </div>
                </div>

                {/* Stepper + Subtotal + Delete */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E4E8DF]">
                  <div className="flex items-center border border-[#E4E8DF] rounded-xl bg-[#FAF9F4] px-2 py-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 text-gray-500 hover:text-black"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-[#202820]">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 text-gray-500 hover:text-black"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-right min-w-[70px]">
                    <span className="text-sm sm:text-base font-bold text-[#202820]">
                      ₹{item.selectedVariant.price * item.quantity}
                    </span>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Gift Note / Instructions box */}
          <div className="bg-white rounded-2xl border border-[#E4E8DF] p-5 space-y-2">
            <label className="text-xs uppercase tracking-wider font-semibold text-[#202820] block">
              Handwritten Botanical Gift Note or Delivery Request (Optional)
            </label>
            <textarea
              rows={3}
              value={orderNote}
              onChange={handleNoteChange}
              placeholder="e.g. Please include a gift note: Happy Birthday Ananya! With love, Sarah..."
              className="w-full text-xs p-3 bg-[#FAF9F4] border border-[#E4E8DF] rounded-xl focus:outline-none focus:border-[#15952F]"
            />
            <p className="text-[11px] text-[#777D73]">
              We include a complimentary botanical seeded plantable gift card with every requested note.
            </p>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-[#E4E8DF] p-6 space-y-5 shadow-xs sticky top-28">
          <h3 className="font-serif text-xl font-medium text-[#202820] pb-3 border-b border-[#E4E8DF]">
            Order Summary
          </h3>

          {/* Coupon Input */}
          <div>
            {promoCode ? (
              <div className="flex items-center justify-between bg-[#E8F0E3] px-3 py-2 rounded-xl text-xs font-medium text-[#15952F]">
                <span className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  Coupon: <strong>{promoCode}</strong>
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
                  placeholder="Coupon (e.g. BOTANICAL10)"
                  className="flex-1 bg-[#FAF9F4] border border-[#E4E8DF] text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-[#15952F] uppercase"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#253D2A] text-white text-xs font-semibold rounded-xl hover:bg-[#15952F] transition-colors"
                >
                  Apply
                </button>
              </form>
            )}
            {promoError && (
              <p className="text-[11px] text-red-500 mt-1">{promoError}</p>
            )}
          </div>

          {/* Breakdown */}
          <div className="space-y-2 text-xs text-[#777D73] pt-2">
            <div className="flex justify-between">
              <span>Items Subtotal</span>
              <span className="text-[#202820] font-semibold">₹{subtotal}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-[#15952F] font-semibold">
                <span>Discount ({promoCode})</span>
                <span>-₹{discountAmount}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Standard Botanical Delivery</span>
              <span className="text-[#202820] font-semibold">
                {shippingFee === 0 ? <span className="text-[#15952F]">FREE</span> : `₹${shippingFee}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Taxes</span>
              <span className="text-[#777D73]">Included in price</span>
            </div>
            <div className="flex justify-between text-base font-bold text-[#202820] pt-3 border-t border-[#E4E8DF]">
              <span>Estimated Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          {/* Checkout CTA */}
          <button
            onClick={() => navigate('/checkout')}
            className="w-full py-4 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="pt-2 text-center space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#777D73]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#15952F]" />
              <span>Safe SSL Encrypted Payment</span>
            </div>
            <p className="text-[10px] text-[#777D73]">
              We ship fresh, hand-packed batches across India within 3–5 business days.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

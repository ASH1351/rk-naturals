import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Truck, 
  ArrowLeft, 
  CheckCircle2, 
  CreditCard, 
  Banknote, 
  Sparkles,
  Lock
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Order, OrderItem } from '../types';

export const CheckoutPage: React.FC = () => {
  const {
    items,
    subtotal,
    discountAmount,
    promoCode,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
  });

  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod'>('razorpay');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStage, setProcessingStage] = useState('');

  // Shipping costs
  const isFreeStandard = subtotal >= 999 || promoCode === 'FREESHIP';
  const standardFee = isFreeStandard ? 0 : 60;
  const expressFee = 120;
  const activeShippingFee = shippingMethod === 'standard' ? standardFee : expressFee;
  const codFee = paymentMethod === 'cod' ? 40 : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount + activeShippingFee + codFee);

  if (items.length === 0 && !isProcessing) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-3xl text-[#202820]">No Items to Checkout</h2>
        <p className="text-xs text-[#777D73] mt-2">Your ritual bag is empty.</p>
        <Link
          to="/shop"
          className="mt-6 inline-block px-6 py-2.5 bg-[#15952F] text-white text-xs font-bold uppercase tracking-wider rounded-full"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid Email is required';
    if (!formData.phone.trim() || formData.phone.trim().length < 10) errs.phone = '10-digit mobile number is required';
    if (!formData.addressLine1.trim()) errs.addressLine1 = 'Delivery address is required';
    if (!formData.city.trim()) errs.city = 'City is required';
    if (!formData.state.trim()) errs.state = 'State is required';
    if (!formData.pincode.trim() || formData.pincode.trim().length < 6) errs.pincode = '6-digit PIN code is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      window.scrollTo({ top: 100, behavior: 'smooth' });
      return;
    }

    setIsProcessing(true);
    setProcessingStage('Verifying small-batch stock and delivery routing...');

    setTimeout(() => {
      setProcessingStage(
        paymentMethod === 'razorpay'
          ? 'Connecting with Razorpay Secure Gateway (Test Sandbox)...'
          : 'Confirming Cash on Delivery fulfillment request...'
      );
    }, 800);

    setTimeout(() => {
      setProcessingStage('Generating your authentic botanical order record...');
    }, 1800);

    setTimeout(() => {
      // Create Order
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const orderNumber = `RKN-2026-${randomNum}`;

      const orderItems: OrderItem[] = items.map((item) => ({
        productId: item.product.id,
        productName: item.product.name,
        variantName: item.selectedVariant.name,
        price: item.selectedVariant.price,
        quantity: item.quantity,
        image: item.product.images[0],
      }));

      // Estimated date 4 days out
      const estDate = new Date();
      estDate.setDate(estDate.getDate() + 4);
      const estDeliveryStr = estDate.toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

      const newOrder: Order = {
        id: `order-${Date.now()}`,
        orderNumber,
        createdAt: new Date().toISOString(),
        customer: {
          ...formData,
          orderNotes: localStorage.getItem('rkn_order_note') || undefined,
        },
        items: orderItems,
        subtotal,
        discount: discountAmount,
        couponCode: promoCode || undefined,
        shippingFee: activeShippingFee + codFee,
        total: grandTotal,
        paymentMethod,
        paymentStatus: paymentMethod === 'razorpay' ? 'paid' : 'pending',
        fulfillmentStatus: 'processing',
        trackingNumber: `RK-IN-${Math.floor(100000 + Math.random() * 900000)}`,
        estimatedDelivery: estDeliveryStr,
      };

      // Store in localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('rkn_orders') || '[]');
        localStorage.setItem('rkn_orders', JSON.stringify([newOrder, ...existing]));
        localStorage.removeItem('rkn_order_note');
      } catch (err) {
        console.error(err);
      }

      clearCart();
      setIsProcessing(false);
      navigate(`/order-confirmation/${orderNumber}`);
    }, 2800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      
      {/* Header bar */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E4E8DF]">
        <Link
          to="/cart"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#15952F] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Bag</span>
        </Link>
        <div className="flex items-center gap-1.5 text-xs text-[#253D2A] font-semibold">
          <Lock className="w-3.5 h-3.5 text-[#15952F]" />
          <span>256-Bit SSL Encrypted Checkout</span>
        </div>
      </div>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Form: Customer, Address, Delivery, Payment */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* 1. Customer Contact */}
          <div className="bg-white p-6 rounded-2xl border border-[#E4E8DF] shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-medium text-[#202820] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-bold flex items-center justify-center">1</span>
              <span>Customer Information</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#202820] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Radhika Sharma"
                  className={`w-full text-xs p-3 bg-[#FAF9F4] border rounded-xl focus:outline-none focus:border-[#15952F] ${
                    errors.fullName ? 'border-red-500' : 'border-[#E4E8DF]'
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202820] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. radhika@example.com"
                  className={`w-full text-xs p-3 bg-[#FAF9F4] border rounded-xl focus:outline-none focus:border-[#15952F] ${
                    errors.email ? 'border-red-500' : 'border-[#E4E8DF]'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#202820] mb-1">
                  Mobile Number (for Courier Tracking SMS) *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 bg-[#E8F0E3] border border-r-0 border-[#E4E8DF] rounded-l-xl text-xs font-semibold text-[#253D2A]">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="9876543210"
                    maxLength={10}
                    className={`flex-1 text-xs p-3 bg-[#FAF9F4] border rounded-r-xl focus:outline-none focus:border-[#15952F] ${
                      errors.phone ? 'border-red-500' : 'border-[#E4E8DF]'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* 2. Shipping Address */}
          <div className="bg-white p-6 rounded-2xl border border-[#E4E8DF] shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-medium text-[#202820] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-bold flex items-center justify-center">2</span>
              <span>Shipping Destination (India)</span>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#202820] mb-1">
                  Street Address & House / Apartment *
                </label>
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  placeholder="e.g. 42 Lotus Meadows, 5th Main Road"
                  className={`w-full text-xs p-3 bg-[#FAF9F4] border rounded-xl focus:outline-none focus:border-[#15952F] ${
                    errors.addressLine1 ? 'border-red-500' : 'border-[#E4E8DF]'
                  }`}
                />
                {errors.addressLine1 && <p className="text-[11px] text-red-500 mt-1">{errors.addressLine1}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202820] mb-1">
                  Landmark / Suite / Floor (Optional)
                </label>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  placeholder="e.g. Near Botanical Gardens"
                  className="w-full text-xs p-3 bg-[#FAF9F4] border border-[#E4E8DF] rounded-xl focus:outline-none focus:border-[#15952F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. Bengaluru"
                    className={`w-full text-xs p-3 bg-[#FAF9F4] border rounded-xl focus:outline-none focus:border-[#15952F] ${
                      errors.city ? 'border-red-500' : 'border-[#E4E8DF]'
                    }`}
                  />
                  {errors.city && <p className="text-[11px] text-red-500 mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="e.g. Karnataka"
                    className={`w-full text-xs p-3 bg-[#FAF9F4] border rounded-xl focus:outline-none focus:border-[#15952F] ${
                      errors.state ? 'border-red-500' : 'border-[#E4E8DF]'
                    }`}
                  />
                  {errors.state && <p className="text-[11px] text-red-500 mt-1">{errors.state}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    PIN Code (6 Digits) *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="560001"
                    maxLength={6}
                    className={`w-full text-xs p-3 bg-[#FAF9F4] border rounded-xl focus:outline-none focus:border-[#15952F] ${
                      errors.pincode ? 'border-red-500' : 'border-[#E4E8DF]'
                    }`}
                  />
                  {errors.pincode && <p className="text-[11px] text-red-500 mt-1">{errors.pincode}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Delivery Method */}
          <div className="bg-white p-6 rounded-2xl border border-[#E4E8DF] shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-medium text-[#202820] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-bold flex items-center justify-center">3</span>
              <span>Delivery Service</span>
            </h3>

            <div className="space-y-3">
              <label
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  shippingMethod === 'standard'
                    ? 'border-[#15952F] bg-[#E8F0E3]/40'
                    : 'border-[#E4E8DF] bg-white hover:border-[#15952F]/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shippingMethod"
                    checked={shippingMethod === 'standard'}
                    onChange={() => setShippingMethod('standard')}
                    className="w-4 h-4 text-[#15952F] focus:ring-[#15952F]"
                  />
                  <div>
                    <p className="text-xs font-bold text-[#202820]">
                      Standard Botanical Delivery (3–5 Business Days)
                    </p>
                    <p className="text-[11px] text-[#777D73]">
                      Plastic-free secure packaging with seeded gift tag
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#202820]">
                  {isFreeStandard ? <span className="text-[#15952F]">FREE</span> : '₹60'}
                </span>
              </label>

              <label
                className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  shippingMethod === 'express'
                    ? 'border-[#15952F] bg-[#E8F0E3]/40'
                    : 'border-[#E4E8DF] bg-white hover:border-[#15952F]/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shippingMethod"
                    checked={shippingMethod === 'express'}
                    onChange={() => setShippingMethod('express')}
                    className="w-4 h-4 text-[#15952F] focus:ring-[#15952F]"
                  />
                  <div>
                    <p className="text-xs font-bold text-[#202820]">
                      Express Eco Courier (1–2 Business Days)
                    </p>
                    <p className="text-[11px] text-[#777D73]">
                      Priority hand-packing with expedited air courier
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#202820]">₹120</span>
              </label>
            </div>
          </div>

          {/* 4. Payment Selection */}
          <div className="bg-white p-6 rounded-2xl border border-[#E4E8DF] shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-medium text-[#202820] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-bold flex items-center justify-center">4</span>
              <span>Payment Mode</span>
            </h3>

            <div className="space-y-3">
              <label
                className={`flex items-start justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  paymentMethod === 'razorpay'
                    ? 'border-[#15952F] bg-[#E8F0E3]/40'
                    : 'border-[#E4E8DF] bg-white hover:border-[#15952F]/40'
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === 'razorpay'}
                    onChange={() => setPaymentMethod('razorpay')}
                    className="w-4 h-4 text-[#15952F] focus:ring-[#15952F] mt-0.5"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#15952F]" />
                      <p className="text-xs font-bold text-[#202820]">
                        Razorpay Secure Gateway (Sandbox / UPI / Card / NetBanking)
                      </p>
                    </div>
                    <p className="text-[11px] text-[#777D73] mt-1">
                      Pay instantly with Google Pay, PhonePe, Paytm, RuPay, Visa, Mastercard, or Indian NetBanking.
                    </p>
                  </div>
                </div>
                <span className="text-[10px] bg-[#15952F] text-white px-2 py-0.5 rounded-full font-bold">
                  Recommended
                </span>
              </label>

              <label
                className={`flex items-start justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                  paymentMethod === 'cod'
                    ? 'border-[#15952F] bg-[#E8F0E3]/40'
                    : 'border-[#E4E8DF] bg-white hover:border-[#15952F]/40'
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="w-4 h-4 text-[#15952F] focus:ring-[#15952F] mt-0.5"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-[#15952F]" />
                      <p className="text-xs font-bold text-[#202820]">
                        Cash on Delivery (COD)
                      </p>
                    </div>
                    <p className="text-[11px] text-[#777D73] mt-1">
                      Pay cash upon doorstep delivery. Includes standard ₹40 courier cash-handling charge.
                    </p>
                  </div>
                </div>
                <span className="text-xs text-[#777D73]">+₹40</span>
              </label>
            </div>
          </div>

        </div>

        {/* Right Column: Order Review & Final Placement */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#E4E8DF] shadow-xs space-y-6 sticky top-28">
          <h3 className="font-serif text-xl font-medium text-[#202820] pb-3 border-b border-[#E4E8DF]">
            Order Review ({items.length} items)
          </h3>

          {/* Items Preview */}
          <div className="max-h-64 overflow-y-auto space-y-3 pr-1">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 py-1">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-12 h-12 rounded-lg object-cover border border-[#E4E8DF] shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-semibold text-[#202820] truncate">
                    {item.product.name}
                  </h5>
                  <p className="text-[11px] text-[#777D73]">
                    {item.selectedVariant.name} × {item.quantity}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#202820]">
                  ₹{item.selectedVariant.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Details */}
          <div className="space-y-2 text-xs text-[#777D73] pt-3 border-t border-[#E4E8DF]">
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
              <span>Selected Shipping</span>
              <span className="text-[#202820] font-semibold">
                {activeShippingFee === 0 ? <span className="text-[#15952F]">FREE</span> : `₹${activeShippingFee}`}
              </span>
            </div>
            {codFee > 0 && (
              <div className="flex justify-between">
                <span>COD Handling Charge</span>
                <span className="text-[#202820] font-semibold">₹{codFee}</span>
              </div>
            )}
            <div className="flex justify-between text-base font-bold text-[#202820] pt-3 border-t border-[#E4E8DF]">
              <span>Final Payable Amount</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isProcessing}
            className="w-full py-4 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-bold uppercase tracking-widest rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-50"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Place Order (₹{grandTotal})</span>
          </button>

          <div className="text-center text-[10px] text-[#777D73] space-y-1">
            <p>By placing this order you agree to RK Naturals terms & delivery policy.</p>
            <p className="text-[#15952F] font-medium">Handmade in small batches • Dispatched with care</p>
          </div>
        </div>

      </form>

      {/* Processing Modal Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-[#E8F0E3] text-[#15952F] flex items-center justify-center mx-auto animate-pulse">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#202820]">
              Securing Your Botanical Order...
            </h3>
            <p className="text-xs text-[#777D73] min-h-[30px] font-medium">
              {processingStage}
            </p>
            <div className="w-full bg-[#E4E8DF] rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#15952F] h-full w-2/3 animate-[pulse_1s_infinite]" />
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

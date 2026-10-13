import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  MapPin, 
  CreditCard, 
  Printer, 
  ArrowRight, 
  Sparkles,
  PhoneCall,
  Clock
} from 'lucide-react';
import { Order } from '../types';

export const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();

  // Retrieve order from localStorage
  const savedOrders: Order[] = (() => {
    try {
      return JSON.parse(localStorage.getItem('rkn_orders') || '[]');
    } catch {
      return [];
    }
  })();

  const currentOrder = savedOrders.find((o) => o.orderNumber === orderId) || savedOrders[0];

  if (!currentOrder) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-3xl text-[#202820]">Order Confirmation</h2>
        <p className="text-xs text-[#777D73] mt-2">No recent order record was found on this device.</p>
        <Link
          to="/shop"
          className="mt-6 inline-block px-6 py-2.5 bg-[#15952F] text-white text-xs font-semibold uppercase tracking-wider rounded-full"
        >
          Explore Botanical Shop
        </Link>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-10">
      
      {/* Top Banner */}
      <div className="bg-white rounded-3xl border border-[#E4E8DF] p-6 sm:p-10 text-center shadow-xs space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#E8F0E3] text-[#15952F] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F4] border border-[#E4E8DF] text-[11px] font-bold text-[#15952F] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Handcrafted Order Confirmed</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#202820] font-normal">
          Thank you, {currentOrder.customer.fullName.split(' ')[0]}!
        </h1>

        <p className="text-xs sm:text-sm text-[#777D73] max-w-lg mx-auto">
          Your botanical order <strong className="text-[#202820]">{currentOrder.orderNumber}</strong> has been logged. We are preparing your fresh formulation in our small-batch workshop.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs">
          <div className="bg-[#FAF9F4] px-4 py-2 rounded-xl border border-[#E4E8DF]">
            <span className="text-[#777D73]">Estimated Delivery: </span>
            <strong className="text-[#15952F]">{currentOrder.estimatedDelivery}</strong>
          </div>
          <div className="bg-[#FAF9F4] px-4 py-2 rounded-xl border border-[#E4E8DF]">
            <span className="text-[#777D73]">Tracking Ref: </span>
            <strong className="text-[#202820]">{currentOrder.trackingNumber}</strong>
          </div>
        </div>
      </div>

      {/* Progress Timeline */}
      <div className="bg-white rounded-2xl border border-[#E4E8DF] p-6 sm:p-8 shadow-xs">
        <h3 className="font-serif text-xl font-medium text-[#202820] mb-6">
          Handmade Fulfillment Progress
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#15952F] text-white flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-[#202820]">1. Order Confirmed</p>
            <p className="text-[10px] text-[#15952F]">Logged in system</p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-[#E8F0E3] text-[#15952F] flex items-center justify-center mx-auto">
              <Clock className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-[#202820]">2. Small-Batch Prep</p>
            <p className="text-[10px] text-[#777D73]">Bottling & infusing</p>
          </div>

          <div className="space-y-2 opacity-60">
            <div className="w-10 h-10 rounded-full bg-[#FAF9F4] border border-[#E4E8DF] text-gray-400 flex items-center justify-center mx-auto">
              <Package className="w-5 h-5" />
            </div>
            <p className="text-xs font-medium text-[#202820]">3. Eco-Packaging</p>
            <p className="text-[10px] text-[#777D73]">Seeded gift box</p>
          </div>

          <div className="space-y-2 opacity-60">
            <div className="w-10 h-10 rounded-full bg-[#FAF9F4] border border-[#E4E8DF] text-gray-400 flex items-center justify-center mx-auto">
              <Truck className="w-5 h-5" />
            </div>
            <p className="text-xs font-medium text-[#202820]">4. Dispatched</p>
            <p className="text-[10px] text-[#777D73]">Track via SMS</p>
          </div>
        </div>
      </div>

      {/* Two Column Summary: Customer Details & Order Items */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Customer & Shipping Summary */}
        <div className="md:col-span-5 bg-white rounded-2xl border border-[#E4E8DF] p-6 space-y-6 shadow-xs">
          <h3 className="font-serif text-lg font-medium text-[#202820] pb-2 border-b border-[#E4E8DF]">
            Delivery & Payment Summary
          </h3>

          <div className="space-y-4 text-xs">
            <div>
              <div className="flex items-center gap-1.5 font-bold text-[#202820] mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#15952F]" />
                <span>Shipping Address</span>
              </div>
              <p className="font-semibold text-[#202820]">{currentOrder.customer.fullName}</p>
              <p className="text-[#777D73] leading-relaxed">
                {currentOrder.customer.addressLine1}
                {currentOrder.customer.addressLine2 && `, ${currentOrder.customer.addressLine2}`}
                <br />
                {currentOrder.customer.city}, {currentOrder.customer.state} — {currentOrder.customer.pincode}
                <br />
                India
              </p>
              <p className="text-[#777D73] mt-1">
                Phone: +91 {currentOrder.customer.phone}
              </p>
            </div>

            <div className="pt-3 border-t border-[#E4E8DF]">
              <div className="flex items-center gap-1.5 font-bold text-[#202820] mb-1">
                <CreditCard className="w-3.5 h-3.5 text-[#15952F]" />
                <span>Payment Details</span>
              </div>
              <p className="capitalize font-semibold text-[#202820]">
                Method: {currentOrder.paymentMethod === 'razorpay' ? 'Razorpay Secure (Paid)' : 'Cash on Delivery (Pending)'}
              </p>
              <p className="text-[#777D73]">
                Status: <strong className="text-[#15952F] uppercase">{currentOrder.paymentStatus}</strong>
              </p>
            </div>

            {currentOrder.customer.orderNotes && (
              <div className="pt-3 border-t border-[#E4E8DF]">
                <p className="font-bold text-[#202820] mb-0.5">Gift Note Included:</p>
                <p className="text-[#777D73] italic font-serif">
                  &ldquo;{currentOrder.customer.orderNotes}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Purchased Items List */}
        <div className="md:col-span-7 bg-white rounded-2xl border border-[#E4E8DF] p-6 space-y-6 shadow-xs">
          <h3 className="font-serif text-lg font-medium text-[#202820] pb-2 border-b border-[#E4E8DF]">
            Items Ordered ({currentOrder.items.length})
          </h3>

          <div className="divide-y divide-[#E4E8DF]">
            {currentOrder.items.map((item, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-14 h-14 rounded-lg object-cover border border-[#E4E8DF] shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#202820] truncate">
                      {item.productName}
                    </p>
                    <p className="text-[11px] text-[#777D73]">
                      {item.variantName} • Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#202820] shrink-0">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="pt-3 border-t border-[#E4E8DF] space-y-1.5 text-xs text-[#777D73]">
            <div className="flex justify-between">
              <span>Items Subtotal</span>
              <span className="text-[#202820] font-semibold">₹{currentOrder.subtotal}</span>
            </div>
            {currentOrder.discount > 0 && (
              <div className="flex justify-between text-[#15952F] font-semibold">
                <span>Coupon Savings</span>
                <span>-₹{currentOrder.discount}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Delivery & Handling</span>
              <span className="text-[#202820] font-semibold">
                {currentOrder.shippingFee === 0 ? 'FREE' : `₹${currentOrder.shippingFee}`}
              </span>
            </div>
            <div className="flex justify-between text-base font-bold text-[#202820] pt-2 border-t border-[#E4E8DF]">
              <span>Total Amount</span>
              <span>₹{currentOrder.total}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 print:hidden">
        <button
          onClick={handlePrint}
          className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#E4E8DF] bg-white hover:bg-[#FAF9F4] text-xs font-bold uppercase tracking-wider text-[#202820] flex items-center justify-center gap-2 transition-colors"
        >
          <Printer className="w-4 h-4" />
          <span>Print Official Receipt</span>
        </button>

        <Link
          to="/shop"
          className="w-full sm:w-auto px-8 py-3 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all flex items-center justify-center gap-2"
        >
          <span>Continue Exploring</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Support note */}
      <div className="text-center text-xs text-[#777D73] pt-4">
        <p className="flex items-center justify-center gap-1.5">
          <PhoneCall className="w-3.5 h-3.5 text-[#15952F]" />
          <span>Need help with your order? Reach our customer care team at <Link to="/contact" className="text-[#15952F] underline font-semibold">Contact Us</Link></span>
        </p>
      </div>

    </div>
  );
};

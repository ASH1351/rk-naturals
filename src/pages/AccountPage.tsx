import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Package, 
  MapPin, 
  Search, 
  ArrowRight, 
  Clock, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Order } from '../types';

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [lookupNumber, setLookupNumber] = useState('');
  const [lookupError, setLookupError] = useState('');

  // Orders from localStorage
  const savedOrders: Order[] = (() => {
    try {
      return JSON.parse(localStorage.getItem('rkn_orders') || '[]');
    } catch {
      return [];
    }
  })();

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setLookupError('');
    const clean = lookupNumber.trim();
    if (!clean) return;

    const found = savedOrders.find((o) => o.orderNumber.toLowerCase() === clean.toLowerCase());
    if (found) {
      navigate(`/order-confirmation/${found.orderNumber}`);
    } else {
      setLookupError(`Order "${clean}" was not found. Please verify the order number.`);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="w-14 h-14 rounded-full bg-[#E8F0E3] text-[#15952F] flex items-center justify-center mx-auto mb-2">
          <User className="w-7 h-7" />
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#202820]">
          My Account & Orders
        </h1>
        <p className="text-xs sm:text-sm text-[#777D73]">
          Track your handcrafted botanical shipments and view recent purchase receipts.
        </p>
      </div>

      {/* Quick Lookup Bar */}
      <div className="bg-white p-6 rounded-3xl border border-[#E4E8DF] shadow-xs">
        <h3 className="font-serif text-lg font-medium text-[#202820] mb-2 flex items-center gap-2">
          <Search className="w-4 h-4 text-[#15952F]" />
          <span>Quick Order Lookup</span>
        </h3>
        <p className="text-xs text-[#777D73] mb-4">
          Enter your 9-character order number (e.g. <code>RKN-2026-84920</code>) to view tracking status:
        </p>

        <form onSubmit={handleLookup} className="flex gap-2 max-w-md">
          <input
            type="text"
            value={lookupNumber}
            onChange={(e) => setLookupNumber(e.target.value)}
            placeholder="RKN-2026-XXXXX"
            className="flex-1 text-xs p-3 bg-[#FAF9F4] border border-[#E4E8DF] rounded-xl focus:outline-none focus:border-[#15952F] uppercase"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-semibold rounded-xl transition-colors"
          >
            Find Order
          </button>
        </form>
        {lookupError && <p className="text-xs text-red-500 mt-2">{lookupError}</p>}
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#E4E8DF]">
          <h2 className="font-serif text-2xl text-[#202820] flex items-center gap-2">
            <Package className="w-5 h-5 text-[#15952F]" />
            <span>Order History ({savedOrders.length})</span>
          </h2>
        </div>

        {savedOrders.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E4E8DF] p-10 text-center space-y-4">
            <Package className="w-10 h-10 text-gray-400 mx-auto" />
            <h4 className="font-serif text-lg text-[#202820]">No Orders Placed Yet</h4>
            <p className="text-xs text-[#777D73] max-w-sm mx-auto">
              You haven&apos;t placed any orders on this device yet. Explore our handcrafted botanical collections to get started.
            </p>
            <Link
              to="/shop"
              className="inline-block px-6 py-2.5 bg-[#15952F] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-xs"
            >
              Shop Handcrafted Botanicals
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {savedOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-6 rounded-2xl border border-[#E4E8DF] shadow-xs flex flex-col md:flex-row justify-between gap-6 items-start md:items-center"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#15952F] bg-[#E8F0E3] px-2.5 py-0.5 rounded-full">
                      {order.orderNumber}
                    </span>
                    <span className="text-xs text-[#777D73]">
                      Placed on {new Date(order.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>

                  <p className="text-xs text-[#202820] font-medium">
                    {order.items.length} items • Total: <strong>₹{order.total}</strong> ({order.paymentMethod.toUpperCase()})
                  </p>

                  <div className="flex items-center gap-2 text-xs text-[#777D73]">
                    <span className="flex items-center gap-1 text-[#15952F] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Status: {order.fulfillmentStatus}
                    </span>
                    <span>• Est. Delivery: {order.estimatedDelivery}</span>
                  </div>
                </div>

                <Link
                  to={`/order-confirmation/${order.orderNumber}`}
                  className="px-5 py-2.5 bg-[#FAF9F4] hover:bg-[#E8F0E3] text-[#15952F] text-xs font-semibold rounded-xl border border-[#E4E8DF] flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <span>View Full Receipt</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

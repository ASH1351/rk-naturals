import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  ArrowRight, 
  Leaf, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  CheckCircle2,
  Heart
} from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast({
        title: 'Please enter a valid email',
        type: 'error',
      });
      return;
    }
    setIsSubscribed(true);
    showToast({
      title: 'Welcome to the RK Naturals Journal',
      message: 'You are now subscribed to our botanical letters & seasonal harvest notes.',
      type: 'success',
    });
    setEmail('');
  };

  return (
    <footer className="bg-[#253D2A] text-[#FAF9F4] pt-16 pb-12 border-t border-[#15952F]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Features Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-[#FAF9F4]/10 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#15952F]/20 flex items-center justify-center shrink-0 text-[#A7D929]">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-xs tracking-wider uppercase text-white">Handmade in Small Batches</h5>
              <p className="text-xs text-white/60 mt-0.5">Slow cold-infused botanical extracts</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#15952F]/20 flex items-center justify-center shrink-0 text-[#A7D929]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-xs tracking-wider uppercase text-white">Eco-Conscious Shipping</h5>
              <p className="text-xs text-white/60 mt-0.5">Free delivery across India over ₹999</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#15952F]/20 flex items-center justify-center shrink-0 text-[#A7D929]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-xs tracking-wider uppercase text-white">Full Ingredient Honesty</h5>
              <p className="text-xs text-white/60 mt-0.5">100% transparent ingredient disclosures</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#15952F]/20 flex items-center justify-center shrink-0 text-[#A7D929]">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h5 className="font-semibold text-xs tracking-wider uppercase text-white">Mindful Packaging</h5>
              <p className="text-xs text-white/60 mt-0.5">Reusable glass jars & compostable boxes</p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-white p-3 rounded-2xl shadow-md border border-[#E4E8DF]/20">
              <img
                src="/images/rk-naturals-logo.png"
                alt="RK Naturals"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm italic font-serif text-[#A7D929] pt-1">
              &ldquo;Nature-Inspired Care. Made with Love.&rdquo;
            </p>
            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              Bring the goodness of nature into your everyday self-care ritual. Handcrafted personal care and botanical skincare made in small batches with cold-pressed oils, wild-harvested herbs, and pure floral distillates.
            </p>
            
            {/* Newsletter Subscription Box */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-white mb-2">
                Join Our Botanical Circle
              </p>
              {isSubscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#A7D929] bg-[#15952F]/20 p-3 rounded-xl border border-[#15952F]/40">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you for joining our self-care community.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#A7D929]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-semibold rounded-xl flex items-center gap-1 transition-colors shrink-0"
                    aria-label="Subscribe to newsletter"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
              <p className="text-[10px] text-white/40 mt-1.5">
                We respect your inbox. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase tracking-widest font-semibold text-[#A7D929]">Botanical Shop</h5>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">Shop All Products</Link>
              </li>
              <li>
                <Link to="/collections/facecare" className="hover:text-white transition-colors">Face Oils & Elixirs</Link>
              </li>
              <li>
                <Link to="/collections/haircare" className="hover:text-white transition-colors">Hair Oils & Scalp Tonics</Link>
              </li>
              <li>
                <Link to="/collections/bodycare" className="hover:text-white transition-colors">Handcrafted Cold-Process Soaps</Link>
              </li>
              <li>
                <Link to="/collections/skincare" className="hover:text-white transition-colors">Floral Hydrosols & Mists</Link>
              </li>
              <li>
                <Link to="/collections/giftsets" className="hover:text-white transition-colors">Curated Keepsake Hampers</Link>
              </li>
            </ul>
          </div>

          {/* Brand & Craft */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase tracking-widest font-semibold text-[#A7D929]">Our Philosophy</h5>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About RK Naturals</Link>
              </li>
              <li>
                <Link to="/our-process" className="hover:text-white transition-colors">Handmade Process</Link>
              </li>
              <li>
                <Link to="/ingredients" className="hover:text-white transition-colors">Botanical Ingredient Index</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Customer Care</Link>
              </li>
            </ul>
          </div>

          {/* Customer Support & Policies */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase tracking-widest font-semibold text-[#A7D929]">Customer Care</h5>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/shipping" className="hover:text-white transition-colors">Shipping & Delivery Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition-colors">Returns & Refunds Policy</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-white transition-colors">Track Order & Account</Link>
              </li>
            </ul>
            <div className="pt-2 text-xs text-white/60">
              <p className="font-semibold text-white">Support Timings:</p>
              <p className="text-[11px] mt-0.5">Mon – Sat: 10:00 AM – 6:00 PM IST</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 border-t border-[#FAF9F4]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} RK Naturals. All rights reserved. Handcrafted botanical beauty.</p>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="bg-white/10 px-2 py-0.5 rounded text-white/80 font-medium">UPI</span>
            <span className="bg-white/10 px-2 py-0.5 rounded text-white/80 font-medium">RuPay</span>
            <span className="bg-white/10 px-2 py-0.5 rounded text-white/80 font-medium">Visa</span>
            <span className="bg-white/10 px-2 py-0.5 rounded text-white/80 font-medium">Mastercard</span>
            <span className="bg-white/10 px-2 py-0.5 rounded text-white/80 font-medium">NetBanking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, Truck, RotateCcw, FileText, ArrowLeft } from 'lucide-react';

export const PolicyPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  let title = 'Store Policy';
  let icon = <FileText className="w-5 h-5 text-[#15952F]" />;
  let content = null;

  if (path === '/shipping') {
    title = 'Shipping & Delivery Policy';
    icon = <Truck className="w-5 h-5 text-[#15952F]" />;
    content = (
      <div className="space-y-6 text-xs sm:text-sm text-[#777D73] leading-relaxed">
        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">1. Small-Batch Processing & Dispatch</h3>
          <p>
            Because RK Naturals formulations are handcrafted in small batches to preserve botanical freshness, orders are freshly packed within <strong>24 to 48 business hours</strong> (excluding Sundays and national holidays) from our workshop in India.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">2. Delivery Rates & Timelines</h3>
          <p>
            We ship across all serviceable PIN codes throughout India:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Complimentary Standard Delivery:</strong> Free on all orders with cart value of ₹999 or above.</li>
            <li><strong>Standard Botanical Shipping:</strong> Flat ₹60 for orders under ₹999 (delivered in 3–5 business days).</li>
            <li><strong>Express Eco Courier:</strong> Optional expedited shipping at ₹120 (delivered in 1–2 business days for metro locations).</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">3. Eco-Conscious Packaging</h3>
          <p>
            We use recyclable amber glass containers, compostable paper wraps, and biodegradable corrugated cardboard. Every shipment is carefully buffered to avoid transit breakage.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">4. Order Tracking</h3>
          <p>
            Once your order leaves our workshop, you will receive an SMS and email notification with your active courier tracking number and real-time status link.
          </p>
        </section>
      </div>
    );
  } else if (path === '/returns') {
    title = 'Returns, Replacements & Refunds';
    icon = <RotateCcw className="w-5 h-5 text-[#15952F]" />;
    content = (
      <div className="space-y-6 text-xs sm:text-sm text-[#777D73] leading-relaxed">
        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">1. Handcrafted Hygiene Policy</h3>
          <p>
            Due to the artisanal, personal-care nature of our botanical formulations and strict hygiene standards, opened or used skincare and hair products cannot be returned for resale.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">2. Transit Breakage or Damaged Goods</h3>
          <p>
            We take utmost pride in hand-packaging our amber glass flacons. If your order arrives broken, leaking, or defective during courier transit:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Contact our team within <strong>48 hours of delivery</strong> at <span className="text-[#15952F] font-semibold">care@rknaturals.in</span> with photographs of the damaged product and parcel.</li>
            <li>We will promptly dispatch a fresh replacement batch at zero cost or issue a full refund to your original payment method.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">3. Order Cancellation</h3>
          <p>
            Orders can be cancelled free of charge if requested before our workshop initiates shipment (within 4 hours of order placement). Once dispatched with courier, orders cannot be cancelled mid-transit.
          </p>
        </section>
      </div>
    );
  } else if (path === '/privacy') {
    title = 'Privacy Policy';
    icon = <ShieldCheck className="w-5 h-5 text-[#15952F]" />;
    content = (
      <div className="space-y-6 text-xs sm:text-sm text-[#777D73] leading-relaxed">
        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">1. Information We Collect</h3>
          <p>
            We collect personal details (name, delivery address, phone number, email address) strictly to process your orders, provide courier tracking updates, and improve your self-care shopping experience.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">2. Payment Information Security</h3>
          <p>
            We never store your credit/debit card numbers, CVVs, or bank credentials. All electronic payments are processed through RBI-authorized payment aggregators (such as Razorpay) using encrypted 256-bit SSL connections.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">3. Non-Disclosure & Anti-Spam</h3>
          <p>
            We do not sell, rent, or lease customer data to third-party marketing companies. You can unsubscribe from our botanical newsletter at any time with one click.
          </p>
        </section>
      </div>
    );
  } else {
    title = 'Terms of Service';
    icon = <FileText className="w-5 h-5 text-[#15952F]" />;
    content = (
      <div className="space-y-6 text-xs sm:text-sm text-[#777D73] leading-relaxed">
        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">1. Handmade Nature & Natural Variations</h3>
          <p>
            All RK Naturals products are handmade using natural botanical harvests. Slight variations in color hue, herbal aroma, and consistency from batch to batch are natural characteristics of unrefined cold-pressed ingredients and do not indicate a flaw.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">2. Product Usage & Patch Testing</h3>
          <p>
            Our formulations are designed for cosmetic and personal care use. They are not intended to diagnose, treat, or cure any medical conditions. We always advise performing an individual patch test on your skin 24 hours prior to regular use.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-[#202820]">3. Pricing & Intellectual Property</h3>
          <p>
            Prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes. The RK Naturals trademark, brand logo, and original photography are the intellectual property of RK Naturals.
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-8">
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#15952F] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Storefront</span>
        </Link>
      </div>

      <div className="bg-white rounded-3xl border border-[#E4E8DF] p-6 sm:p-12 shadow-xs space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-[#E4E8DF]">
          <div className="w-10 h-10 rounded-full bg-[#E8F0E3] flex items-center justify-center">
            {icon}
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#15952F]">
              RK Naturals Official Store Policies
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl text-[#202820]">
              {title}
            </h1>
          </div>
        </div>

        {content}
      </div>
    </div>
  );
};

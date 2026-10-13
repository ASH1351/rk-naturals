import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string>('0-0');

  const faqCategories = [
    {
      category: 'Handmade Formulations & Ingredients',
      items: [
        {
          q: 'What makes RK Naturals different from commercial beauty brands?',
          a: 'We manufacture our products by hand in small artisan batches rather than automated factories. We use cold-pressed unrefined plant oils, steam-distilled floral waters, and whole herbs without synthetic fillers, parabens, or artificial fragrance blends.',
        },
        {
          q: 'Why does my hair oil or body butter sometimes change texture?',
          a: 'Our products contain raw unrefined plant butters (like Kokum butter) and pure cold-pressed coconut oil without chemical stabilizer waxes. In cold weather, they naturally firm up; in warmer temperatures, they soften. This is normal and a hallmark of pure botanical formulation.',
        },
        {
          q: 'Are your products suitable for sensitive skin?',
          a: 'Because our formulations are free from harsh synthetic sulfates, silicones, and artificial dyes, many customers with sensitive skin love them. However, since everyone’s skin is unique, we always recommend conducting a small patch test on your inner wrist 24 hours prior to regular use.',
        },
      ],
    },
    {
      category: 'Ordering, Shipping & Delivery',
      items: [
        {
          q: 'How much does shipping cost across India?',
          a: 'We offer complimentary standard delivery on all orders over ₹999. For orders below ₹999, standard shipping is ₹60. Express eco courier is available at checkout for ₹120.',
        },
        {
          q: 'How long will it take for my order to arrive?',
          a: 'Orders are freshly hand-packed and dispatched from our workshop within 24 to 48 hours. Standard courier transit typically takes 3 to 5 business days depending on your pin code.',
        },
        {
          q: 'Do you offer Cash on Delivery (COD)?',
          a: 'Yes, we offer Cash on Delivery across most serviceable Indian PIN codes with a nominal ₹40 courier cash-handling charge. We also support all major instant UPI, Card, and NetBanking options.',
        },
      ],
    },
    {
      category: 'Returns, Replacements & Storage',
      items: [
        {
          q: 'What is your policy if an item arrives damaged?',
          a: 'We pack every glass bottle with utmost care. In the rare event of transit damage or leakage, please take a photograph and notify us at care@rknaturals.in within 48 hours of delivery, and we will dispatch a replacement immediately at no extra cost.',
        },
        {
          q: 'How should I store my botanical products?',
          a: 'Keep products in a dry, cool place away from direct sunlight and humidity. Ensure dropper bottles and cream jars are tightly sealed after each ritual.',
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
          Knowledge Base
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202820] font-normal">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-[#777D73] max-w-xl mx-auto">
          Everything you need to know about our handmade products, natural ingredients, and Indian delivery timelines.
        </p>
      </div>

      <div className="space-y-8">
        {faqCategories.map((group, groupIdx) => (
          <div key={groupIdx} className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E4E8DF] shadow-xs space-y-4">
            <h3 className="font-serif text-xl font-medium text-[#202820] pb-2 border-b border-[#E4E8DF]">
              {group.category}
            </h3>

            <div className="divide-y divide-[#E4E8DF]">
              {group.items.map((item, itemIdx) => {
                const key = `${groupIdx}-${itemIdx}`;
                const isOpen = openIndex === key;
                return (
                  <div key={itemIdx} className="py-4">
                    <button
                      onClick={() => setOpenIndex(isOpen ? '' : key)}
                      className="w-full flex items-center justify-between text-left gap-4"
                    >
                      <span className="text-xs sm:text-sm font-semibold text-[#202820]">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform shrink-0 ${
                          isOpen ? 'rotate-180 text-[#15952F]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="text-xs sm:text-sm text-[#777D73] mt-2.5 leading-relaxed pr-6">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center bg-[#FAF9F4] p-8 rounded-3xl border border-[#E4E8DF] space-y-3">
        <h4 className="font-serif text-xl text-[#202820]">Still have a question?</h4>
        <p className="text-xs text-[#777D73]">We are happy to assist with any product queries or special requests.</p>
        <Link
          to="/contact"
          className="inline-block mt-2 px-6 py-2.5 bg-[#15952F] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-xs"
        >
          Contact Customer Care
        </Link>
      </div>

    </div>
  );
};

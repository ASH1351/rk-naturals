import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const OurProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Thoughtful Botanical Selection',
      subtitle: 'Inspection of pure raw harvests',
      image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
      description:
        'Every batch begins with carefully inspecting whole botanical ingredients — crimson Kashmiri saffron threads, hand-gathered damask rose petals, cold-pressed black sesame seeds, and golden jojoba oils. We discard anything that doesn’t meet our strict standards for freshness and natural aromatic vibrancy.',
    },
    {
      number: '02',
      title: 'Slow Cold Infusion',
      subtitle: 'Patient extraction without harsh heat',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      description:
        'Industrial beauty frequently relies on excessive high-heat processing that strips delicate plant nutrients. At RK Naturals, we utilize traditional cold infusion and low-temperature steam hydro-distillation. Herbs and floral petals steep slowly over weeks in nourishing carrier oils to naturally release their rich botanical actives.',
    },
    {
      number: '03',
      title: 'Artisanal Hand Blending',
      subtitle: 'Small batches of 50 to 100 units',
      image: 'https://images.unsplash.com/photo-1547793549-70faf88838c8?auto=format&fit=crop&w=800&q=80',
      description:
        'We deliberately avoid mass assembly lines. Our cold-process soaps are stirred, cut, and bevelled by hand before undergoing a six-week natural curing period. Our whipped body butters and face elixirs are poured into sanitised jars in limited artisanal batches to ensure maximum shelf freshness upon arrival.',
    },
    {
      number: '04',
      title: 'Purity & Quality Verification',
      subtitle: 'Batch consistency inspections',
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
      description:
        'Before any batch is sealed, it undergoes thorough sensory and physical testing. We inspect natural color depth, herbal aroma, skin absorption rate, and pH balance. Only batches that pass our strict internal requirements receive an official batch stamp.',
    },
    {
      number: '05',
      title: 'Mindful Eco-Packaging',
      subtitle: 'Sustainable amber glass & paper wraps',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      description:
        'We house our botanical elixirs in UV-protective amber glass flacons to shield delicate oils from light degradation. Our packaging utilizes plastic-free recyclable paper, natural linen ribbons, and seeded plantable gift tags that can be placed in soil to sprout fresh flowers.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-16">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Craftsmanship & Artistry</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#202820] font-normal leading-tight">
          Our Handmade Process
        </h1>
        <p className="text-sm sm:text-base text-[#777D73] leading-relaxed font-light">
          We honor slow, traditional formulating techniques. Take a peek inside the five distinct steps behind every bottle, jar, and soap bar bearing the RK Naturals emblem.
        </p>
      </section>

      {/* 5-Step Story Sequence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {steps.map((step, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={step.number}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-white border border-[#E4E8DF] shadow-md">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text side */}
              <div className={`lg:col-span-6 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <span className="font-serif text-4xl sm:text-5xl text-[#A7D929] font-bold block">
                  {step.number}
                </span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#15952F] block">
                  {step.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#202820]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#777D73] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center bg-[#FAF9F4] p-10 rounded-3xl border border-[#E4E8DF] space-y-5">
        <h3 className="font-serif text-3xl text-[#202820]">
          Experience the Difference of True Botanical Care
        </h3>
        <p className="text-xs sm:text-sm text-[#777D73] max-w-lg mx-auto">
          Every jar and bottle is made with care and shipped directly to your door.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all"
        >
          <span>Shop Fresh Small-Batch Formulations</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

    </div>
  );
};

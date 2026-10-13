import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Leaf, ShieldCheck, ArrowRight, Flower2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Origin & Purpose</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#202820] font-normal leading-tight">
            Nature-Inspired Care. <br />
            <span className="italic text-[#15952F] font-serif">Made with Love.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#777D73] leading-relaxed font-light">
            Bring the goodness of nature into your everyday self-care ritual. At RK Naturals, we create handmade cosmetics, skincare, haircare, and personal care products crafted in thoughtful small batches.
          </p>
        </div>

        {/* Feature Image */}
        <div className="mt-12 rounded-3xl overflow-hidden aspect-[16/9] max-h-[500px] border border-[#E4E8DF] shadow-md bg-white">
          <img
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80"
            alt="Handmade botanical cosmetics preparation"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* The Brand Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
              The RK Naturals Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#202820] leading-tight">
              A Slower, More Mindful Approach to Beauty
            </h2>
            <p className="text-xs sm:text-sm text-[#777D73] leading-relaxed">
              In a world of mass manufacturing, synthetic fragrances, and rushed routines, RK Naturals was founded on a simple desire: to bring true botanical craftsmanship and transparent formulations back to daily self-care.
            </p>
            <p className="text-xs sm:text-sm text-[#777D73] leading-relaxed">
              We handcraft our products using slow, traditional methods. From slow cold infusions where whole herbs and floral petals steep patiently in cold-pressed virgin seed oils, to hand-poured soaps cured for over six weeks, every formula is made with intention and love.
            </p>
            <div className="pt-2">
              <Link
                to="/our-process"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#15952F] hover:underline"
              >
                <span>Discover our 5-step handmade process</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-[#E4E8DF] space-y-2">
              <Heart className="w-6 h-6 text-[#15952F]" />
              <h4 className="font-serif text-base font-semibold text-[#202820]">Made with Love</h4>
              <p className="text-xs text-[#777D73]">Handcrafted in small artisan batches with personal dedication.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E4E8DF] space-y-2">
              <Leaf className="w-6 h-6 text-[#15952F]" />
              <h4 className="font-serif text-base font-semibold text-[#202820]">Nature-Inspired</h4>
              <p className="text-xs text-[#777D73]">Raw botanical extracts, pure seed oils, and single-origin hydrosols.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E4E8DF] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#15952F]" />
              <h4 className="font-serif text-base font-semibold text-[#202820]">Honest Labels</h4>
              <p className="text-xs text-[#777D73]">Full transparency in ingredients. Zero hidden fragrance chemicals.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E4E8DF] space-y-2">
              <Flower2 className="w-6 h-6 text-[#15952F]" />
              <h4 className="font-serif text-base font-semibold text-[#202820]">Sensorial Rituals</h4>
              <p className="text-xs text-[#777D73]">Grounded textures and natural aromas that soothe body and mind.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Sourcing Section */}
      <section className="bg-white py-16 sm:py-20 border-y border-[#E4E8DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
              Regional Provenance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#202820] mt-1">
              Rooted in Indian Botanical Heritage
            </h2>
            <p className="text-xs sm:text-sm text-[#777D73] mt-2">
              We honor the diverse botanical micro-climates across India to source authentic plant varieties at their harvest peak.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF9F4] border border-[#E4E8DF] space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#15952F]">Kashmir Valley</span>
              <h4 className="font-serif text-xl font-medium text-[#202820]">Pampore Saffron Stigmas</h4>
              <p className="text-xs text-[#777D73] leading-relaxed">
                Hand-harvested purple crocus blossoms delivering precious red gold stigmas for our Kumkumadi Youth Nectar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F4] border border-[#E4E8DF] space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#15952F]">Kannauj, Uttar Pradesh</span>
              <h4 className="font-serif text-xl font-medium text-[#202820]">Damask Rose Petals</h4>
              <p className="text-xs text-[#777D73] leading-relaxed">
                Hydro-distilled in historic copper degs to capture delicate micro-droplets of pure rose essential water.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F4] border border-[#E4E8DF] space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#15952F]">Western Ghats</span>
              <h4 className="font-serif text-xl font-medium text-[#202820]">Raw Unrefined Kokum Butter</h4>
              <p className="text-xs text-[#777D73] leading-relaxed">
                Wild-collected native tree seeds cold-pressed into an ultra-nourishing butter that melts seamlessly upon skin contact.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/ingredients"
              className="px-8 py-3.5 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Botanical Ingredients Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

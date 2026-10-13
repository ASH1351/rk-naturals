import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Leaf, 
  Droplet, 
  Heart, 
  ShieldCheck, 
  ChevronRight, 
  Layers, 
  Flower2, 
  Sun,
  Moon,
  Wind
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { BOTANICAL_INGREDIENTS } from '../data/ingredients';
import { ProductCard } from '../components/product/ProductCard';

export const Home: React.FC = () => {
  const [selectedIngredientIndex, setSelectedIngredientIndex] = useState(0);

  // Filter bestsellers
  const bestsellerProducts = PRODUCTS.filter((p) => p.bestseller || p.featured).slice(0, 4);
  const featuredIngredient = BOTANICAL_INGREDIENTS[selectedIngredientIndex];

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* SECTION A: HERO CAMPAIGN */}
      <section className="relative overflow-hidden bg-[#FAF9F4] pt-4 sm:pt-8 pb-12 sm:pb-20 border-b border-[#E4E8DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Headline & Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0E3] border border-[#15952F]/20 text-[#15952F] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Beauty of Natural Care</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#202820] leading-[1.08] tracking-tight">
                Let Nature Be Part of Your <span className="italic text-[#15952F] font-serif">Glow.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#777D73] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Discover thoughtfully crafted beauty and personal care essentials inspired by the beauty of nature and the art of everyday self-care. Handcrafted in small batches with cold-pressed botanical oils.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/shop"
                  className="w-full sm:w-auto px-8 py-4 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Shop the Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#FAF9F4] text-[#253D2A] text-xs font-bold uppercase tracking-widest rounded-full border border-[#E4E8DF] hover:border-[#15952F] transition-all duration-300 text-center"
                >
                  Discover Our Story
                </Link>
              </div>

              {/* Supporting Note */}
              <div className="pt-4 border-t border-[#E4E8DF]/60 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#777D73]">
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-[#15952F]" />
                  <span>Small-Batch Infusions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Droplet className="w-4 h-4 text-[#15952F]" />
                  <span>Pure Cold-Pressed Oils</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-white">
                  <img
                    src="/images/rk-naturals-hero-campaign.jpg"
                    alt="RK Naturals Botanical Face Elixirs"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating Hero Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E4E8DF] shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#15952F]">
                        Signature Elixir
                      </p>
                      <h4 className="font-serif text-sm font-semibold text-[#202820]">
                        Kumkumadi Saffron Youth Nectar
                      </h4>
                      <p className="text-[11px] text-[#777D73]">Hand-infused with Kashmiri saffron</p>
                    </div>
                    <Link
                      to="/products/kumkumadi-saffron-youth-nectar"
                      className="p-2.5 rounded-full bg-[#15952F] text-white hover:bg-[#49B82D] transition-colors"
                      aria-label="View Kumkumadi Nectar"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Decorative botanical leaf motif */}
                <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#A7D929]/20 blur-xl -z-10" />
                <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#15952F]/15 blur-2xl -z-10" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION B: BRAND TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E4E8DF] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#E8F0E3] flex items-center justify-center shrink-0 text-[#15952F]">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-xs tracking-wider uppercase text-[#202820]">
                  Handmade with Care
                </h4>
                <p className="text-xs text-[#777D73] mt-1">
                  Crafted by our hands in thoughtful, small artisan batches.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#E8F0E3] flex items-center justify-center shrink-0 text-[#15952F]">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-xs tracking-wider uppercase text-[#202820]">
                  Nature-Inspired
                </h4>
                <p className="text-xs text-[#777D73] mt-1">
                  Formulated with real plant petals, herbs, and cold-pressed seeds.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#E8F0E3] flex items-center justify-center shrink-0 text-[#15952F]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-xs tracking-wider uppercase text-[#202820]">
                  Thoughtfully Crafted
                </h4>
                <p className="text-xs text-[#777D73] mt-1">
                  Slow cold-steeped over weeks to preserve active botanical goodness.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#E8F0E3] flex items-center justify-center shrink-0 text-[#15952F]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-xs tracking-wider uppercase text-[#202820]">
                  Everyday Self-Care
                </h4>
                <p className="text-xs text-[#777D73] mt-1">
                  Gentle, sensorial rituals that bring mindfulness to everyday life.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION C: BRAND INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80"
                alt="Slow botanical handcrafting process"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Small accent card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl border border-[#E4E8DF] shadow-lg max-w-xs">
              <p className="font-serif italic text-sm text-[#253D2A]">
                &ldquo;Bring the goodness of nature into your everyday self-care ritual.&rdquo;
              </p>
              <p className="text-[10px] uppercase font-bold text-[#15952F] tracking-widest mt-2">
                — RK Naturals Ethos
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
              Handmade & Botanical
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#202820] leading-tight">
              Your Daily Ritual, Inspired by Nature.
            </h2>
            <p className="text-sm sm:text-base text-[#777D73] leading-relaxed">
              RK Naturals brings together beauty, self-care, and thoughtful craftsmanship to make everyday routines feel a little more special. We believe that caring for your skin and hair should never feel rushed or complicated.
            </p>
            <p className="text-sm sm:text-base text-[#777D73] leading-relaxed">
              Every elixir, hair oil, and cold-process soap bar is handcrafted by us in our workshop using honest botanical ingredients — from fragrant Kashmiri saffron and Kannauj damask roses to raw Western Ghats kokum butter.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#15952F] hover:text-[#49B82D] group"
              >
                <span>Get to Know Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION D: SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
              Botanical Taxonomy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#202820] mt-1">
              Shop by Category
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-3 sm:mt-0 text-xs font-semibold text-[#15952F] hover:text-[#49B82D] inline-flex items-center gap-1 group"
          >
            <span>Explore All ({PRODUCTS.length} products)</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.slice(0, 4).map((cat) => (
            <Link
              key={cat.id}
              to={`/collections/${cat.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E4E8DF] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF9F4]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#202820] group-hover:text-[#15952F] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-[#777D73] mt-1.5 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E4E8DF]/60 flex items-center justify-between text-xs font-semibold text-[#15952F]">
                  <span>Shop Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION E: BESTSELLERS */}
      <section className="bg-white py-16 sm:py-20 border-y border-[#E4E8DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
                Handcrafted Favorites
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#202820] mt-1">
                Loved for Your Daily Ritual
              </h2>
              <p className="text-xs sm:text-sm text-[#777D73] mt-1">
                Explore the botanical formulations customers return to again and again.
              </p>
            </div>
            <Link
              to="/collections/bestsellers"
              className="mt-3 sm:mt-0 text-xs font-semibold text-[#15952F] hover:text-[#49B82D] inline-flex items-center gap-1 group"
            >
              <span>View All Bestsellers</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {bestsellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION F: THE INGREDIENT STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F4] rounded-3xl border border-[#E4E8DF] p-6 sm:p-10 lg:p-12 overflow-hidden relative">
          <div className="max-w-xl mb-8">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
              Botanical Transparency
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#202820] mt-1">
              Rooted in Nature. Thoughtfully Made.
            </h2>
            <p className="text-xs sm:text-sm text-[#777D73] mt-2">
              We carefully source our botanical ingredients directly from reputable growers and natural harvests across India. No synthetic perfumes, fillers, or obscured ingredients.
            </p>
          </div>

          {/* Ingredient Pills Selector */}
          <div className="flex flex-wrap gap-2 mb-8">
            {BOTANICAL_INGREDIENTS.map((ing, idx) => (
              <button
                key={ing.id}
                onClick={() => setSelectedIngredientIndex(idx)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedIngredientIndex === idx
                    ? 'bg-[#15952F] text-white shadow-xs'
                    : 'bg-white text-[#202820] border border-[#E4E8DF] hover:border-[#15952F]'
                }`}
              >
                {ing.name}
              </button>
            ))}
          </div>

          {/* Active Ingredient Spotlight Card */}
          <div className="bg-white rounded-2xl border border-[#E4E8DF] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs">
            <div className="md:col-span-5 aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF9F4]">
              <img
                src={featuredIngredient.image}
                alt={featuredIngredient.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#15952F]">
                  {featuredIngredient.category} • Botanical: {featuredIngredient.botanicalName}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#202820] mt-1">
                  {featuredIngredient.name}
                </h3>
              </div>
              <p className="text-xs font-semibold text-[#253D2A] bg-[#E8F0E3] px-3 py-1.5 rounded-lg inline-block">
                Region: {featuredIngredient.source}
              </p>
              <p className="text-xs sm:text-sm text-[#777D73] leading-relaxed">
                {featuredIngredient.description}
              </p>
              <div className="pt-2 flex items-center justify-between">
                <Link
                  to="/ingredients"
                  className="text-xs font-bold uppercase tracking-wider text-[#15952F] hover:text-[#49B82D] inline-flex items-center gap-1 group"
                >
                  <span>Explore Full Botanical Directory</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: FEATURED COLLECTION CAMPAIGN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#253D2A] text-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#A7D929]">
              Curated Edit
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight">
              The Everyday Essentials Edit
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
              Build a self-care routine that feels personal, simple, and beautifully yours. Cleanse with botanical cold-process soaps, tone with pure hydro-distilled floral waters, and nourish with slow-steeped face elixirs.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="px-8 py-3.5 bg-[#15952F] hover:bg-[#49B82D] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-colors flex items-center gap-2 group"
              >
                <span>Explore the Edit</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/collections/giftsets"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full border border-white/20 transition-colors"
              >
                View Gift Boxes
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-square lg:aspect-auto lg:h-full">
            <img
              src="/images/rk-naturals-handcrafted-soap-ad.jpg"
              alt="Handcrafted soaps and essentials"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* SECTION H: OUR HANDMADE PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
            Authentic Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#202820] mt-1">
            Our Handmade Process
          </h2>
          <p className="text-xs sm:text-sm text-[#777D73] mt-2">
            Every RK Naturals product follows our five-step artisanal sequence to ensure batch freshness and natural potency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          <div className="bg-white p-5 rounded-2xl border border-[#E4E8DF] space-y-3 text-center sm:text-left">
            <span className="w-7 h-7 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-bold flex items-center justify-center">
              1
            </span>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#202820]">
              Ingredient Selection
            </h4>
            <p className="text-xs text-[#777D73] leading-relaxed">
              We inspect whole botanical roots, saffron threads, and cold-pressed seed oils for freshness.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E4E8DF] space-y-3 text-center sm:text-left">
            <span className="w-7 h-7 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-bold flex items-center justify-center">
              2
            </span>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#202820]">
              Slow Cold Infusion
            </h4>
            <p className="text-xs text-[#777D73] leading-relaxed">
              Steeped slowly over weeks to coax out therapeutic plant extracts without harsh heat.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E4E8DF] space-y-3 text-center sm:text-left">
            <span className="w-7 h-7 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-bold flex items-center justify-center">
              3
            </span>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#202820]">
              Artisanal Hand Blending
            </h4>
            <p className="text-xs text-[#777D73] leading-relaxed">
              Whipped and poured by hand in small runs to guarantee maximum shelf freshness.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E4E8DF] space-y-3 text-center sm:text-left">
            <span className="w-7 h-7 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-bold flex items-center justify-center">
              4
            </span>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#202820]">
              Careful Quality Checks
            </h4>
            <p className="text-xs text-[#777D73] leading-relaxed">
              Aroma, color, viscosity, and pH balancing are checked for each individual run.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E4E8DF] space-y-3 text-center sm:text-left">
            <span className="w-7 h-7 rounded-full bg-[#E8F0E3] text-[#15952F] text-xs font-bold flex items-center justify-center">
              5
            </span>
            <h4 className="font-semibold text-xs uppercase tracking-wider text-[#202820]">
              Thoughtful Packaging
            </h4>
            <p className="text-xs text-[#777D73] leading-relaxed">
              Sealed in protective amber glass flacons and plastic-free recyclable paper wraps.
            </p>
          </div>

        </div>

        <div className="text-center mt-8">
          <Link
            to="/our-process"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#15952F] hover:underline"
          >
            <span>Read our complete craftsmanship guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* SECTION I: WHY RK NATURALS? */}
      <section className="bg-white py-16 sm:py-20 border-y border-[#E4E8DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
              Our Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#202820] mt-1">
              Why Choose RK Naturals?
            </h2>
            <p className="text-xs sm:text-sm text-[#777D73] mt-2">
              Honest beauty born from clean botanical ingredients and patient craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF9F4] border border-[#E4E8DF] space-y-2">
              <Flower2 className="w-6 h-6 text-[#15952F]" />
              <h4 className="font-serif text-lg font-medium text-[#202820]">Thoughtful Formulations</h4>
              <p className="text-xs text-[#777D73] leading-relaxed">
                Recipes designed around time-tested plant oils, roots, and flowers that support skin health gently.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F4] border border-[#E4E8DF] space-y-2">
              <Sparkles className="w-6 h-6 text-[#15952F]" />
              <h4 className="font-serif text-lg font-medium text-[#202820]">Handmade Craftsmanship</h4>
              <p className="text-xs text-[#777D73] leading-relaxed">
                Every jar and soap bar is mixed, poured, and inspected by hand rather than automated mass assembly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F4] border border-[#E4E8DF] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#15952F]" />
              <h4 className="font-serif text-lg font-medium text-[#202820]">Clear Disclosures</h4>
              <p className="text-xs text-[#777D73] leading-relaxed">
                Full ingredient transparency on every label. No hidden fragrance cocktails or artificial filler bases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF9F4] border border-[#E4E8DF] space-y-2">
              <Heart className="w-6 h-6 text-[#15952F]" />
              <h4 className="font-serif text-lg font-medium text-[#202820]">Mindful Self-Care</h4>
              <p className="text-xs text-[#777D73] leading-relaxed">
                Personal care centered on calm, touch, and sensorial rituals that ground you in the present moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION J: ROUTINE & PRODUCT DISCOVERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
            Guided Discovery
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#202820] mt-1">
            Build Your Everyday Ritual
          </h2>
          <p className="text-xs sm:text-sm text-[#777D73] mt-2">
            Tailor your self-care rhythm to your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl border border-[#E4E8DF] p-6 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#E8F0E3] text-[#15952F] flex items-center justify-center mb-4">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#202820]">
                Morning Freshness Ritual
              </h3>
              <p className="text-xs text-[#777D73] mt-2 leading-relaxed">
                Revitalize tired skin with Pure Damask Rose Water Mist followed by our lightweight Calendula Petal Hydrating Cream.
              </p>
            </div>
            <Link
              to="/collections/skincare"
              className="pt-4 border-t border-[#E4E8DF]/60 text-xs font-semibold text-[#15952F] flex items-center justify-between"
            >
              <span>Explore Morning Essentials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-[#E4E8DF] p-6 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#E8F0E3] text-[#15952F] flex items-center justify-center mb-4">
                <Moon className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#202820]">
                Evening Restorative Glow
              </h3>
              <p className="text-xs text-[#777D73] mt-2 leading-relaxed">
                Press 3 to 4 drops of Kumkumadi & Kashmiri Saffron Youth Nectar into clean skin before bedtime for overnight nourishment.
              </p>
            </div>
            <Link
              to="/collections/facecare"
              className="pt-4 border-t border-[#E4E8DF]/60 text-xs font-semibold text-[#15952F] flex items-center justify-between"
            >
              <span>Explore Nighttime Elixirs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-[#E4E8DF] p-6 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#E8F0E3] text-[#15952F] flex items-center justify-center mb-4">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#202820]">
                Weekly Hair & Scalp Therapy
              </h3>
              <p className="text-xs text-[#777D73] mt-2 leading-relaxed">
                A warm scalp massage with cold-pressed Bhringraj & Hibiscus oil, followed by Shikakai cleansing and Rosemary tonic.
              </p>
            </div>
            <Link
              to="/collections/haircare"
              className="pt-4 border-t border-[#E4E8DF]/60 text-xs font-semibold text-[#15952F] flex items-center justify-between"
            >
              <span>Explore Hair Therapies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION K: COMMUNITY STORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F4] rounded-3xl border border-[#E4E8DF] p-8 sm:p-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
              Community Voices
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#202820] mt-1">
              Kind Words for RK Naturals
            </h2>
            <p className="text-xs text-[#777D73] mt-1">
              Reflections shared by our early self-care community members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E4E8DF] space-y-3">
              <div className="flex text-[#15952F] text-xs">★★★★★</div>
              <p className="text-xs text-[#202820] italic font-serif leading-relaxed">
                &ldquo;The Kumkumadi saffron oil has become my favorite evening step. It absorbs without greasiness and smells genuinely like pure saffron and sandalwood rather than heavy perfume.&rdquo;
              </p>
              <div className="pt-2 border-t border-[#E4E8DF]/60 text-xs font-semibold text-[#253D2A]">
                — Ananya S., Verified Customer
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E4E8DF] space-y-3">
              <div className="flex text-[#15952F] text-xs">★★★★★</div>
              <p className="text-xs text-[#202820] italic font-serif leading-relaxed">
                &ldquo;I ordered the Wild Honey & Oats Soap Bar and the Rosewater mist. Both feel so mild on my sensitive skin. The plastic-free paper packaging was an extra thoughtful touch.&rdquo;
              </p>
              <div className="pt-2 border-t border-[#E4E8DF]/60 text-xs font-semibold text-[#253D2A]">
                — Meera K., Verified Customer
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E4E8DF] space-y-3">
              <div className="flex text-[#15952F] text-xs">★★★★★</div>
              <p className="text-xs text-[#202820] italic font-serif leading-relaxed">
                &ldquo;The Bhringraj scalp oil feels authentically traditional. You can literally tell it has been slow-steeped in real herbs by its deep earthy tone and cooling effect.&rdquo;
              </p>
              <div className="pt-2 border-t border-[#E4E8DF]/60 text-xs font-semibold text-[#253D2A]">
                — Rajesh V., Verified Customer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION M: INSTAGRAM & COMMUNITY EDITORIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#15952F]">
            #RKNaturalsLife
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#202820] mt-1">
            Life, Naturally.
          </h2>
          <p className="text-xs sm:text-sm text-[#777D73] mt-1">
            Follow our small-batch journey, herb harvests, and daily self-care moments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-[#FAF9F4] border border-[#E4E8DF] group relative">
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
              alt="Botanical packaging"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden bg-[#FAF9F4] border border-[#E4E8DF] group relative">
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
              alt="Fresh herbal leaves"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden bg-[#FAF9F4] border border-[#E4E8DF] group relative">
            <img
              src="https://images.unsplash.com/photo-1547793549-70faf88838c8?auto=format&fit=crop&w=600&q=80"
              alt="Cold process soap cutting"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden bg-[#FAF9F4] border border-[#E4E8DF] group relative">
            <img
              src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
              alt="Saffron harvest"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    slug: 'kumkumadi-saffron-youth-nectar',
    name: 'Kumkumadi & Kashmiri Saffron Youth Nectar',
    tagline: 'Handmade cold-infused face elixir with saffron & sandalwood',
    shortDescription: 'A luxurious night elixir hand-infused with red gold saffron stigmas, wild turmeric, and cold-pressed botanical oils for luminous, nourished skin.',
    description: 'Our signature Kumkumadi Nectar is prepared according to traditional slow infusion methods. Kashmiri saffron stigmas are steeped in cold-pressed sesame and jojoba oils alongside 16 therapeutic botanical roots over several days. Formulated without synthetic fragrances, mineral oils, or fillers, this restorative face oil delivers deep moisture, restores natural radiance, and softens fine texture.',
    category: 'facecare',
    subCategory: 'Face Oils & Elixirs',
    price: 949,
    compareAtPrice: 1199,
    sizeOrVolume: '30 ml',
    images: [
      '/images/rk-naturals-saffron-elixir-ad.jpg',
      '/images/rk-naturals-hero-campaign.jpg',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80',
    ],
    variants: [
      { id: 'v-01-30', name: '30 ml Bottle', price: 949, compareAtPrice: 1199, inStock: true },
      { id: 'v-01-50', name: '50 ml Value Flacon', price: 1499, compareAtPrice: 1899, inStock: true },
    ],
    ingredients: [
      'Cold-Pressed Golden Jojoba Seed Oil (Simmondsia Chinensis)',
      'Cold-Pressed Sesame Seed Oil (Sesamum Indicum)',
      'Pure Kashmiri Saffron Stigmas (Crocus Sativus)',
      'Mysore Sandalwood Extract (Santalum Album)',
      'Wild Turmeric Root (Curcuma Aromatica)',
      'Manjistha Root (Rubia Cordifolia)',
      'Licorice Root (Glycyrrhiza Glabra)',
      'Natural Vitamin E (Tocopherol)'
    ],
    keyBotanicals: [
      { name: 'Kashmiri Saffron', benefit: 'Imparts a warm natural glow and helps improve skin tone clarity' },
      { name: 'Mysore Sandalwood', benefit: 'Soothes daily stress and brings a velvety, calm finish' },
      { name: 'Wild Manjistha', benefit: 'Traditional botanical known for evening out skin complexion' }
    ],
    directions: [
      'Cleanse face thoroughly and mist with pure rose water.',
      'Dispense 3-4 drops onto clean palms and rub gently together to warm.',
      'Gently press into face, neck, and décolletage using upward circular motions.',
      'Best used every evening as the final step of your nighttime self-care ritual.'
    ],
    storageAdvice: 'Store in a cool, dry place away from direct sunlight. Keep the dropper tightly sealed.',
    suitability: 'Suitable for normal, dry, and combination skin types looking for nourishing radiance.',
    inventoryStatus: 'in_stock',
    tags: ['Bestseller', 'Handmade', 'Face Oil', 'Saffron', 'Night Care'],
    featured: true,
    bestseller: true,
    isNew: false,
    batchInfo: 'Hand-blended in small batches of 80 bottles',
    createdAt: '2026-01-15'
  },
  {
    id: 'prod-02',
    slug: 'pure-damask-rose-water-mist',
    name: 'Pure Damask Rose Water Steam Distillate',
    tagline: 'Fresh steam-distilled floral water from Kannauj roses',
    shortDescription: '100% pure, single-origin steam-distilled rose water toner to balance pH, tone pores, and deliver an instant burst of cooling hydration.',
    description: 'Harvested at dawn when the petals retain their highest essential oil concentration, our pure Damask Rose Water is slowly hydro-distilled in traditional copper alembics. Free from alcohol, artificial preservatives, or diluted fragrances, it gently revitalizes tired skin and acts as a hydrating primer before face oils and moisturizers.',
    category: 'skincare',
    subCategory: 'Toners & Mists',
    price: 449,
    compareAtPrice: 520,
    sizeOrVolume: '100 ml',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1608248597359-2f22204c3298?auto=format&fit=crop&w=1000&q=80',
    ],
    variants: [
      { id: 'v-02-100', name: '100 ml Fine Spray', price: 449, compareAtPrice: 520, inStock: true },
      { id: 'v-02-200', name: '200 ml Eco Refill', price: 749, compareAtPrice: 899, inStock: true },
    ],
    ingredients: [
      '100% Pure Steam-Distilled Damask Rose Water (Rosa Damascena Flower Hydrosol)'
    ],
    keyBotanicals: [
      { name: 'Damask Rose Petals', benefit: 'Naturally balances moisture levels and refreshes fatigued skin' },
      { name: 'Rose Essential Micro-Droplets', benefit: 'Natural aromatherapeutic scent that calms the senses' }
    ],
    directions: [
      'Hold the bottle 6 inches away from face with eyes closed.',
      'Spritz 3-4 generous mists across face and neck throughout the day.',
      'Pat lightly into skin or allow to absorb naturally before applying serum.'
    ],
    storageAdvice: 'Store in a cool spot. Can be refrigerated during summer for a heightened cooling effect.',
    suitability: 'All skin types, including sensitive skin.',
    inventoryStatus: 'in_stock',
    tags: ['Toner', 'Rose Water', 'Alcohol-Free', 'Handcrafted', 'Hydration'],
    featured: true,
    bestseller: true,
    isNew: false,
    batchInfo: 'Distilled during spring harvest',
    createdAt: '2026-01-20'
  },
  {
    id: 'prod-03',
    slug: 'cold-pressed-bhringraj-hibiscus-hair-oil',
    name: 'Cold-Pressed Bhringraj & Hibiscus Scalp Infusion',
    tagline: 'Traditional botanical elixir for strong roots & nourished tresses',
    shortDescription: 'Hand-blended with fresh Bhringraj leaves, deep red Hibiscus petals, and virgin cold-pressed coconut oil for strong, lustrous hair.',
    description: 'An artisanal hair care treatment crafted by slow-cooking hand-plucked Bhringraj, Hibiscus, Fenugreek, and Amla into a nourishing blend of virgin coconut and cold-pressed sesame oil. Massaged into the scalp, it stimulates circulation, comforts dry scalp conditions, and strengthens follicles from root to tip.',
    category: 'haircare',
    subCategory: 'Hair Oils',
    price: 649,
    compareAtPrice: 799,
    sizeOrVolume: '100 ml',
    images: [
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    ],
    variants: [
      { id: 'v-03-100', name: '100 ml Amber Glass', price: 649, compareAtPrice: 799, inStock: true },
      { id: 'v-03-200', name: '200 ml Family Bottle', price: 1099, compareAtPrice: 1399, inStock: true },
    ],
    ingredients: [
      'Cold-Pressed Extra Virgin Coconut Oil (Cocos Nucifera)',
      'Cold-Pressed Black Sesame Seed Oil (Sesamum Indicum)',
      'Fresh Bhringraj Leaf Extract (Eclipta Alba)',
      'Organic Hibiscus Petals (Hibiscus Rosa-Sinensis)',
      'Indian Gooseberry Fruit (Phyllanthus Emblica / Amla)',
      'Fenugreek Seeds (Trigonella Foenum-Graecum)',
      'Rosemary Essential Oil (Rosmarinus Officinalis)'
    ],
    keyBotanicals: [
      { name: 'Bhringraj', benefit: 'The ancient herbal king of hair care, known to strengthen root follicles' },
      { name: 'Hibiscus Flowers', benefit: 'Rich in natural amino acids that condition strands and enhance shine' },
      { name: 'Virgin Coconut Oil', benefit: 'Deeply penetrates the hair shaft to prevent moisture loss' }
    ],
    directions: [
      'Warm a few pumps between your hands.',
      'Gently massage into the scalp for 5 to 10 minutes using circular motions.',
      'Comb through lengths and leave on for at least 1 hour or overnight.',
      'Wash off with a gentle herbal shampoo.'
    ],
    storageAdvice: 'Store away from direct light. Oil may solidify naturally in cooler temperatures.',
    suitability: 'For all hair types prone to dryness, frizz, or seasonal hair fall.',
    inventoryStatus: 'in_stock',
    tags: ['Hair Oil', 'Bhringraj', 'Scalp Care', 'Handmade', 'Bestseller'],
    featured: true,
    bestseller: true,
    isNew: false,
    batchInfo: 'Slow-cooked over 48 hours in brass vessels',
    createdAt: '2026-02-01'
  },
  {
    id: 'prod-04',
    slug: 'wild-honey-rolled-oats-soap',
    name: 'Wild Forest Honey & Rolled Oats Exfoliating Soap',
    tagline: 'Artisanal cold-processed soap bar for soft, gently polished skin',
    shortDescription: 'Cured naturally for six weeks, this soothing botanical bar marries raw forest honey, colloidal rolled oats, and rich shea butter.',
    description: 'Each bar of our Wild Honey & Rolled Oats soap is handcrafted in small batches using traditional cold-process soapmaking. We combine saponified botanical plant oils with raw forest honey and finely ground rolled oats to provide a rich, creamy lather and a mild, touchable exfoliation that respects your skins moisture barrier.',
    category: 'bodycare',
    subCategory: 'Handmade Soaps',
    price: 299,
    compareAtPrice: 350,
    sizeOrVolume: '125 g',
    images: [
      '/images/rk-naturals-handcrafted-soap-ad.jpg',
      'https://images.unsplash.com/photo-1547793549-70faf88838c8?auto=format&fit=crop&w=1000&q=80',
    ],
    variants: [
      { id: 'v-04-single', name: 'Single Bar (125g)', price: 299, compareAtPrice: 350, inStock: true },
      { id: 'v-04-trio', name: 'Trio Gift Bundle (3x 125g)', price: 799, compareAtPrice: 950, inStock: true },
    ],
    ingredients: [
      'Saponified Olive Oil (Olea Europaea)',
      'Saponified Coconut Oil (Cocos Nucifera)',
      'Raw Shea Butter (Butyrospermum Parkii)',
      'Cold-Pressed Castor Oil (Ricinus Communis)',
      'Raw Unfiltered Forest Honey',
      'Colloidal Rolled Oats (Avena Sativa)',
      'Pure Sweet Orange Oil'
    ],
    keyBotanicals: [
      { name: 'Raw Forest Honey', benefit: 'A natural humectant that draws in moisture to keep skin supple' },
      { name: 'Colloidal Oats', benefit: 'Gently sloughs dead skin cells while calming sensitivity' },
      { name: 'Raw Shea Butter', benefit: 'Leaves behind an ultra-soft, velvety protective finish' }
    ],
    directions: [
      'Rub between wet hands or against a natural loofah to build a dense, creamy lather.',
      'Gently glide over wet body, breathing in the warm honey-citrus notes.',
      'Rinse thoroughly with lukewarm water.'
    ],
    storageAdvice: 'Keep on a draining soap dish between uses to prolong the life of the handmade bar.',
    suitability: 'Suitable for dry, sensitive, and winter-chapped skin.',
    inventoryStatus: 'in_stock',
    tags: ['Handmade Soap', 'Honey', 'Oats', 'Cold-Process', 'Zero Plastic'],
    featured: true,
    bestseller: true,
    isNew: false,
    batchInfo: 'Slow-cured for 42 days',
    createdAt: '2026-02-05'
  },
  {
    id: 'prod-05',
    slug: 'whipped-kokum-sweet-almond-body-butter',
    name: 'Whipped Raw Kokum & Sweet Almond Body Butter',
    tagline: 'Decadent botanical moisture for velvety soft, glowing skin',
    shortDescription: 'Air-whipped unrefined Western Ghats Kokum butter blended with cold-pressed sweet almond oil and vanilla pod extract for non-greasy, 24h nourishment.',
    description: 'A cloud-like body moisturizer crafted without water, parabens, or synthetic emulsifiers. We whip raw, ethically sourced Kokum butter from the Western Ghats with cold-pressed sweet almond and jojoba oils. It melts instantly upon skin contact, quenching dry elbows, knees, and all-over body dryness with a comforting botanical sheen.',
    category: 'bodycare',
    subCategory: 'Body Butters & Cremes',
    price: 699,
    compareAtPrice: 850,
    sizeOrVolume: '150 g',
    images: [
      '/images/rk-naturals-handcrafted-soap-ad.jpg',
      'https://images.unsplash.com/photo-1556228722-d0b5de73171c?auto=format&fit=crop&w=1000&q=80',
    ],
    variants: [
      { id: 'v-05-150', name: '150 g Glass Jar', price: 699, compareAtPrice: 850, inStock: true },
      { id: 'v-05-250', name: '250 g Grand Jar', price: 1099, compareAtPrice: 1299, inStock: true },
    ],
    ingredients: [
      'Raw Kokum Seed Butter (Garcinia Indica)',
      'Cold-Pressed Sweet Almond Oil (Prunus Amygdalus Dulcis)',
      'Golden Jojoba Seed Oil (Simmondsia Chinensis)',
      'Pure Cocoa Seed Butter (Theobroma Cacao)',
      'Natural Plant Vitamin E (Tocopherol)',
      'Bourbon Vanilla Bean Extract'
    ],
    keyBotanicals: [
      { name: 'Western Ghats Kokum', benefit: 'Deeply restores cracked, dry skin without clogging pores' },
      { name: 'Sweet Almond Oil', benefit: 'Rich in essential fatty acids that seal in lasting moisture' },
      { name: 'Raw Cocoa Butter', benefit: 'Improves skin elasticity and leaves a subtle, comforting aroma' }
    ],
    directions: [
      'Scoop a small amount with clean, dry fingers.',
      'Warm between palms and massage all over slightly damp skin after a bath or shower.',
      'Focus on dry patches like knees, elbows, and heels.'
    ],
    storageAdvice: 'Store in a cool, shaded environment below 28°C. Melts above 30°C due to natural butters.',
    suitability: 'Ideal for very dry, rough, or seasonal winter skin.',
    inventoryStatus: 'in_stock',
    tags: ['Body Butter', 'Kokum', 'Almond Oil', 'Handmade', 'Deep Moisture'],
    featured: false,
    bestseller: false,
    isNew: true,
    batchInfo: 'Hand-whipped in weekly artisanal batches',
    createdAt: '2026-02-12'
  },
  {
    id: 'prod-06',
    slug: 'green-tea-bentonite-purifying-clay-mask',
    name: 'Green Tea & Bentonite Purifying Clay Mask',
    tagline: 'Hand-blended mineral mask to clarify pores & refresh dull skin',
    shortDescription: 'Mineral-rich bentonite clay combined with powdered organic green tea leaves, neem, and peppermint to draw out impurities without stripping moisture.',
    description: 'An earthy, invigorating weekly clay ritual formulated to balance sebum, clarify congested pores, and restore freshness to dull skin. We blend volcanic bentonite clay with sun-dried matcha green tea leaves, organic neem leaf powder, and cooling peppermint for a tingling, spa-like botanical detox.',
    category: 'facecare',
    subCategory: 'Face Masks & Packs',
    price: 529,
    compareAtPrice: 650,
    sizeOrVolume: '75 g',
    images: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=80',
    ],
    variants: [
      { id: 'v-06-75', name: '75 g Botanical Jar', price: 529, compareAtPrice: 650, inStock: true }
    ],
    ingredients: [
      'Natural Bentonite Clay',
      'Kaolin White Clay',
      'Organic Green Tea Leaf Powder (Camellia Sinensis)',
      'Organic Neem Leaf Powder (Azadirachta Indica)',
      'Aloe Vera Leaf Extract (Aloe Barbadensis)',
      'Peppermint Essential Oil (Mentha Piperita)'
    ],
    keyBotanicals: [
      { name: 'Bentonite Clay', benefit: 'Draws excess oils and environmental buildup from pores' },
      { name: 'Green Tea Leaves', benefit: 'Packed with polyphenol antioxidants that refresh fatigued skin' },
      { name: 'Neem Leaf Powder', benefit: 'Clarifies skin and helps maintain clear, balanced skin' }
    ],
    directions: [
      'Mix 1 tablespoon of dry mask with pure rose water or yogurt in a non-metallic bowl.',
      'Apply an even layer over face, avoiding the immediate eye area.',
      'Allow to dry for 10-12 minutes until semi-dry.',
      'Rinse gently with warm water using a soft washcloth.'
    ],
    storageAdvice: 'Keep dry. Do not introduce water into the dry powder container.',
    suitability: 'Oily, combination, and acne-prone skin.',
    inventoryStatus: 'in_stock',
    tags: ['Face Mask', 'Green Tea', 'Clay Detox', 'Pore Clarifying', 'Handmade'],
    featured: false,
    bestseller: false,
    isNew: false,
    batchInfo: 'Micro-milled botanical powders',
    createdAt: '2026-02-18'
  },
  {
    id: 'prod-07',
    slug: 'rosemary-peppermint-scalp-tonic',
    name: 'Rosemary & Peppermint Invigorating Scalp Tonic',
    tagline: 'Lightweight water-based tonic for refreshed, stimulated roots',
    shortDescription: 'A non-greasy botanical mist infused with steam-distilled rosemary hydrolat, peppermint, and biotin to invigorate the scalp and reduce buildup.',
    description: 'Crafted for daily scalp nourishment without washing, our Rosemary & Peppermint Scalp Tonic delivers steam-distilled rosemary flower water directly to the roots. Peppermint stimulates a tingling freshness, while vegetable glycerin and aloe juice hydrate the scalp to combat seasonal itchiness and flaky dryness.',
    category: 'haircare',
    subCategory: 'Scalp Tonics',
    price: 499,
    compareAtPrice: 599,
    sizeOrVolume: '100 ml',
    images: [
      'https://images.unsplash.com/photo-1608248597359-2f22204c3298?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    ],
    variants: [
      { id: 'v-07-100', name: '100 ml Spray Bottle', price: 499, compareAtPrice: 599, inStock: true }
    ],
    ingredients: [
      'Steam-Distilled Rosemary Water (Rosmarinus Officinalis Hydrosol)',
      'Pure Aloe Vera Leaf Juice (Aloe Barbadensis)',
      'Vegetable Glycerin',
      'Peppermint Essential Oil (Mentha Piperita)',
      'Rosemary Leaf Essential Oil',
      'Pro-Vitamin B5 (Panthenol)'
    ],
    keyBotanicals: [
      { name: 'Rosemary Hydrosol', benefit: 'Invigorates the scalp environment for healthy, resilient hair' },
      { name: 'Peppermint Oil', benefit: 'Delivers a cooling sensation that relieves scalp tension' },
      { name: 'Aloe Leaf Juice', benefit: 'Soothes dry, itchy patches and keeps scalp hydrated' }
    ],
    directions: [
      'Part hair into sections across the scalp.',
      'Spritz tonic directly onto clean or dry scalp.',
      'Massage with fingertips for 2 minutes. Do not rinse out.',
      'Use daily in the morning or before bedtime.'
    ],
    storageAdvice: 'Store in a cool place away from sun.',
    suitability: 'All hair types, fine or thick, seeking daily scalp freshness.',
    inventoryStatus: 'in_stock',
    tags: ['Scalp Tonic', 'Rosemary', 'Hair Care', 'Non-Greasy', 'Trending'],
    featured: true,
    bestseller: false,
    isNew: true,
    batchInfo: 'Fresh distilled rosemary harvest',
    createdAt: '2026-02-22'
  },
  {
    id: 'prod-08',
    slug: 'handmade-shikakai-amla-shampoo-bar',
    name: 'Handmade Shikakai & Amla Herbal Shampoo Bar',
    tagline: 'Zero-waste concentrated botanical cleansing bar for glossy tresses',
    shortDescription: 'Solid shampoo bar hand-crafted with traditional Ayurvedic fruits — Shikakai, Reetha, Amla, and nourishing coconut oil — yielding a silky, bubbly lather.',
    description: 'Equivalent to two plastic bottles of liquid shampoo, this handcrafted shampoo bar cleanses gently using natural saponins from Reetha (Soapnut) and Shikakai. It purifies excess oil and sweat without stripping natural sebum, leaving strands bouncy, lustrous, and lightly scented with herbal goodness.',
    category: 'haircare',
    subCategory: 'Shampoo Bars',
    price: 389,
    compareAtPrice: 450,
    sizeOrVolume: '90 g',
    images: [
      'https://images.unsplash.com/photo-1607006310466-23114d5e1b21?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1547793549-70faf88838c8?auto=format&fit=crop&w=1000&q=80',
    ],
    variants: [
      { id: 'v-08-90', name: '90 g Bar with Tin', price: 389, compareAtPrice: 450, inStock: true },
      { id: 'v-08-refill', name: 'Eco Paper Refill Bar', price: 349, compareAtPrice: 399, inStock: true }
    ],
    ingredients: [
      'Sodium Cocoyl Isethionate (Coconut-Derived Cleanser)',
      'Cold-Pressed Virgin Coconut Oil',
      'Shikakai Fruit Powder (Acacia Concinna)',
      'Amla Fruit Powder (Phyllanthus Emblica)',
      'Reetha Fruit Powder (Sapindus Mukorossi)',
      'Bhringraj Leaf Powder',
      'Lemongrass Essential Oil'
    ],
    keyBotanicals: [
      { name: 'Shikakai (Fruit for Hair)', benefit: 'Natural low-pH cleanser that preserves hair softness' },
      { name: 'Amla', benefit: 'Packed with botanical vitamin C that promotes strand strength' },
      { name: 'Reetha', benefit: 'Produces rich, creamy natural suds that cleanse gently' }
    ],
    directions: [
      'Wet hair thoroughly and rub the bar directly along the scalp.',
      'Work into a rich lather with your fingers.',
      'Rinse thoroughly with clean water.'
    ],
    storageAdvice: 'Store on a dry dish between washes. Allow to air-dry completely.',
    suitability: 'Normal to oily hair. Color-safe.',
    inventoryStatus: 'in_stock',
    tags: ['Zero Plastic', 'Shampoo Bar', 'Shikakai', 'Amla', 'Handmade'],
    featured: false,
    bestseller: true,
    isNew: false,
    batchInfo: 'Cold-pressed solid formulation',
    createdAt: '2026-01-28'
  },
  {
    id: 'prod-09',
    slug: 'vetiver-hydrosol-balancing-face-mist',
    name: 'Wild Khus (Vetiver) Roots Hydrosol Balancing Mist',
    tagline: 'Deeply cooling root distillate for calm, shine-free skin',
    shortDescription: 'Earthy, grounding facial mist distilled from aromatic North Indian Vetiver (Khus) roots to soothe inflammation and tone pores in warm climates.',
    description: 'Distilled from the aromatic perennial grass roots of Vetiver, locally celebrated as Khus. Known for its cooling energy, this pure hydrosol refreshes flushed skin, regulates midday oiliness, and creates an instant feeling of grounding relaxation through its serene woody fragrance.',
    category: 'skincare',
    subCategory: 'Toners & Mists',
    price: 479,
    compareAtPrice: 550,
    sizeOrVolume: '100 ml',
    images: [
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
    ],
    variants: [
      { id: 'v-09-100', name: '100 ml Glass Sprayer', price: 479, compareAtPrice: 550, inStock: true }
    ],
    ingredients: [
      '100% Pure Steam-Distilled Vetiver Root Hydrosol (Chrysopogon Zizanioides)'
    ],
    keyBotanicals: [
      { name: 'Wild Vetiver Roots', benefit: 'Calms redness, restores hydration balance, and grounds the mind' }
    ],
    directions: [
      'Spritz on clean face morning and evening.',
      'Can also be misted over makeup during hot weather to revive skin.'
    ],
    storageAdvice: 'Store away from sunlight. Shelf life is 12 months after opening.',
    suitability: 'Ideal for oily, combination, and climate-stressed skin.',
    inventoryStatus: 'in_stock',
    tags: ['Vetiver', 'Khus', 'Face Mist', 'Balancing', 'Handmade'],
    featured: false,
    bestseller: false,
    isNew: true,
    batchInfo: 'Slow artisanal copper distillation',
    createdAt: '2026-03-01'
  },
  {
    id: 'prod-10',
    slug: 'himalayan-pink-salt-rosemary-body-scrub',
    name: 'Himalayan Pink Salt & Rosemary Detox Body Polish',
    tagline: 'Mineral crystal exfoliant blended with nourishing botanicals',
    shortDescription: 'Pure mineral crystal salts hand-whipped with sweet almond oil, crushed rosemary sprigs, and eucalyptus for satin-smooth, energized skin.',
    description: 'Transform your shower into an alpine spa sanctuary. We blend ancient Himalayan rock salt crystals with raw virgin jojoba and sweet almond oils. Massaged gently into damp skin, it sloughs away dead surface cells, stimulates lymphatic circulation, and leaves behind a soft, nourished botanical glow without greasy residue.',
    category: 'bodycare',
    subCategory: 'Body Scrubs & Polishes',
    price: 599,
    compareAtPrice: 720,
    sizeOrVolume: '200 g',
    images: [
      'https://images.unsplash.com/photo-1556228722-d0b5de73171c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1607006310466-23114d5e1b21?auto=format&fit=crop&w=1000&q=80',
    ],
    variants: [
      { id: 'v-10-200', name: '200 g Glass Jar', price: 599, compareAtPrice: 720, inStock: true }
    ],
    ingredients: [
      'Pure Himalayan Pink Crystal Salt',
      'Cold-Pressed Sweet Almond Oil (Prunus Amygdalus Dulcis)',
      'Golden Jojoba Seed Oil (Simmondsia Chinensis)',
      'Crushed Rosemary Leaf Sprigs (Rosmarinus Officinalis)',
      'Eucalyptus Leaf Essential Oil',
      'Vitamin E (Tocopherol)'
    ],
    keyBotanicals: [
      { name: 'Himalayan Pink Salt', benefit: 'Exfoliates gently while infusing trace minerals into the skin' },
      { name: 'Crushed Rosemary', benefit: 'Naturally invigorating botanical that clarifies and revives' },
      { name: 'Almond Oil', benefit: 'Nourishes fresh skin exposed after exfoliation' }
    ],
    directions: [
      'Stir the jar to evenly distribute the botanical oils.',
      'Massage a scoop onto wet skin in circular motions, focusing on rough areas.',
      'Rinse with warm water and pat dry with a towel.'
    ],
    storageAdvice: 'Prevent water from entering the jar. Use a dry wooden spoon.',
    suitability: 'For body use only. Not intended for delicate facial skin.',
    inventoryStatus: 'in_stock',
    tags: ['Body Scrub', 'Himalayan Salt', 'Rosemary', 'Exfoliant', 'Handmade'],
    featured: false,
    bestseller: false,
    isNew: false,
    batchInfo: 'Small-batch botanical blend',
    createdAt: '2026-02-14'
  },
  {
    id: 'prod-11',
    slug: 'calendula-petal-hydrating-cream',
    name: 'Calendula Petal & Marshmallow Root Hydrating Cream',
    tagline: 'Gentle moisture barrier cream for sensitive & thirsty skin',
    shortDescription: 'Cold-pressed sunflower oil slow-infused with whole golden calendula petals and soothing marshmallow root in a lightweight, velvety daily cream.',
    description: 'Formulated especially for reactive and easily irritated skin, this gentle daily cream features whole calendula marigold flowers steeped in cold-pressed plant oils. Combined with marshmallow root mucilage and organic aloe, it comforts dryness, protects against harsh weather, and leaves a comforting, velvety finish.',
    category: 'facecare',
    subCategory: 'Moisturizers & Creams',
    price: 680,
    compareAtPrice: 799,
    sizeOrVolume: '50 g',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1000&q=80',
    ],
    variants: [
      { id: 'v-11-50', name: '50 g Jar', price: 680, compareAtPrice: 799, inStock: true }
    ],
    ingredients: [
      'Whole Calendula Petal Infusion (Calendula Officinalis)',
      'Marshmallow Root Extract (Althaea Officinalis)',
      'Cold-Pressed Sunflower Seed Oil (Helianthus Annuus)',
      'Aloe Vera Leaf Juice (Aloe Barbadensis)',
      'Cetearyl Olivate & Sorbitan Olivate (Olive-Derived Emulsifiers)',
      'Natural Plant Squalane',
      'Roman Chamomile Flower Oil'
    ],
    keyBotanicals: [
      { name: 'Calendula Flowers', benefit: 'Prized for their time-honored soothing and comforting properties' },
      { name: 'Marshmallow Root', benefit: 'Contains natural mucilage that forms a soft protective shield' },
      { name: 'Plant Squalane', benefit: 'Biocompatible lipid that locks in moisture without heaviness' }
    ],
    directions: [
      'Warm a dime-sized amount between fingertips.',
      'Gently press into clean face and neck every morning and night.',
      'Follow with sunscreen during the daytime.'
    ],
    storageAdvice: 'Store below 25°C in a dry location.',
    suitability: 'Sensitive, dry, and combination skin.',
    inventoryStatus: 'in_stock',
    tags: ['Calendula', 'Sensitive Skin', 'Face Cream', 'Handmade', 'Calming'],
    featured: true,
    bestseller: false,
    isNew: true,
    batchInfo: 'Fresh petal solar infusion',
    createdAt: '2026-03-05'
  },
  {
    id: 'prod-12',
    slug: 'botanical-radiance-daily-ritual-hamper',
    name: 'The Botanical Radiance Daily Ritual Hamper',
    tagline: 'Complete 4-piece handmade self-care ritual in a keepsake wooden box',
    shortDescription: 'Our most cherished handcrafted products bundled together: Kumkumadi Nectar (30ml), Rose Water Mist (100ml), Wild Honey Soap Bar (125g), and Whipped Kokum Butter (150g).',
    description: 'An artfully curated gift box designed to transform everyday grooming into a mindful botanical retreat. Includes four of RK Naturals most loved handmade creations, packaged inside a handcrafted reusable pine box tied with a botanical linen ribbon and seeded plantable gift card.',
    category: 'giftsets',
    subCategory: 'Gift Sets & Bundles',
    price: 2199,
    compareAtPrice: 2699,
    sizeOrVolume: '4 Full Size Items',
    images: [
      'https://images.unsplash.com/photo-1608248597359-2f22204c3298?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1607006310466-23114d5e1b21?auto=format&fit=crop&w=1000&q=80',
    ],
    variants: [
      { id: 'v-12-box', name: 'Curated Ritual Keepsake Box', price: 2199, compareAtPrice: 2699, inStock: true }
    ],
    ingredients: [
      'Includes 1x Kumkumadi Youth Nectar (30ml)',
      'Includes 1x Damask Rose Water Mist (100ml)',
      'Includes 1x Wild Honey & Oats Soap Bar (125g)',
      'Includes 1x Whipped Kokum Body Butter (150g)',
      'Handcrafted Pine Keepsake Box with Linen Ribbon'
    ],
    keyBotanicals: [
      { name: 'Kashmiri Saffron', benefit: 'Signature radiance elixir' },
      { name: 'Kannauj Rosewater', benefit: 'Pure steam distillate' },
      { name: 'Raw Forest Honey', benefit: 'Moisture-binding artisanal soap' },
      { name: 'Whipped Kokum Butter', benefit: 'Deep whole-body nourishment' }
    ],
    directions: [
      'Step 1: Cleanse body with Wild Honey & Oats Soap in the shower.',
      'Step 2: Smooth Whipped Kokum Butter all over damp limbs.',
      'Step 3: Spritz face with Pure Damask Rose Water Mist.',
      'Step 4: Press 3-4 drops of Kumkumadi Nectar for nighttime glow.'
    ],
    storageAdvice: 'Store products individually as recommended.',
    suitability: 'Universally suitable for gifting, bridal self-care, or a personal ritual refresh.',
    inventoryStatus: 'in_stock',
    tags: ['Gift Set', 'Luxury Hamper', 'Self-Care Ritual', 'Handmade', 'Bestseller'],
    featured: true,
    bestseller: true,
    isNew: false,
    batchInfo: 'Limited batch handmade gift compilation',
    createdAt: '2026-02-10'
  }
];

export const CATEGORIES = [
  {
    id: 'facecare',
    name: 'Face Care',
    slug: 'facecare',
    description: 'Cold-infused face oils, mineral clay packs, and gentle petal cleansers formulated for mindful daily care.',
    image: 'https://images.unsplash.com/photo-1608248597359-2f22204c3298?auto=format&fit=crop&w=800&q=80',
    productCount: 4
  },
  {
    id: 'haircare',
    name: 'Hair Care',
    slug: 'haircare',
    description: 'Slow-cooked Bhringraj infusions, scalp tonics, and zero-plastic herbal shampoo bars for lustrous roots.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    productCount: 3
  },
  {
    id: 'bodycare',
    name: 'Body Care',
    slug: 'bodycare',
    description: 'Traditional cold-process botanical soaps, whipped Western Ghats Kokum butters, and salt polishes.',
    image: 'https://images.unsplash.com/photo-1607006310466-23114d5e1b21?auto=format&fit=crop&w=800&q=80',
    productCount: 3
  },
  {
    id: 'skincare',
    name: 'Skincare & Toners',
    slug: 'skincare',
    description: 'Pure copper-distilled floral waters and root hydrosols to restore vital skin hydration.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    productCount: 2
  },
  {
    id: 'giftsets',
    name: 'Gift Sets & Bundles',
    slug: 'giftsets',
    description: 'Artfully arranged handmade self-care rituals nestled inside keepsake wooden packaging.',
    image: 'https://images.unsplash.com/photo-1556228722-d0b5de73171c?auto=format&fit=crop&w=800&q=80',
    productCount: 1
  }
];

# RK Naturals — Premium Botanical Beauty & Personal Care E-Commerce

> *"Nature-Inspired Care. Made with Love."*  
> *"Bring the goodness of nature into your everyday self-care ritual."*

A luxury, responsive, and production-structured e-commerce web application designed for **RK Naturals**, specializing in handmade, organic-inspired beauty, cosmetics, skincare, and personal care formulations.

---

## 🌿 Brand Identity & Design System

- **Official Logo**: Preserved with high fidelity from the brand asset (`/images/rk-naturals-logo.png`), featuring the botanical green monogram emblem, leaf motifs, and green lettering.
- **Color Palette**:
  - Primary Natural Green: `#15952F`
  - Fresh Leaf Green: `#49B82D`
  - Lime Accent: `#A7D929`
  - Deep Forest Green: `#253D2A`
  - Warm Botanical Ivory: `#FAF9F4`
  - Soft Sage: `#E8F0E3`
  - Muted Botanical Gray: `#777D73`
  - Light Border: `#E4E8DF`
  - Dark Slate Text: `#202820`
- **Editorial Typography**:
  - Headlines & Serifs: Cormorant Garamond & Playfair Display
  - Body & UI Controls: Plus Jakarta Sans

---

## ✨ Features & Storefront Capabilities

### 1. Storefront & Homepage
- **Section A: Hero Campaign** — Editorial layout with signature product highlight (*Kumkumadi Kashmiri Saffron Youth Nectar*), quick CTAs, and soft daylight aesthetic.
- **Section B: Trust Strip** — Small-batch artisan formulating, cold-pressed seed oils, slow infusions, and everyday self-care rituals.
- **Section C: Brand Introduction** — The craftsmanship story behind RK Naturals.
- **Section D: Category Showcase** — Interactive cards for Face Care, Hair Care, Body Care, and Pure Hydrosols with smooth hover scaling.
- **Section E: Bestsellers** — Responsive grid with Quick Add, variant pricing, and wishlist toggling.
- **Section F: Ingredient Story** — Dynamic tabbed botanical explorer spotlighting Saffron, Rosewater, Bhringraj, Kokum Butter, Rosemary, and Vetiver.
- **Section G: The Everyday Essentials Edit** — Editorial campaign highlighting curated daily self-care bundles.
- **Section H: 5-Step Handmade Process** — Detailed sequence from raw harvest inspection to UV amber glass packaging.
- **Section I: Why RK Naturals?** — 4 core differentiation pillars.
- **Section J: Guided Routine Discovery** — Morning Radiance, Evening Reset, and Hair & Scalp Therapy.
- **Section K: Verified Community Feedback** — Authentic testimonial cards.
- **Section L: Newsletter** — Deep forest-green subscription section with live validation.
- **Section M: Community & Instagram** — Editorial flatlay gallery.
- **Section N: Luxury Footer** — Logo medallion, Indian payment method badges (UPI, RuPay, Visa, Mastercard, NetBanking), and policy links.

### 2. Product Catalogue & Collections
- Accessible at `/shop` and dedicated collection routes:
  - `/collections/facecare`
  - `/collections/haircare`
  - `/collections/bodycare`
  - `/collections/skincare`
  - `/collections/bestsellers`
  - `/collections/new-arrivals`
  - `/collections/giftsets`
- Interactive sidebar filters (desktop) & slide-out filter drawer (mobile):
  - Categories
  - Price brackets
  - In-stock availability
  - Sorting (Featured, Newest, Price Low-to-High, Price High-to-Low, Name A-Z)

### 3. Product Detail Experience (`/products/:slug`)
- High-resolution gallery with thumbnail switcher.
- Dynamic variant options (e.g., 30ml, 50ml, 100ml / Single bar, Gift Trio).
- Add to Bag and Buy Now (one-click fast checkout).
- Wishlist bookmarking.
- Free delivery progress reminder.
- Detailed accordions:
  - Botanical Formulation Story
  - Full transparent ingredients breakdown
  - Key botanical roles
  - How to Use & Ritual Directions
  - Storage & Freshness recommendations
- Sticky bottom purchase bar on mobile screens.

### 4. Interactive Live Search (`SearchModal`)
- Triggered via keyboard shortcut (`/` or `Esc`) or search icon.
- Instant case-insensitive filtering across names, ingredients, and categories.
- Popular suggestion pills and direct product navigation.

### 5. Shopping Bag & Cart Drawer (`CartDrawer` & `/cart`)
- Slide-out luxury drawer accessible from any page.
- Dedicated full-page cart at `/cart`.
- Real-time free shipping threshold tracker (qualifies for free delivery over ₹999).
- Promo voucher engine supporting:
  - `BOTANICAL10` (10% discount)
  - `FIRSTGLOW` (15% welcome discount)
  - `FREESHIP` (Complimentary shipping)
- Optional handwritten gift note message box with complimentary seeded gift card inclusion.
- Persisted locally in `localStorage` across page refreshes.

### 6. Checkout & Indian Payment Gateway Ready (`/checkout`)
- Step-by-step validated customer contact and Indian shipping address (PIN code, City, State, Mobile number).
- Delivery options: Standard Botanical Delivery (Free over ₹999, else ₹60) or Express Eco Courier (₹120).
- Payment modes:
  - **Razorpay Secure Sandbox** (Simulates UPI / PhonePe / GPay / NetBanking / Cards).
  - **Cash on Delivery (COD)** (Includes standard ₹40 courier handling fee).
- Generates realistic order record e.g., `RKN-2026-84920` with estimated delivery date.
- Clears active cart and stores placed order in `localStorage`.

### 7. Order Confirmation & Tracking (`/order-confirmation/:orderId`)
- Celebratory confirmation screen.
- Real-time 4-stage fulfillment timeline (Order Confirmed → Small-Batch Prep → Eco-Packed → Dispatched).
- Full receipt breakdown with printed layout support (`window.print()`).

### 8. Editorial & Customer Care Pages
- `/about`: Brand story, ethics, regional Indian botanical provenance.
- `/ingredients`: Searchable directory of botanical extracts with roles and linked products.
- `/our-process`: Step-by-step craft journey.
- `/contact`: Interactive contact form with subject routing and customer helpline details.
- `/faq`: Categorized question database.
- `/shipping`, `/returns`, `/privacy`, `/terms`: Legally structured Indian e-commerce policies.
- `/account`: Order history and order number lookup.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite 6
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) with custom botanical design tokens
- **Routing**: React Router DOM (v7)
- **Icons**: Lucide React
- **Typography**: Google Fonts (Cormorant Garamond, Playfair Display, Plus Jakarta Sans)

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Run Vite development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview -- --port 4173
```

---

## 🔒 Production External Integrations

Refer to `.env.example` for environment variable placeholders:
- **Razorpay**: Add your live `RAZORPAY_KEY_ID` to connect real payment processing.
- **Supabase**: Connect cloud PostgreSQL and Supabase Auth for multi-device customer accounts.
- **Newsletter (Resend / Mailchimp)**: Connect your audience webhook URL in `VITE_NEWSLETTER_API_URL`.

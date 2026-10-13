import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { CartDrawer } from './components/common/CartDrawer';
import { SearchModal } from './components/common/SearchModal';
import { ScrollToTop } from './components/common/ScrollToTop';

import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Collection } from './pages/Collection';
import { ProductDetails } from './pages/ProductDetails';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { WishlistPage } from './pages/WishlistPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { About } from './pages/About';
import { Ingredients } from './pages/Ingredients';
import { OurProcess } from './pages/OurProcess';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { PolicyPage } from './pages/PolicyPage';
import { AccountPage } from './pages/AccountPage';

export const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <ToastProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-[#FAF9F4] text-[#202820] font-sans antialiased selection:bg-[#E8F0E3] selection:text-[#15952F]">
              
              {/* Top Announcement Bar */}
              <AnnouncementBar />

              {/* Main Sticky Header */}
              <Header onOpenSearch={() => setIsSearchOpen(true)} />

              {/* Page Content */}
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/collections/:categorySlug" element={<Collection />} />
                  <Route path="/products/:slug" element={<ProductDetails />} />
                  <Route path="/search" element={<SearchResultsPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/order-confirmation/:orderId" element={<OrderConfirmationPage />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/ingredients" element={<Ingredients />} />
                  <Route path="/our-process" element={<OurProcess />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/shipping" element={<PolicyPage />} />
                  <Route path="/returns" element={<PolicyPage />} />
                  <Route path="/privacy" element={<PolicyPage />} />
                  <Route path="/terms" element={<PolicyPage />} />
                  <Route path="/account" element={<AccountPage />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </main>

              {/* Global Overlays */}
              <CartDrawer />
              <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

              {/* Brand Footer */}
              <Footer />

            </div>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </ToastProvider>
  );
};

export default App;

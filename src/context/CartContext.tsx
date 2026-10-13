import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, ProductVariant } from '../types';
import { useToast } from './ToastContext';

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  promoCode: string | null;
  discountAmount: number;
  promoError: string | null;
  subtotal: number;
  shippingFee: number;
  total: number;
  itemCount: number;
  freeShippingThreshold: number;
  freeShippingRemaining: number;
  addToCart: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: (open?: boolean) => void;
  applyPromo: (code: string) => boolean;
  removePromo: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 999;
const STANDARD_SHIPPING_FEE = 60;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { showToast } = useToast();
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('rkn_cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState<string | null>(() => {
    try {
      return localStorage.getItem('rkn_promo') || null;
    } catch {
      return null;
    }
  });
  const [promoError, setPromoError] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('rkn_cart', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  useEffect(() => {
    try {
      if (promoCode) {
        localStorage.setItem('rkn_promo', promoCode);
      } else {
        localStorage.removeItem('rkn_promo');
      }
    } catch (e) {
      console.error(e);
    }
  }, [promoCode]);

  // Derived calculations
  const subtotal = items.reduce(
    (sum, item) => sum + item.selectedVariant.price * item.quantity,
    0
  );

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate discount based on active promo
  let discountAmount = 0;
  if (promoCode === 'BOTANICAL10') {
    discountAmount = Math.round(subtotal * 0.1);
  } else if (promoCode === 'FIRSTGLOW') {
    discountAmount = Math.round(subtotal * 0.15);
  } else if (promoCode === 'FREESHIP') {
    discountAmount = 0; // handled via free shipping
  }

  const isFreeShippingByAmount = subtotal >= FREE_SHIPPING_THRESHOLD;
  const isFreeShippingByPromo = promoCode === 'FREESHIP';
  const shippingFee =
    items.length === 0 || isFreeShippingByAmount || isFreeShippingByPromo
      ? 0
      : STANDARD_SHIPPING_FEE;

  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  const freeShippingRemaining = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - subtotal
  );

  const addToCart = (
    product: Product,
    variant?: ProductVariant,
    quantity: number = 1
  ) => {
    const selectedVariant = variant || product.variants[0];
    const itemId = `${product.id}-${selectedVariant.id}`;

    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === itemId);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      } else {
        return [
          ...prev,
          {
            id: itemId,
            product,
            selectedVariant,
            quantity,
          },
        ];
      }
    });

    showToast({
      title: 'Added to your ritual bag',
      message: `${product.name} (${selectedVariant.name}) × ${quantity}`,
      type: 'success',
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setItems((prev) => {
      const itemToRemove = prev.find((item) => item.id === itemId);
      if (itemToRemove) {
        showToast({
          title: 'Removed from bag',
          message: `${itemToRemove.product.name}`,
          type: 'info',
        });
      }
      return prev.filter((item) => item.id !== itemId);
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
    setPromoCode(null);
  };

  const toggleCart = (open?: boolean) => {
    setIsCartOpen((prev) => (open !== undefined ? open : !prev));
  };

  const applyPromo = (code: string): boolean => {
    const cleanCode = code.trim().toUpperCase();
    setPromoError(null);

    if (cleanCode === 'BOTANICAL10') {
      setPromoCode(cleanCode);
      showToast({
        title: 'Coupon applied!',
        message: '10% discount added to your botanical bag.',
        type: 'success',
      });
      return true;
    } else if (cleanCode === 'FIRSTGLOW') {
      setPromoCode(cleanCode);
      showToast({
        title: 'Welcome discount applied!',
        message: '15% welcome discount deducted.',
        type: 'success',
      });
      return true;
    } else if (cleanCode === 'FREESHIP') {
      setPromoCode(cleanCode);
      showToast({
        title: 'Complimentary Shipping Applied',
        message: 'Standard delivery fee waived.',
        type: 'success',
      });
      return true;
    } else {
      setPromoError('Invalid coupon code. Try BOTANICAL10 or FIRSTGLOW.');
      showToast({
        title: 'Invalid Coupon',
        message: 'Please verify the code entered.',
        type: 'error',
      });
      return false;
    }
  };

  const removePromo = () => {
    setPromoCode(null);
    setPromoError(null);
    showToast({
      title: 'Coupon removed',
      type: 'info',
    });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        promoCode,
        discountAmount,
        promoError,
        subtotal,
        shippingFee,
        total,
        itemCount,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        freeShippingRemaining,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleCart,
        applyPromo,
        removePromo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

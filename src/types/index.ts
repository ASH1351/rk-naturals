export type ProductCategory = 'skincare' | 'haircare' | 'bodycare' | 'facecare' | 'giftsets';

export interface ProductVariant {
  id: string;
  name: string; // e.g., '50ml', '100ml', 'Pack of 2'
  price: number;
  compareAtPrice?: number;
  inStock: boolean;
  sku?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  subCategory?: string;
  price: number;
  compareAtPrice?: number;
  sizeOrVolume: string;
  images: string[];
  variants: ProductVariant[];
  ingredients: string[];
  keyBotanicals: {
    name: string;
    benefit: string;
  }[];
  directions: string[];
  storageAdvice: string;
  suitability?: string;
  inventoryStatus: 'in_stock' | 'low_stock' | 'made_to_order';
  tags: string[];
  featured?: boolean;
  bestseller?: boolean;
  isNew?: boolean;
  batchInfo?: string;
  createdAt: string;
}

export interface CartItem {
  id: string; // unique item id (productId + variantId)
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
}

export interface BotanicalIngredient {
  id: string;
  name: string;
  botanicalName: string;
  category: 'Oils & Butters' | 'Herbs & Leaves' | 'Floral Extracts' | 'Clays & Minerals' | 'Resins & Roots';
  image: string;
  source: string;
  role: string;
  description: string;
  featuredInProductSlugs: string[];
}

export interface OrderItem {
  productId: string;
  productName: string;
  variantName: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CustomerShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  orderNotes?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  customer: CustomerShippingAddress;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  couponCode?: string;
  shippingFee: number;
  total: number;
  paymentMethod: 'razorpay' | 'cod' | 'upi';
  paymentStatus: 'paid' | 'pending';
  fulfillmentStatus: 'processing' | 'shipped' | 'delivered';
  trackingNumber?: string;
  estimatedDelivery: string;
}

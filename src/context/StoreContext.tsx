import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { STORE_INFO as DEFAULT_STORE_INFO, SAREES, READYMADES, TESTIMONIALS as DEFAULT_TESTIMONIALS } from '../data';

export interface Testimonial {
  id?: string;
  name: string;
  location: string;
  review: string;
}

interface StoreContextType {
  storeInfo: typeof DEFAULT_STORE_INFO;
  products: Product[];
  testimonials: Testimonial[];
  updateStoreInfo: (info: typeof DEFAULT_STORE_INFO) => void;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, updatedProduct: Product) => void;
  deleteProduct: (id: string) => void;
  addTestimonial: (testimonial: Testimonial) => void;
  updateTestimonial: (id: string, updatedTestimonial: Testimonial) => void;
  deleteTestimonial: (id: string) => void;
  resetToDefault: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [storeInfo, setStoreInfoState] = useState<typeof DEFAULT_STORE_INFO>(() => {
    const saved = localStorage.getItem('janta_store_info');
    return saved ? JSON.parse(saved) : DEFAULT_STORE_INFO;
  });

  const [products, setProductsState] = useState<Product[]>(() => {
    const saved = localStorage.getItem('janta_products');
    if (saved) {
      try {
        const parsed: Product[] = JSON.parse(saved);
        // Guarantee any Sherwanis are completely removed even from cached storage
        const filtered = parsed.filter(p => !p.name.toLowerCase().includes('sherwani'));
        
        // Ensure new defaults (like ready-05 Shirting or ready-06 Naqab or category updates) are automatically merged
        const defaults = [...SAREES, ...READYMADES].map(p => ({ ...p }));
        defaults.forEach(defProduct => {
          const index = filtered.findIndex(p => p.id === defProduct.id);
          if (index === -1) {
            filtered.push(defProduct);
          } else {
            // Update to newest image and category
            filtered[index] = defProduct;
          }
        });
        return filtered;
      } catch (e) {
        // Fallback if parsing fails
      }
    }
    // Deep copy to prevent modifying original imports
    return [...SAREES, ...READYMADES].map(p => ({ ...p }));
  });

  const [testimonials, setTestimonialsState] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('janta_testimonials');
    if (saved) {
      return JSON.parse(saved);
    }
    return DEFAULT_TESTIMONIALS.map((t, index) => ({ id: `test-${index}`, ...t }));
  });

  // Keep localStorage synced
  useEffect(() => {
    localStorage.setItem('janta_store_info', JSON.stringify(storeInfo));
  }, [storeInfo]);

  useEffect(() => {
    localStorage.setItem('janta_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('janta_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const updateStoreInfo = (info: typeof DEFAULT_STORE_INFO) => {
    setStoreInfoState(info);
  };

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: `prod-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`
    };
    setProductsState(prev => [newProduct, ...prev]);
  };

  const updateProduct = (id: string, updatedProduct: Product) => {
    setProductsState(prev => prev.map(p => p.id === id ? updatedProduct : p));
  };

  const deleteProduct = (id: string) => {
    setProductsState(prev => prev.filter(p => p.id !== id));
  };

  const addTestimonial = (testimonial: Testimonial) => {
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: `test-${Date.now()}`
    };
    setTestimonialsState(prev => [newTestimonial, ...prev]);
  };

  const updateTestimonial = (id: string, updatedTestimonial: Testimonial) => {
    setTestimonialsState(prev => prev.map(t => t.id === id ? { ...updatedTestimonial, id } : t));
  };

  const deleteTestimonial = (id: string) => {
    setTestimonialsState(prev => prev.filter(t => t.id !== id));
  };

  const resetToDefault = () => {
    if (window.confirm('Are you sure you want to reset all data and products to the original default values? All custom edits will be lost.')) {
      setStoreInfoState(DEFAULT_STORE_INFO);
      setProductsState([...SAREES, ...READYMADES].map(p => ({ ...p })));
      setTestimonialsState(DEFAULT_TESTIMONIALS.map((t, index) => ({ id: `test-${index}`, ...t })));
      localStorage.removeItem('janta_store_info');
      localStorage.removeItem('janta_products');
      localStorage.removeItem('janta_testimonials');
    }
  };

  return (
    <StoreContext.Provider value={{
      storeInfo,
      products,
      testimonials,
      updateStoreInfo,
      addProduct,
      updateProduct,
      deleteProduct,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      resetToDefault
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}

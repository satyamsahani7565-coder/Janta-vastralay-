import React, { useState, useEffect } from 'react';
import WelcomeOverlay from './components/WelcomeOverlay';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import { Product } from './types';
import { Star, Quote, MapPin, Phone, HelpCircle, Sparkles } from 'lucide-react';
import { useStore } from './context/StoreContext';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const { storeInfo, products, testimonials } = useStore();
  const [overlayCompleted, setOverlayCompleted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);

  // Dynamic compatibility mappings
  const STORE_INFO = storeInfo;
  const SAREES = products.filter(p => p.category === 'saree');
  const READYMADES = products.filter(p => p.category === 'readymade');
  const TESTIMONIALS = testimonials;

  // Set page title
  useEffect(() => {
    document.title = `${STORE_INFO.name} — Premium Clothing Showroom`;
  }, [STORE_INFO.name]);

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col font-sans selection:bg-gold selection:text-neutral-900 overflow-x-hidden">
      
      {/* 1. Welcome Slide-Up Overlay */}
      {!overlayCompleted && (
        <WelcomeOverlay onComplete={() => setOverlayCompleted(true)} />
      )}

      {/* 2. Main Store Website (Revealed beneath sliding overlay) */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${!overlayCompleted ? 'max-h-screen overflow-hidden' : ''}`}>
        
        {/* Banner with Header */}
        <Header />

        {/* Hero Interactive Showroom Banner */}
        <HeroBanner />

        {/* main content grids */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 space-y-20 bg-mandala-pattern">
          
          {/* Section: Saree grid cards */}
          <section id="saree-section" className="space-y-8 scroll-mt-24">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.2em] font-serif font-bold text-gold-dark block">
                ✧ Pure Katan, Tussar & Silk Collection ✧
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-neutral-950 font-bold tracking-wide">
                Traditional Handloom Sarees
              </h2>
              <div className="flex justify-center items-center gap-1.5 py-1">
                <span className="h-[1px] w-12 bg-gold-dark" />
                <span className="text-gold text-xs">❖</span>
                <span className="h-[1px] w-12 bg-gold-dark" />
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light">
                Exquisite heritage sarees woven with pure silk, royal patterns, and luxurious zari borders, sourced directly from master handicraft centers.
              </p>
            </div>

            {/* 3 Premium Saree Cards in Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {SAREES.map((saree) => (
                <ProductCard 
                  key={saree.id} 
                  product={saree} 
                  onQuickView={(p) => setSelectedProduct(p)} 
                />
              ))}
            </div>
          </section>


          {/* Intermediate Accent Banner Quote */}
          <div className="w-full rounded-2xl bg-gradient-to-r from-maroon border border-gold/30 to-maroon-dark text-white p-8 relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-maroon-mandala opacity-10 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left max-w-5xl mx-auto">
              <div className="space-y-2">
                <p className="text-gold uppercase tracking-[0.25em] font-serif text-xs">Exclusive Wedding Packages</p>
                <h3 className="text-2xl font-serif text-gold-light font-bold">Complete Festive & Bridal Wedding Trousseau</h3>
                <p className="text-xs text-amber-100 max-w-xl font-light">
                  Enjoy custom matching options, heavy silk sherwanis, and luxury bridal discounts at our family boutique. Book your personal fitting session now.
                </p>
              </div>
              <a 
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-gold-light to-gold hover:from-gold hover:to-gold-dark text-neutral-950 font-sans font-bold text-xs py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Showroom Visit
              </a>
            </div>
          </div>


          {/* Section: Readymade garments */}
          <section id="readymade-section" className="space-y-8 scroll-mt-24">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.2em] font-serif font-bold text-gold-dark block">
                ✧ Divine Bridal Lehengas & Sherwanis ✧
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-neutral-950 font-bold tracking-wide">
                Festive & Bridal Readymade Wear
              </h2>
              <div className="flex justify-center items-center gap-1.5 py-1">
                <span className="h-[1px] w-12 bg-gold-dark" />
                <span className="text-gold text-xs">❖</span>
                <span className="h-[1px] w-12 bg-gold-dark" />
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans font-light">
                Impeccably tailored kurtas, custom-fit groom sherwanis, and gorgeous wedding lehengas ensuring ultimate comfort and luxury.
              </p>
            </div>

            {/* 3 Stylish Readymade Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {READYMADES.map((apparel) => (
                <ProductCard 
                  key={apparel.id} 
                  product={apparel} 
                  onQuickView={(p) => setSelectedProduct(p)} 
                />
              ))}
            </div>
          </section>


          {/* Section: Showroom Testimonials & Reviews */}
          <section id="testimonials-section" className="space-y-8 scroll-mt-24 pt-4">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.2em] font-serif font-bold text-gold-dark block">
                ✧ Love & Authentic Customer Trust ✧
              </span>
              <h2 className="text-3xl font-serif text-neutral-950 font-bold tracking-wide">
                Our Beloved Families' Experiences
              </h2>
              <div className="flex justify-center items-center gap-1.5 py-1">
                <span className="h-[1px] w-12 bg-gold-dark" />
                <span className="text-gold text-xs">❖</span>
                <span className="h-[1px] w-12 bg-gold-dark" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
                >
                  <Quote className="absolute top-5 right-5 w-8 h-8 text-gold-light/20 rotate-180 pointer-events-none" />
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-0.5 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs font-sans text-neutral-600 leading-relaxed italic">
                      "{t.review}"
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <p className="font-serif text-xs font-bold text-neutral-900">{t.name}</p>
                      <p className="text-[10px] text-neutral-400 font-sans">{t.location}, Bihar</p>
                    </div>
                    <span className="text-[10px] font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded uppercase tracking-wider">
                      Verified Buyer
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

        {/* 3. Global Product Detail Modal Overlay */}
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />

        {/* Main Footer Block */}
        <Footer onOpenAdmin={() => setShowAdmin(true)} />

        {/* Showroom Admin Panel Management Dashboard */}
        {showAdmin && (
          <AdminPanel onClose={() => setShowAdmin(false)} />
        )}
      </div>
    </div>
  );
}

import React from 'react';
import { Sparkles, ArrowRight, ArrowDown } from 'lucide-react';
import { STORE_INFO } from '../data';
import bannerImg from '../assets/images/showroom_banner_1780314355241.png';

export default function HeroBanner() {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="main-hero" className="relative w-full overflow-hidden bg-neutral-950 border-b border-gold/15 py-16 px-4 md:py-24">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bannerImg} 
          alt="Premium Boutique Showroom" 
          className="w-full h-full object-cover opacity-35 scale-105 select-none pointer-events-none filter brightness-75 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Deep vignette gradients for reading comfort */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        
        {/* Main Banner Message Column */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-maroon-dark/60 border border-gold/40 text-gold text-xs font-serif tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>Royal Heritage & Festive Collection</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-white leading-[1.15] tracking-wide">
            Home of Exquisite Sarees & <br />
            <span className="text-gold-gradient font-semibold">Designer Suits</span>
          </h1>

          <p className="text-neutral-300 font-sans text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            Welcome to {STORE_INFO.name}. We present the finest Banarasi silk sarees, heritage Kanjivaram creations, hand-crafted Lehengas, and royal designer Suits & Dresses for your special life events.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button 
              onClick={() => handleScrollToSection('saree-section')}
              className="w-full sm:w-auto bg-gradient-to-r from-gold-dark via-gold to-gold-dark hover:from-gold hover:to-gold-light text-neutral-950 font-sans font-bold text-sm px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-[0_4px_15px_rgba(197,160,67,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Banarasi & Kanjivaram Sarees</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => handleScrollToSection('readymade-section')}
              className="w-full sm:w-auto bg-neutral-950/80 hover:bg-neutral-900 border border-gold/45 hover:border-gold text-gold hover:text-gold-light font-sans font-medium text-sm px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all duration-300"
            >
              <span>Ready Bridal & Designer Wear</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Feature Highlights/Badge Column */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-maroon-dark/95 to-maroon/90 border border-gold/30 p-6 shadow-xl relative backdrop-blur-sm">
            <div className="absolute inset-0 bg-maroon-mandala opacity-10 rounded-2xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10 text-center">
              <h3 className="text-gold-light font-serif tracking-widest text-lg uppercase pb-2 border-b border-gold/20">
                — Our Highlights —
              </h3>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="mt-1 font-serif text-gold font-bold text-sm">01</div>
                  <div>
                    <h4 className="text-amber-100 font-serif text-sm font-semibold">100% Handloom Purity</h4>
                    <p className="text-neutral-300 text-xs mt-0.5">All Banarasi and Southern silk sarees are brought straight from master weavers with authentic quality guarantee.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 font-serif text-gold font-bold text-sm">02</div>
                  <div>
                    <h4 className="text-amber-100 font-serif text-sm font-semibold">Exclusive Bridal & Designer Couture</h4>
                    <p className="text-neutral-300 text-xs mt-0.5">A magnificent assortment of heavy bridal Lehengas, royal designer suits, and premium materials for your special events.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 font-serif text-gold font-bold text-sm">03</div>
                  <div>
                    <h4 className="text-amber-100 font-serif text-sm font-semibold">Fair Prices & Transparency</h4>
                    <p className="text-neutral-300 text-xs mt-0.5">Sourced directly from leading weaving houses and craft factories, bypassing middle agents entirely.</p>
                  </div>
                </div>
              </div>

              {/* Decorative motif element */}
              <div className="text-gold/40 text-xl font-serif">❦ ❧</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { Phone, MapPin, Clock, Star, Heart, Instagram } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import Logo from './Logo';

export default function Header() {
  const { storeInfo: STORE_INFO } = useStore();
  
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-charcoal border-b border-gold/20 sticky top-0 z-40 shadow-md">
      {/* Top Banner Notice Line */}
      <div className="w-full bg-gradient-to-r from-maroon-dark via-maroon to-maroon-dark text-white border-b border-gold/10">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex flex-col md:flex-row justify-between items-center text-xs gap-1">
          <p className="flex items-center gap-1.5 font-sans font-light text-amber-100">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>Store Hours: {STORE_INFO.hours}</span>
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gold">
              <Star className="w-3 h-3 fill-gold" />
              <Star className="w-3 h-3 fill-gold" />
              <Star className="w-3 h-3 fill-gold" />
              <Star className="w-3 h-3 fill-gold" />
              <Star className="w-3 h-3 fill-gold animate-pulse" />
              <span className="text-[10px] text-amber-200 uppercase tracking-widest font-serif ml-1">Premium Showroom Choice</span>
            </span>
            <span className="hidden sm:inline text-amber-100">Contact: {STORE_INFO.phone}</span>
          </div>
        </div>
      </div>

      {/* Main Brand Logo Section */}
      <div className="bg-charcoal bg-mandala-pattern w-full py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          
          {/* Brand Name Group */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3">
              <Logo size="sm" className="shrink-0" />
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <h1 className="text-3xl sm:text-4xl font-display text-gold-light tracking-wide leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                    {STORE_INFO.name}
                  </h1>
                  <span className="inline-flex self-center items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-neutral-950 font-serif shadow-sm">
                    {STORE_INFO.heritageTagline}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs font-serif text-gold tracking-widest uppercase mt-0.5">
                  {STORE_INFO.englishName} — @{STORE_INFO.username}
                </p>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-neutral-300 font-sans tracking-wide mt-1 italic text-center lg:text-left">
              "{STORE_INFO.tagline}"
            </p>
          </div>

          {/* Quick Contact & Location Blocks */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-end items-center gap-3 text-xs w-full lg:w-auto">
            {/* WhatsApp */}
            <a 
              href={`https://wa.me/${STORE_INFO.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 bg-neutral-900/60 hover:bg-neutral-900 border border-gold/25 hover:border-gold/60 p-2.5 rounded-lg text-white transition-all duration-300 group shadow-md w-full sm:w-auto"
            >
              <div className="p-1.5 rounded-full bg-green-950/40 border border-green-500/30 text-green-400 group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-neutral-400 text-[10px] uppercase font-serif tracking-widest">WhatsApp Inquiry</p>
                <p className="font-sans font-medium text-amber-100">{STORE_INFO.phone}</p>
              </div>
            </a>

            {/* Clickable Map Location */}
            <a 
              href={STORE_INFO.mapUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 bg-neutral-900/60 hover:bg-neutral-900 border border-gold/25 hover:border-gold/60 p-2.5 rounded-lg text-white transition-all duration-300 group shadow-md w-full sm:w-auto cursor-pointer"
            >
              <div className="p-1.5 rounded-full bg-maroon-dark/50 border border-gold/20 text-gold group-hover:scale-110 transition-transform">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-left max-w-[200px] sm:max-w-[150px] md:max-w-[200px]">
                <p className="text-neutral-400 text-[10px] uppercase font-serif tracking-widest">Our Location ↗</p>
                <p className="font-sans font-medium text-amber-100 truncate">{STORE_INFO.address.split(',')[0]}...</p>
              </div>
            </a>

            {/* Instagram */}
            <a 
              href={`https://www.instagram.com/${STORE_INFO.username}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 bg-neutral-900/60 hover:bg-neutral-900 border border-gold/25 hover:border-gold/60 p-2.5 rounded-lg text-white transition-all duration-300 group shadow-md w-full sm:w-auto cursor-pointer"
            >
              <div className="p-1.5 rounded-full bg-pink-950/40 border border-pink-500/30 text-pink-400 group-hover:scale-110 transition-transform">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-neutral-400 text-[10px] uppercase font-serif tracking-widest">Instagram</p>
                <p className="font-sans font-medium text-amber-100">@{STORE_INFO.username}</p>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Decorative Golden Line Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Navigation and Segment Selector */}
      <div className="bg-neutral-950 w-full px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-center sm:justify-between items-center gap-2">
          
          <nav className="flex items-center gap-6 sm:gap-8 overflow-x-auto text-xs sm:text-sm font-serif tracking-widest text-neutral-300 uppercase">
            <button 
              onClick={() => handleScrollToSection('main-hero')}
              className="hover:text-gold transition-colors font-medium border-b-2 border-transparent hover:border-gold pb-1 cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => handleScrollToSection('saree-section')}
              className="hover:text-gold transition-colors font-medium border-b-2 border-transparent hover:border-gold pb-1 cursor-pointer whitespace-nowrap"
            >
              Saree Collection
            </button>
            <button 
              onClick={() => handleScrollToSection('readymade-section')}
              className="hover:text-gold transition-colors font-medium border-b-2 border-transparent hover:border-gold pb-1 cursor-pointer whitespace-nowrap"
            >
              Readymade Wear
            </button>
            <button 
              onClick={() => handleScrollToSection('testimonials-section')}
              className="hover:text-gold transition-colors font-medium border-b-2 border-transparent hover:border-gold pb-1 cursor-pointer"
            >
              Reviews
            </button>
          </nav>
          
          <button 
            onClick={() => handleScrollToSection('saree-section')}
            className="hidden sm:flex items-center gap-1.5 text-xs bg-gold hover:bg-gold-dark text-neutral-950 font-bold px-3 py-1.5 rounded uppercase font-sans tracking-wider transition-colors duration-300"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>New Styles</span>
          </button>
          
        </div>
      </div>
    </header>
  );
}

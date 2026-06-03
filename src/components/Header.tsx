import React from 'react';
import { Phone, MapPin, Clock, Star, Heart, Instagram, Award } from 'lucide-react';
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
    <header className="w-full bg-charcoal border-b border-gold/20 sticky top-0 z-40 shadow-md" id="app-header-container">
      {/* Top Banner Notice Line */}
      <div className="w-full bg-gradient-to-r from-maroon-dark via-maroon to-maroon-dark text-white border-b border-gold/10" id="header-top-banner">
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
      <div className="bg-charcoal bg-mandala-pattern w-full py-4 px-4" id="header-main-brand-section">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
          
          {/* Brand Name Group with Logo on Left and Owner on Right Corner */}
          <div className="w-full lg:max-w-xl text-left flex flex-col items-start gap-1" id="header-brand-group">
            <div className="flex items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-3">
                <Logo size="sm" className="shrink-0" />
                <div className="text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-x-2 gap-y-0.5">
                    <h1 className="text-2xl sm:text-3xl font-display text-gold-light tracking-wide leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                      {STORE_INFO.name}
                    </h1>
                    <span className="inline-flex self-start sm:self-center items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-neutral-950 font-serif shadow-xs">
                      {STORE_INFO.heritageTagline}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs font-serif text-gold tracking-widest uppercase mt-0.5">
                    {STORE_INFO.englishName} — @{STORE_INFO.username}
                  </p>
                </div>
              </div>

              {/* Shop Owner Portrait Circular Badge (Bagal wala corner/Opposite corner of title block) */}
              <button 
                onClick={() => handleScrollToSection('owner-profile-section')}
                className="flex flex-row items-center gap-3 shrink-0 select-none group relative bg-neutral-950/40 border border-gold/15 hover:border-gold/50 py-1.5 px-2.5 rounded-xl cursor-pointer shadow-md transition-all duration-300 hover:bg-neutral-900/60 active:scale-95 text-left" 
                id="header-owner-badge"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gold to-maroon rounded-full blur-[1px] opacity-65 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-gold-light bg-neutral-950 flex items-center justify-center shadow-inner">
                    {STORE_INFO.ownerPhoto ? (
                      <img 
                        src={STORE_INFO.ownerPhoto} 
                        alt="Mahfooj Ansari - Shop Owner" 
                        className="w-full h-full object-cover scale-105"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <span className="text-[11px] sm:text-xs font-serif font-black text-gold-light tracking-wider uppercase select-none">
                        MA
                      </span>
                    )}
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 bg-gold text-neutral-950 text-[6px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center border border-neutral-950 shadow-xs">
                    ★
                  </span>
                </div>
                <div className="text-left">
                  <span className="text-[9px] sm:text-[10px] font-serif font-bold text-gold-light leading-none block">Mahfooj Ansari</span>
                  <span className="text-[7px] sm:text-[8px] text-neutral-400 leading-none mt-0.5 tracking-wider uppercase block font-serif">प्रोपराइटर (ओनर)</span>
                </div>

                {/* Elegant Hover/Tap Info Tooltip Overlay */}
                <div className="absolute top-14 right-0 w-52 bg-neutral-900 border border-gold/30 rounded-lg p-3 shadow-2xl opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-50 text-left space-y-1.5">
                  <p className="text-[11px] font-bold text-gold-light font-serif">Mahfooj Ansari</p>
                  <p className="text-[9px] text-gold uppercase tracking-wider font-serif">Shop Owner / प्रोपराइटर</p>
                  <p className="text-[9px] text-neutral-300 leading-relaxed font-sans font-light">
                    "जनता वस्त्रालय में आपका स्वागत है। हमारे शोरूम में आपके पूरे परिवार की खुशियों और मांगलिक उत्सवों के लिए राजशाही वस्त्र उचित दामों पर उपलब्ध हैं।"
                  </p>
                </div>
              </button>
            </div>
            
            <p className="text-xs sm:text-sm text-neutral-300 font-sans tracking-wide mt-1 italic text-left">
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

import React from 'react';
import { Phone, MapPin, Heart, Clock, Star, Landmark, Shield, Settings } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import Logo from './Logo';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export default function Footer({ onOpenAdmin }: FooterProps) {
  const { storeInfo: STORE_INFO } = useStore();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-charcoal text-white pt-12 pb-6 border-t border-gold/20 relative z-10">
      {/* Visual Traditional Mandala Wave Divider */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute top-1 inset-x-0 bg-maroon-mandala opacity-5 h-24" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        
        {/* Column 1: Store Intro */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <Logo size="sm" className="shrink-0" />
            <span className="text-xl font-display text-gold-light tracking-wider">
              {STORE_INFO.name}
            </span>
          </div>

          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            {STORE_INFO.englishName} — Delivering 25+ years of pure trust, premium quality, and spectacular handloom artwork. Your complete family clothing boutique for wedding, festive, and daily bridal couture.
          </p>

          <div className="flex gap-4 pt-2">
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <Shield className="w-4 h-4 text-gold" />
              <span>100% Authentic Silk</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-neutral-400">
              <Landmark className="w-4 h-4 text-gold" />
              <span>Master Weaver Heritage</span>
            </div>
          </div>
        </div>

        {/* Column 2: Working Hours / Map details */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-gold font-serif font-bold">Showroom Info</h4>
          
          <ul className="space-y-3 text-xs text-neutral-300 font-sans">
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-100">Showroom Hours:</p>
                <p className="text-neutral-400">{STORE_INFO.hours}</p>
              </div>
            </li>
            <li>
              <a 
                href={STORE_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-gold transition-colors duration-200 group"
              >
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-amber-100 group-hover:text-gold">Physical Address ↗:</p>
                  <p className="text-neutral-400 leading-relaxed font-sans">{STORE_INFO.address}</p>
                  <p className="text-gold font-serif text-xs mt-1 font-bold">{STORE_INFO.addressHindi}</p>
                </div>
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-100">Customer Helpline:</p>
                <p className="text-neutral-400">{STORE_INFO.phone}</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 3: Regional Trust / Servicing cities */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-widest text-gold font-serif font-bold">Regional Presence</h4>
          
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            Proudly chosen by premium wedding families across Campierganj, Gorakhpur, Rigauli, Maharajganj, Pipraich, Basti, and surrounding districts.
          </p>

          <div className="bg-neutral-900 border border-neutral-800 p-2.5 rounded-lg text-[11px] text-neutral-300">
            <span className="text-gold font-bold">⭐ 5.0 Rating</span> — Over 10,000+ happy families served with utmost trust.
          </div>
        </div>

      </div>

      {/* Prominent Wholesale Announcement Banner */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-neutral-900 border border-gold/30 rounded-xl p-4 text-center space-y-1.5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
          <div className="absolute top-0 right-0 w-2 h-full bg-gold" />
          <p className="text-gold-light font-serif font-bold text-sm sm:text-base tracking-wide">
            {STORE_INFO.wholesaleNote}
          </p>
          <p className="text-neutral-400 text-[11px] font-sans italic tracking-wide">
            ({STORE_INFO.wholesaleNoteEnglish})
          </p>
        </div>
      </div>

      {/* Footer Bottom copyright notes */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-3">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-left">
          <p>
            © {currentYear} {STORE_INFO.englishName} ({STORE_INFO.username}). All rights reserved. 
          </p>
          {onOpenAdmin && (
            <button 
              onClick={onOpenAdmin}
              className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-gold/60 hover:text-gold transition-colors duration-200 focus:outline-none select-none font-bold font-serif cursor-pointer"
            >
              <Settings className="w-3 h-3" />
              <span>🔑 Showroom Admin Panel</span>
            </button>
          )}
        </div>
        <p className="flex items-center gap-1">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-maroon fill-maroon" />
          <span>representing Gorakhpur's Premium Traditional Wear</span>
        </p>
      </div>
    </footer>
  );
}

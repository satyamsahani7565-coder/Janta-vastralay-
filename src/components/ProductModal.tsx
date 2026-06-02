import React, { useEffect } from 'react';
import { X, CheckCircle, Smartphone, Award, ShieldCheck, Heart } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const { storeInfo: STORE_INFO } = useStore();
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  if (!product) return null;

  // Pre-generate WhatsApp message URL
  const getWhatsAppLink = () => {
    const message = `Hello ${STORE_INFO.name}! I am genuinely interested in this wedding design:
👗 Category: ${product.category === 'saree' ? 'Traditional Silk Saree' : 'Designer Wear'}
📦 Name: ${product.name}

Please let me know if this is currently available in stock or if we can book a customized style fitting. Thank you!`;
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  // Determine saving amount (Disabled - price removed)
  const getSavings = () => {
    return null;
  };

  const savings = getSavings();

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
      <div 
        className="relative w-full max-w-4xl bg-cream rounded-2xl overflow-hidden border border-gold/30 shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-auto overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 hover:text-gold border border-gold/20 text-white transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image Display */}
        <div className="w-full md:w-[45%] relative bg-neutral-900 min-h-[300px] md:min-h-full">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover md:absolute inset-0 select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
          {/* Accent Frame */}
          <div className="absolute inset-4 border border-white/20 rounded-xl pointer-events-none" />
          <div className="absolute bottom-4 left-4 bg-maroon text-gold-light text-xs font-semibold px-3 py-1 rounded-full uppercase shadow">
            {product.tag}
          </div>
        </div>

        {/* Right Side: Detailed Product Specs */}
        <div className="w-full md:w-[55%] p-6 sm:p-8 flex flex-col justify-between bg-cream text-charcoal space-y-6">
          <div className="space-y-4">
            
            {/* Category header tag */}
            <span className="text-[11px] font-serif font-bold text-gold-dark tracking-widest uppercase block pb-1 border-b border-gold/10">
              {product.category === 'saree' ? 'Premium Heritage Saree — Timeless Elegance' : 'Royal Couture — Exclusive Festive Wear'}
            </span>

            {/* Hindi Main Title */}
            <h2 className="font-serif text-2xl sm:text-3xl text-neutral-950 font-bold tracking-wide">
              {product.name}
            </h2>

            {/* English Sub Name */}
            <p className="font-sans text-neutral-500 text-xs sm:text-sm font-medium tracking-wide">
              {product.name}
            </p>

            {/* Showroom Exclusive Note */}
            <div className="bg-white p-3.5 rounded-xl border border-gold/15">
              <p className="text-[10px] uppercase font-serif tracking-widest text-gold-dark font-bold">Boutique Exclusive Collection</p>
              <p className="text-xs text-neutral-600 font-sans mt-1">
                Please inquire on WhatsApp or give us a call regarding available sizes, customizable designs, and exclusive showroom fitting appointments.
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm font-sans text-neutral-700 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Highlighted Technical Features list */}
            <div className="space-y-2">
              <p className="text-[10px] font-serif text-neutral-400 uppercase tracking-widest font-bold">Product Specifications:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {product.features.map((feat, index) => (
                  <div key={index} className="flex items-center gap-2 font-sans text-neutral-700">
                    <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Luxury Care Guide Message */}
            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200/50 text-xs text-neutral-600 space-y-1 font-sans">
              <p className="font-semibold text-neutral-800">Garment Care Guide:</p>
              <p>• {product.category === 'saree' ? 'Dry clean only. Pack in moist-free cotton muslin cloth to protect pure silver-zari weave.' : 'Do not dry in direct sunlight. Keep heavy bridalwear or designer suits covered in muslin wraps after use.'}</p>
            </div>
          </div>

          {/* Action buttons (Immediate Contact with Store Front) */}
          <div className="pt-4 border-t border-gold/10 flex flex-col sm:flex-row items-center gap-3">
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-sans text-sm font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md group"
            >
              <Smartphone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Inquire & Order on WhatsApp</span>
            </a>
            
            <a 
              href={`tel:${STORE_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto text-center hover:bg-neutral-100 border border-neutral-300 text-neutral-800 font-sans text-xs font-semibold py-3 px-4 rounded-xl transition-all cursor-pointer"
            >
              Call Showroom
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

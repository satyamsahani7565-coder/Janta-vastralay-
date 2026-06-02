import React from 'react';
import { ShoppingBag, Eye, Percent, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
  key?: string;
  product: Product;
  onQuickView: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { storeInfo: STORE_INFO } = useStore();
  
  // Calculate discount percentage (Disabled - price removed)
  const getDiscount = () => {
    return null;
  };

  const discountText = getDiscount();

  // Pre-generate WhatsApp message URL without price details
  const getWhatsAppLink = () => {
    const message = `Hello ${STORE_INFO.name}! I am genuinely interested in this beautiful clothing design:
👗 Name: ${product.name}
🔗 Link: ${window.location.href}

Kindly share more details regarding its availability. Is it in stock?`;
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div 
      id={product.id}
      className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/80 hover:border-gold/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      {/* Product Image Section */}
      <div className="relative overflow-hidden aspect-[4/3] bg-neutral-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Decorative thin gold frame overlay */}
        <div className="absolute inset-2 border border-white/20 rounded-xl pointer-events-none group-hover:border-gold/30 transition-colors" />

        {/* Dynamic Category/Highlight Tag */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <span className="bg-maroon text-gold-light text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full uppercase shadow">
            {product.tag}
          </span>
          {discountText && (
            <span className="bg-yellow-500 text-neutral-950 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow">
              <Percent className="w-3 h-3" />
              <span>{discountText}</span>
            </span>
          )}
        </div>

        {/* Hover Fast Actions Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button 
            onClick={() => onQuickView(product)}
            className="p-3 bg-white hover:bg-gold hover:text-neutral-950 text-neutral-900 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
            title="View details"
          >
            <Eye className="w-5 h-5" />
          </button>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 delay-75"
            title="Inquire on WhatsApp"
          >
            <ShoppingBag className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Product Description details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-white to-neutral-50/50">
        
        <div className="space-y-2">
          {/* Accent categories */}
          <p className="text-[10px] uppercase tracking-widest text-gold-dark font-serif font-bold">
            {product.category === 'saree' ? 'Handloom Saree Collection' : 'Elegant Festive Menswear'}
          </p>

          {/* Hindi Title (High Visual Priority) */}
          <h3 className="font-serif text-lg sm:text-xl text-neutral-900 font-bold group-hover:text-maroon transition-colors">
            {product.name}
          </h3>

          {/* English Sub-title */}
          <h4 className="font-sans text-xs text-neutral-500 font-medium tracking-wide">
            {product.name}
          </h4>

          {/* Core Feature bullet snippets */}
          <div className="flex flex-wrap gap-1.5 pt-1.5">
            {product.features.slice(0, 2).map((feat, idx) => (
              <span 
                key={idx} 
                className="text-[10px] font-sans text-neutral-600 bg-neutral-200/60 px-2 py-0.5 rounded"
              >
                ✦ {feat}
              </span>
            ))}
          </div>

          <p className="text-xs text-neutral-600 font-sans line-clamp-2 pt-1 font-light leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Pricing & Call to Actions */}
        <div className="pt-4 mt-4 border-t border-neutral-200/60 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-serif tracking-wider text-gold-dark font-bold">
              Showroom Exclusive
            </span>
            <span className="text-[11px] font-sans text-neutral-500 font-medium">
              Premium Quality
            </span>
          </div>

          {/* Action Buttons on desktop card footer */}
          <div className="flex gap-2">
            <button 
              onClick={() => onQuickView(product)}
              className="text-xs font-sans font-semibold text-neutral-700 hover:text-maroon border border-neutral-300 hover:border-maroon px-2.5 py-1.5 rounded-lg bg-white transition-all cursor-pointer flex items-center gap-1"
            >
              <span>View Details</span>
            </button>
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-sans font-bold bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Inquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

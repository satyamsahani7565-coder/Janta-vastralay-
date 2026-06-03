import React from 'react';
import { ShieldCheck, Phone, MapPin, Award, Star, Mail, Compass, HelpCircle, CheckCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function OwnerProfileCard() {
  const { storeInfo: STORE_INFO } = useStore();

  return (
    <section id="owner-profile-section" className="scroll-mt-24 py-12 relative flex justify-center items-center">
      {/* Decorative luxury gradient background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-gradient-to-tr from-gold/5 via-maroon/5 to-gold/10 rounded-full filter blur-3xl pointer-events-none select-none" />
      
      {/* Primary Card Frame - Elegant Dark Luxury Design */}
      <div className="w-full max-w-4xl bg-neutral-950 border border-gold/30 rounded-3xl overflow-hidden relative shadow-2xl group transition-all duration-500 hover:border-gold/50">
        
        {/* Intricate Corner Gold Ornaments */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gold/40 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-gold/40 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-gold/40 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gold/40 rounded-br-sm pointer-events-none" />

        {/* Diagonal Light Highlight Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-neutral-950/95 to-neutral-900/50 pointer-events-none z-0" />
        
        {/* Subtle Luxury Mandala Symmetrical Line Pattern */}
        <div className="absolute inset-0 bg-maroon-mandala opacity-8 pointer-events-none z-0" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 p-8 sm:p-12 items-center">
          
          {/* Column 1: Premium Royal Medallion Logo (No photograph) */}
          <div className="md:col-span-5 flex flex-col items-center justify-center text-center space-y-4">
            
            {/* The circular premium medallion with ornate golden rings or the custom photo */}
            <div className="relative shrink-0 select-none">
              
              {/* Outer Pulsing Gold Hue */}
              <div 
                className="absolute -inset-1 bg-gradient-to-tr from-gold-dark via-gold-light to-gold blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-700" 
                style={{ borderRadius: STORE_INFO.ownerPhoto ? '1rem' : '9999px' }} 
              />
              
              {/* Outer solid ornate border ring */}
              <div 
                className="absolute -inset-3 border-2 border-gold/20 scale-102" 
                style={{ borderRadius: STORE_INFO.ownerPhoto ? '1.25rem' : '9999px' }} 
              />
              <div 
                className="absolute -inset-1.5 border border-gold/45 scale-100" 
                style={{ borderRadius: STORE_INFO.ownerPhoto ? '1rem' : '9999px' }} 
              />
              
              {STORE_INFO.ownerPhoto ? (
                /* Main Premium Photo Frame */
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-gold p-1.5 bg-neutral-950 flex items-center justify-center shadow-2xl">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-900">
                    <img 
                      src={STORE_INFO.ownerPhoto} 
                      alt="Mahfooj Ansari - Proprietor (Owner)" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ) : (
                /* Main Premium Circle Medallion Wrapper */
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-gold p-2 bg-gradient-to-b from-neutral-950 to-neutral-900 flex flex-col items-center justify-center shadow-2xl">
                  
                  {/* Traditional Mandala Graphic Lines background */}
                  <div className="absolute inset-2 rounded-full border border-gold/15 flex items-center justify-center opacity-30">
                    <div className="w-11/12 h-11/12 rounded-full border border-dashed border-gold/10" />
                  </div>

                  <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
                    {/* Stylized Star Award icon in gold */}
                    <Award className="w-10 h-10 sm:w-12 sm:h-12 text-gold animate-pulse mb-1" />
                    
                    {/* Monogram MA */}
                    <span className="text-3xl sm:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark tracking-widest leading-none drop-shadow-md">
                      MA
                    </span>
                    
                    {/* Seal tagline */}
                    <span className="text-[7px] sm:text-[8px] font-sans text-amber-200 tracking-[0.25em] uppercase font-bold text-center mt-1">
                      ROYAL SEAL
                    </span>
                    <span className="text-[6px] sm:text-[7px] text-neutral-500 font-serif tracking-widest uppercase">
                      ESTD 1995
                    </span>
                  </div>
                </div>
              )}

              {/* Verified Star Badge floating near the medallion */}
              <div className="absolute bottom-1 right-1 bg-gradient-to-r from-gold via-gold-light to-gold-dark text-neutral-950 font-serif font-bold text-[9px] sm:text-[10px] rounded-full px-2.5 py-1 shadow-md tracking-wider border border-neutral-950 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 fill-current text-neutral-950" />
                <span>VERIFIED</span>
              </div>
            </div>

            {/* Typography beneath photo */}
            <div className="space-y-1">
              <h4 className="text-gold uppercase tracking-[0.25em] text-[10px] font-serif font-bold">
                Janta Vastralay Owner
              </h4>
              <p className="text-[11px] text-neutral-400 font-sans italic">
                Campierganj, Gorakhpur Region
              </p>
            </div>
          </div>

          {/* Column 2: Rich profile info & showroom credential statements (Grid span 12 on mobile, 7 on desktop) */}
          <div className="md:col-span-7 space-y-6 text-left">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] sm:text-xs font-serif font-medium uppercase tracking-[0.2em] text-gold-light bg-gold/15 py-0.5 px-2.5 rounded-full border border-gold/30">
                  ✦ PROPRIETOR (प्रोपराइटर)
                </span>
                
                <span className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 text-[10px] sm:text-xs py-0.5 px-2 rounded-md font-sans text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Showroom Live Active
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-3 gap-y-1">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
                  Mahfooj Ansari
                </h3>
                <span className="text-gold-light font-serif text-sm sm:text-base tracking-wider hidden sm:inline">
                  (महफूज अंसारी)
                </span>
              </div>
              
              <p className="text-neutral-400 text-xs sm:text-sm font-sans font-medium tracking-wide">
                Managing Director & Founder of Janta Vastralay
              </p>
            </div>

            {/* Symmetrical divider line with custom star accent */}
            <div className="flex items-center gap-2">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
              <Star className="w-3 h-3 fill-gold text-gold" />
              <div className="h-[1px] flex-1 bg-gradient-to-l from-gold/30 to-transparent" />
            </div>

            {/* Welcoming Statements Block */}
            <div className="space-y-4">
              <div className="bg-neutral-900/60 p-5 rounded-2xl border-l-[3px] border-gold border-y border-r border-gold/10 text-neutral-300 relative">
                <p className="font-serif text-[13px] sm:text-sm leading-relaxed text-neutral-200">
                  "नमस्ते! मैं <strong className="text-white font-serif text-gold-light font-bold">महफूज अंसारी</strong>, आप सभी सम्मानित परिवारों का जनता वस्त्रालय में हार्दिक स्वागत करता हूँ। हमारा प्रयास सदैव यही रहा है कि हम आपको सर्वोत्तम वस्त्र उचित और थोक दाम (Wholesale friendly rates) पर उपलब्ध कराएं।"
                </p>
                
                <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-neutral-400 font-sans font-light">
                  शादी-विवाह, धार्मिक मांगलिक उत्सव एवं रोजमर्रा की खरीदारी के लिए हमारे पास एक ही छत के नीचे भारी कढ़ाई के लहंगे, बनारसी-कांजीवरम साड़ियां, आकर्षक पेंट-शर्ट और सुटिंग का विशेष राजशाही कलेक्शन है। हम पूरी जिम्मेदारी और सत्यनिष्ठा के साथ आपकी सेवा में तत्पर हैं।
                </p>
              </div>

              <p className="italic font-sans text-[11px] sm:text-xs text-neutral-400 leading-relaxed pl-3 border-l border-neutral-700/80">
                "We take great pride in our high weaving standards and premium clothing layout. As a customer-centric showroom, we guarantee pure fabrics, transparent interactions, and the best traditional legacy collections for Gorakhpur wedding season buyers."
              </p>
            </div>

            {/* Action Credentials & Interactive Details info tag blocks */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a 
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-900 border border-gold/25 hover:border-gold/60 p-2 px-3.5 rounded-xl text-white transition-all duration-300 flex items-center gap-2.5 shadow-sm hover:shadow-md cursor-pointer group/btn"
              >
                <div className="p-1 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 group-hover/btn:scale-110 transition-transform">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[8px] text-neutral-500 font-serif uppercase tracking-widest leading-none">WhatsApp Contact</p>
                  <p className="text-[11px] sm:text-xs font-sans font-bold text-stone-200 mt-1 leading-none">{STORE_INFO.phone}</p>
                </div>
              </a>

              <div className="bg-neutral-900 border border-gold/10 p-2 px-3.5 rounded-xl flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-maroon-dark/50 border border-gold/20 text-gold-light">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[8px] text-neutral-500 font-serif uppercase tracking-widest leading-none">Main Showroom</p>
                  <p className="text-[11px] sm:text-xs font-sans font-bold text-stone-200 mt-1 leading-none">{STORE_INFO.addressHindi}</p>
                </div>
              </div>

              <div className="bg-neutral-900 border border-gold/10 p-2 px-3.5 rounded-xl flex items-center gap-2.5">
                <div className="p-1 rounded-full bg-amber-950/40 border border-gold-dark/30 text-gold">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[8px] text-neutral-500 font-serif uppercase tracking-widest leading-none">Showroom Legacy</p>
                  <p className="text-[11px] sm:text-xs font-sans font-bold text-stone-200 mt-1 leading-none">Since Ages (विश्वसनीय)</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

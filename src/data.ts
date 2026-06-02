import { Product } from './types';

export const STORE_INFO = {
  name: "Janta Vastralay",
  englishName: "Janta Vastralay",
  username: "jantavastralay.hub",
  heritageTagline: "रिगौली बाजार की पुरानी दुकान",
  tagline: "Tradition, Prestige, and Purity – The Complete Family Clothing Showroom",
  wholesaleNote: "नोट:- हमारे यहाँ शूटिंग-शर्टिंग, साड़ी, सूट, लहंगा, नकाब इत्यादि के थोक एवं फुटकर विक्रेता।",
  wholesaleNoteEnglish: "Wholesale & retail dealers of suiting-shirting, sarees, suits, lehengas, niqabs & elegant dresses.",
  phone: "+91 63884 62571",
  address: "Vanbhagalpur, Campierganj, Gorakhpur, UP",
  addressHindi: "वनभागलपुर, कैम्पियरगंज, गोरखपुर",
  mapUrl: "https://maps.app.goo.gl/TLnGc3AEkJYHwWkd9",
  hours: "10:30 AM - 08:30 PM (Monday - Sunday)",
  whatsappNumber: "916388462571"
};

export const SAREES: Product[] = [
  {
    id: "saree-01",
    name: "Royal Red Banarasi Silk Saree",
    hindiName: "Royal Red Banarasi Silk Saree",
    category: 'saree',
    price: "₹12,499",
    originalPrice: "₹18,500",
    description: "Exquisite pure Banarasi silk woven with rich gold zari threads, perfect for weddings, bridalwear, and festive family events.",
    image: "/src/assets/images/banarasi_saree_1780314375516.png",
    tag: "Best Seller",
    features: ["Pure Georgette/Katan Silk", "Detailed Gold Zari Border", "Handloom Weaving Craftsmanship"]
  },
  {
    id: "saree-02",
    name: "Green & Gold Kanjivaram Silk Saree",
    hindiName: "Green & Gold Kanjivaram Silk",
    category: 'saree',
    price: "₹15,999",
    originalPrice: "₹22,000",
    description: "Traditional south Indian masterpiece woven with pure raw silk and a heavy double-twist gold zari border for grand elegance.",
    image: "/src/assets/images/kanjivaram_saree_1780314393807.png",
    tag: "Premium Choice",
    features: ["Pure Mulberry Silk", "Traditional Temple Border", "Contrast Designer Pallu"]
  },
  {
    id: "saree-03",
    name: "Magenta Embroidered Designer Saree",
    hindiName: "Exquisite Designer Zardozi Saree",
    category: 'saree',
    price: "₹8,999",
    originalPrice: "₹12,500",
    description: "Modern fusion georgette saree featuring delicate hand-crafted silver zardozi border work and gorgeous floral patterns.",
    image: "/src/assets/images/designer_saree_1780314413562.png",
    tag: "New Arrival",
    features: ["Premium Georgette Fabric", "Handcrafted Zardozi Beads", "Custom Styled Blouse Piece"]
  }
];

export const READYMADES: Product[] = [
  {
    id: "ready-01",
    name: "Royal Ivory Wedding Sherwani",
    hindiName: "Royal Ivory Wedding Sherwani",
    category: 'readymade',
    price: "₹24,999",
    originalPrice: "₹35,000",
    description: "A premium hand-embroidered groom Sherwani with detailed gold tilla work, coordinating luxury stole, and comfortable churidar.",
    image: "/src/assets/images/designer_sherwani_1780314432510.png",
    tag: "Festive Special",
    features: ["Premium Art Silk Fabric", "Intricate Hand Embroidery", "Includes Stole & Inner Kurta"]
  },
  {
    id: "ready-02",
    name: "Maroon Golden Bridal Lehenga Choli",
    hindiName: "Maroon Velvet Bridal Lehenga",
    category: 'readymade',
    price: "₹29,999",
    originalPrice: "₹45,000",
    description: "Heavy premium velvet bridal lehenga set with intricate gold tilla and sparkling sequin embroidery representing timeless beauty.",
    image: "/src/assets/images/designer_lehenga_1780314451960.png",
    tag: "Trending Couture",
    features: ["Heavy Micro Velvet Fabric", "Double Flare (Ghera)", "Designer Dupatta & Silk Blouse"]
  },
  {
    id: "ready-03",
    name: "Royal Blue Embroidered Silk Kurta Set",
    hindiName: "Royal Blue Silk Kurta Pyjama",
    category: 'readymade',
    price: "₹4,299",
    originalPrice: "₹6,500",
    description: "Sophisticated art silk Kurta pyjama set featuring premium styling and detailed neck embroidery for all celebrations.",
    image: "/src/assets/images/royal_kurta_1780314470548.png",
    tag: "Elegant Comfort",
    features: ["Premium Banarasi Silk Brocade", "Straight Cut Comfort Fit", "Includes Off-White Pyjama"]
  }
];

export const TESTIMONIALS = [
  {
    name: "Smt. Sunita Sharma",
    location: "Patna",
    review: "I purchased Banarasi sarees and a wedding Lehenga for my daughter's wedding from Janta Vastralay. The finishing of the designs and embroidery is extremely premium, equivalent to high-end boutiques in metropolitan cities. Highly reasonable prices!"
  },
  {
    name: "Rajesh Kumar Singh",
    location: "Muzaffarpur",
    review: "The outstanding collection of sherwanis and sarees here is truly remarkable. The fitting, tailoring, and fabric quality represent pure luxury. Excellent showroom consultation and top-tier service."
  },
  {
    name: "Neha Kumari",
    location: "Gaya",
    review: "A wonderful place featuring gorgeous colors and stunning designer bridal Lehengas. Our search finally ended once we entered this showroom! Truly remarkable items for very fair pricing."
  }
];

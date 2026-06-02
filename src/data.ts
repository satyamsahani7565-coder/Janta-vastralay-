import { Product } from './types';

// Static Image imports to assure Vite bundles them for production build
import banarasiSaree from './assets/images/banarasi_saree_1780314375516.png';
import kanjivaramSaree from './assets/images/kanjivaram_saree_1780314393807.png';
import designerSaree from './assets/images/designer_saree_1780314413562.png';
import designerShararaSuit from './assets/images/designer_sharara_suit_1780384969586.png';
import designerLehenga from './assets/images/designer_lehenga_1780314451960.png';
import royalPinkLehenga from './assets/images/royal_pink_lehenga_1780385150442.png';
import shirtingSuitingBox from './assets/images/shirting_suiting_box_1780385678015.png';
import royalBlackNiqab from './assets/images/royal_black_niqab_1780385693254.png';
import royalKurta from './assets/images/royal_kurta_1780314470548.png';

export const STORE_INFO = {
  name: "Janta Vastralay",
  englishName: "Janta Vastralay",
  username: "jantavastralay.hub",
  heritageTagline: "रिगौली बाजार की पुरानी दुकान",
  tagline: "Tradition, Prestige, and Purity – The Complete Family Clothing Showroom",
  wholesaleNote: "नोट:- हमारे यहाँ शूटिंग-शर्टिंग, साड़ी, सूट, लहंगा, नकाब इत्यादि के थोक एवं फुटकर विक्रेता।",
  wholesaleNoteEnglish: "Wholesale & retail dealers of suiting-shirting, sarees, suits, lehengas, niqabs & elegant dresses.",
  phone: "+91 78009 01353",
  address: "Vanbhagalpur, Campierganj, Gorakhpur, UP",
  addressHindi: "वनभागलपुर, कैम्पियरगंज, गोरखपुर",
  mapUrl: "https://maps.app.goo.gl/TLnGc3AEkJYHwWkd9",
  hours: "10:30 AM - 08:30 PM (Monday - Sunday)",
  whatsappNumber: "917800901353"
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
    image: banarasiSaree,
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
    image: kanjivaramSaree,
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
    image: designerSaree,
    tag: "New Arrival",
    features: ["Premium Georgette Fabric", "Handcrafted Zardozi Beads", "Custom Styled Blouse Piece"]
  }
];

export const READYMADES: Product[] = [
  {
    id: "ready-01",
    name: "Royal Emerald Georgette Sharara Suit Set",
    hindiName: "Royal Emerald Georgette Sharara Suit",
    category: 'suit',
    price: "₹6,499",
    originalPrice: "₹9,500",
    description: "An exquisite designer ladies sharara suit featuring heavy premium georgette, intricate gold zari embroidery and sparkling sequins with a royal drape dupatta.",
    image: designerShararaSuit,
    tag: "Festive Special",
    features: ["Heavy Georgette Fabric", "Intricate Hand Zari Wear", "Includes Flared Sharara Pants"]
  },
  {
    id: "ready-02",
    name: "Maroon Golden Bridal Lehenga Choli",
    hindiName: "Maroon Velvet Bridal Lehenga",
    category: 'lehenga',
    price: "₹29,999",
    originalPrice: "₹45,000",
    description: "Heavy premium velvet bridal lehenga set with intricate gold tilla and sparkling sequin embroidery representing timeless beauty.",
    image: designerLehenga,
    tag: "Trending Couture",
    features: ["Heavy Micro Velvet Fabric", "Double Flare (Ghera)", "Designer Dupatta & Silk Blouse"]
  },
  {
    id: "ready-04",
    name: "Royal Pink & Gold Silk Bridal Lehenga",
    hindiName: "Royal Pink Designer Lehenga",
    category: 'lehenga',
    price: "₹34,999",
    originalPrice: "₹49,500",
    description: "An incredibly detailed raw silk masterpiece featuring majestic pink fabrics embellished with golden tilla embroidery, sequin floral motifs and a luxury sheer georgette dupatta.",
    image: royalPinkLehenga,
    tag: "Royal Masterpiece",
    features: ["Pure Premium Raw Silk", "Intricate Dual Tilla & Zardoshi Handwork", "Coordinated Blouse Piece & Dual Dupattas"]
  },
  {
    id: "ready-05",
    name: "Premium Raymond Suiting & Shirting Gift Pack",
    hindiName: "Premium Suiting-Shirting Combo Fabric Package (शर्टिंग)",
    category: 'shirting',
    price: "₹1,899",
    originalPrice: "₹3,000",
    description: "An elegant combination of classic structured navy blue suiting and high-quality premium white textured shirting fabric by Raymond, perfect for personalized tailoring and celebratory gifts.",
    image: shirtingSuitingBox,
    tag: "Gifting Special",
    features: ["Raymond Brand Premium Fabric", "Navy Blue Trouser + Ice White Shirt Set", "Luxurious Hardbound Embossed Gift Box"]
  },
  {
    id: "ready-06",
    name: "Royal Dubai Embroidered Georgette Naqab Set",
    hindiName: "Royal Dubai Georgette Naqab (नकाब)",
    category: 'naqab',
    price: "₹2,499",
    originalPrice: "₹4,000",
    description: "An elegant imported premium double-layer georgette Niqab/Naqab set from Dubai. Crafted in deep matte black, embellished with delicate gold and glass hand-beaded detailing.",
    image: royalBlackNiqab,
    tag: "Imported Selection",
    features: ["Premium Double-layer Dubai Georgette", "Soft Breathable Chiffon Base Overlay", "Hand-stitched Glass Bead Finishes"]
  },
  {
    id: "ready-03",
    name: "Royal Blue Embroidered Silk Kurta Set",
    hindiName: "Royal Blue Silk Kurta Pyjama",
    category: 'readymade',
    price: "₹4,299",
    originalPrice: "₹6,500",
    description: "Sophisticated art silk Kurta pyjama set featuring premium styling and detailed neck embroidery for all celebrations.",
    image: royalKurta,
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
    review: "The outstanding collection of exclusive suits and sarees here is truly remarkable. The fitting, tailoring, and fabric quality represent pure luxury. Excellent showroom consultation and top-tier service."
  },
  {
    name: "Neha Kumari",
    location: "Gaya",
    review: "A wonderful place featuring gorgeous colors and stunning designer bridal Lehengas. Our search finally ended once we entered this showroom! Truly remarkable items for very fair pricing."
  }
];

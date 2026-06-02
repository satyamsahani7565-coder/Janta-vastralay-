import React, { useState } from 'react';
import { useStore, Testimonial } from '../context/StoreContext';
import { Product } from '../types';
import { 
  X, Lock, KeyRound, Save, Plus, Edit2, Trash2, 
  Settings, ShoppingBag, MessageSquare, LogOut, Check,
  AlertCircle, ChevronRight, RefreshCw, Layers, Sparkles
} from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
}

// Preset gallery images for easier population
const IMAGE_PRESETS = [
  { name: "Royal Banarasi Saree", path: "/src/assets/images/banarasi_saree_1780314375516.png", category: "saree" },
  { name: "Kanjivaram Silk Saree", path: "/src/assets/images/kanjivaram_saree_1780314393807.png", category: "saree" },
  { name: "Designer Embroidered Saree", path: "/src/assets/images/designer_saree_1780314413562.png", category: "saree" },
  { name: "Designer Sharara Suit", path: "/src/assets/images/designer_sharara_suit_1780384969586.png", category: "readymade" },
  { name: "Bridal Lehenga Choli", path: "/src/assets/images/designer_lehenga_1780314451960.png", category: "readymade" },
  { name: "Royal Pink Lehenga", path: "/src/assets/images/royal_pink_lehenga_1780385150442.png", category: "readymade" },
  { name: "Royal Blue Silk Kurta", path: "/src/assets/images/royal_kurta_1780314470548.png", category: "readymade" },
];

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const { 
    storeInfo, products, testimonials, 
    updateStoreInfo, addProduct, updateProduct, deleteProduct,
    addTestimonial, updateTestimonial, deleteTestimonial, resetToDefault 
  } = useStore();

  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'products' | 'store' | 'testimonials'>('products');
  
  // App state alerts
  const [successMessage, setSuccessMessage] = useState('');

  // Form states - Products
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [prodForm, setProdForm] = useState({
    name: '',
    hindiName: '',
    category: 'saree' as 'saree' | 'readymade',
    price: '',
    originalPrice: '',
    tag: 'New Arrival',
    description: '',
    image: IMAGE_PRESETS[0].path,
    featuresString: ''
  });

  // Form states - Settings
  const [settingsForm, setSettingsForm] = useState({ ...storeInfo });

  // Form states - Testimonials
  const [editingTestimonialId, setEditingTestimonialId] = useState<string | null>(null);
  const [testForm, setTestForm] = useState({
    name: '',
    location: '',
    review: ''
  });

  const handleAuthentication = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPassword = password.trim().toLowerCase();
    
    // Accept user configured showroom password
    if (cleanPassword === '@jantavastralay123' || cleanPassword === 'admin') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('गलत पासवर्ड। कृपया पुनः प्रयास करें। (Hint: Use "@jantavastralay123")');
    }
  };

  const triggerAlert = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
    }, 4000);
  };

  // PRODUCT ACTIONS
  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prodForm.name || !prodForm.price || !prodForm.image) {
      alert('Please fill out Name, Price and Image.');
      return;
    }

    const featuresArray = prodForm.featuresString
      ? prodForm.featuresString.split(',').map(f => f.trim()).filter(f => f.length > 0)
      : ['Premium Quality Fabric', 'Authentic Embroidery', 'Showroom Exclusive'];

    const productPayload = {
      name: prodForm.name,
      hindiName: prodForm.hindiName || prodForm.name,
      category: prodForm.category,
      price: prodForm.price || 'Ask for Price',
      originalPrice: prodForm.originalPrice || undefined,
      description: prodForm.description,
      image: prodForm.image,
      tag: prodForm.tag,
      features: featuresArray
    };

    if (editingProductId) {
      updateProduct(editingProductId, { ...productPayload, id: editingProductId });
      triggerAlert('उत्पाद सफलतापूर्वक अपडेट किया गया! Product updated successfully.');
      setEditingProductId(null);
    } else {
      addProduct(productPayload);
      triggerAlert('नया उत्पाद सफलतापूर्वक जोड़ा गया! New product added.');
    }

    // Reset Form
    setProdForm({
      name: '',
      hindiName: '',
      category: 'saree',
      price: '',
      originalPrice: '',
      tag: 'New Arrival',
      description: '',
      image: IMAGE_PRESETS[0].path,
      featuresString: ''
    });
  };

  const handleEditProductClick = (product: Product) => {
    setEditingProductId(product.id);
    setProdForm({
      name: product.name,
      hindiName: product.hindiName,
      category: product.category,
      price: product.price,
      originalPrice: product.originalPrice || '',
      tag: product.tag,
      description: product.description,
      image: product.image,
      featuresString: product.features.join(', ')
    });
    // Scroll form into view
    const formEl = document.getElementById('product-form-box');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDeleteProductClick = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}" from your catalog?`)) {
      deleteProduct(id);
      triggerAlert('उत्पाद हटा दिया गया! Product deleted successfully.');
    }
  };

  // TESTIMONIAL ACTIONS
  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testForm.name || !testForm.review || !testForm.location) {
      alert('Please fill out Name, Location, and Review.');
      return;
    }

    const testPayload = {
      name: testForm.name,
      location: testForm.location,
      review: testForm.review
    };

    if (editingTestimonialId) {
      updateTestimonial(editingTestimonialId, { ...testPayload, id: editingTestimonialId });
      triggerAlert('समीक्षा सफलतापूर्वक अपडेट की गई! Review updated.');
      setEditingTestimonialId(null);
    } else {
      addTestimonial(testPayload);
      triggerAlert('समीक्षा सफलतापूर्वक जोड़ी गई! Review added.');
    }

    setTestForm({ name: '', location: '', review: '' });
  };

  const handleEditTestimonialClick = (t: Testimonial) => {
    if (t.id) {
      setEditingTestimonialId(t.id);
      setTestForm({
        name: t.name,
        location: t.location,
        review: t.review
      });
      // Scroll to review form
      const formEl = document.getElementById('review-form-box');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDeleteTestimonialClick = (id: string) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      deleteTestimonial(id);
      triggerAlert('समीक्षा हटा दी गई! Review deleted.');
    }
  };

  // STORE SETTINGS ACTIONS
  const handleSettingsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateStoreInfo(settingsForm);
    triggerAlert('स्टोर सेटिंग्स सफलतापूर्वक सुरक्षित! Store settings saved successfully.');
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
        <div id="login-card" className="bg-charcoal border border-gold/30 rounded-2xl w-full max-w-md p-8 relative shadow-[0_15px_50px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Abstract Gold Circles */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gold/10 pointer-events-none blur-xl" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-maroon/20 pointer-events-none blur-xl" />

          {/* Close button */}
          <button 
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center space-y-3 mb-6">
            <div className="mx-auto w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-serif text-gold-light font-bold">Showroom Admin Gate</h2>
              <p className="text-xs text-neutral-400 font-sans mt-1">
                Enter passcode to configure products, store metadata, and reviews.
              </p>
            </div>
          </div>

          <form onSubmit={handleAuthentication} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-serif uppercase tracking-widest text-gold text-left block">
                Store Passcode
              </label>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="अंकित करें..." 
                  className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold py-2.5 pl-10 pr-4 rounded-lg text-white font-sans text-sm outline-none transition-colors"
                  autoFocus
                />
                <KeyRound className="absolute left-3.5 top-3 w-4 h-4 text-neutral-500" />
              </div>
            </div>

            {authError && (
              <div className="flex items-center gap-1.5 text-xs text-rose-500 bg-rose-950/20 border border-rose-800/40 p-2.5 rounded-lg">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-neutral-900 hover:scale-101 transition-transform py-2.5 rounded-lg font-sans font-bold text-sm shadow-md"
            >
              Sign In (सुरक्षित प्रवेश)
            </button>
          </form>

          <div className="mt-8 border-t border-neutral-800 pt-4 text-center">
            <p className="text-[10px] text-amber-200/80 font-sans leading-relaxed">
              🔑 <span className="font-bold">Passcode:</span> Use <code className="bg-neutral-900 text-gold px-1.5 py-0.5 rounded">@jantavastralay123</code> or <code className="bg-neutral-900 text-gold px-1.5 py-0.5 rounded">admin</code> for rapid inspection.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-neutral-950/90 backdrop-blur-sm z-50 flex flex-col pt-2 sm:pt-6 pb-2 px-2 sm:px-6">
      
      {/* Container Card */}
      <div className="bg-neutral-900 border border-gold/25 w-full max-w-6xl mx-auto rounded-2xl flex flex-col flex-1 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden">
        
        {/* Header Block */}
        <div className="bg-charcoal px-6 py-4 border-b border-gold/15 flex flex-col sm:flex-row justify-between items-center gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-gold to-gold-dark rounded-lg text-neutral-950">
              <Settings className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-xl font-serif text-gold-light font-bold">Janta Showroom Control Center</h2>
              <p className="text-xs text-neutral-400 font-sans">
                Dynamic configuration portal. Changes take immediate effect.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={resetToDefault}
              className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white border border-neutral-700 hover:border-neutral-500 py-1.5 px-3 rounded-lg transition-colors cursor-pointer"
              title="Reset to factory hardcoded defaults"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button 
              onClick={onClose}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-neutral-950 bg-gold hover:bg-gold-dark rounded-lg font-sans transition-colors cursor-pointer"
            >
              <span>Apply & View Store ↗</span>
            </button>
          </div>
        </div>

        {/* Dynamic Success Toast banner within Admin Portal */}
        {successMessage && (
          <div className="bg-emerald-950 text-emerald-300 border-b border-emerald-800 p-3 text-center text-xs flex items-center justify-center gap-2 font-sans animate-fade-in shrink-0">
            <Check className="w-4 h-4" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Dashboard Main Grid Split */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Side Menu Tab Selector */}
          <aside className="w-full md:w-56 bg-neutral-950 p-4 border-b md:border-b-0 md:border-r border-neutral-800 flex md:flex-col justify-around md:justify-start gap-1 shrink-0 overflow-x-auto whitespace-nowrap">
            <p className="hidden md:block text-[10px] tracking-widest text-neutral-500 uppercase font-serif font-bold mb-4 px-3">
              Admin Tasks
            </p>

            <button
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-xs font-serif tracking-wide uppercase transition-all duration-200 text-left cursor-pointer ${
                activeTab === 'products' 
                  ? 'bg-gold/15 text-gold border border-gold/25 font-bold' 
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent'
              }`}
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span>🛍️ Catalog Manager ({products.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('store')}
              className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-xs font-serif tracking-wide uppercase transition-all duration-200 text-left cursor-pointer ${
                activeTab === 'store' 
                  ? 'bg-gold/15 text-gold border border-gold/25 font-bold' 
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent'
              }`}
            >
              <Settings className="w-4 h-4 shrink-0" />
              <span>⚙️ Store Info Desk</span>
            </button>

            <button
              onClick={() => setActiveTab('testimonials')}
              className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-xs font-serif tracking-wide uppercase transition-all duration-200 text-left cursor-pointer ${
                activeTab === 'testimonials' 
                  ? 'bg-gold/15 text-gold border border-gold/25 font-bold' 
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900 border border-transparent'
              }`}
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>💬 Testimonies ({testimonials.length})</span>
            </button>

            <div className="hidden md:block mt-auto pt-6 border-t border-neutral-900">
              <button
                onClick={() => setIsAuthenticated(false)}
                className="flex items-center gap-2 w-full px-3 py-2 text-xs text-neutral-500 hover:text-rose-400 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Admin Sign Out</span>
              </button>
            </div>
          </aside>

          {/* Tab Workspaces */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-charcoal text-neutral-200">
            
            {/* 1. PRODUCTS CATALOG MANAGER WORKSPACE */}
            {activeTab === 'products' && (
              <div className="space-y-8 animate-fade-in">
                
                {/* Form to Add/Edit Product */}
                <div id="product-form-box" className="bg-neutral-950/60 border border-gold/20 rounded-xl p-5 space-y-4">
                  <div className="flex items-center gap-2 border-b border-neutral-800 pb-3">
                    <Sparkles className="w-4 h-4 text-gold" />
                    <h3 className="text-sm font-serif font-bold text-gold-light uppercase tracking-wider">
                      {editingProductId ? '✏️ Edit Existing Design Details' : '✨ Add New Showroom Clothing Design'}
                    </h3>
                  </div>

                  <form onSubmit={handleProductSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Clothing Name */}
                    <div className="md:col-span-4 space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400 uppercase">Item Name *</label>
                      <input 
                        type="text" 
                        required
                        value={prodForm.name}
                        onChange={(e) => setProdForm({ ...prodForm, name: e.target.value })}
                        placeholder="e.g., Royal Crimson Katan Saree"
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-white outline-none focus:border-gold"
                      />
                    </div>

                    {/* Hindi Name / Subtitle */}
                    <div className="md:col-span-4 space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400 uppercase">Description Name (Optional)</label>
                      <input 
                        type="text" 
                        value={prodForm.hindiName}
                        onChange={(e) => setProdForm({ ...prodForm, hindiName: e.target.value })}
                        placeholder="e.g., बनारसी कतान रेशम साड़ी"
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-white outline-none focus:border-gold"
                      />
                    </div>

                    {/* Category */}
                    <div className="md:col-span-6 space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400 uppercase">Showroom Category *</label>
                      <select 
                        value={prodForm.category}
                        onChange={(e) => setProdForm({ ...prodForm, category: e.target.value as any })}
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-white outline-none focus:border-gold h-[34px]"
                      >
                        <option value="saree">Saree Collection (साड़ी)</option>
                        <option value="shirting">Shirting Fabric (शर्टिंग / सुटिंग)</option>
                        <option value="suit">Designer Salwar Suit (सूट)</option>
                        <option value="lehenga">Bridal Lehenga (लहंगा)</option>
                        <option value="naqab">Royal Naqab (नकाब)</option>
                        <option value="readymade">Other Readymade (रेडिमेड)</option>
                      </select>
                    </div>

                    {/* Price */}
                    <div className="md:col-span-3 space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400 uppercase">Showroom Price *</label>
                      <input 
                        type="text" 
                        required
                        value={prodForm.price}
                        onChange={(e) => setProdForm({ ...prodForm, price: e.target.value })}
                        placeholder="e.g., ₹2,499"
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-white outline-none focus:border-gold"
                      />
                    </div>

                    {/* Original Price */}
                    <div className="md:col-span-3 space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400 uppercase">Original Price (Strikeout)</label>
                      <input 
                        type="text" 
                        value={prodForm.originalPrice}
                        onChange={(e) => setProdForm({ ...prodForm, originalPrice: e.target.value })}
                        placeholder="e.g., ₹4,000"
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-white outline-none focus:border-gold"
                      />
                    </div>

                    {/* Tag label */}
                    <div className="md:col-span-3 space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400 uppercase">Custom Badge / Tag</label>
                      <input 
                        type="text" 
                        value={prodForm.tag}
                        onChange={(e) => setProdForm({ ...prodForm, tag: e.target.value })}
                        placeholder="e.g., Best Seller, New Arrival, 15% Off"
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-white outline-none focus:border-gold"
                      />
                    </div>

                    {/* Features comma list */}
                    <div className="md:col-span-3 space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400 uppercase">Features (Comma-separated)</label>
                      <input 
                        type="text" 
                        value={prodForm.featuresString}
                        onChange={(e) => setProdForm({ ...prodForm, featuresString: e.target.value })}
                        placeholder="Fine Silk, Heavy Zari, With Blouse Piece"
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-white outline-none focus:border-gold"
                      />
                    </div>

                    {/* Description text */}
                    <div className="md:col-span-12 space-y-1">
                      <label className="text-[11px] font-semibold text-neutral-400 uppercase">Showroom Catalog Description *</label>
                      <textarea 
                        rows={2}
                        value={prodForm.description}
                        onChange={(e) => setProdForm({ ...prodForm, description: e.target.value })}
                        placeholder="Detailed aesthetic description representing the craftsmanship, fabric choice, design details, weave patterns, and wear guidelines of this apparel..."
                        className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-white outline-none focus:border-gold"
                      />
                    </div>

                    {/* Image path selector & presets */}
                    <div className="md:col-span-12 space-y-2 mt-1">
                      <label className="text-[11px] font-semibold text-neutral-400 uppercase block">Product Image *</label>
                      
                      {/* Presets Gallery picker */}
                      <div className="space-y-1.5 bg-neutral-900 p-3 rounded border border-neutral-800">
                        <span className="text-[10px] text-gold uppercase tracking-wider font-serif">Quick Selection: Premium Stock Images</span>
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                          {IMAGE_PRESETS.map((img, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setProdForm({ ...prodForm, image: img.path })}
                              className={`flex flex-col items-center p-1 rounded transition-all outline-none border text-center cursor-pointer ${
                                prodForm.image === img.path 
                                  ? 'bg-gold/15 border-gold shadow' 
                                  : 'border-neutral-800 hover:border-neutral-700 bg-neutral-950/40'
                              }`}
                            >
                              <img src={img.path} className="w-12 h-12 object-cover rounded mb-1" referrerPolicy="no-referrer" />
                              <span className="text-[8px] text-neutral-400 truncate w-full">{img.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Custom image URL input */}
                      <div className="space-y-1">
                        <span className="text-[10px] text-neutral-400">Or supply a custom image URL path:</span>
                        <input 
                          type="text" 
                          required
                          value={prodForm.image}
                          onChange={(e) => setProdForm({ ...prodForm, image: e.target.value })}
                          placeholder="e.g., https://images.unsplash.com/... or local path"
                          className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-white outline-none focus:border-gold font-mono"
                        />
                      </div>
                    </div>

                    {/* Submit Block */}
                    <div className="md:col-span-12 flex justify-end gap-3 pt-2">
                      {editingProductId && (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingProductId(null);
                            setProdForm({
                              name: '',
                              hindiName: '',
                              category: 'saree',
                              price: '',
                              originalPrice: '',
                              tag: 'New Arrival',
                              description: '',
                              image: IMAGE_PRESETS[0].path,
                              featuresString: ''
                            });
                          }}
                          className="px-4 py-2 border border-neutral-700 bg-transparent text-neutral-300 rounded text-xs hover:bg-neutral-800 transition-colors"
                        >
                          Cancel Reset
                        </button>
                      )}
                      <button 
                        type="submit"
                        className="bg-gold hover:bg-gold-dark text-neutral-950 font-bold px-6 py-2 rounded text-xs flex items-center gap-1.5 transition-colors"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>{editingProductId ? 'Apply Updates' : 'Add to Showroom Grid'}</span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Catalog Table list */}
                <div className="space-y-3 bg-neutral-950/40 border border-neutral-800 p-4 rounded-xl">
                  <h4 className="text-xs uppercase tracking-widest text-gold font-serif font-bold">
                    Active Catalog Collection ({products.length} Products)
                  </h4>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-neutral-800 text-neutral-400">
                          <th className="py-2.5 px-3">Visual</th>
                          <th className="py-2.5 px-3">Design Name</th>
                          <th className="py-2.5 px-3">Category</th>
                          <th className="py-2.5 px-3">Price</th>
                          <th className="py-2.5 px-3">Original Price</th>
                          <th className="py-2.5 px-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-800/50">
                        {products.map((p) => (
                          <tr key={p.id} className="hover:bg-neutral-900/40 transition-colors">
                            <td className="py-2 px-3">
                              <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded border border-neutral-800" referrerPolicy="no-referrer" />
                            </td>
                            <td className="py-2 px-3">
                              <p className="font-serif font-bold text-amber-100">{p.name}</p>
                              <p className="text-[10px] text-neutral-400 italic mt-0.5">{p.tag} • {p.hindiName}</p>
                            </td>
                            <td className="py-2 px-3">
                              <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold font-sans tracking-wide bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                                {p.category}
                              </span>
                            </td>
                            <td className="py-2 px-3 font-mono text-emerald-400 font-bold">{p.price}</td>
                            <td className="py-2 px-3 font-mono text-neutral-500 line-through">{p.originalPrice || '—'}</td>
                            <td className="py-2 px-3 text-right">
                              <div className="flex justify-end gap-1.5">
                                <button
                                  onClick={() => handleEditProductClick(p)}
                                  className="p-1 rounded bg-neutral-800 hover:bg-neutral-700 text-gold-light hover:text-gold transition-colors"
                                  title="Edit Design Details"
                                >
                                  <Edit2 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => handleDeleteProductClick(p.id, p.name)}
                                  className="p-1 rounded bg-neutral-850 hover:bg-rose-950 text-neutral-400 hover:text-rose-400 transition-colors"
                                  title="Remove from Catalog"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* 2. STORE GENERAL META INFORMATION PANEL */}
            {activeTab === 'store' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-neutral-950/60 border border-gold/20 rounded-xl p-6">
                  <div className="flex items-center gap-2 border-b border-neutral-800 pb-3 mb-4">
                    <Settings className="w-4 h-4 text-gold" />
                    <h3 className="text-sm font-serif font-bold text-gold-light uppercase tracking-wider">
                      ⚙️ Manage Store Metadata / Showroom Information Details
                    </h3>
                  </div>

                  <form onSubmit={handleSettingsSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Name in Hindi */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Showroom Name (Hindi) *</label>
                        <input 
                          type="text" 
                          required
                          value={settingsForm.name}
                          onChange={(e) => setSettingsForm({ ...settingsForm, name: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      {/* Name in English */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Showroom Name (English-Roman) *</label>
                        <input 
                          type="text" 
                          required
                          value={settingsForm.englishName}
                          onChange={(e) => setSettingsForm({ ...settingsForm, englishName: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      {/* Username */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Instagram / Brand Username *</label>
                        <input 
                          type="text" 
                          required
                          value={settingsForm.username}
                          onChange={(e) => setSettingsForm({ ...settingsForm, username: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none font-mono"
                        />
                      </div>

                      {/* Heritage Tag */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Heritage Banner Slogan (Hindi)</label>
                        <input 
                          type="text" 
                          value={settingsForm.heritageTagline}
                          onChange={(e) => setSettingsForm({ ...settingsForm, heritageTagline: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      {/* Contact Phone */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Showroom Help Support Phone *</label>
                        <input 
                          type="text" 
                          required
                          value={settingsForm.phone}
                          onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      {/* WhatsApp API Number */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">WhatsApp Route ID (No space/plus) *</label>
                        <input 
                          type="text" 
                          required
                          value={settingsForm.whatsappNumber}
                          onChange={(e) => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none font-mono"
                          placeholder="e.g. 916388462571"
                        />
                      </div>

                      {/* Showroom Opening hours */}
                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Operating Showroom Hours *</label>
                        <input 
                          type="text" 
                          required
                          value={settingsForm.hours}
                          onChange={(e) => setSettingsForm({ ...settingsForm, hours: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      {/* English Tagline */}
                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Brand English Tagline *</label>
                        <input 
                          type="text" 
                          required
                          value={settingsForm.tagline}
                          onChange={(e) => setSettingsForm({ ...settingsForm, tagline: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      {/* Hindi Address */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Physical Address (Hindi) *</label>
                        <input 
                          type="text" 
                          required
                          value={settingsForm.addressHindi}
                          onChange={(e) => setSettingsForm({ ...settingsForm, addressHindi: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      {/* English Address */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Physical Address (English) *</label>
                        <input 
                          type="text" 
                          required
                          value={settingsForm.address}
                          onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      {/* Google Maps link */}
                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Google Maps Navigation Hyperlink *</label>
                        <input 
                          type="text" 
                          required
                          value={settingsForm.mapUrl}
                          onChange={(e) => setSettingsForm({ ...settingsForm, mapUrl: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none font-mono"
                        />
                      </div>

                      {/* Wholesale Note (Hindi) */}
                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Wholesale Banner Alert Note (Hindi) *</label>
                        <textarea 
                          rows={2}
                          required
                          value={settingsForm.wholesaleNote}
                          onChange={(e) => setSettingsForm({ ...settingsForm, wholesaleNote: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none"
                        />
                      </div>

                      {/* Wholesale Note (English) */}
                      <div className="space-y-1 sm:col-span-2">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Wholesale Banner Alert Note (English) *</label>
                        <textarea 
                          rows={2}
                          required
                          value={settingsForm.wholesaleNoteEnglish}
                          onChange={(e) => setSettingsForm({ ...settingsForm, wholesaleNoteEnglish: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-gold rounded p-2.5 text-xs text-white outline-none"
                        />
                      </div>

                    </div>

                    <div className="flex justify-end border-t border-neutral-800 pt-4">
                      <button 
                        type="submit"
                        className="bg-gold hover:bg-gold-dark text-neutral-950 font-bold px-6 py-2.5 rounded-lg text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
                      >
                        <Save className="w-4 h-4" />
                        <span>Safeguard Store Info Settings</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* 3. TESTIMONIALS MANAGER WORKSPACE */}
            {activeTab === 'testimonials' && (
              <div className="space-y-6 animate-fade-in">
                
                {/* Review Form */}
                <div id="review-form-box" className="bg-neutral-950/60 border border-gold/20 rounded-xl p-5 space-y-4">
                  <h3 className="text-sm font-serif font-bold text-gold-light uppercase tracking-wider border-b border-neutral-800 pb-2">
                    {editingTestimonialId ? '✏️ Edit Customer Review' : '✨ Add New Verified Customer Testimony'}
                  </h3>

                  <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Customer Name *</label>
                        <input 
                          type="text" 
                          required
                          value={testForm.name}
                          onChange={(e) => setTestForm({ ...testForm, name: e.target.value })}
                          placeholder="e.g. Smt. Priyanka Sen"
                          className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-white outline-none focus:border-gold"
                        />
                      </div>

                      {/* Location */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Customer District/City *</label>
                        <input 
                          type="text" 
                          required
                          value={testForm.location}
                          onChange={(e) => setTestForm({ ...testForm, location: e.target.value })}
                          placeholder="e.g. Gorakhpur, UP or Motihari"
                          className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-white outline-none focus:border-gold"
                        />
                      </div>

                      {/* Review words */}
                      <div className="sm:col-span-2 space-y-1">
                        <label className="text-[11px] font-semibold text-neutral-400 uppercase">Review Message *</label>
                        <textarea 
                          rows={3}
                          required
                          value={testForm.review}
                          onChange={(e) => setTestForm({ ...testForm, review: e.target.value })}
                          placeholder="Write the detailed reviews here explaining design quality, sizing fits, pricing fairness, showroom behavioral experience..."
                          className="w-full bg-neutral-900 border border-neutral-700 rounded p-2 text-xs text-white outline-none focus:border-gold"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-3">
                      {editingTestimonialId && (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingTestimonialId(null);
                            setTestForm({ name: '', location: '', review: '' });
                          }}
                          className="px-4 py-2 border border-neutral-700 bg-transparent text-neutral-300 rounded text-xs hover:bg-neutral-800 transition-colors"
                        >
                          Cancel
                        </button>
                      )}
                      <button 
                        type="submit"
                        className="bg-gold hover:bg-gold-dark text-neutral-950 font-bold px-5 py-2 rounded text-xs flex items-center gap-1.5 transition-colors"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>{editingTestimonialId ? 'Save Review' : 'Add Customers Review'}</span>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Reviews List */}
                <div className="space-y-3 bg-neutral-950/40 border border-neutral-800 p-4 rounded-xl">
                  <h4 className="text-xs uppercase tracking-widest text-gold font-serif font-bold">
                    Reviews currently visible on home screen
                  </h4>

                  <div className="divide-y divide-neutral-800">
                    {testimonials.map((t, idx) => (
                      <div key={t.id || idx} className="py-3 flex justify-between items-start gap-4">
                        <div className="space-y-1 max-w-[85%]">
                          <p className="font-serif font-bold text-amber-100 flex items-center gap-2">
                            <span>{t.name}</span>
                            <span className="text-[10px] text-neutral-400 font-sans font-light">({t.location})</span>
                          </p>
                          <p className="text-xs text-neutral-300 italic">"{t.review}"</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleEditTestimonialClick(t)}
                            className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-gold-light transition-colors"
                            title="Edit Review"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => t.id && handleDeleteTestimonialClick(t.id)}
                            className="p-1.5 rounded bg-neutral-800 hover:bg-rose-950 text-neutral-400 hover:text-rose-400 transition-colors"
                            title="Remove Review"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </main>
        </div>

      </div>
    </div>
  );
}

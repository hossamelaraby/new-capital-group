import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Product, Category, QuoteRequest, DocumentItem } from '../types';
import { compressImage } from '../utils/imageCompressor';
import { 
  Lock, 
  LogOut, 
  Package, 
  Layers, 
  FileText, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Check, 
  X, 
  AlertCircle,
  Eye,
  EyeOff,
  Clock,
  ShieldAlert,
  Search,
  ExternalLink,
  Upload,
  Image as ImageIcon,
  FolderPlus,
  RefreshCw,
  Loader2,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const { 
    lang, 
    isAdminAuthenticated, 
    adminUser, 
    adminLogin, 
    adminLogout,
    products,
    categories,
    documents,
    quoteRequests,
    settings,
    saveProduct,
    deleteProduct,
    saveCategory,
    deleteCategory,
    saveDocument,
    saveSettings,
    updateQuoteStatus,
    resetToInitialData
  } = useData();

  const isAr = lang === 'ar';

  // Login form state
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Active admin tab
  const [activeTab, setActiveTab] = useState<'overview' | 'categories' | 'products' | 'quotes' | 'documents' | 'settings'>('categories');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  // Product modal state
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  // Category modal state
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  // Quick filter for products
  const [prodSearch, setProdSearch] = useState('');

  // Image compression loading state
  const [isCompressing, setIsCompressing] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = adminLogin(password);
    if (!success) {
      setLoginError(true);
    } else {
      setLoginError(false);
      setPassword('');
    }
  };

  // High-performance client-side image compression handler
  const handleProductImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && editingProduct) {
      const file = e.target.files[0];
      try {
        setIsCompressing(true);
        const compressed = await compressImage(file, 900, 900, 0.75);
        setEditingProduct(prev => prev ? {
          ...prev,
          primaryImage: compressed
        } : null);
      } catch (err) {
        console.error('Image upload failed:', err);
        alert(isAr ? 'تعذر ضغط ومعالجة الصورة. يرجى اختيار ملف صورة صالح.' : 'Failed to compress image file');
      } finally {
        setIsCompressing(false);
      }
    }
  };

  const handleCategoryImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && editingCategory) {
      const file = e.target.files[0];
      try {
        setIsCompressing(true);
        const compressed = await compressImage(file, 900, 900, 0.75);
        setEditingCategory(prev => prev ? {
          ...prev,
          image: compressed
        } : null);
      } catch (err) {
        console.error('Category image upload failed:', err);
        alert(isAr ? 'تعذر ضغط ومعالجة الصورة. يرجى اختيار ملف صورة صالح.' : 'Failed to compress category image');
      } finally {
        setIsCompressing(false);
      }
    }
  };

  const BackArrow = isAr ? ArrowRight : ArrowLeft;

  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070F15] text-[#D5C9B5] flex flex-col justify-between p-4 sm:p-8">
        {/* Top Minimal Bar */}
        <div className="flex items-center justify-between max-w-md mx-auto w-full pt-2">
          <Link
            to="/"
            className="text-xs text-[#D5C9B5]/70 hover:text-[#E5A72B] flex items-center gap-1.5 transition-colors font-medium"
          >
            <BackArrow className="w-3.5 h-3.5" />
            <span>{isAr ? 'العودة للموقع الرئيسي' : 'Return to Public Website'}</span>
          </Link>
          <span className="text-[10px] font-mono text-[#D5C9B5]/40 uppercase tracking-widest">
            SECURE PORTAL
          </span>
        </div>

        {/* Center Card */}
        <div className="max-w-md mx-auto w-full my-auto py-8">
          <div className="bg-[#12202A] border border-[#D5C9B5]/20 rounded-2xl p-8 space-y-6 shadow-2xl">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-[#E5A72B] text-[#0B1720] mx-auto flex items-center justify-center font-black text-xl shadow-lg border border-[#E5A72B]/50">
                NC
              </div>
              <h2 className="text-xl font-bold text-white pt-2">
                {isAr ? 'بوابة إدارة المحتوى المركزية (CMS)' : 'Administrative CMS Login'}
              </h2>
              <p className="text-xs text-[#D5C9B5]/70">
                {isAr ? 'لوحة تحكم إدارية مستقلة للتحكم في الكتالوجات والمنتجات والطلبات' : 'Authorized portal for catalogue, media, and quote management'}
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {loginError && (
                <div className="p-3 rounded-lg bg-red-950/80 border border-red-500/40 text-red-200 text-xs">
                  {isAr ? 'كلمة المرور غير صحيحة. يرجى التحقق.' : 'Incorrect administrative password.'}
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-[#D5C9B5] mb-1">
                  {isAr ? 'كلمة المرور الإدارية' : 'Admin Password'}
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded-lg p-2.5 text-xs text-white outline-none focus:border-[#E5A72B]"
                />
                <span className="text-[10px] text-[#D5C9B5]/40 block mt-1">
                  {isAr ? 'كلمة المرور: newcapital2026' : 'Access password: newcapital2026'}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#E5A72B] hover:bg-[#ffbe3b] text-[#0B1720] font-bold text-xs transition-colors signal-notch"
              >
                {isAr ? 'تسجيل الدخول إلى النظام' : 'Sign In to Portal'}
              </button>

              <div className="pt-2 text-center border-t border-[#D5C9B5]/10">
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(isAr ? 'هل تريد استعادة البيانات الافتراضية وحل أي تعارض محلي؟' : 'Reset all local data to defaults?')) {
                      resetToInitialData();
                      window.location.reload();
                    }
                  }}
                  className="text-[11px] text-[#D5C9B5]/60 hover:text-[#E5A72B] transition-colors inline-flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>{isAr ? 'استعادة وتحديث البيانات الأصلية' : 'Sync & Reset Defaults'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="text-center text-[11px] text-[#D5C9B5]/30 pb-2 font-mono">
          © 2026 New Capital Group — Enterprise Console
        </div>
      </div>
    );
  }

  // Filter products by selected category and search
  const displayedProducts = products.filter(p => {
    if (selectedCategoryFilter !== 'all' && p.categorySlug !== selectedCategoryFilter) return false;
    if (!prodSearch) return true;
    const q = prodSearch.toLowerCase();
    const titleAr = (p.titleAr || '').toLowerCase();
    const titleEn = (p.titleEn || '').toLowerCase();
    const sku = (p.sku || '').toLowerCase();
    return titleAr.includes(q) || titleEn.includes(q) || sku.includes(q);
  });

  return (
    <div className="min-h-screen bg-[#070F15] text-[#D5C9B5] flex flex-col justify-between">
      {/* Standalone Dedicated Executive Admin Header Bar */}
      <header className="bg-[#0B1720] border-b border-[#D5C9B5]/20 sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E5A72B] text-[#0B1720] flex items-center justify-center font-black text-sm shadow-md border border-[#E5A72B]/50">
              NC
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">
                  {isAr ? 'لوحة تحكم وإدارة المحتوى (CMS)' : 'New Capital CMS Portal'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono border border-emerald-500/30 font-bold">
                  LIVE
                </span>
              </div>
              <span className="text-[11px] text-[#D5C9B5]/60 block font-mono">
                {isAr ? 'مجموعة العاصمة الجديدة للتوريدات العمومية' : 'New Capital Group — Enterprise Console'}
              </span>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-2.5">
            {/* View Public Website */}
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#12202A] hover:bg-[#1D3440] border border-[#D5C9B5]/25 text-[#E5A72B] hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <span>{isAr ? 'معاينة الموقع العام' : 'View Public Site'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Sync Defaults */}
            <button
              onClick={() => {
                if (confirm(isAr ? 'هل تود استرجاع كافة المنتجات والصور والكتالوجات الافتراضية؟' : 'Reset all data to defaults?')) {
                  resetToInitialData();
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#12202A] border border-[#D5C9B5]/20 hover:border-[#E5A72B] text-xs text-[#D5C9B5] transition-colors"
              title={isAr ? 'استعادة البيانات الافتراضية' : 'Reset to defaults'}
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{isAr ? 'تحديث البيانات' : 'Sync Defaults'}</span>
            </button>

            {/* Engineer Profile Badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#12202A] border border-[#D5C9B5]/15 text-xs text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-semibold">{adminUser?.name || 'المهندس المسؤول'}</span>
              <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                {adminUser?.role ? adminUser.role.toUpperCase() : 'ADMIN'}
              </span>
            </div>

            {/* Logout */}
            <button
              onClick={adminLogout}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900 border border-red-500/30 text-red-200 text-xs font-bold transition-colors shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{isAr ? 'تسجيل الخروج' : 'Log Out'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Workspace Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 space-y-8">

      {/* Admin Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#D5C9B5]/10 pb-2 text-xs">
        <button
          onClick={() => setActiveTab('categories')}
          className={`px-3 py-2 rounded font-medium transition-colors flex items-center gap-1.5 ${
            activeTab === 'categories' ? 'bg-[#E5A72B] text-[#0B1720] font-bold' : 'bg-[#12202A] text-[#D5C9B5] hover:bg-[#1D3440]'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{isAr ? `الأصناف والتصنيفات (${categories.length})` : `Categories (${categories.length})`}</span>
        </button>

        <button
          onClick={() => setActiveTab('products')}
          className={`px-3 py-2 rounded font-medium transition-colors flex items-center gap-1.5 ${
            activeTab === 'products' ? 'bg-[#E5A72B] text-[#0B1720] font-bold' : 'bg-[#12202A] text-[#D5C9B5] hover:bg-[#1D3440]'
          }`}
        >
          <Package className="w-3.5 h-3.5" />
          <span>{isAr ? `كافة المنتجات (${products.length})` : `All Products (${products.length})`}</span>
        </button>

        <button
          onClick={() => setActiveTab('quotes')}
          className={`px-3 py-2 rounded font-medium transition-colors flex items-center gap-1.5 ${
            activeTab === 'quotes' ? 'bg-[#E5A72B] text-[#0B1720] font-bold' : 'bg-[#12202A] text-[#D5C9B5] hover:bg-[#1D3440]'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{isAr ? `طلبات عروض الأسعار (${quoteRequests.length})` : `Quote RFQs (${quoteRequests.length})`}</span>
          {quoteRequests.filter(q => q.status === 'new').length > 0 && (
            <span className="w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold">
              {quoteRequests.filter(q => q.status === 'new').length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('documents')}
          className={`px-3 py-2 rounded font-medium transition-colors ${
            activeTab === 'documents' ? 'bg-[#E5A72B] text-[#0B1720] font-bold' : 'bg-[#12202A] text-[#D5C9B5] hover:bg-[#1D3440]'
          }`}
        >
          {isAr ? `الكتالوجات والشهادات (${documents.length})` : `Catalogs & Certs (${documents.length})`}
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`px-3 py-2 rounded font-medium transition-colors ${
            activeTab === 'settings' ? 'bg-[#E5A72B] text-[#0B1720] font-bold' : 'bg-[#12202A] text-[#D5C9B5] hover:bg-[#1D3440]'
          }`}
        >
          {isAr ? 'بيانات وهوية الشركة' : 'Company Settings'}
        </button>
      </div>

      {/* Tab 1: Categories Hierarchy & Products-Inside-Category */}
      {activeTab === 'categories' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-white">
                {isAr ? 'إدارة الأصناف والمنتجات التابعة لها' : 'Category Management & Internal Products'}
              </h2>
              <p className="text-xs text-[#D5C9B5]/70">
                {isAr ? 'يمكنك إضافة صنف جديد، تعديل عنوانه أو صورته أو حذفه، واستعراض المنتجات داخل كل صنف مباشرة.' : 'Add new categories, edit titles, upload category images, or view products inside.'}
              </p>
            </div>

            <button
              onClick={() => {
                setEditingCategory({
                  id: `cat-${Date.now()}`,
                  slug: `category-${Date.now()}`,
                  nameAr: '',
                  nameEn: '',
                  descAr: '',
                  descEn: '',
                  iconName: 'Shield',
                  image: '/products_gallery/nc-prod-01.jpg',
                  published: true,
                  order: categories.length + 1,
                  subcategories: []
                });
                setIsCategoryModalOpen(true);
              }}
              className="px-4 py-2.5 rounded bg-[#E5A72B] hover:bg-[#ffbe3b] text-[#0B1720] text-xs font-bold transition-colors flex items-center gap-1.5 signal-notch"
            >
              <FolderPlus className="w-4 h-4" />
              <span>{isAr ? 'إضافة صنف جديد (Add Category)' : 'Create New Category'}</span>
            </button>
          </div>

          {/* Categories Grid with Nested Products Quick-Count & Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(cat => {
              const catProducts = products.filter(p => p.categorySlug === cat.slug);
              return (
                <div
                  key={cat.id}
                  className="rounded-2xl bg-[#12202A] border border-[#D5C9B5]/20 overflow-hidden shadow-lg flex flex-col justify-between"
                >
                  <div className="h-40 overflow-hidden relative bg-[#0B1720]">
                    <img
                      src={cat.image}
                      alt={cat.nameAr}
                      className="w-full h-full object-cover brightness-85 rounded-t-2xl"
                    />
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#0B1720]/80 text-[10px] font-mono text-[#E5A72B] border border-[#D5C9B5]/20">
                      {cat.slug}
                    </span>
                    <span className={`absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono ${
                      cat.published ? 'bg-emerald-500/80 text-white' : 'bg-amber-500/80 text-black'
                    }`}>
                      {cat.published ? 'PUBLISHED' : 'HIDDEN'}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-white">{cat.nameAr}</h3>
                        <span className="text-xs px-2 py-0.5 rounded bg-[#1D3440] text-[#E5A72B] font-mono font-bold">
                          {catProducts.length} {isAr ? 'منتجات' : 'items'}
                        </span>
                      </div>
                      <span className="text-xs text-[#D5C9B5]/60 block">{cat.nameEn}</span>
                      <p className="text-xs text-[#D5C9B5]/75 mt-2 line-clamp-2 leading-relaxed">
                        {cat.descAr}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#D5C9B5]/10 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <button
                          onClick={() => {
                            setSelectedCategoryFilter(cat.slug);
                            setActiveTab('products');
                          }}
                          className="text-[#E5A72B] hover:underline font-bold flex items-center gap-1"
                        >
                          <span>{isAr ? 'عرض وتعديل منتجات هذا الصنف' : 'Manage Products Inside'}</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingCategory(cat);
                              setIsCategoryModalOpen(true);
                            }}
                            className="p-1.5 rounded bg-[#1D3440] text-[#E5A72B] hover:text-white"
                            title={isAr ? 'تعديل الصنف' : 'Edit Category'}
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (confirm(isAr ? `هل أنت متأكد من حذف الصنف "${cat.nameAr}"؟` : `Delete category "${cat.nameAr}"?`)) {
                                deleteCategory(cat.id);
                              }
                            }}
                            className="p-1.5 rounded bg-red-950/60 text-red-400 hover:text-white"
                            title={isAr ? 'حذف الصنف' : 'Delete Category'}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Products Manager */}
      {activeTab === 'products' && (
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            {/* Filter by Category Selector */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <span className="text-xs text-[#D5C9B5]/70 font-mono">
                {isAr ? 'تصفية حسب الصنف:' : 'Filter Category:'}
              </span>
              <select
                value={selectedCategoryFilter}
                onChange={(e) => setSelectedCategoryFilter(e.target.value)}
                className="bg-[#12202A] border border-[#D5C9B5]/25 rounded py-1.5 px-3 text-xs text-white outline-none"
              >
                <option value="all">{isAr ? '-- جميع الأصناف --' : '-- All Categories --'}</option>
                {categories.map(c => (
                  <option key={c.id} value={c.slug}>{c.nameAr}</option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-[#D5C9B5]/40 absolute top-2.5 right-3 rtl:right-3 rtl:left-auto ltr:left-3 ltr:right-auto" />
              <input
                type="text"
                placeholder={isAr ? 'بحث في المنتجات...' : 'Search products...'}
                value={prodSearch}
                onChange={(e) => setProdSearch(e.target.value)}
                className="w-full bg-[#12202A] border border-[#D5C9B5]/20 rounded py-2 px-9 text-xs text-white outline-none"
              />
            </div>

            {/* Add New Product Button */}
            <button
              onClick={() => {
                setEditingProduct({
                  id: `prod-${Date.now()}`,
                  sku: `NC-PROD-${Math.floor(100 + Math.random() * 900)}`,
                  titleAr: '',
                  titleEn: '',
                  shortDescAr: '',
                  shortDescEn: '',
                  longDescAr: '',
                  longDescEn: '',
                  categorySlug: selectedCategoryFilter !== 'all' ? selectedCategoryFilter : 'ppe',
                  subcategorySlug: 'general',
                  tag: 'PROJECT SPEC',
                  primaryImage: '/products_gallery/nc-prod-01.jpg',
                  galleryImages: [],
                  imageAltAr: '',
                  imageAltEn: '',
                  sourceType: 'company',
                  verificationStatus: 'verified',
                  availability: 'available',
                  materialAr: '',
                  materialEn: '',
                  standards: [],
                  specifications: [],
                  applicationsAr: [],
                  applicationsEn: [],
                  quoteEnabled: true,
                  published: true,
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString()
                });
                setIsProductModalOpen(true);
              }}
              className="px-4 py-2 rounded bg-[#E5A72B] hover:bg-[#ffbe3b] text-[#0B1720] text-xs font-bold transition-colors flex items-center gap-1.5 w-full lg:w-auto justify-center signal-notch"
            >
              <Plus className="w-4 h-4" />
              <span>{isAr ? 'إضافة منتج جديد (Add Product)' : 'Create New Product'}</span>
            </button>
          </div>

          {/* Products Table with Direct Image Upload Previews */}
          <div className="bg-[#12202A] border border-[#D5C9B5]/20 rounded-xl overflow-x-auto shadow-xl">
            <table className="w-full text-xs text-right rtl:text-right ltr:text-left">
              <thead>
                <tr className="border-b border-[#D5C9B5]/15 text-[#D5C9B5]/70 bg-[#0B1720]">
                  <th className="p-3">صورة المنتج</th>
                  <th className="p-3">SKU</th>
                  <th className="p-3">اسم المنتج</th>
                  <th className="p-3">الصنف التابع له</th>
                  <th className="p-3">التوثيق الفني</th>
                  <th className="p-3">حالة النشر</th>
                  <th className="p-3 text-center">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {displayedProducts.map(p => (
                  <tr key={p.id} className="border-b border-[#D5C9B5]/10 hover:bg-[#1D3440]/30">
                    <td className="p-3">
                      <img
                        src={p.primaryImage}
                        alt="prod"
                        className="w-12 h-12 object-cover rounded-xl border border-[#D5C9B5]/20 bg-[#0B1720]"
                      />
                    </td>
                    <td className="p-3 font-mono text-[#E5A72B]">{p.sku}</td>
                    <td className="p-3">
                      <div className="font-bold text-white">{p.titleAr}</div>
                      <div className="text-[11px] text-[#D5C9B5]/60">{p.titleEn}</div>
                    </td>
                    <td className="p-3 font-mono text-[#D5C9B5]">{p.categorySlug}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px]">
                        {(p.verificationStatus || 'verified').toUpperCase()}
                      </span>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => saveProduct({ ...p, published: !p.published })}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          p.published ? 'bg-emerald-500/20 text-emerald-300' : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {p.published ? 'PUBLISHED' : 'DRAFT'}
                      </button>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => {
                            setEditingProduct(p);
                            setIsProductModalOpen(true);
                          }}
                          className="p-1.5 text-[#E5A72B] hover:text-white rounded bg-[#1D3440]"
                          title="تعديل المنتج ورفع صورته"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(isAr ? 'هل أنت متأكد من حذف هذا المنتج نهائيًا؟' : 'Are you sure you want to delete this product?')) {
                              deleteProduct(p.id);
                            }
                          }}
                          className="p-1.5 text-red-400 hover:text-red-300 rounded bg-red-950/60"
                          title="حذف المنتج"
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
      )}

      {/* Tab 3: Quote Requests */}
      {activeTab === 'quotes' && (
        <div className="space-y-4">
          <div className="bg-[#12202A] border border-[#D5C9B5]/20 rounded-xl p-6 space-y-6">
            <h3 className="text-base font-bold text-white">
              {isAr ? 'سجل طلبات الأسعار الواردة من الموقع' : 'Inbound Project RFQs & Quotes'}
            </h3>

            <div className="space-y-4">
              {quoteRequests.map(req => (
                <div key={req.id} className="p-5 rounded-lg bg-[#0B1720] border border-[#D5C9B5]/15 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D5C9B5]/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[#E5A72B] font-bold text-sm">{req.refNumber}</span>
                      <span className="text-xs text-[#D5C9B5]/60">•</span>
                      <span className="text-xs text-white font-semibold">{req.company}</span>
                      <span className="text-xs text-[#D5C9B5]/60">({req.name})</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={req.status}
                        onChange={(e) => updateQuoteStatus(req.id, e.target.value as QuoteRequest['status'])}
                        className="bg-[#12202A] border border-[#D5C9B5]/30 rounded text-xs text-white p-1 font-mono outline-none"
                      >
                        <option value="new">NEW</option>
                        <option value="in_review">IN REVIEW</option>
                        <option value="needs_information">NEEDS INFO</option>
                        <option value="quoted">QUOTED</option>
                        <option value="won">WON</option>
                        <option value="lost">LOST</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#D5C9B5]/80">
                    <div>الهاتف: <span className="font-mono text-white" dir="ltr">{req.phone}</span></div>
                    <div>البريد: <span className="text-white">{req.email}</span></div>
                    <div>الموقع / المدينة: <span className="text-white">{req.countryCity}</span></div>
                  </div>

                  {/* Requested Items */}
                  <div className="bg-[#12202A] p-3 rounded text-xs space-y-1">
                    <span className="font-bold text-[#D5C9B5] block">البنود المطلوبة:</span>
                    <ul className="list-disc list-inside text-white space-y-0.5">
                      {req.items.map((it, idx) => (
                        <li key={idx}>
                          {it.title} — <span className="text-[#E5A72B] font-mono">{it.quantity}</span>
                        </li>
                      ))}
                    </ul>
                    {req.projectDetails && (
                      <p className="text-[#D5C9B5]/80 pt-2 border-t border-[#D5C9B5]/10 mt-2">
                        ملاحظات العميل: {req.projectDetails}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Documents and Master Catalogs */}
      {activeTab === 'documents' && (
        <div className="space-y-4">
          <div className="bg-[#12202A] border border-[#D5C9B5]/20 rounded-xl p-6 space-y-4">
            <h3 className="text-base font-bold text-white">
              {isAr ? 'الكتالوجات وشهادات الـ ISO والملفات الفنية (PDF)' : 'Corporate Catalogs, ISO Certs & Technical PDFs'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map(doc => (
                <div key={doc.id} className="p-4 rounded-lg bg-[#0B1720] border border-[#D5C9B5]/15 flex flex-col justify-between space-y-3 text-xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{doc.titleAr}</span>
                      <span className="text-xs font-mono text-[#E5A72B]">{doc.sizeMb}</span>
                    </div>
                    <span className="text-[#D5C9B5]/60 text-[11px] block">{doc.titleEn}</span>
                    {doc.noteAr && <p className="text-[#D5C9B5]/75 mt-1">{doc.noteAr}</p>}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#D5C9B5]/10">
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#E5A72B] hover:underline flex items-center gap-1 font-bold"
                    >
                      <span>معاينة وتحميل (PDF)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => saveDocument({ ...doc, publicDisplay: !doc.publicDisplay })}
                      className={`px-3 py-1 rounded font-mono text-[11px] ${
                        doc.publicDisplay ? 'bg-emerald-500/20 text-emerald-300' : 'bg-neutral-800 text-neutral-400'
                      }`}
                    >
                      {doc.publicDisplay ? 'متاح للتحميل بالموقع' : 'مخفي للداخل فقط'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Company Settings */}
      {activeTab === 'settings' && (
        <div className="bg-[#12202A] border border-[#D5C9B5]/20 rounded-xl p-6 space-y-6">
          <h3 className="text-base font-bold text-white">
            {isAr ? 'البيانات الرسمية وهوية الشركة' : 'Company Official Profile & Contact Config'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-[#D5C9B5] mb-1">الاسم التجاري (عربي)</label>
              <input
                type="text"
                value={settings.companyNameAr}
                onChange={(e) => saveSettings({ ...settings, companyNameAr: e.target.value })}
                className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white outline-none"
              />
            </div>
            <div>
              <label className="block text-[#D5C9B5] mb-1">Company Name (EN)</label>
              <input
                type="text"
                value={settings.companyNameEn}
                onChange={(e) => saveSettings({ ...settings, companyNameEn: e.target.value })}
                className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white outline-none"
              />
            </div>
            <div>
              <label className="block text-[#D5C9B5] mb-1">الخط الأرضي الرسمي</label>
              <input
                type="text"
                value={settings.landline}
                onChange={(e) => saveSettings({ ...settings, landline: e.target.value })}
                className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white outline-none"
              />
            </div>
            <div>
              <label className="block text-[#D5C9B5] mb-1">البريد الإلكتروني المعتمد</label>
              <input
                type="email"
                value={settings.primaryEmail}
                onChange={(e) => saveSettings({ ...settings, primaryEmail: e.target.value })}
                className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Product Edit / Create Modal with Direct Image File Upload */}
      {isProductModalOpen && editingProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#12202A] border border-[#D5C9B5]/30 rounded-xl max-w-2xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#D5C9B5]/15 pb-3">
              <h3 className="text-base font-bold text-white">
                {isAr ? 'تعديل / إضافة منتج ومواصفة فنية' : 'Edit / Create Product Specification'}
              </h3>
              <button onClick={() => setIsProductModalOpen(false)} className="text-[#D5C9B5] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Image Upload Area */}
              <div className="p-4 rounded-lg bg-[#0B1720] border border-[#D5C9B5]/20 space-y-3">
                <label className="block font-bold text-white mb-1">
                  {isAr ? 'صورة المنتج الرئيسية (رفع ملف من جهازك):' : 'Primary Product Image (Upload File):'}
                </label>
                <div className="flex items-center gap-4">
                  <img
                    src={editingProduct.primaryImage}
                    alt="preview"
                    className="w-20 h-20 object-cover rounded border border-[#D5C9B5]/30 bg-[#12202A]"
                  />
                  <div className="space-y-2 flex-1">
                    {isCompressing ? (
                      <div className="flex items-center gap-2 text-[#E5A72B] font-bold text-xs py-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{isAr ? 'جاري ضغط ومعالجة الصورة...' : 'Processing image...'}</span>
                      </div>
                    ) : (
                      <label className="inline-flex items-center gap-2 px-3 py-2 rounded bg-[#1D3440] hover:bg-[#284757] text-[#E5A72B] cursor-pointer font-bold border border-[#E5A72B]/30 transition-colors">
                        <Upload className="w-4 h-4" />
                        <span>{isAr ? 'اختر صورة من الكمبيوتر' : 'Choose Image File'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleProductImageUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                    <span className="text-[10px] text-[#D5C9B5]/60 block">
                      {isAr ? 'يدعم PNG و JPG و WEBP (يتم تحويلها وحفظها محلياً تلقائياً)' : 'Supports PNG, JPG, WEBP'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#D5C9B5] mb-1">كود SKU</label>
                  <input
                    type="text"
                    value={editingProduct.sku}
                    onChange={(e) => setEditingProduct({ ...editingProduct, sku: e.target.value })}
                    className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[#D5C9B5] mb-1">الصنف التابع له</label>
                  <select
                    value={editingProduct.categorySlug}
                    onChange={(e) => setEditingProduct({ ...editingProduct, categorySlug: e.target.value })}
                    className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.slug}>{c.nameAr}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#D5C9B5] mb-1">اسم المنتج (بالعربية)</label>
                <input
                  type="text"
                  value={editingProduct.titleAr}
                  onChange={(e) => setEditingProduct({ ...editingProduct, titleAr: e.target.value })}
                  className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white font-bold"
                />
              </div>

              <div>
                <label className="block text-[#D5C9B5] mb-1">Product Title (English)</label>
                <input
                  type="text"
                  value={editingProduct.titleEn}
                  onChange={(e) => setEditingProduct({ ...editingProduct, titleEn: e.target.value })}
                  className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[#D5C9B5] mb-1">الوصف المختصر (عربي)</label>
                <textarea
                  rows={2}
                  value={editingProduct.shortDescAr}
                  onChange={(e) => setEditingProduct({ ...editingProduct, shortDescAr: e.target.value })}
                  className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[#D5C9B5] mb-1">الوصف الهندسي التفصيلي</label>
                <textarea
                  rows={3}
                  value={editingProduct.longDescAr}
                  onChange={(e) => setEditingProduct({ ...editingProduct, longDescAr: e.target.value })}
                  className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#D5C9B5] mb-1">خامة التصنيع (Material Spec)</label>
                  <input
                    type="text"
                    value={editingProduct.materialAr}
                    onChange={(e) => setEditingProduct({ ...editingProduct, materialAr: e.target.value })}
                    className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-[#D5C9B5] mb-1">حالة النشر بالموقع</label>
                  <select
                    value={editingProduct.published ? 'true' : 'false'}
                    onChange={(e) => setEditingProduct({ ...editingProduct, published: e.target.value === 'true' })}
                    className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white"
                  >
                    <option value="true">منشور (Published)</option>
                    <option value="false">مسودة (Draft)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#D5C9B5]/15 flex justify-end gap-3">
              <button
                onClick={() => setIsProductModalOpen(false)}
                className="px-4 py-2 rounded bg-[#0B1720] text-xs text-[#D5C9B5]"
              >
                إلغاء
              </button>
              <button
                disabled={isCompressing}
                onClick={() => {
                  if (!editingProduct.titleAr.trim()) {
                    alert(isAr ? 'يرجى كتابة اسم المنتج بالعربية' : 'Please enter product Arabic title');
                    return;
                  }
                  const sanitizedProduct: Product = {
                    ...editingProduct,
                    titleEn: editingProduct.titleEn.trim() || editingProduct.titleAr.trim(),
                    sku: editingProduct.sku.trim() || `NC-PROD-${Math.floor(100 + Math.random() * 900)}`,
                    categorySlug: editingProduct.categorySlug || (categories[0]?.slug || 'ppe')
                  };
                  saveProduct(sanitizedProduct);
                  setIsProductModalOpen(false);
                }}
                className="px-5 py-2 rounded bg-[#E5A72B] hover:bg-[#ffbe3b] text-[#0B1720] text-xs font-bold disabled:opacity-50"
              >
                {isAr ? 'حفظ التغييرات' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Category Edit / Create Modal with Direct Image File Upload */}
      {isCategoryModalOpen && editingCategory && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#12202A] border border-[#D5C9B5]/30 rounded-xl max-w-lg w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#D5C9B5]/15 pb-3">
              <h3 className="text-base font-bold text-white">
                {isAr ? 'تعديل / إنشاء صنف جديد (Category)' : 'Edit / Create Category'}
              </h3>
              <button onClick={() => setIsCategoryModalOpen(false)} className="text-[#D5C9B5] hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {/* Category Image Upload */}
              <div className="p-4 rounded-lg bg-[#0B1720] border border-[#D5C9B5]/20 space-y-3">
                <label className="block font-bold text-white mb-1">
                  {isAr ? 'صورة واجهة الصنف (رفع ملف):' : 'Category Banner Image:'}
                </label>
                <div className="flex items-center gap-4">
                  <img
                    src={editingCategory.image}
                    alt="cat preview"
                    className="w-20 h-20 object-cover rounded border border-[#D5C9B5]/30 bg-[#12202A]"
                  />
                  <div className="space-y-2 flex-1">
                    {isCompressing ? (
                      <div className="flex items-center gap-2 text-[#E5A72B] font-bold text-xs py-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{isAr ? 'جاري ضغط ومعالجة الصورة...' : 'Processing image...'}</span>
                      </div>
                    ) : (
                      <label className="inline-flex items-center gap-2 px-3 py-2 rounded bg-[#1D3440] hover:bg-[#284757] text-[#E5A72B] cursor-pointer font-bold border border-[#E5A72B]/30 transition-colors">
                        <Upload className="w-4 h-4" />
                        <span>{isAr ? 'رفع صورة الصنف' : 'Upload Category Image'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleCategoryImageUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[#D5C9B5] mb-1">معرّف الصنف (Slug)</label>
                <input
                  type="text"
                  value={editingCategory.slug}
                  onChange={(e) => setEditingCategory({ ...editingCategory, slug: e.target.value })}
                  className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white font-mono"
                  placeholder="e.g. ppe, safety-signs"
                />
              </div>

              <div>
                <label className="block text-[#D5C9B5] mb-1">اسم الصنف (بالعربية)</label>
                <input
                  type="text"
                  value={editingCategory.nameAr}
                  onChange={(e) => setEditingCategory({ ...editingCategory, nameAr: e.target.value })}
                  className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white font-bold"
                />
              </div>

              <div>
                <label className="block text-[#D5C9B5] mb-1">Category Name (English)</label>
                <input
                  type="text"
                  value={editingCategory.nameEn}
                  onChange={(e) => setEditingCategory({ ...editingCategory, nameEn: e.target.value })}
                  className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[#D5C9B5] mb-1">وصف الصنف ونطاق التوريد</label>
                <textarea
                  rows={2}
                  value={editingCategory.descAr}
                  onChange={(e) => setEditingCategory({ ...editingCategory, descAr: e.target.value })}
                  className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[#D5C9B5] mb-1">حالة النشر</label>
                <select
                  value={editingCategory.published ? 'true' : 'false'}
                  onChange={(e) => setEditingCategory({ ...editingCategory, published: e.target.value === 'true' })}
                  className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-white"
                >
                  <option value="true">منشور (Published)</option>
                  <option value="false">مخفي (Hidden)</option>
                </select>
              </div>
            </div>

            <div className="pt-3 border-t border-[#D5C9B5]/15 flex justify-end gap-3">
              <button
                onClick={() => setIsCategoryModalOpen(false)}
                className="px-4 py-2 rounded bg-[#0B1720] text-xs text-[#D5C9B5]"
              >
                إلغاء
              </button>
              <button
                disabled={isCompressing}
                onClick={() => {
                  if (!editingCategory.nameAr.trim()) {
                    alert(isAr ? 'يرجى كتابة اسم الصنف بالعربية' : 'Please enter category Arabic name');
                    return;
                  }
                  const cleanSlug = editingCategory.slug.trim()
                    ? editingCategory.slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-')
                    : `cat-${Date.now()}`;

                  const sanitizedCat: Category = {
                    ...editingCategory,
                    slug: cleanSlug,
                    nameEn: editingCategory.nameEn.trim() || editingCategory.nameAr.trim(),
                    subcategories: Array.isArray(editingCategory.subcategories) ? editingCategory.subcategories : []
                  };
                  saveCategory(sanitizedCat);
                  setIsCategoryModalOpen(false);
                }}
                className="px-5 py-2 rounded bg-[#E5A72B] hover:bg-[#ffbe3b] text-[#0B1720] text-xs font-bold disabled:opacity-50"
              >
                {isAr ? 'حفظ الصنف' : 'Save Category'}
              </button>
            </div>
          </div>
        </div>
      )}
      </main>

      {/* Standalone Dedicated Admin Footer */}
      <footer className="bg-[#0B1720] border-t border-[#D5C9B5]/10 py-4 px-4 text-center text-xs text-[#D5C9B5]/50 font-mono">
        {isAr 
          ? 'نظام الإدارة والتشغيل الميداني المركزي © 2026 مجموعة العاصمة الجديدة للتوريدات العمومية' 
          : 'Central Operations Management System © 2026 New Capital Group'}
      </footer>
    </div>
  );
};

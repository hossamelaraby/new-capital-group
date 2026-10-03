import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Search, Filter, FileDown, ArrowRight, ArrowLeft, CheckCircle, Plus } from 'lucide-react';

export const Products: React.FC = () => {
  const { lang, products, categories, addToQuoteBasket } = useData();
  const [searchParams, setSearchParams] = useSearchParams();
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const currentCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  const publishedCategories = categories.filter(c => c.published);

  // Active category object
  const activeCategoryObj = useMemo(() => {
    return publishedCategories.find(c => c.slug === currentCategory);
  }, [publishedCategories, currentCategory]);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      if (!p.published) return false;
      if (currentCategory !== 'all' && p.categorySlug !== currentCategory) return false;
      if (selectedSubcategory !== 'all' && p.subcategorySlug !== selectedSubcategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.titleAr.toLowerCase().includes(q) || p.titleEn.toLowerCase().includes(q);
        const matchesSku = p.sku.toLowerCase().includes(q);
        const matchesDesc = p.shortDescAr.toLowerCase().includes(q) || p.shortDescEn.toLowerCase().includes(q);
        const matchesTag = p.tag.toLowerCase().includes(q);
        if (!matchesTitle && !matchesSku && !matchesDesc && !matchesTag) return false;
      }
      return true;
    });
  }, [products, currentCategory, selectedSubcategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[#D5C9B5]/15 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#E5A72B]">
          <span>NC // CATALOGUE INDEX</span>
          <span>•</span>
          <span>{filteredProducts.length} {isAr ? 'بنود معتمدة' : 'Verified Items'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {isAr ? 'دليل منتجات السلامة والتوريدات الميدانية' : 'Industrial Safety & Worksite Supplies Catalogue'}
        </h1>
        <p className="text-sm text-[#D5C9B5]/80 max-w-3xl leading-relaxed">
          {isAr
            ? 'تصفح تشكيلات مهمات الوقاية، اللوحات الإرشادية، أشرطة المرافق المدفونة، ومستلزمات المواقع مع المواصفات الفنية وروابط الـ Data Sheet الرسمية.'
            : 'Explore approved personal protective equipment, safety signage, underground utility warning tapes, and site lighting solutions with downloadable engineering datasheets.'
          }
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Search Input */}
        <div className="lg:col-span-5 relative">
          <Search className="w-4 h-4 text-[#D5C9B5]/50 absolute top-3.5 right-3.5 rtl:right-3.5 rtl:left-auto ltr:left-3.5 ltr:right-auto" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isAr ? 'ابحث باسم المنتج، كود SKU، أو نوع المهمة...' : 'Search by title, SKU, or specification...'}
            className="w-full bg-[#12202A] border border-[#D5C9B5]/20 rounded-lg py-2.5 px-10 text-xs text-white placeholder-[#D5C9B5]/40 focus:border-[#E5A72B] outline-none"
          />
        </div>

        {/* Category Selector Tabs */}
        <div className="lg:col-span-7 flex flex-wrap gap-2">
          <button
            onClick={() => {
              setSearchParams({});
              setSelectedSubcategory('all');
            }}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
              currentCategory === 'all'
                ? 'bg-[#E5A72B] text-[#0B1720] font-bold'
                : 'bg-[#1D3440] text-[#D5C9B5] hover:bg-[#274657]'
            }`}
          >
            {isAr ? 'الكل (All)' : 'All Products'}
          </button>

          {publishedCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setSearchParams({ category: cat.slug });
                setSelectedSubcategory('all');
              }}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                currentCategory === cat.slug
                  ? 'bg-[#E5A72B] text-[#0B1720] font-bold'
                  : 'bg-[#1D3440] text-[#D5C9B5] hover:bg-[#274657]'
              }`}
            >
              {isAr ? cat.nameAr : cat.nameEn}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory Pills if category active */}
      {activeCategoryObj && activeCategoryObj.subcategories.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs border-b border-[#D5C9B5]/10">
          <span className="text-[#D5C9B5]/60 font-mono text-[11px] shrink-0">
            {isAr ? 'التصنيف الفرعي:' : 'Subcategory:'}
          </span>
          <button
            onClick={() => setSelectedSubcategory('all')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium shrink-0 ${
              selectedSubcategory === 'all' ? 'bg-[#B8643F] text-white' : 'bg-[#0B1720] text-[#D5C9B5]/80 hover:text-white'
            }`}
          >
            {isAr ? 'كافة البنود' : 'All Subcategories'}
          </button>
          {activeCategoryObj.subcategories.map(sub => (
            <button
              key={sub.slug}
              onClick={() => setSelectedSubcategory(sub.slug)}
              className={`px-2.5 py-1 rounded text-[11px] font-medium shrink-0 ${
                selectedSubcategory === sub.slug ? 'bg-[#B8643F] text-white' : 'bg-[#0B1720] text-[#D5C9B5]/80 hover:text-white'
              }`}
            >
              {isAr ? sub.nameAr : sub.nameEn}
            </button>
          ))}
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="p-12 text-center rounded-lg bg-[#12202A] border border-[#D5C9B5]/15 space-y-4">
          <p className="text-white text-base">
            {isAr ? 'لم يتم العثور على منتجات تطابق معايير البحث الحالية.' : 'No products matched your search or filter criteria.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSearchParams({});
              setSelectedSubcategory('all');
            }}
            className="px-4 py-2 rounded bg-[#1D3440] text-xs text-[#E5A72B] hover:bg-[#284757]"
          >
            {isAr ? 'إعادة ضبط التصفية' : 'Reset All Filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(prod => (
            <div
              key={prod.id}
              className="rounded-lg bg-[#12202A] border border-[#D5C9B5]/15 hover:border-[#E5A72B]/60 transition-all flex flex-col justify-between overflow-hidden group shadow-md"
            >
              {/* Product Visual */}
              <div className="h-52 overflow-hidden relative bg-[#0B1720]">
                <img
                  src={prod.primaryImage}
                  alt={isAr ? prod.titleAr : prod.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#0B1720]/80 text-[10px] font-mono text-[#E5A72B] border border-[#D5C9B5]/20">
                  {prod.sku}
                </span>
                <span className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                  {prod.verificationStatus.toUpperCase()}
                </span>
              </div>

              {/* Product Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-[#B8643F] uppercase block tracking-wider">
                    {prod.tag}
                  </span>
                  <Link
                    to={`/products/${prod.categorySlug}/${prod.id}`}
                    className="block text-base font-bold text-white group-hover:text-[#E5A72B] transition-colors mt-1"
                  >
                    {isAr ? prod.titleAr : prod.titleEn}
                  </Link>
                  <p className="text-xs text-[#D5C9B5]/75 mt-2 line-clamp-2 leading-relaxed">
                    {isAr ? prod.shortDescAr : prod.shortDescEn}
                  </p>
                </div>

                {/* Technical Highlights */}
                <div className="pt-3 border-t border-[#D5C9B5]/10 space-y-2 text-xs">
                  <div className="text-[11px] text-[#D5C9B5]/60 flex items-center justify-between">
                    <span>{isAr ? 'الخامة والتصنيع:' : 'Material Spec:'}</span>
                    <span className="text-white truncate max-w-[150px]">{isAr ? prod.materialAr : prod.materialEn}</span>
                  </div>

                  {prod.standards.length > 0 && (
                    <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                      <CheckCircle className="w-3 h-3" />
                      <span className="truncate">{prod.standards[0].name}</span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <Link
                      to={`/products/${prod.categorySlug}/${prod.id}`}
                      className="flex-1 text-center py-2 px-3 rounded bg-[#1D3440] hover:bg-[#284757] text-white text-xs font-medium transition-colors"
                    >
                      {isAr ? 'المواصفة والتفاصيل' : 'Full Specifications'}
                    </Link>

                    <button
                      onClick={() => addToQuoteBasket(prod)}
                      className="p-2 rounded bg-[#E5A72B] hover:bg-[#ffbe3b] text-[#0B1720] transition-colors"
                      title={isAr ? 'إضافة إلى طلب عرض السعر' : 'Add to Quote Request'}
                    >
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    </button>

                    {prod.datasheetUrl && (
                      <a
                        href={prod.datasheetUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded bg-[#0B1720] border border-[#D5C9B5]/20 text-[#D5C9B5] hover:text-white hover:border-[#E5A72B] transition-colors"
                        title={isAr ? 'تحميل الـ Data Sheet' : 'Download Datasheet'}
                      >
                        <FileDown className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Engineering Disclaimer */}
      <div className="p-4 rounded bg-[#0B1720] border border-[#D5C9B5]/15 text-xs text-[#D5C9B5]/70 flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-[#E5A72B] shrink-0 mt-0.5" />
        <span>
          {isAr
            ? 'تنويه فني: تخضع المقاسات والموديلات والألوان والشهادات للاعتماد المسبق من الاستشاري والمقاول وفق متطلبات الموقع وعينات العرض الفني.'
            : 'Technical Note: Exact dimensions, models, colors, and certifications are confirmed upon submittal of approved physical samples and technical offers.'
          }
        </span>
      </div>
    </div>
  );
};

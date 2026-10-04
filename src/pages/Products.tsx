import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Search, FileDown, ArrowRight, ArrowLeft, CheckCircle, Plus } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8 bg-[#F3F0E9] text-[#1F292C]">
      {/* Page Header */}
      <div className="space-y-3 border-b border-[#DCD3C5] pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#B96543] font-bold">
          <span>CATALOGUE INDEX</span>
          <span>•</span>
          <span>{filteredProducts.length} {isAr ? 'بنود معتمدة' : 'Verified Items'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123D40]">
          {isAr ? 'دليل منتجات السلامة والتوريدات الميدانية' : 'Industrial Safety & Worksite Supplies Catalogue'}
        </h1>
        <p className="text-sm text-[#687174] max-w-3xl leading-relaxed">
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
          <Search className="w-4 h-4 text-[#687174] absolute top-3.5 right-3.5 rtl:right-3.5 rtl:left-auto ltr:left-3.5 ltr:right-auto" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isAr ? 'ابحث باسم المنتج، كود SKU، أو نوع المهمة...' : 'Search by title, SKU, or specification...'}
            className="w-full bg-[#FBFAF6] border border-[#DCD3C5] rounded-xl py-2.5 px-10 text-xs text-[#1F292C] placeholder-[#687174]/60 focus:border-[#123D40] outline-none"
          />
        </div>

        {/* Category Selector Tabs */}
        <div className="lg:col-span-7 flex flex-wrap gap-2">
          <button
            onClick={() => {
              setSearchParams({});
              setSelectedSubcategory('all');
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
              currentCategory === 'all'
                ? 'bg-[#123D40] text-white'
                : 'bg-[#FBFAF6] text-[#687174] border border-[#DCD3C5] hover:border-[#123D40]'
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
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                currentCategory === cat.slug
                  ? 'bg-[#123D40] text-white'
                  : 'bg-[#FBFAF6] text-[#687174] border border-[#DCD3C5] hover:border-[#123D40]'
              }`}
            >
              {isAr ? cat.nameAr : cat.nameEn}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory Pills if category active */}
      {activeCategoryObj && activeCategoryObj.subcategories.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 text-xs border-b border-[#DCD3C5]">
          <span className="text-[#687174] font-mono text-[11px] shrink-0 font-medium">
            {isAr ? 'التصنيف الفرعي:' : 'Subcategory:'}
          </span>
          <button
            onClick={() => setSelectedSubcategory('all')}
            className={`px-3 py-1 rounded-full text-[11px] font-semibold shrink-0 ${
              selectedSubcategory === 'all' ? 'bg-[#B96543] text-white' : 'bg-[#FBFAF6] text-[#687174] border border-[#DCD3C5] hover:text-[#123D40]'
            }`}
          >
            {isAr ? 'كافة البنود' : 'All Subcategories'}
          </button>
          {activeCategoryObj.subcategories.map(sub => (
            <button
              key={sub.slug}
              onClick={() => setSelectedSubcategory(sub.slug)}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold shrink-0 ${
                selectedSubcategory === sub.slug ? 'bg-[#B96543] text-white' : 'bg-[#FBFAF6] text-[#687174] border border-[#DCD3C5] hover:text-[#123D40]'
              }`}
            >
              {isAr ? sub.nameAr : sub.nameEn}
            </button>
          ))}
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-4">
          <p className="text-[#1F292C] text-base font-medium">
            {isAr ? 'لم يتم العثور على منتجات تطابق معايير البحث الحالية.' : 'No products matched your search or filter criteria.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSearchParams({});
              setSelectedSubcategory('all');
            }}
            className="px-4 py-2 rounded-full bg-[#123D40] text-xs text-white hover:bg-[#1a4f53]"
          >
            {isAr ? 'إعادة ضبط التصفية' : 'Reset All Filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(prod => (
            <div
              key={prod.id}
              className="rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] hover:border-[#123D40] transition-all flex flex-col justify-between overflow-hidden shadow-sm"
            >
              {/* Product Visual */}
              <div className="h-52 overflow-hidden relative bg-[#F3F0E9]">
                <img
                  src={prod.primaryImage.replace('/assets/', '/assets/').replace('.webp', '.webp')}
                  alt={isAr ? prod.titleAr : prod.titleEn}
                  className="w-full h-full object-cover rounded-t-2xl hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#FBFAF6]/90 text-[10px] font-mono text-[#123D40] font-bold border border-[#DCD3C5]">
                  {prod.sku}
                </span>
                <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-full bg-[#123D40]/10 text-[#123D40] text-[10px] font-mono font-bold border border-[#123D40]/20">
                  {prod.verificationStatus.toUpperCase()}
                </span>
              </div>

              {/* Product Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-[#B96543] font-bold uppercase block tracking-wider">
                    {prod.tag}
                  </span>
                  <Link
                    to={`/products/${prod.categorySlug}/${prod.id}`}
                    className="block text-base font-bold text-[#123D40] hover:text-[#B96543] transition-colors mt-1 line-clamp-1"
                  >
                    {isAr ? prod.titleAr : prod.titleEn}
                  </Link>
                  <p className="text-xs text-[#687174] mt-2 line-clamp-2 leading-relaxed">
                    {isAr ? prod.shortDescAr : prod.shortDescEn}
                  </p>
                </div>

                {/* Technical Highlights */}
                <div className="pt-3 border-t border-[#DCD3C5] space-y-2 text-xs">
                  <div className="text-[11px] text-[#687174] flex items-center justify-between">
                    <span>{isAr ? 'الخامة والتصنيع:' : 'Material Spec:'}</span>
                    <span className="text-[#1F292C] font-medium truncate max-w-[140px]">{isAr ? prod.materialAr : prod.materialEn}</span>
                  </div>

                  {prod.standards.length > 0 && (
                    <div className="text-[11px] text-[#123D40] flex items-center gap-1 font-mono font-medium">
                      <CheckCircle className="w-3 h-3 text-[#B96543]" />
                      <span className="truncate">{prod.standards[0].name}</span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <Link
                      to={`/products/${prod.categorySlug}/${prod.id}`}
                      className="flex-1 text-center py-2 px-3 rounded-full bg-[#123D40] hover:bg-[#1a4f53] text-white text-xs font-semibold transition-colors"
                    >
                      {isAr ? 'المواصفة والتفاصيل' : 'Full Specifications'}
                    </Link>

                    <button
                      onClick={() => addToQuoteBasket(prod)}
                      className="p-2 rounded-full bg-[#B96543] hover:bg-[#a55636] text-white transition-colors"
                      title={isAr ? 'إضافة إلى طلب عرض السعر' : 'Add to Quote Request'}
                    >
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    </button>

                    {prod.datasheetUrl && (
                      <a
                        href={prod.datasheetUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-[#FBFAF6] border border-[#DCD3C5] text-[#123D40] hover:border-[#123D40] transition-colors"
                        title={isAr ? 'تحميل المواصفة الفنية' : 'Download Datasheet'}
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
    </div>
  );
};

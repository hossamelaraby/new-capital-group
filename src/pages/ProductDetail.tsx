import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { FileDown, CheckCircle, Plus, Shield, ArrowRight, ArrowLeft } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { lang, products, categories, addToQuoteBasket } = useData();
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const product = products.find(p => p.id === productId);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4 bg-[#F3F0E9] text-[#1F292C]">
        <h2 className="text-2xl font-bold text-[#123D40]">
          {isAr ? 'عذرًا، لم يتم العثور على البند المطلوب' : 'Product specification not found'}
        </h2>
        <Link to="/products" className="inline-block px-5 py-2.5 rounded-full bg-[#123D40] text-white text-xs font-bold">
          {isAr ? 'العودة إلى دليل المنتجات' : 'Return to Catalog'}
        </Link>
      </div>
    );
  }

  const category = categories.find(c => c.slug === product.categorySlug);

  const handleAdd = () => {
    addToQuoteBasket(product);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 3000);
  };

  const currentDisplayImage = activeImage || product.primaryImage;
  const allImages = [product.primaryImage, ...(product.galleryImages || [])].filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F3F0E9] text-[#1F292C]">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#687174] font-mono">
        <Link to="/" className="hover:text-[#123D40]">{isAr ? 'الرئيسية' : 'Home'}</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-[#123D40]">{isAr ? 'المنتجات' : 'Products'}</Link>
        <span>/</span>
        {category && (
          <>
            <Link to={`/products?category=${category.slug}`} className="hover:text-[#123D40]">
              {isAr ? category.nameAr : category.nameEn}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-[#B96543] font-bold truncate">{isAr ? product.titleAr : (product.titleEn || product.titleAr)}</span>
      </nav>

      {/* Main Grid: Left Visual Gallery, Right Technical Specification Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Visual & Gallery (Col 5) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl overflow-hidden bg-[#FBFAF6] border border-[#DCD3C5] p-2 shadow-sm">
            <div className="h-96 w-full overflow-hidden rounded-xl bg-[#F3F0E9] flex items-center justify-center">
              <img 
                src={currentDisplayImage} 
                alt={isAr ? (product.imageAltAr || product.titleAr) : (product.imageAltEn || product.titleEn || product.titleAr)}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border transition-all shrink-0 ${
                      (activeImage === img || (!activeImage && idx === 0)) ? 'border-[#B96543] ring-2 ring-[#B96543]/20' : 'border-[#DCD3C5] hover:border-[#123D40]'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover rounded-xl" />
                  </button>
                ))}
            </div>
          )}

          {/* Provenance & Verification Badge */}
          <div className="p-4 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[#687174]">{isAr ? 'حالة التوثيق الفني:' : 'Verification Status:'}</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#123D40]/10 text-[#123D40] font-mono text-[11px] font-bold border border-[#123D40]/20">
                {(product.verificationStatus || 'verified').toUpperCase()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[#687174]">{isAr ? 'مصدر المواصفة:' : 'Source Provenance:'}</span>
              <span className="text-[#123D40] font-mono font-bold">{(product.sourceType || 'company').toUpperCase()} SPEC</span>
            </div>
          </div>
        </div>

        {/* Right Column: Technical Spec & Action Engine (Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-[#123D40] text-white font-mono text-xs font-bold">
                {product.sku}
              </span>
              <span className="text-xs font-mono text-[#B96543] font-bold uppercase">
                {product.tag}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#123D40]">
              {isAr ? product.titleAr : product.titleEn}
            </h1>

            <p className="text-sm sm:text-base text-[#687174] leading-relaxed">
              {isAr ? product.shortDescAr : product.shortDescEn}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="p-5 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-3 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleAdd}
                className="flex-1 py-3 px-5 rounded-full bg-[#123D40] hover:bg-[#1a4f53] text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>{isAr ? 'إضافة البند لطلب عرض الأسعار' : 'Add to Quote Request'}</span>
              </button>

              <Link
                to={`/request-a-quote?product=${product.id}`}
                className="py-3 px-6 rounded-full bg-[#B96543] hover:bg-[#a55636] text-white font-bold text-xs sm:text-sm transition-colors"
              >
                {isAr ? 'طلب خطة توريد للمشروع' : 'Request Supply Plan'}
              </Link>

              {product.datasheetUrl && (
                <a
                  href={product.datasheetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-full bg-[#FBFAF6] hover:bg-[#F3F0E9] text-[#123D40] border border-[#DCD3C5] text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <FileDown className="w-4 h-4 text-[#B96543]" />
                  <span>Data Sheet (PDF)</span>
                </a>
              )}
            </div>

            {addedNotice && (
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs text-center font-medium animate-fade-in">
                {isAr ? '✓ تمت إضافة البند بنجاح إلى قائمة عروض الأسعار.' : '✓ Product added to your quote request basket.'}
              </div>
            )}
          </div>

          {/* Detailed Technical Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-[#123D40] uppercase tracking-wider font-mono border-b border-[#DCD3C5] pb-1.5">
              {isAr ? 'الوصف الهندسي ومجال التطبيق' : 'Engineering Scope'}
            </h3>
            <p className="text-xs sm:text-sm text-[#687174] leading-relaxed whitespace-pre-line">
              {isAr ? product.longDescAr : product.longDescEn}
            </p>
          </div>

          {/* Structured Key Specifications Table */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-[#123D40] uppercase tracking-wider font-mono border-b border-[#DCD3C5] pb-1.5">
              {isAr ? 'جدول المواصفات الفنية' : 'Technical Specifications Table'}
            </h3>
            <div className="overflow-hidden rounded-xl border border-[#DCD3C5] bg-[#FBFAF6]">
              <table className="w-full text-xs text-right rtl:text-right ltr:text-left">
                <tbody>
                  <tr className="border-b border-[#DCD3C5]/60">
                    <td className="p-3 font-semibold text-[#687174] bg-[#F3F0E9] w-1/3">
                      {isAr ? 'الخامة والمواد' : 'Material Composition'}
                    </td>
                    <td className="p-3 text-[#1F292C] font-medium">
                      {isAr ? product.materialAr : product.materialEn}
                    </td>
                  </tr>
                  {product.specifications.map((spec, i) => (
                    <tr key={i} className="border-b border-[#DCD3C5]/60 last:border-b-0">
                      <td className="p-3 font-semibold text-[#687174] bg-[#F3F0E9]">
                        {isAr ? spec.keyAr : spec.keyEn}
                      </td>
                      <td className="p-3 text-[#1F292C] font-medium">
                        {isAr ? spec.valueAr : spec.valueEn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verified Standards & Certifications */}
          {product.standards.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#123D40] uppercase tracking-wider font-mono border-b border-[#DCD3C5] pb-1.5">
                {isAr ? 'المعايير المرجعية وأكواد السلامة' : 'Governing Standards & Reference Codes'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {product.standards.map((st, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-[#FBFAF6] border border-[#DCD3C5] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#B96543] shrink-0" />
                    <span className="text-[#123D40] font-mono text-[11px] font-semibold">{st.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Exact Responsible Specification Note from PDF */}
          <div className="p-4 rounded-xl bg-[#F3F0E9] border border-[#DCD3C5] text-xs text-[#687174] space-y-1">
            <span className="font-bold text-[#123D40] block">
              {isAr ? 'ملاحظة فنية معتمدة:' : 'Technical Submittal Note:'}
            </span>
            <p>
              {isAr
                ? 'المواصفات النهائية والتصنيف والشهادات تعتمد على الموديل والعينة والمستندات الفنية المعتمدة ومتطلبات المشروع.'
                : 'Final specifications, ratings, and certifications depend on the approved model, sample, technical documentation, and project requirements.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

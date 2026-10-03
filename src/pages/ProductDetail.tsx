import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { 
  FileDown, 
  CheckCircle, 
  Shield, 
  ArrowRight, 
  ArrowLeft, 
  Plus, 
  Share2, 
  Mail, 
  Phone,
  AlertTriangle,
  Info
} from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { lang, products, categories, addToQuoteBasket } = useData();
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const product = products.find(p => p.id === productId);

  const [activeImage, setActiveImage] = useState<string>(product ? product.primaryImage : '');
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">
          {isAr ? 'المنتج غير موجود أو قيد التحديث الفني' : 'Product Not Found or Pending Revision'}
        </h2>
        <Link to="/products" className="inline-flex items-center gap-2 text-[#E5A72B] underline text-sm">
          <span>{isAr ? 'العودة لدليل المنتجات' : 'Back to Catalogue'}</span>
          <Arrow className="w-4 h-4" />
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

  const allImages = [product.primaryImage, ...product.galleryImages];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#D5C9B5]/60 font-mono">
        <Link to="/" className="hover:text-white">{isAr ? 'الرئيسية' : 'Home'}</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-white">{isAr ? 'المنتجات' : 'Products'}</Link>
        <span>/</span>
        {category && (
          <>
            <Link to={`/products?category=${category.slug}`} className="hover:text-white">
              {isAr ? category.nameAr : category.nameEn}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-[#E5A72B] truncate">{isAr ? product.titleAr : product.titleEn}</span>
      </nav>

      {/* Main Grid: Left Visual Gallery, Right Technical Specification Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Visual & Gallery (Col 5) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-xl overflow-hidden bg-[#12202A] border border-[#D5C9B5]/20 p-2 shadow-xl">
            <div className="h-96 w-full overflow-hidden rounded-lg bg-[#0B1720] flex items-center justify-center">
              <img 
                src={activeImage || product.primaryImage} 
                alt={isAr ? product.imageAltAr : product.imageAltEn}
                className="w-full h-full object-cover"
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
                  className={`w-20 h-20 rounded-lg overflow-hidden border transition-all shrink-0 ${
                    activeImage === img ? 'border-[#E5A72B] scale-95' : 'border-[#D5C9B5]/20 hover:border-[#D5C9B5]/60'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Provenance & Verification Badge */}
          <div className="p-4 rounded-lg bg-[#0B1720] border border-[#D5C9B5]/15 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[#D5C9B5]/60">{isAr ? 'حالة التوثيق الفني:' : 'Verification Status:'}</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[11px] border border-emerald-500/20">
                {product.verificationStatus.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[#D5C9B5]/60">{isAr ? 'مصدر البيانات:' : 'Source Provenance:'}</span>
              <span className="text-white font-mono">{product.sourceType.toUpperCase()} SPEC</span>
            </div>
          </div>
        </div>

        {/* Right Column: Technical Spec & Action Engine (Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-[#1D3440] text-[#E5A72B] font-mono text-xs border border-[#E5A72B]/30">
                {product.sku}
              </span>
              <span className="text-xs font-mono text-[#B8643F] uppercase">
                {product.tag}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isAr ? product.titleAr : product.titleEn}
            </h1>

            <p className="text-sm sm:text-base text-[#D5C9B5]/85 leading-relaxed">
              {isAr ? product.shortDescAr : product.shortDescEn}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="p-4 rounded-xl bg-[#12202A] border border-[#D5C9B5]/20 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleAdd}
                className="flex-1 py-3 px-4 rounded bg-[#E5A72B] hover:bg-[#ffbe3b] text-[#0B1720] font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 signal-notch shadow-lg"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>{isAr ? 'إضافة البند لطلب عرض الأسعار' : 'Add to Quote Request'}</span>
              </button>

              <Link
                to={`/request-a-quote?product=${product.id}`}
                className="py-3 px-5 rounded bg-[#B8643F] hover:bg-[#cf744c] text-white font-medium text-xs sm:text-sm transition-colors"
              >
                {isAr ? 'طلب فوري للمشروع' : 'Instant BOQ Request'}
              </Link>

              {product.datasheetUrl && (
                <a
                  href={product.datasheetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded bg-[#1D3440] hover:bg-[#284757] text-white border border-[#D5C9B5]/25 text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <FileDown className="w-4 h-4 text-[#E5A72B]" />
                  <span>Data Sheet (PDF)</span>
                </a>
              )}
            </div>

            {addedNotice && (
              <div className="p-2 rounded bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs text-center animate-fade-in">
                {isAr ? '✓ تمت إضافة البند بنجاح إلى قائمة عروض الأسعار.' : '✓ Product added to your quote request basket.'}
              </div>
            )}
          </div>

          {/* Detailed Technical Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider protection-line pb-1">
              {isAr ? 'نظرة عامة والوصف الهندسي' : 'Engineering Description & Scope'}
            </h3>
            <p className="text-xs sm:text-sm text-[#D5C9B5]/80 leading-relaxed whitespace-pre-line">
              {isAr ? product.longDescAr : product.longDescEn}
            </p>
          </div>

          {/* Structured Key Specifications Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider protection-line pb-1">
              {isAr ? 'جدول المواصفات الفنية' : 'Technical Specifications Table'}
            </h3>
            <div className="overflow-hidden rounded-lg border border-[#D5C9B5]/15 bg-[#12202A]">
              <table className="w-full text-xs text-right rtl:text-right ltr:text-left">
                <tbody>
                  <tr className="border-b border-[#D5C9B5]/10">
                    <td className="p-3 font-semibold text-[#D5C9B5]/70 bg-[#0B1720]/50 w-1/3">
                      {isAr ? 'الخامة والمواد' : 'Material Composition'}
                    </td>
                    <td className="p-3 text-white">
                      {isAr ? product.materialAr : product.materialEn}
                    </td>
                  </tr>
                  {product.specifications.map((spec, i) => (
                    <tr key={i} className="border-b border-[#D5C9B5]/10 last:border-b-0">
                      <td className="p-3 font-semibold text-[#D5C9B5]/70 bg-[#0B1720]/50">
                        {isAr ? spec.keyAr : spec.keyEn}
                      </td>
                      <td className="p-3 text-white">
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
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider protection-line pb-1">
                {isAr ? 'المعايير المرجعية وأكواد السلامة' : 'Governing Standards & Reference Codes'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {product.standards.map((st, i) => (
                  <div key={i} className="p-2.5 rounded bg-[#1D3440]/50 border border-[#D5C9B5]/15 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-white font-mono text-[11px]">{st.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Real Worksite Applications */}
          {product.applicationsAr.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider protection-line pb-1">
                {isAr ? 'بيئات الاستخدام ومواقع العمل' : 'Field Applications & Work Environments'}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#D5C9B5]/90">
                {(isAr ? product.applicationsAr : product.applicationsEn).map((app, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A72B]"></span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Engineering Disclaimer */}
          <div className="p-4 rounded-lg bg-[#0B1720] border border-[#D5C9B5]/15 text-xs text-[#D5C9B5]/70 space-y-1">
            <span className="font-semibold text-white block">
              {isAr ? 'ملاحظة فنية هامة للمهندسين ومسؤولي التوريد:' : 'Important Submittal Notice for Engineers & HSE:'}
            </span>
            <p>
              {isAr
                ? 'المواصفات النهائية، الشهادات، المقاسات، والتصنيف الفني تعتمد على الموديل والعينة والعرض الفني المعتمد للمشروع. لا تُعتبر هذه الصفحة وحدها شهادة مطابقة بحد ذاتها.'
                : 'Final specifications, certifications, sizes, and technical ratings depend upon the specific model, physical sample, and project engineer approval. This document does not constitute a certificate of conformity by itself.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

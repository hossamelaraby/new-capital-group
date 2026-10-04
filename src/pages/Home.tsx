import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { 
  Shield, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  FileDown, 
  Search, 
  AlertTriangle, 
  Layers, 
  Award, 
  Building2, 
  Zap, 
  Sun,
  Flame,
  Construction,
  FileCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const Home: React.FC = () => {
  const { lang, products, categories, projects, documents, settings } = useData();
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  // Guided finder state
  const [finderIndustry, setFinderIndustry] = useState('');
  const [finderHazard, setFinderHazard] = useState('');
  const [finderResult, setFinderResult] = useState<string | null>(null);

  const handleFinderSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (finderIndustry || finderHazard) {
      setFinderResult('ppe');
    }
  };

  const publishedProducts = products.filter(p => p.published);
  const publishedCategories = categories.filter(c => c.published);
  const featuredProjects = projects.filter(p => p.publicDisplay).slice(0, 4);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Split Hero Section with Technical Information Rail */}
      <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#D5C9B5]/15 bg-gradient-to-b from-[#0B1720] via-[#0D1C28] to-[#0B1720]">
        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1D344015_1px,transparent_1px),linear-gradient(to_bottom,#1D344015_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left/Right Text Content (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Field Coordinate Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1D3440]/80 border border-[#B8643F]/40 text-xs text-[#D5C9B5] font-mono tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A72B]"></span>
                <span>NC // SPEC-2026 // CAIRO</span>
                <span>•</span>
                <span className="text-[#E5A72B] uppercase">{isAr ? 'توريد هندسي ميداني' : 'B2B Field Supply'}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {isAr ? (
                  <>
                    توريد السلامة المهنية، <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5A72B] via-[#D5C9B5] to-[#B8643F]">
                      مصمم لاحتياج الموقع والمشروع.
                    </span>
                  </>
                ) : (
                  <>
                    Safety Supply, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5A72B] via-[#D5C9B5] to-[#B8643F]">
                      Specified for the Site.
                    </span>
                  </>
                )}
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-[#D5C9B5]/85 leading-relaxed max-w-2xl">
                {isAr 
                  ? 'شريك توريد معتمد للمقاولين ومسؤولي السلامة والصحة المهنية (HSE) في كبرى مشروعات البنية التحتية والإنشاءات والمصانع المصرية. مهمات وقاية شخصية، لوحات تحذيرية، أشرطة مدفونة لكشف المرافق، وحلول إنارة شمسية للمواقع.'
                  : 'Certified supply partner for contractors and HSE managers across Egypt’s major infrastructure, industrial complexes, and civil works. Personal protective equipment, compliant safety signs, detectable buried tapes, and off-grid solar site lighting.'
                }
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/products"
                  className="px-6 py-3 rounded bg-[#E5A72B] text-[#0B1720] font-bold text-sm hover:bg-[#ffbe3b] transition-all flex items-center gap-2 shadow-lg signal-notch"
                >
                  <span>{isAr ? 'استكشف دليل المنتجات' : 'Explore Product Catalog'}</span>
                  <Arrow className="w-4 h-4" />
                </Link>

                <Link
                  to="/request-a-quote"
                  className="px-6 py-3 rounded bg-[#1D3440] hover:bg-[#284757] text-white border border-[#D5C9B5]/30 font-medium text-sm transition-all flex items-center gap-2"
                >
                  <span>{isAr ? 'اطلب عرض سعر للمشروع' : 'Request Project BOQ Quote'}</span>
                </Link>
              </div>

              {/* Credibility Micro-Points */}
              <div className="pt-4 border-t border-[#D5C9B5]/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#D5C9B5]/75">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>ISO 9001 / ISO 14001</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#E5A72B] shrink-0" />
                  <span>{isAr ? 'عينات واعتماد فني' : 'Technical Approval Samples'}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <FileCheck className="w-4 h-4 text-[#B8643F] shrink-0" />
                  <span>{isAr ? 'توريد كميات المشروعات' : 'Bulk Project Sizing'}</span>
                </div>
              </div>
            </div>

            {/* Right Visual & Technical Rail (Col 5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#D5C9B5]/20 bg-[#12202A] shadow-2xl group">
                <img 
                  src="/assets/01-hero-industrial-safety.webp" 
                  alt={isAr ? 'مجموعة العاصمة الجديدة للتوريدات' : 'New Capital Group Site Supplies'}
                  className="w-full h-80 object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1720] via-transparent to-transparent pointer-events-none rounded-2xl"></div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B1720]/90 backdrop-blur-md border border-[#D5C9B5]/20 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#E5A72B]">NC // SITE SPECIFICATION</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono">ACTIVE SPEC</span>
                  </div>
                  <p className="text-xs text-white font-medium">
                    {isAr ? 'تجهيزات متكاملة لمشروعات النقل والموانئ والمجتمعات العمرانية' : 'Comprehensive equipment for transport, utility, and urban infrastructure'}
                  </p>
                </div>
              </div>

              {/* Fast Category Quick Strip */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {publishedCategories.slice(0, 4).map(cat => (
                  <Link
                    key={cat.id}
                    to={`/products?category=${cat.slug}`}
                    className="p-3 rounded bg-[#1D3440]/60 border border-[#D5C9B5]/15 hover:border-[#E5A72B] hover:bg-[#1D3440] transition-colors flex items-center justify-between text-[#F4F1EA]"
                  >
                    <span className="font-medium truncate">{isAr ? cat.nameAr : cat.nameEn}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#E5A72B] shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "Find the Right Protection" Interactive Guided Module */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#12202A] border border-[#D5C9B5]/20 rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
          <div className="space-y-2 mb-6">
            <span className="text-xs font-mono uppercase text-[#E5A72B] tracking-wider">
              {isAr ? 'مستشار اختيار المواصفات' : 'Guided Selection Engine'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {isAr ? 'حدد طبيعة الموقع والمخاطر المطلوبة للوصول للتوريد المناسب' : 'Find the Right Protection Specified for Your Work Environment'}
            </h2>
            <p className="text-xs sm:text-sm text-[#D5C9B5]/75">
              {isAr ? 'اختر بيئة العمل ونوع الخطر لتصفية الكتالوج واستخراج نماذج التوريد المطابقة.' : 'Select jobsite conditions and primary hazards to filter certified product lines.'}
            </p>
          </div>

          <form onSubmit={handleFinderSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-xs font-medium text-[#D5C9B5] mb-2">
                {isAr ? '1. طبيعة المنشأة أو المشروع' : '1. Industry / Project Sector'}
              </label>
              <select 
                value={finderIndustry}
                onChange={(e) => setFinderIndustry(e.target.value)}
                className="w-full bg-[#0B1720] border border-[#D5C9B5]/25 rounded p-2.5 text-xs text-white focus:border-[#E5A72B] outline-none"
              >
                <option value="">{isAr ? '-- اختر قطاع العمل --' : '-- Select Industry --'}</option>
                <option value="civil">{isAr ? 'إنشاءات مدنية وأبراج' : 'Civil Construction & High-rise'}</option>
                <option value="infra">{isAr ? 'بنية تحتية وكباري ومرافق' : 'Infrastructure & Utilities'}</option>
                <option value="industry">{isAr ? 'مصانع وتصنيع ومستودعات' : 'Industrial Manufacturing'}</option>
                <option value="energy">{isAr ? 'طاقة ومحطات كهرباء ونفط' : 'Energy & Power Substation'}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#D5C9B5] mb-2">
                {isAr ? '2. نوع الخطر أو الاحتياج الميداني' : '2. Key Risk or Field Need'}
              </label>
              <select 
                value={finderHazard}
                onChange={(e) => setFinderHazard(e.target.value)}
                className="w-full bg-[#0B1720] border border-[#D5C9B5]/25 rounded p-2.5 text-xs text-white focus:border-[#E5A72B] outline-none"
              >
                <option value="">{isAr ? '-- اختر نوع الحماية --' : '-- Select Safety Need --'}</option>
                <option value="impact">{isAr ? 'صدمات وانزلاق وحماية أقدام' : 'Foot Protection & Impact Resistance'}</option>
                <option value="visibility">{isAr ? 'وضوح بصري وعمل ليلي للطرق' : 'High Visibility & Night Traffic'}</option>
                <option value="utilities">{isAr ? 'حماية مسارات كابلات ومرافق مدفونة' : 'Buried Cable & Pipeline Protection'}</option>
                <option value="signage">{isAr ? 'لوحات إلزام ومنع وطوارئ' : 'Emergency & Mandatory Signage'}</option>
                <option value="solar">{isAr ? 'إنارة ليلية بدون كابلات' : 'Off-grid Remote Site Illumination'}</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded bg-[#B8643F] hover:bg-[#cf744c] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>{isAr ? 'تصفية المنتجات المقترحة' : 'Filter Matching Solutions'}</span>
              </button>
            </div>
          </form>

          {finderResult && (
            <div className="mt-4 p-3 rounded bg-[#1D3440] border border-[#E5A72B]/30 flex items-center justify-between text-xs">
              <span className="text-[#D5C9B5]">
                {isAr ? 'تم تحديد البنود المتوافقة مع اختياراتك من مهمات الوقاية ولوحات السلامة والأشرطة.' : 'Identified verified product lots matching your site safety parameters.'}
              </span>
              <Link to={`/products?category=${finderResult}`} className="text-[#E5A72B] font-bold underline flex items-center gap-1">
                <span>{isAr ? 'عرض البنود' : 'View Products'}</span>
                <Arrow className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 3. Category Compass — Clean Visual Index */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-[#E5A72B] tracking-wider">
              {isAr ? 'فهرس التوريدات' : 'Supply Index'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white protection-line pb-2">
              {isAr ? 'أقسام المنتجات المعتمدة' : 'Verified Product Categories'}
            </h2>
          </div>
          <Link to="/products" className="text-xs text-[#E5A72B] hover:underline flex items-center gap-1">
            <span>{isAr ? 'عرض الكتالوج الكامل' : 'Browse All Categories'}</span>
            <Arrow className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedCategories.map(cat => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.slug}`}
              className="group rounded-lg overflow-hidden bg-[#12202A] border border-[#D5C9B5]/15 hover:border-[#E5A72B] transition-all flex flex-col justify-between"
            >
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={cat.image} 
                  alt={isAr ? cat.nameAr : cat.nameEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-85" 
                />
                <div className="absolute top-3 left-3 bg-[#0B1720]/80 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-[#E5A72B] border border-[#D5C9B5]/20">
                  {cat.slug.toUpperCase()}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#E5A72B] transition-colors">
                    {isAr ? cat.nameAr : cat.nameEn}
                  </h3>
                  <p className="text-xs text-[#D5C9B5]/75 mt-1.5 leading-relaxed">
                    {isAr ? cat.descAr : cat.descEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D5C9B5]/10 flex items-center justify-between text-xs text-[#E5A72B]">
                  <span>{isAr ? `${cat.subcategories.length} تصنيفات فرعية` : `${cat.subcategories.length} Subcategories`}</span>
                  <Arrow className="w-4 h-4 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Proof & Quality Band — ISO 9001 & 14001 */}
      <section className="bg-[#12202A] border-y border-[#D5C9B5]/15 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-mono uppercase text-emerald-400">
                {isAr ? 'اعتمادات الجودة وإدارة البيئة' : 'Quality & Environmental Standards'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {isAr ? 'شهادات الجودة الرسمية للمجموعة' : 'Official ISO Quality Accreditations'}
              </h2>
              <p className="text-xs sm:text-sm text-[#D5C9B5]/80 leading-relaxed">
                {isAr 
                  ? 'تمتلك مجموعة العاصمة الجديدة شهادات نظم إدارة الجودة ISO 9001:2015 ونظم الإدارة البيئية ISO 14001:2015 بنطاق يشمل توريد مهمات الصحة والسلامة المهنية ومعدات الوقاية الشخصية والأشرطة التحذيرية ومهمات الطرق.'
                  : 'Certified under ISO 9001:2015 and ISO 14001:2015 for the comprehensive supply of occupational health and safety products, PPE, detectable underground tapes, and highway safety supplies.'
                }
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* ISO 9001 Card */}
              <div className="p-5 rounded-lg bg-[#0B1720] border border-[#D5C9B5]/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">ISO 9001:2015</span>
                  <span className="text-[10px] font-mono text-[#D5C9B5]/60">EGY1091QMS</span>
                </div>
                <h4 className="text-sm font-semibold text-white">
                  {isAr ? 'نظام إدارة الجودة' : 'Quality Management System'}
                </h4>
                <div className="text-[11px] text-[#D5C9B5]/70 space-y-1 font-mono">
                  <div>{isAr ? 'تاريخ الإصدار: 02/08/2026' : 'Issue Date: 02/08/2026'}</div>
                  <div>{isAr ? 'سارية حتى: 01/08/2027 (تاريخ الانتهاء: 01/08/2029)' : 'Valid Until: 01/08/2027'}</div>
                </div>
                <a 
                  href="/documents/New_Capital_for_General_Supplies_-_Ahmed_Sharaf_El_Dien_ISO_9001-2015_Certificate_2026-2514.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#E5A72B] hover:underline pt-1"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>{isAr ? 'تحميل الشهادة الأصلية (PDF)' : 'Download Certificate PDF'}</span>
                </a>
              </div>

              {/* ISO 14001 Card */}
              <div className="p-5 rounded-lg bg-[#0B1720] border border-[#D5C9B5]/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">ISO 14001:2015</span>
                  <span className="text-[10px] font-mono text-[#D5C9B5]/60">EGY455EMS</span>
                </div>
                <h4 className="text-sm font-semibold text-white">
                  {isAr ? 'نظام الإدارة البيئية' : 'Environmental Management'}
                </h4>
                <div className="text-[11px] text-[#D5C9B5]/70 space-y-1 font-mono">
                  <div>{isAr ? 'تاريخ الإصدار: 02/08/2026' : 'Issue Date: 02/08/2026'}</div>
                  <div>{isAr ? 'سارية حتى: 01/08/2027 (تاريخ الانتهاء: 01/08/2029)' : 'Valid Until: 01/08/2027'}</div>
                </div>
                <a 
                  href="/documents/New_Capital_for_General_Supplies_-_Ahmed_Sharaf_El_Dien_ISO_14001-2015_Certificate_2026-2515.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#E5A72B] hover:underline pt-1"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>{isAr ? 'تحميل الشهادة الأصلية (PDF)' : 'Download Certificate PDF'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Curated Product Selection with Real Datasheets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-[#E5A72B] tracking-wider">
              {isAr ? 'نماذج التوريد الفنية' : 'Core Product Lines'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white protection-line pb-2">
              {isAr ? 'أحدث البنود المعتمدة للمشروعات' : 'Featured Industrial Specifications'}
            </h2>
          </div>
          <Link to="/products" className="text-xs text-[#E5A72B] hover:underline flex items-center gap-1">
            <span>{isAr ? 'عرض جميع المنتجات' : 'View Full Catalogue'}</span>
            <Arrow className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {publishedProducts.slice(0, 4).map(prod => (
            <div 
              key={prod.id}
              className="rounded-lg bg-[#12202A] border border-[#D5C9B5]/15 hover:border-[#E5A72B]/60 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="h-48 overflow-hidden relative bg-[#0B1720]">
                <img 
                  src={prod.primaryImage} 
                  alt={isAr ? prod.titleAr : prod.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#0B1720]/80 text-[10px] font-mono text-[#E5A72B] border border-[#D5C9B5]/20">
                  {prod.sku}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#B8643F] block">
                    {prod.tag}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#E5A72B] transition-colors mt-1 line-clamp-2">
                    {isAr ? prod.titleAr : prod.titleEn}
                  </h3>
                  <p className="text-xs text-[#D5C9B5]/70 mt-1 line-clamp-2">
                    {isAr ? prod.shortDescAr : prod.shortDescEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D5C9B5]/10 flex items-center justify-between text-xs">
                  <Link
                    to={`/products/${prod.categorySlug}/${prod.id}`}
                    className="text-[#E5A72B] font-medium hover:underline flex items-center gap-1"
                  >
                    <span>{isAr ? 'المواصفة والطلب' : 'View Spec & Quote'}</span>
                    <Arrow className="w-3.5 h-3.5" />
                  </Link>

                  {prod.datasheetUrl && (
                    <a 
                      href={prod.datasheetUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#D5C9B5]/60 hover:text-white"
                      title={isAr ? 'تحميل المواصفة الفنية' : 'Download Datasheet'}
                    >
                      <FileDown className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Responsible Project References Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#12202A] border border-[#D5C9B5]/15 rounded-xl p-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#B8643F] tracking-wider">
                {isAr ? 'سجل المراجع والبيئات الهندسية' : 'Engineering Context & References'}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {isAr ? 'بيئات المشروعات ومراجع التوريد' : 'Project References & Application Environments'}
              </h2>
            </div>
            <Link to="/projects" className="text-xs text-[#E5A72B] hover:underline flex items-center gap-1">
              <span>{isAr ? 'عرض كافة المشروعات' : 'View All References'}</span>
              <Arrow className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProjects.map(proj => (
              <div 
                key={proj.id}
                className="p-4 rounded bg-[#0B1720] border border-[#D5C9B5]/15 space-y-2 hover:border-[#D5C9B5]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1D3440] text-[#D5C9B5]/80">
                    {proj.sectorEn}
                  </span>
                  <span className="text-[10px] text-amber-400 font-mono">
                    {isAr ? 'مرجع هندسي' : 'Ref Only'}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">
                  {isAr ? proj.titleAr : proj.titleEn}
                </h4>
                <p className="text-[11px] text-[#D5C9B5]/70 line-clamp-2">
                  {isAr ? proj.scopeAr : proj.scopeEn}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#D5C9B5]/10 text-xs text-[#D5C9B5]/60 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#E5A72B] shrink-0" />
            <span>
              {isAr 
                ? 'تُدرج المشروعات كمرجع لمجالات التوريد والمواصفات المعمول بها في السوق المصري، وتخضع التوريدات الفعلية لتعاقدات المشروعات المعتمدة.'
                : 'Project names are shown as operational engineering references according to company records, with supply verified per contract.'
              }
            </span>
          </div>
        </div>
      </section>

      {/* 7. Low-Friction Final Project Conversion CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-xl bg-gradient-to-r from-[#1D3440] via-[#12202A] to-[#0B1720] border border-[#E5A72B]/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {isAr ? 'أخبرنا باحتياج موقعك، وسنساعدك في هيكلة عرض التوريد' : 'Tell Us What the Site Needs. We Will Structure the Request.'}
            </h2>
            <p className="text-sm text-[#D5C9B5]/85">
              {isAr 
                ? 'فريق المكتب الفني والمبيعات جاهز لتلقي جداول الكميات (BOQ)، وتوفير العينات المعتمدة والشهادات المطلوبة لاعتماد المهندس الاستشاري.'
                : 'Our technical office is ready to evaluate your Bill of Quantities (BOQ), provide approval samples, and issue compliant technical submittals.'
              }
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/request-a-quote"
              className="px-8 py-3.5 rounded bg-[#E5A72B] text-[#0B1720] font-bold text-sm hover:bg-[#ffbe3b] transition-all shadow-lg signal-notch"
            >
              {isAr ? 'تقديم طلب عرض أسعار الآن' : 'Submit Project Quote Request'}
            </Link>

            <a
              href={`https://wa.me/201010550857?text=${encodeURIComponent('مرحبًا مجموعة العاصمة الجديدة، نود الاستفسار عن توريدات لمشروعنا.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all flex items-center gap-2"
            >
              <span>{isAr ? 'تواصل عبر واتساب مباشر' : 'Direct WhatsApp Inquiries'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

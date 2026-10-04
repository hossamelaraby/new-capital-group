import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { 
  Shield, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  FileDown, 
  Award, 
  ChevronRight,
  Flame,
  AlertTriangle,
  Sun,
  Zap,
  MapPin,
  Clock,
  Layers,
  FileCheck
} from 'lucide-react';

export const Home: React.FC = () => {
  const { lang, products, categories, projects, settings } = useData();
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const [activeSpecialtyIndex, setActiveSpecialtyIndex] = useState<number>(0);

  const specialties = [
    {
      num: '01',
      titleAr: 'مهمات الوقاية الشخصية (PPE)',
      titleEn: 'PPE & Workwear',
      slug: 'ppe',
      descAr: 'أحذية سلامة هندسية S3، سترات عاكسة، قفازات عمل، وخوذات معتمدة.',
      descEn: 'Safety footwear S3, high-visibility vests, work gloves, and head protection.',
      icon: Shield,
      isCore: true
    },
    {
      num: '02',
      titleAr: 'مكافحة الحريق ومعدات الطوارئ',
      titleEn: 'Fire Protection',
      slug: 'fire-safety',
      descAr: 'طفايات حريق معتمدة، لوحات فوسفورية، ومستلزمات خطط الإخلاء.',
      descEn: 'Certified extinguishers, photoluminescent signs, and evacuation readiness.',
      icon: Flame,
      isCore: true
    },
    {
      num: '03',
      titleAr: 'لوحات السلامة وحماية الموقع',
      titleEn: 'Safety Signs & Site Protection',
      slug: 'safety-signs',
      descAr: 'لوحات المنع والتحذير ISO 7010 ومحددات المسارات والمناطق الخطرة.',
      descEn: 'ISO 7010 hazard warning, mandatory directives, and perimeter demarcation.',
      icon: AlertTriangle,
      isCore: true
    },
    {
      num: '04',
      titleAr: 'الإنارة الشمسية للمواقع والأسوار',
      titleEn: 'Solar Lighting (Complementary)',
      slug: 'solar-lighting',
      descAr: 'كشافات ليد مستقلة لإنارة أسوار المشروعات ومعسكرات المقاولين.',
      descEn: 'Off-grid solar floodlights for construction perimeters and contractor base camps.',
      icon: Sun,
      isCore: false
    },
    {
      num: '05',
      titleAr: 'المرافق والتمديدات الكهروميكانيكية',
      titleEn: 'Traffic, Utilities & EMT References',
      slug: 'traffic-utilities',
      descAr: 'أشرطة تحذيرية مدفونة قابلة للكشف ومراجع تمديدات مجلفنة.',
      descEn: 'Detectable subterranean warning tape and approved technical conduit references.',
      icon: Zap,
      isCore: false
    }
  ];

  // Featured 6 products matching PDF requirements
  const featuredProductSkus = ['NC-PPE-SH01', 'NC-PPE-GL03', 'NC-PPE-VT02', 'NC-SGN-PP06', 'NC-FIR-SN07', 'NC-UTL-TP04'];
  const featuredProducts = products.filter(p => featuredProductSkus.includes(p.sku)).slice(0, 6);

  return (
    <div className="space-y-16 pb-20 bg-[#F3F0E9] text-[#1F292C]">
      {/* 6.3 Hero Section: Architectural Field Atlas Layout */}
      <section className="relative pt-6 pb-14 lg:pt-12 lg:pb-20 border-b border-[#DCD3C5] bg-[#FBFAF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Text & Positioning (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Location & Specialization Tags */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3F0E9] border border-[#DCD3C5] text-xs text-[#687174]">
                <MapPin className="w-3.5 h-3.5 text-[#B96543]" />
                <span className="font-medium text-[#123D40]">Cairo / Egypt</span>
                <span>•</span>
                <span className="font-semibold text-[#B96543]">Industrial Safety Supply</span>
              </div>

              {/* Exact Recommended Arabic Headline from PDF */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123D40] tracking-tight leading-tight">
                {isAr ? (
                  <>
                    متخصصون في الأمن الصناعي <br />
                    <span className="text-[#B96543]">وحماية العاملين</span>
                  </>
                ) : (
                  <>
                    Specialized in Industrial Safety <br />
                    <span className="text-[#B96543]">& Workforce Protection</span>
                  </>
                )}
              </h1>

              {/* Exact Recommended Supporting Copy from PDF */}
              <p className="text-base sm:text-lg text-[#687174] leading-relaxed max-w-2xl">
                {isAr 
                  ? 'توريد منظم لمهمات الوقاية الشخصية ومكافحة الحريق وحماية الموقع للمشروعات والمصانع والمراكز اللوجستية.'
                  : 'A specialized supplier of industrial-safety and occupational health equipment for engineering projects, factories, logistics centers, and warehouses — with complete focus on PPE and fire protection.'
                }
              </p>

              {/* Calm, Direct CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/request-a-quote"
                  className="px-6 py-3.5 rounded-full bg-[#123D40] text-white font-bold text-xs sm:text-sm hover:bg-[#1a4f53] transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>{isAr ? 'اطلب عرض توريد للمشروع' : 'Request a Project Supply Plan'}</span>
                  <Arrow className="w-4 h-4" />
                </Link>

                <Link
                  to="/products"
                  className="px-6 py-3.5 rounded-full bg-[#FBFAF6] hover:bg-[#F3F0E9] text-[#123D40] border border-[#DCD3C5] font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <span>{isAr ? 'استكشف المنتجات' : 'Explore Products'}</span>
                </Link>
              </div>

              {/* Verified Trust Band */}
              <div className="pt-6 border-t border-[#DCD3C5] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#687174]">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#123D40] shrink-0" />
                  <span className="font-medium">ISO 9001 / ISO 14001</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#B96543] shrink-0" />
                  <span className="font-medium">{isAr ? 'عينات واعتماد فني' : 'Technical Samples'}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <FileCheck className="w-4 h-4 text-[#53787A] shrink-0" />
                  <span className="font-medium">{isAr ? 'توريدات المشروعات B2B' : 'B2B Project Sizing'}</span>
                </div>
              </div>
            </div>

            {/* Architectural Visual (Col 5): Worker in Lime-Green Vest (01-hero-industrial-safety) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#DCD3C5] bg-[#FBFAF6] shadow-sm">
                <img 
                  src="/assets/01-hero-industrial-safety.webp" 
                  alt={isAr ? 'مهندس موقع في بيئة صناعية يرتدي سترة السلامة' : 'Worker in high-visibility safety vest at industrial worksite'}
                  className="w-full h-[400px] object-cover object-center rounded-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FBFAF6]/95 backdrop-blur-md border border-[#DCD3C5] shadow-sm">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono text-[#B96543] font-bold">NEW CAPITAL SPEC</span>
                    <span className="text-[10px] bg-[#123D40]/10 text-[#123D40] px-2 py-0.5 rounded-full font-mono font-medium">B2B CAIRO</span>
                  </div>
                  <p className="text-xs text-[#1F292C] font-medium">
                    {isAr ? 'تجهيزات الأمن الصناعي للمشروعات والمصانع الكبرى' : 'Industrial safety procurement for major engineering sites'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4 "Choose by Need" Specialty Index */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-2 mb-6">
          <span className="text-xs font-mono uppercase text-[#B96543] tracking-wider font-semibold">
            {isAr ? 'دليل الاختيار حسب الاحتياج' : 'Choose by Need'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123D40]">
            {isAr ? 'فهرس التخصصات ومجالات التوريد' : 'Core Supply Specialties Index'}
          </h2>
          <p className="text-xs sm:text-sm text-[#687174]">
            {isAr ? 'اختر التخصص المطلوب للاطلاع على بنود التوريد المعتمدة والمواصفات الفنية.' : 'Select a specialty to inspect verified product lines and technical submittals.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {specialties.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeSpecialtyIndex === idx;
            return (
              <Link
                key={item.num}
                to={`/products?category=${item.slug}`}
                onMouseEnter={() => setActiveSpecialtyIndex(idx)}
                className={`p-5 rounded-2xl transition-all border flex flex-col justify-between ${
                  isActive 
                    ? 'bg-[#FBFAF6] border-[#B96543] shadow-sm' 
                    : 'bg-[#FBFAF6] border-[#DCD3C5] hover:border-[#B96543]/60'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#687174]">{item.num}</span>
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                      isActive ? 'border-[#B96543] bg-[#B96543]/10 text-[#B96543]' : 'border-[#DCD3C5] text-[#123D40]'
                    }`}>
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${isActive ? 'text-[#B96543]' : 'text-[#123D40]'}`}>
                      {isAr ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xs text-[#687174] mt-1.5 leading-relaxed">
                      {isAr ? item.descAr : item.descEn}
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-[#DCD3C5]/60 flex items-center justify-between text-xs text-[#B96543] font-semibold mt-4">
                  <span>{isAr ? 'عرض البنود' : 'View Spec'}</span>
                  <Arrow className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 6.5 Three Core Category Panels (Large Architectural Panels) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-1 mb-8">
          <span className="text-xs font-mono uppercase text-[#B96543] tracking-wider font-semibold">
            {isAr ? 'التخصصات الثلاثة الأساسية' : 'Primary Specialties'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123D40]">
            {isAr ? 'الركائز الرئيسية لمنظومة السلامة' : 'Three Core Safety Pillars'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Panel 1: PPE */}
          <div className="rounded-2xl overflow-hidden bg-[#FBFAF6] border border-[#DCD3C5] flex flex-col justify-between shadow-sm hover:border-[#123D40] transition-colors">
            <div className="h-60 overflow-hidden relative">
              <img 
                src="/assets/02-category-ppe.webp" 
                alt="Industrial Safety & PPE" 
                className="w-full h-full object-cover rounded-t-2xl hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#123D40] text-white text-[11px] font-mono px-3 py-1 rounded-full font-bold">
                01 • PPE
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#123D40]">
                  {isAr ? 'الأمن الصناعي ومهمات الوقاية الشخصية (PPE)' : 'Industrial Safety & PPE'}
                </h3>
                <p className="text-xs text-[#687174] mt-2 leading-relaxed">
                  {isAr 
                    ? 'أحذية سلامة S3 معتمدة، سترات عالية الوضوح Class 2، قفازات عمل ميكانيكية، وخوذات حماية الرأس والأعين.'
                    : 'Certified safety boots S3, hi-vis vests Class 2, heavy-duty gloves, and industrial head/eye protection.'
                  }
                </p>
                <div className="pt-3 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2 py-0.5 rounded-full bg-[#F3F0E9] text-[#123D40] border border-[#DCD3C5] font-medium">أحذية S1/S3</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F3F0E9] text-[#123D40] border border-[#DCD3C5] font-medium">سترات عاكسة</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F3F0E9] text-[#123D40] border border-[#DCD3C5] font-medium">قفازات ميكانيكية</span>
                </div>
              </div>
              <Link 
                to="/products?category=ppe" 
                className="inline-flex items-center justify-between text-xs font-bold text-[#B96543] pt-4 border-t border-[#DCD3C5]"
              >
                <span>{isAr ? 'استعراض كتالوج مهمات الوقاية' : 'Browse PPE Catalogue'}</span>
                <Arrow className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Panel 2: Fire Protection */}
          <div className="rounded-2xl overflow-hidden bg-[#FBFAF6] border border-[#DCD3C5] flex flex-col justify-between shadow-sm hover:border-[#123D40] transition-colors">
            <div className="h-60 overflow-hidden relative">
              <img 
                src="/assets/03-category-fire-protection.webp" 
                alt="Fire Protection" 
                className="w-full h-full object-cover rounded-t-2xl hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#123D40] text-white text-[11px] font-mono px-3 py-1 rounded-full font-bold">
                02 • FIRE
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#123D40]">
                  {isAr ? 'مكافحة الحريق ومعدات الطوارئ' : 'Fire Protection'}
                </h3>
                <p className="text-xs text-[#687174] mt-2 leading-relaxed">
                  {isAr 
                    ? 'طفايات حريق كيميائية وبودرة جافة، لوحات فوسفورية لتحديد المعدات، وتجهيزات مخارج الطوارئ ومسارات النجاة.'
                    : 'Chemical fire extinguishers, photoluminescent safety signage, and emergency wayfinding markers.'
                  }
                </p>
                <div className="pt-3 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2 py-0.5 rounded-full bg-[#F3F0E9] text-[#123D40] border border-[#DCD3C5] font-medium">طفايات حريق</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F3F0E9] text-[#123D40] border border-[#DCD3C5] font-medium">لوحات فوسفورية</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F3F0E9] text-[#123D40] border border-[#DCD3C5] font-medium">مخارج الطوارئ</span>
                </div>
              </div>
              <Link 
                to="/products?category=fire-safety" 
                className="inline-flex items-center justify-between text-xs font-bold text-[#B96543] pt-4 border-t border-[#DCD3C5]"
              >
                <span>{isAr ? 'استعراض مستلزمات الحريق' : 'Browse Fire Safety'}</span>
                <Arrow className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Panel 3: Safety Signs & Site Protection */}
          <div className="rounded-2xl overflow-hidden bg-[#FBFAF6] border border-[#DCD3C5] flex flex-col justify-between shadow-sm hover:border-[#123D40] transition-colors">
            <div className="h-60 overflow-hidden relative">
              <img 
                src="/assets/04-category-safety-signs.webp" 
                alt="Safety Signs & Site Protection" 
                className="w-full h-full object-cover rounded-t-2xl hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#123D40] text-white text-[11px] font-mono px-3 py-1 rounded-full font-bold">
                03 • SIGNS
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#123D40]">
                  {isAr ? 'لوحات السلامة وحماية الموقع الميداني' : 'Safety Signs & Site Protection'}
                </h3>
                <p className="text-xs text-[#687174] mt-2 leading-relaxed">
                  {isAr 
                    ? 'لوحات التحذير والمنع ISO 7010 من الألومنيوم والـ PVC المقاوم للشمس، ولوحات إلزام مهمات الوقاية للمواقع.'
                    : 'ISO 7010 hazard warning signboards, rigid weatherproof PVC/aluminum, and compulsory PPE site check markers.'
                  }
                </p>
                <div className="pt-3 flex flex-wrap gap-2 text-[11px]">
                  <span className="px-2 py-0.5 rounded-full bg-[#F3F0E9] text-[#123D40] border border-[#DCD3C5] font-medium">لوحات ISO 7010</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F3F0E9] text-[#123D40] border border-[#DCD3C5] font-medium">لوحات الإلزام</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#F3F0E9] text-[#123D40] border border-[#DCD3C5] font-medium">مسارات الإخلاء</span>
                </div>
              </div>
              <Link 
                to="/products?category=safety-signs" 
                className="inline-flex items-center justify-between text-xs font-bold text-[#B96543] pt-4 border-t border-[#DCD3C5]"
              >
                <span>{isAr ? 'استعراض لوحات السلامة' : 'Browse Site Signs'}</span>
                <Arrow className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6.6 Complementary Strip (Quieter, Subordinate Visuals) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5]">
          <div className="space-y-1 mb-6">
            <span className="text-xs font-mono uppercase text-[#687174] tracking-wider font-semibold">
              {isAr ? 'تجهيزات تكميلية للمشروعات' : 'Complementary Offerings'}
            </span>
            <h3 className="text-xl font-bold text-[#123D40]">
              {isAr ? 'حلول مساندة لتجهيز المواقع والبنية التحتية' : 'Supporting Infrastructure & Worksite Solutions'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Complementary 1: Solar */}
            <Link 
              to="/products?category=solar-lighting" 
              className="group flex items-center gap-4 p-4 rounded-xl border border-[#DCD3C5] bg-[#F3F0E9] hover:border-[#123D40] transition-colors"
            >
              <img 
                src="/assets/05-category-solar-lighting.webp" 
                alt="Solar Lighting" 
                className="w-20 h-20 object-cover rounded-xl shrink-0"
              />
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#687174]">04 • COMPLEMENTARY</span>
                <h4 className="text-sm font-bold text-[#123D40] group-hover:text-[#B96543] transition-colors">
                  {isAr ? 'كشافات وإنارة شمسية' : 'Solar Lighting'}
                </h4>
                <p className="text-xs text-[#687174] line-clamp-1">
                  {isAr ? 'إنارة الأسوار والمواقع بدون كابلات' : 'Off-grid worksite perimeter LED'}
                </p>
              </div>
            </Link>

            {/* Complementary 2: Traffic & Utility Safety */}
            <Link 
              to="/products?category=traffic-utilities" 
              className="group flex items-center gap-4 p-4 rounded-xl border border-[#DCD3C5] bg-[#F3F0E9] hover:border-[#123D40] transition-colors"
            >
              <img 
                src="/assets/14-traffic-cones-barriers.webp" 
                alt="Traffic Cones & Barriers" 
                className="w-20 h-20 object-cover rounded-xl shrink-0"
              />
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#687174]">05 • COMPLEMENTARY</span>
                <h4 className="text-sm font-bold text-[#123D40] group-hover:text-[#B96543] transition-colors">
                  {isAr ? 'سلامة الطرق والمرافق' : 'Traffic & Utility Safety'}
                </h4>
                <p className="text-xs text-[#687174] line-clamp-1">
                  {isAr ? 'أقماع وحواجز وأشرطة كشف المرافق' : 'Cones, barriers & detectable tapes'}
                </p>
              </div>
            </Link>

            {/* Complementary 3: EMT References */}
            <Link 
              to="/products?category=electrical-conduit" 
              className="group flex items-center gap-4 p-4 rounded-xl border border-[#DCD3C5] bg-[#F3F0E9] hover:border-[#123D40] transition-colors"
            >
              <img 
                src="/assets/19-emt-reference-material.webp" 
                alt="EMT Reference Material" 
                className="w-20 h-20 object-cover rounded-xl shrink-0"
              />
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#687174]">06 • REFERENCE ONLY</span>
                <h4 className="text-sm font-bold text-[#123D40] group-hover:text-[#B96543] transition-colors">
                  {isAr ? 'مراجع مواسير EMT' : 'EMT Conduit References'}
                </h4>
                <p className="text-xs text-[#687174] line-clamp-1">
                  {isAr ? 'كتالوجات موردين معتمدة قيد المراجعة' : 'Supplier catalogs under technical review'}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 6.7 Featured Products (4–6 Products with Exact Clean Tiles) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-[#B96543] tracking-wider font-semibold">
              {isAr ? 'نماذج من الكتالوج المعتمد' : 'Featured Industrial Specifications'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123D40]">
              {isAr ? 'أبرز بنود التوريد المطلوبة للمشروعات' : 'Featured Core Products'}
            </h2>
          </div>
          <Link to="/products" className="text-xs font-bold text-[#B96543] hover:underline flex items-center gap-1">
            <span>{isAr ? 'استعراض الدليل الشامل' : 'View Full Catalogue'}</span>
            <Arrow className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(prod => (
            <div 
              key={prod.id}
              className="rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] hover:border-[#123D40] transition-all flex flex-col justify-between overflow-hidden shadow-sm"
            >
              <div className="h-56 overflow-hidden relative bg-[#F3F0E9]">
                <img 
                  src={prod.primaryImage.replace('/assets/', '/assets/').replace('.webp', '.webp')} 
                  alt={isAr ? prod.titleAr : prod.titleEn}
                  className="w-full h-full object-cover rounded-t-2xl hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#FBFAF6]/90 text-[10px] font-mono text-[#123D40] font-bold border border-[#DCD3C5]">
                  {prod.sku}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#B96543] font-bold block">
                    {prod.tag}
                  </span>
                  <h3 className="text-base font-bold text-[#123D40] mt-1 line-clamp-1">
                    {isAr ? prod.titleAr : prod.titleEn}
                  </h3>
                  <p className="text-xs text-[#687174] mt-1.5 line-clamp-2 leading-relaxed">
                    {isAr ? prod.shortDescAr : prod.shortDescEn}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DCD3C5] flex items-center justify-between text-xs">
                  <Link
                    to={`/products/${prod.categorySlug}/${prod.id}`}
                    className="text-[#123D40] font-bold hover:text-[#B96543] flex items-center gap-1"
                  >
                    <span>{isAr ? 'عرض المواصفة' : 'View Product'}</span>
                    <Arrow className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/request-a-quote"
                    className="px-3 py-1.5 rounded-full bg-[#F3F0E9] hover:bg-[#DCD3C5] text-[#123D40] font-semibold text-[11px] border border-[#DCD3C5] transition-colors"
                  >
                    {isAr ? 'طلب مواصفة' : 'Request Spec'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6.8 Project & Supply Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase text-[#B96543] font-bold tracking-wider">
                {isAr ? 'منهجية التوريد والجاهزية الميدانية' : 'Field Operations & Supply Context'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123D40]">
                {isAr 
                  ? 'من قائمة الاحتياج إلى العينة والعرض الفني، نساعدك على تنظيم طلب التوريد.'
                  : 'From site bill of quantities to technical sample submittals, we structure your supply order.'
                }
              </h2>
              <p className="text-xs sm:text-sm text-[#687174] leading-relaxed">
                {isAr 
                  ? 'ندرك في مجموعة العاصمة الجديدة متطلبات الاستشاريين والمقاولين في سرعة فحص العينات، ومطابقة شهادات المطابقة، والتسليم الدفعي للمشروعات الحيوية لتفادي أي تأخير في جداول التنفيذ.'
                  : 'We understand consultant approval requirements, technical submittal structuring, and bulk staging schedules across Egyptian infrastructure sites.'
                }
              </p>
              <div className="pt-2 flex items-center gap-3">
                <Link
                  to="/request-a-quote"
                  className="px-6 py-3 rounded-full bg-[#123D40] text-white text-xs font-bold hover:bg-[#1a4f53] transition-colors"
                >
                  {isAr ? 'ابدأ تجهيز عرض التوريد' : 'Structure Supply Request'}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img 
                src="/assets/18-project-site-safety.webp" 
                alt="Project Site Safety Context" 
                className="w-full h-72 object-cover rounded-2xl border border-[#DCD3C5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6.9 Quality and Documentation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <img 
                src="/assets/20-quality-and-documentation.webp" 
                alt="ISO Quality & Documentation" 
                className="w-full h-80 object-cover rounded-2xl border border-[#DCD3C5]"
              />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase text-[#123D40] font-bold tracking-wider">
                {isAr ? 'الجودة والمستندات الفنية' : 'Quality & Technical Compliance'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123D40]">
                {isAr ? 'شهادات الجودة المعتمدة ISO 9001 و ISO 14001' : 'Verified ISO Certifications & Datasheets'}
              </h2>
              <p className="text-xs sm:text-sm text-[#687174] leading-relaxed">
                {isAr 
                  ? 'تمتلك الشركة شهادات نظم إدارة الجودة ونظم الإدارة البيئية بنطاق محدد لتوريد مهمات السلامة والصحة المهنية ومستلزمات الطرق. نوفر وثائق الاعتماد الفني والـ Data Sheets الأصلية لكل بند.'
                  : 'Certified under ISO 9001:2015 and ISO 14001:2015 for the verified supply of occupational safety gear, PPE, and traffic products.'
                }
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-[#DCD3C5] bg-[#F3F0E9] space-y-1.5">
                  <span className="text-xs font-bold text-[#123D40]">ISO 9001:2015</span>
                  <p className="text-[11px] text-[#687174]">نظام إدارة الجودة في التوريدات العمومية</p>
                  <a 
                    href="/documents/New_Capital_for_General_Supplies_-_Ahmed_Sharaf_El_Dien_ISO_9001-2015_Certificate_2026-2514.pdf"
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#B96543] hover:underline pt-1"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>تحميل الشهادة (PDF)</span>
                  </a>
                </div>

                <div className="p-4 rounded-xl border border-[#DCD3C5] bg-[#F3F0E9] space-y-1.5">
                  <span className="text-xs font-bold text-[#123D40]">ISO 14001:2015</span>
                  <p className="text-[11px] text-[#687174]">نظام الإدارة البيئية والمسؤولية المستدامة</p>
                  <a 
                    href="/documents/New_Capital_for_General_Supplies_-_Ahmed_Sharaf_El_Dien_ISO_14001-2015_Certificate_2026-2515.pdf"
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#B96543] hover:underline pt-1"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>تحميل الشهادة (PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.10 Clean Deep Teal Band: Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#123D40] text-white p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isAr 
                ? 'أرسل احتياج موقعك أو جدول الكميات، وسنساعدك في تنظيم طلب التوريد.'
                : 'Send your BOQ or site requirement. We will help structure the supply request.'
              }
            </h2>
            <p className="text-xs sm:text-sm text-[#DCD3C5] leading-relaxed">
              {isAr 
                ? 'فريق المبيعات والمكتب الفني يراجع جداول BOQ لتوفير العينات والشهادات المعتمدة في أسرع وقت.'
                : 'Our engineering sales desk reviews project BOQs to deliver approval samples and compliant specs promptly.'
              }
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/request-a-quote"
              className="px-8 py-3.5 rounded-full bg-[#B96543] text-white font-bold text-xs sm:text-sm hover:bg-[#a55636] transition-all shadow-md"
            >
              {isAr ? 'اطلب عرض توريد للمشروع' : 'Request a Supply Quote'}
            </Link>

            <a
              href={`https://wa.me/201010550857?text=${encodeURIComponent('مرحبًا مجموعة العاصمة الجديدة، نود التنسيق بشأن توريد مهمات لمشروعنا.')}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#53787A] hover:bg-[#436466] text-white font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <span>{isAr ? 'تواصل عبر واتساب' : 'WhatsApp Contact'}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

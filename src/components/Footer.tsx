import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Phone, Mail, MapPin, Award, CheckCircle, SlidersHorizontal } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, settings, categories } = useData();
  const isAr = lang === 'ar';

  return (
    <footer className="bg-[#123D40] text-[#DCD3C5] border-t border-[#DCD3C5]/30 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity & Legal Scope */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/logo.png" 
                alt="New Capital Logo" 
                className="w-10 h-10 object-contain brightness-110"
              />
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">
                  {isAr ? 'مجموعة العاصمة الجديدة' : 'NEW CAPITAL GROUP'}
                </span>
                <span className="text-[10px] uppercase text-[#AEBFAE] block font-mono">
                  {isAr ? 'للتوريدات العمومية والأمن الصناعي' : 'INDUSTRIAL SAFETY SUPPLIES'}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#DCD3C5]/90 leading-relaxed">
              {isAr 
                ? 'كيان متخصص في تجارة وتوريد مستلزمات الأمن الصناعي ومهمات السلامة والصحة المهنية للمشروعات الهندسية والمصانع والمراكز اللوجستية.'
                : 'A specialized supplier of industrial-safety and occupational health equipment for engineering projects, factories, logistics centers, and warehouses.'
              }
            </p>

            <div className="pt-2 border-t border-[#53787A]/40 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-[#AEBFAE] font-medium">
                <Award className="w-3.5 h-3.5 text-[#D89B2B]" />
                <span>ISO 9001:2015 & ISO 14001:2015</span>
              </div>
              <p className="text-[11px] text-[#DCD3C5]/70">
                {isAr ? 'نطاق الاعتماد الموثق: توريد منتجات ومهمات الصحة والسلامة المهنية ومهمات الطرق.' : 'Scope: Supply of occupational health, PPE, tapes & worksite traffic safety.'}
              </p>
            </div>
          </div>

          {/* Col 2: Core Supply Sectors */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono border-b border-[#53787A]/40 pb-2">
              {isAr ? 'أقسام التوريد الرئيسية' : 'Primary Specialties'}
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.filter(c => c.published).map(cat => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${cat.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between text-[#DCD3C5]/85"
                  >
                    <span>{isAr ? cat.nameAr : cat.nameEn}</span>
                    <span className="text-[10px] text-[#AEBFAE] font-mono">SPEC</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation & Quality */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono border-b border-[#53787A]/40 pb-2">
              {isAr ? 'المستندات والاعتمادات' : 'Compliance & Docs'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/quality" className="hover:text-white transition-colors flex items-center gap-1.5 text-[#DCD3C5]/85">
                  <CheckCircle className="w-3 h-3 text-[#AEBFAE]" />
                  <span>{isAr ? 'شهادات الجودة وإدارة البيئة' : 'ISO Quality Certificates'}</span>
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors text-[#DCD3C5]/85 block">
                  {isAr ? 'تحميل الكتالوجات الشاملة (PDF)' : 'Download Catalogs & Datasheets'}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors text-[#DCD3C5]/85 block">
                  {isAr ? 'سجل المراجع الهندسية للمشروعات' : 'Project References Register'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors text-[#DCD3C5]/85 block">
                  {isAr ? 'عن الشركة والرؤية الفنية' : 'About & Engineering Vision'}
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-[#D89B2B] hover:underline flex items-center gap-1 pt-2">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>{isAr ? 'لوحة إدارة المحتوى (CMS)' : 'Admin CMS Portal'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Technical Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono border-b border-[#53787A]/40 pb-2">
              {isAr ? 'بيانات الاتصال الميداني' : 'Direct Contact'}
            </h4>
            <div className="space-y-2.5 text-xs text-[#DCD3C5]/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D89B2B] shrink-0 mt-0.5" />
                <span>{isAr ? settings.addressAr : settings.addressEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D89B2B] shrink-0" />
                <span dir="ltr">{settings.landline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D89B2B] shrink-0" />
                <span className="truncate">{settings.primaryEmail}</span>
              </div>
              <div className="pt-2">
                <Link
                  to="/request-a-quote"
                  className="w-full py-2 px-3 rounded-full bg-[#B96543] hover:bg-[#a55636] text-white text-xs font-bold text-center block transition-colors"
                >
                  {isAr ? 'طلب خطة توريد للمشروع' : 'Request Project Supply Plan'}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#53787A]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#AEBFAE] gap-4">
          <p>© {new Date().getFullYear()} {isAr ? settings.legalNameAr : settings.legalNameEn}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</p>
          <p className="font-mono text-[11px] text-[#DCD3C5]/60">
            {isAr ? 'حلول توريد هندسية معتمدة' : 'Architectural Industrial Safety Supply • Cairo, Egypt'}
          </p>
        </div>
      </div>
    </footer>
  );
};

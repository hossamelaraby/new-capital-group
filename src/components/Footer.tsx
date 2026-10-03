import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Shield, Phone, Mail, MapPin, Award, CheckCircle, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, settings, categories } = useData();
  const isAr = lang === 'ar';

  return (
    <footer className="bg-[#070E14] text-[#D5C9B5] border-t border-[#D5C9B5]/15 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Identity & Legal Scope */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#1D3440] border border-[#E5A72B]/40 flex items-center justify-center text-[#E5A72B]">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-white tracking-tight block">
                  {isAr ? 'مجموعة العاصمة الجديدة' : 'NEW CAPITAL GROUP'}
                </span>
                <span className="text-[10px] uppercase text-[#D5C9B5]/60 block">
                  {isAr ? 'للتوريدات العمومية والسلامة الصناعية' : 'GENERAL SUPPLIES & SAFETY'}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D5C9B5]/80 leading-relaxed">
              {isAr ? settings.taglineAr : settings.taglineEn}
            </p>

            <div className="pt-2 border-t border-[#D5C9B5]/10 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <Award className="w-3.5 h-3.5" />
                <span>ISO 9001:2015 & ISO 14001:2015</span>
              </div>
              <p className="text-[11px] text-[#D5C9B5]/60">
                {isAr ? 'نطاق الاعتماد: توريد منتجات الصحة والسلامة المهنية ومهمات الطرق والتحذير.' : 'Scope: Supply of occupational health & safety supplies, tapes & traffic products.'}
              </p>
            </div>
          </div>

          {/* Col 2: Core Supply Sectors */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider protection-line pb-1">
              {isAr ? 'قطاعات التوريد المعتمدة' : 'Supply Categories'}
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.filter(c => c.published).map(cat => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${cat.slug}`}
                    className="hover:text-[#E5A72B] transition-colors flex items-center justify-between"
                  >
                    <span>{isAr ? cat.nameAr : cat.nameEn}</span>
                    <span className="text-[10px] text-[#D5C9B5]/40 font-mono">SPEC</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation & Quality */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider protection-line pb-1">
              {isAr ? 'الامتثال الفني والمستندات' : 'Compliance & Documents'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/quality" className="hover:text-[#E5A72B] transition-colors flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>{isAr ? 'شهادات الجودة وإدارة البيئة' : 'ISO Quality & Environmental Certs'}</span>
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#E5A72B] transition-colors">
                  {isAr ? 'تحميل الكتالوجات والـ Data Sheets' : 'Download Datasheets & Catalogs'}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#E5A72B] transition-colors">
                  {isAr ? 'سجل المشروعات والمراجع' : 'Project References Register'}
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-[#E5A72B] transition-colors">
                  {isAr ? 'تجهيزات المواقع والبنية التحتية' : 'Infrastructure & Jobsite Solutions'}
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-[#B8643F] hover:text-[#E5A72B] transition-colors flex items-center gap-1 pt-2">
                  <span>{isAr ? 'بوابة إدارة المحتوى والتسعير (CMS)' : 'Administrative CMS Portal'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Data */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider protection-line pb-1">
              {isAr ? 'بيانات الاتصال والتوريد' : 'Contact & Headquarters'}
            </h4>
            <div className="space-y-2.5 text-xs text-[#D5C9B5]/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B8643F] shrink-0 mt-0.5" />
                <span>{isAr ? settings.addressAr : settings.addressEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E5A72B] shrink-0" />
                <a href={`tel:${settings.landline}`} className="hover:text-[#E5A72B]" dir="ltr">
                  {settings.landline}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E5A72B] shrink-0" />
                <a href={`mailto:${settings.primaryEmail}`} className="hover:text-[#E5A72B]">
                  {settings.primaryEmail}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-[#D5C9B5]/60">
                <p>{isAr ? 'أرقام التوريدات المعتمدة:' : 'Active Sales Lines:'}</p>
                <div className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-white mt-1">
                  {settings.phoneNumbers.filter(p => p.public).slice(0, 3).map(p => (
                    <span key={p.number} dir="ltr" className="bg-[#1D3440] px-1.5 py-0.5 rounded text-[10px]">
                      {p.number}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Engineering Governance Disclaimer */}
        <div className="bg-[#12202A] border border-[#D5C9B5]/15 p-4 rounded text-xs text-[#D5C9B5]/80 mb-8 leading-relaxed">
          <p className="font-semibold text-white mb-1">
            {isAr ? 'إخلاء مسؤولية واعتماد المواصفات الهندسية:' : 'Technical Specification & Model Verification Note:'}
          </p>
          <p>
            {isAr 
              ? 'تعتمد إتاحة المنتج وأبعاده وخاماته وتصنيفاته وشهاداته ومواصفاته النهائية على الموديل والعينة والمستندات الفنية المعتمدة ومتطلبات المشروع. ولا تُعد هذه الصفحة وحدها شهادة مطابقة بحد ذاتها.'
              : 'Product availability, dimensions, materials, classifications, certificates, and final technical specifications depend on the approved model, sample, supplier documentation, and project requirements. This page is not a certificate of conformity by itself.'
            }
          </p>
        </div>

        {/* Copyright & Bottom Meta */}
        <div className="border-t border-[#D5C9B5]/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D5C9B5]/50 gap-4">
          <p>
            © {new Date().getFullYear()} {isAr ? settings.companyNameAr : settings.companyNameEn}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{isAr ? 'سنة التأسيس: 2021' : 'Est. 2021 Cairo, Egypt'}</span>
            <span>•</span>
            <span>{isAr ? 'نظام توريد هندسي متكامل' : 'Project-Oriented B2B Supply'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

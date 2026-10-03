import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { 
  Shield, 
  Menu, 
  X, 
  Globe, 
  FileText, 
  Phone, 
  ShoppingBag,
  SlidersHorizontal,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

export const Header: React.FC = () => {
  const { lang, setLang, quoteBasket, settings } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAr = lang === 'ar';

  const navLinks = [
    { path: '/', labelAr: 'الرئيسية', labelEn: 'Home' },
    { path: '/products', labelAr: 'دليل المنتجات', labelEn: 'Products' },
    { path: '/solutions', labelAr: 'حلول المشروعات', labelEn: 'Solutions' },
    { path: '/quality', labelAr: 'الجودة والشهادات', labelEn: 'Quality & ISO' },
    { path: '/projects', labelAr: 'مراجع المشروعات', labelEn: 'Projects' },
    { path: '/resources', labelAr: 'المكتبة الفنية', labelEn: 'Resources' },
    { path: '/about', labelAr: 'عن المجموعة', labelEn: 'About Us' },
    { path: '/contact', labelAr: 'اتصل بنا', labelEn: 'Contact' },
  ];

  const totalBasketCount = quoteBasket.length;

  return (
    <header className="sticky top-0 z-50 bg-[#0B1720]/95 backdrop-blur-md border-b border-[#D5C9B5]/15 text-[#F4F1EA]">
      {/* Top Utility Technical Rail */}
      <div className="hidden lg:block bg-[#1D3440]/60 border-b border-[#D5C9B5]/10 text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-[#D5C9B5]/80">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {isAr ? 'توريدات معتمدة للمشروعات القومية والصناعية' : 'Certified Supplies for Major Infrastructure & Industrial Sites'}
            </span>
            <span className="hidden xl:inline text-[#D5C9B5]/40">•</span>
            <span className="hidden xl:flex items-center gap-1">
              <span>{isAr ? 'سجل تجاري وترخيص توريدات عمومية' : 'General Supplies Spec ISO 9001 & 14001'}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${settings.landline}`} 
              className="flex items-center gap-1.5 text-[#D5C9B5]/90 hover:text-[#E5A72B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5A72B]" />
              <span dir="ltr">{settings.landline}</span>
            </a>
            <span className="text-[#D5C9B5]/30">|</span>
            <Link 
              to="/admin" 
              className="flex items-center gap-1 text-[#D5C9B5]/70 hover:text-white transition-colors"
              title="لوحة الإدارة والتحكم"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#B8643F]" />
              <span>{isAr ? 'لوحة التحكم (CMS)' : 'Admin CMS'}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Lockup */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-[#1D3440] border border-[#E5A72B]/40 flex items-center justify-center text-[#E5A72B] shadow-inner group-hover:border-[#E5A72B] transition-colors">
            <Shield className="w-6 h-6 stroke-[1.8]" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-lg text-white group-hover:text-[#E5A72B] transition-colors">
              {isAr ? 'مجموعة العاصمة الجديدة' : 'NEW CAPITAL GROUP'}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#D5C9B5]/70 -mt-0.5">
              {isAr ? 'للتوريدات العمومية والسلامة الصناعية' : 'GENERAL SUPPLIES & INDUSTRIAL SAFETY'}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                  isActive 
                    ? 'text-[#E5A72B] bg-[#1D3440]/60 border border-[#E5A72B]/30' 
                    : 'text-[#F4F1EA]/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {isAr ? link.labelAr : link.labelEn}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls & Language Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle Button */}
          <button
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[#D5C9B5]/20 text-xs font-medium hover:border-[#E5A72B] hover:text-[#E5A72B] transition-colors"
            title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-[#E5A72B]" />
            <span>{isAr ? 'EN' : 'العربية'}</span>
          </button>

          {/* Quote Basket Shortcut */}
          <Link
            to="/request-a-quote"
            className="relative flex items-center gap-2 px-3 py-1.5 rounded bg-[#1D3440] border border-[#D5C9B5]/25 text-xs text-[#F4F1EA] hover:border-[#E5A72B] transition-colors"
            title={isAr ? 'قائمة عروض الأسعار' : 'Quote Request List'}
          >
            <ShoppingBag className="w-4 h-4 text-[#E5A72B]" />
            <span className="hidden sm:inline">{isAr ? 'طلب التوريد' : 'Quote'}</span>
            {totalBasketCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#E5A72B] text-[#0B1720] font-bold text-[11px] flex items-center justify-center">
                {totalBasketCount}
              </span>
            )}
          </Link>

          {/* Primary Request Quote CTA */}
          <Link
            to="/request-a-quote"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded bg-[#E5A72B] text-[#0B1720] text-xs font-bold hover:bg-[#ffbe3b] transition-all shadow-md signal-notch"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{isAr ? 'اطلب عرض سعر' : 'Request Quote'}</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-[#D5C9B5] hover:text-white hover:bg-white/5"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1720] border-b border-[#D5C9B5]/20 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded text-sm font-medium ${
                  isActive 
                    ? 'text-[#E5A72B] bg-[#1D3440] border-r-4 border-[#E5A72B]' 
                    : 'text-[#F4F1EA]/80 hover:bg-white/5'
                }`}
              >
                {isAr ? link.labelAr : link.labelEn}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#D5C9B5]/15 flex flex-col gap-2">
            <Link
              to="/request-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded bg-[#E5A72B] text-[#0B1720] font-bold text-sm"
            >
              {isAr ? 'طلب عرض سعر للمشروع' : 'Request Project Quote'}
            </Link>
            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 rounded bg-[#1D3440] text-xs text-[#D5C9B5]"
            >
              {isAr ? 'الدخول إلى لوحة التحكم (CMS)' : 'Admin CMS Portal'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

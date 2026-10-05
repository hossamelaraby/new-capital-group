import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { 
  Menu, 
  X, 
  Globe, 
  FileText, 
  Phone, 
  ShoppingBag,
  SlidersHorizontal,
  Search,
  MapPin,
  ShieldCheck
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
    <header className="sticky top-0 z-50 bg-[#FBFAF6] border-b border-[#DCD3C5] text-[#1F292C]">
      {/* 6.2 Top Minimal Utility Bar */}
      <div className="border-b border-[#DCD3C5]/70 bg-[#F3F0E9] text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[#687174]">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#B96543]" />
              <span>Cairo / Egypt</span>
            </span>
            <span>•</span>
            <span className="font-medium text-[#123D40]">
              {isAr ? 'توريد مستلزمات الأمن الصناعي' : 'Industrial Safety Supply'}
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline text-[#687174]">
              {isAr ? 'توريدات المشروعات B2B' : 'B2B / Project Supply'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href={`tel:${settings.landline}`} 
              className="hidden sm:flex items-center gap-1.5 text-[#1F292C] hover:text-[#B96543] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#B96543]" />
              <span dir="ltr">{settings.landline}</span>
            </a>
            <span className="hidden sm:inline text-[#DCD3C5]">|</span>
            <span className="text-[11px] text-[#687174]">
              {isAr ? 'القاهرة، ج.م.ع' : 'Cairo, Egypt'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Architectural Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand Lockup with the New Eye-of-Horus / Triangle Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/assets/logo.png" 
            alt="New Capital Group Logo" 
            className="w-11 h-11 object-contain shrink-0 group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg text-[#123D40] tracking-tight group-hover:text-[#B96543] transition-colors">
              {isAr ? 'مجموعة العاصمة الجديدة' : 'NEW CAPITAL GROUP'}
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#687174] tracking-wider uppercase -mt-0.5">
              {isAr ? 'مستلزمات الأمن الصناعي ومهمات الوقاية الشخصية ومكافحة الحريق' : 'INDUSTRIAL SAFETY, PPE & FIRE PROTECTION'}
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
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive 
                    ? 'text-white bg-[#123D40]' 
                    : 'text-[#1F292C] hover:text-[#B96543] hover:bg-[#F3F0E9]'
                }`}
              >
                {isAr ? link.labelAr : link.labelEn}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls & Language Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#DCD3C5] bg-[#FBFAF6] text-xs font-bold text-[#1F292C] hover:border-[#B96543] hover:text-[#B96543] transition-colors"
            title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-[#53787A]" />
            <span>{isAr ? 'EN' : 'العربية'}</span>
          </button>

          {/* Quote Basket Shortcut */}
          <Link
            to="/request-a-quote"
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DCD3C5] bg-[#FBFAF6] text-xs font-bold text-[#1F292C] hover:border-[#123D40] transition-colors"
            title={isAr ? 'قائمة طلب عرض السعر' : 'Project Quote Request'}
          >
            <ShoppingBag className="w-4 h-4 text-[#123D40]" />
            <span className="hidden sm:inline">{isAr ? 'طلب التوريد' : 'Quote'}</span>
            {totalBasketCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#B96543] text-white font-bold text-[10px] flex items-center justify-center">
                {totalBasketCount}
              </span>
            )}
          </Link>

          {/* Primary Request Quote CTA */}
          <Link
            to="/request-a-quote"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#123D40] text-white text-xs font-bold hover:bg-[#1a4f53] transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{isAr ? 'طلب عرض توريد للمشروع' : 'Request Supply Plan'}</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1F292C] hover:bg-[#F3F0E9]"
            aria-label="القائمة الرئيسية"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBFAF6] border-b border-[#DCD3C5] px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'bg-[#123D40] text-white' : 'text-[#1F292C] hover:bg-[#F3F0E9]'
                }`}
              >
                {isAr ? link.labelAr : link.labelEn}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-[#DCD3C5] flex flex-col gap-2">
            <Link
              to="/request-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-full bg-[#123D40] text-white text-xs font-bold text-center block shadow-sm"
            >
              {isAr ? 'اطلب عرض توريد للمشروع' : 'Request a Project Supply Plan'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

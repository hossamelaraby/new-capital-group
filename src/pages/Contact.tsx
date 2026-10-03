import React from 'react';
import { useData } from '../context/DataContext';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const { lang, settings } = useData();
  const isAr = lang === 'ar';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <div className="space-y-3 border-b border-[#D5C9B5]/15 pb-6">
        <span className="text-xs font-mono uppercase text-[#E5A72B]">
          {isAr ? 'قنوات الاتصال والتنسيق المباشر' : 'Official Communications & Sourcing Hub'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {isAr ? 'اتصل بمجموعة العاصمة الجديدة للتوريدات' : 'Contact New Capital Group'}
        </h1>
        <p className="text-sm text-[#D5C9B5]/85 max-w-3xl leading-relaxed">
          {isAr
            ? 'فريق المبيعات والمكتب الفني متاح للرد على استفسارات المشروعات، تسعير جداول الكميات، وتنسيق تسليم العينات والشهادات.'
            : 'Get in touch with our sales and technical team for project pricing, tender documentation, and submittal samples.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Information Cards (Col 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Headquarters Card */}
            <div className="p-6 rounded-xl bg-[#12202A] border border-[#D5C9B5]/20 space-y-3">
              <div className="w-10 h-10 rounded bg-[#1D3440] flex items-center justify-center text-[#B8643F]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {isAr ? 'المقر الإداري والمراسلات' : 'Headquarters & Address'}
              </h3>
              <p className="text-xs text-[#D5C9B5]/80 leading-relaxed">
                {isAr ? settings.addressAr : settings.addressEn}
              </p>
            </div>

            {/* Direct Line Card */}
            <div className="p-6 rounded-xl bg-[#12202A] border border-[#D5C9B5]/20 space-y-3">
              <div className="w-10 h-10 rounded bg-[#1D3440] flex items-center justify-center text-[#E5A72B]">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {isAr ? 'الخط الأرضي والفاكس' : 'Landline Office'}
              </h3>
              <a href={`tel:${settings.landline}`} dir="ltr" className="text-sm font-mono text-white hover:text-[#E5A72B] block">
                {settings.landline}
              </a>
              <span className="text-[11px] text-[#D5C9B5]/60 block">
                {isAr ? 'متاح من 9 صباحًا حتى 5 مساءً' : '9:00 AM – 5:00 PM'}
              </span>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-xl bg-[#12202A] border border-[#D5C9B5]/20 space-y-3">
              <div className="w-10 h-10 rounded bg-[#1D3440] flex items-center justify-center text-[#E5A72B]">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {isAr ? 'المراسلات الرسمية وجداول الكميات' : 'Official RFQ Email'}
              </h3>
              <a href={`mailto:${settings.primaryEmail}`} className="text-xs text-white hover:text-[#E5A72B] block">
                {settings.primaryEmail}
              </a>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="p-6 rounded-xl bg-[#12202A] border border-[#D5C9B5]/20 space-y-3">
              <div className="w-10 h-10 rounded bg-emerald-950 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">
                {isAr ? 'خدمة واتساب للمشروعات' : 'WhatsApp Project Desk'}
              </h3>
              <a 
                href={`https://wa.me/201010550857?text=${encodeURIComponent('مرحبًا، نود الاستفسار عن توريد معدات سلامة لمشروعنا.')}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-emerald-400 font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>{isAr ? 'فتح محادثة واتساب فورية' : 'Start Instant Chat'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Active Public Phone Lines */}
          <div className="p-6 rounded-xl bg-[#12202A] border border-[#D5C9B5]/20 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider protection-line pb-1">
              {isAr ? 'أرقام مسؤولي المبيعات والتوريد الميداني المعتمدة' : 'Verified Sales & Field Supply Lines'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {settings.phoneNumbers.filter(p => p.public).map(phone => (
                <div key={phone.number} className="p-3 rounded bg-[#0B1720] border border-[#D5C9B5]/15 flex items-center justify-between">
                  <span className="text-[#D5C9B5]/80">{phone.label}</span>
                  <a href={`tel:${phone.number}`} dir="ltr" className="font-mono text-white hover:text-[#E5A72B] font-bold">
                    {phone.number}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right CTA Panel (Col 5) */}
        <div className="lg:col-span-5 bg-[#12202A] border border-[#D5C9B5]/20 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-white">
              {isAr ? 'هل لديك جدول كميات (BOQ) جاهز؟' : 'Have a Bill of Quantities (BOQ)?'}
            </h3>
            <p className="text-xs text-[#D5C9B5]/80 leading-relaxed">
              {isAr
                ? 'استخدم نموذج طلب عروض الأسعار المخصص لإرفاق وتحديد كافة البنود المطلوبة وتحديد زمن التوريد المناسب لمشروعك.'
                : 'Utilize our project request form to specify items, attach quantities, and define your delivery milestones.'
              }
            </p>
          </div>

          <Link
            to="/request-a-quote"
            className="w-full py-3.5 rounded bg-[#E5A72B] text-[#0B1720] font-bold text-xs sm:text-sm text-center block hover:bg-[#ffbe3b] transition-all signal-notch shadow-lg"
          >
            {isAr ? 'فتح نموذج طلب عرض الأسعار' : 'Open Dedicated BOQ Quote Form'}
          </Link>

          <div className="p-4 rounded-lg bg-[#0B1720] border border-[#D5C9B5]/15 text-xs text-[#D5C9B5]/70 space-y-1">
            <span className="font-semibold text-white block">
              {isAr ? 'الترخيص والسجل القانوني:' : 'Corporate Registry Details:'}
            </span>
            <p>
              {isAr ? settings.legalNameAr : settings.legalNameEn}
            </p>
            <p className="text-[11px] font-mono text-[#D5C9B5]/50 pt-1">
              {isAr ? 'تأسست عام 2021 | سجل توريدات عمومية' : 'Est. 2021 | General Supplies'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

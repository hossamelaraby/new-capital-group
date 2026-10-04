import React from 'react';
import { useData } from '../context/DataContext';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const { lang, settings } = useData();
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F3F0E9] text-[#1F292C]">
      <div className="space-y-3 border-b border-[#DCD3C5] pb-6">
        <span className="text-xs font-mono uppercase text-[#B96543] font-bold">
          {isAr ? 'قنوات الاتصال والتنسيق المباشر' : 'Official Communications & Sourcing Hub'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123D40]">
          {isAr ? 'اتصل بمجموعة العاصمة الجديدة للتوريدات' : 'Contact New Capital Group'}
        </h1>
        <p className="text-sm text-[#687174] max-w-3xl leading-relaxed">
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
            {/* Headquarters Card - 6th of October */}
            <div className="p-6 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#123D40]/10 flex items-center justify-center text-[#B96543]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#123D40]">
                {isAr ? 'المقر الرئيسي (مدينة 6 أكتوبر)' : 'Headquarters (6th of October)'}
              </h3>
              <p className="text-xs text-[#687174] leading-relaxed">
                {isAr ? '6 شارع النخيل، الحي المتميز، السادس من أكتوبر، الجيزة' : '6 El-Nakheel St, Al-Motamayez District, 6th of October City'}
              </p>
            </div>

            {/* Cairo Branch Card - Al Sahel */}
            <div className="p-6 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#123D40]/10 flex items-center justify-center text-[#123D40]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#123D40]">
                {isAr ? 'فرع ومخازن القاهرة (الساحل)' : 'Cairo Branch & Warehouse'}
              </h3>
              <p className="text-xs text-[#687174] leading-relaxed">
                {isAr ? '11 شارع الحرية، الساحل، القاهرة' : '11 El-Horreya St, Al-Sahel, Cairo'}
              </p>
            </div>

            {/* Direct Line Card */}
            <div className="p-6 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#123D40]/10 flex items-center justify-center text-[#123D40]">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#123D40]">
                {isAr ? 'الخط الأرضي والمكتب' : 'Landline Office'}
              </h3>
              <a href={`tel:${settings.landline}`} dir="ltr" className="text-sm font-mono text-[#123D40] hover:text-[#B96543] block font-bold">
                {settings.landline}
              </a>
              <span className="text-[11px] text-[#687174] block">
                {isAr ? 'متاح من 9 صباحًا حتى 5 مساءً' : '9:00 AM – 5:00 PM'}
              </span>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#123D40]/10 flex items-center justify-center text-[#B96543]">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#123D40]">
                {isAr ? 'البريد الإلكتروني الرسمي' : 'Official Inquiries Email'}
              </h3>
              <a href={`mailto:${settings.primaryEmail}`} className="text-xs font-mono text-[#123D40] hover:text-[#B96543] block break-all font-semibold">
                {settings.primaryEmail}
              </a>
              <span className="text-[11px] text-[#687174] block">
                {isAr ? 'نرد على طلبات التسعير خلال 24 ساعة' : 'Quotes answered within 24h'}
              </span>
            </div>

            {/* Working Hours Card */}
            <div className="p-6 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#123D40]/10 flex items-center justify-center text-[#123D40]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#123D40]">
                {isAr ? 'أيام وساعات العمل' : 'Working Hours'}
              </h3>
              <p className="text-xs text-[#687174] leading-relaxed">
                {isAr ? 'من السبت إلى الخميس: 9:00 ص – 5:00 م' : 'Saturday – Thursday: 9:00 AM – 5:00 PM'}
              </p>
              <span className="text-[11px] text-[#B96543] block font-medium">
                {isAr ? 'الجمعة عطلة أسبوعية' : 'Friday Closed'}
              </span>
            </div>
          </div>

          {/* Department Direct Contact List */}
          <div className="p-6 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-4 shadow-sm">
            <h3 className="text-sm font-bold text-[#123D40] border-b border-[#DCD3C5] pb-3">
              {isAr ? 'أرقام الاتصال المباشرة حسب الإدارة:' : 'Direct Department Contacts:'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {settings.phoneNumbers.filter(p => p.public).map((ph, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#F3F0E9] border border-[#DCD3C5] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#123D40]">{ph.label}</span>
                  <a href={`tel:${ph.number}`} dir="ltr" className="text-xs font-mono font-bold text-[#B96543] hover:underline">
                    {ph.number}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right CTA Card (Col 5) */}
        <div className="lg:col-span-5">
          <div className="p-8 rounded-2xl bg-[#123D40] text-white space-y-6 shadow-sm border border-[#123D40]">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#D89B2B]">
              <MessageSquare className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold">
                {isAr ? 'هل لديك جدول كميات أو طلب مشروع؟' : 'Have a BOQ or Project Inquiry?'}
              </h3>
              <p className="text-xs text-[#DCD3C5] leading-relaxed">
                {isAr
                  ? 'يمكنك إرسال مواصفة مشروعك أو جدول الكميات (BOQ) وسيقوم مهندسو المكتب الفني بدراستها وتقديم عرض توريد متكامل مع العينات والشهادات.'
                  : 'Submit your project specifications or bill of quantities. Our technical engineers will review your needs and issue a detailed supply quotation.'
                }
              </p>
            </div>

            <div className="pt-4 border-t border-white/20">
              <Link
                to="/request-a-quote"
                className="w-full py-3.5 px-6 rounded-full bg-[#B96543] hover:bg-[#a55636] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
              >
                <span>{isAr ? 'الانتقال لنموذج طلب عرض التوريد' : 'Submit Project Request'}</span>
                <Arrow className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

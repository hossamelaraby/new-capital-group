import React from 'react';
import { useData } from '../context/DataContext';
import { Award, FileDown, CheckCircle, Shield, FileCheck } from 'lucide-react';

export const Quality: React.FC = () => {
  const { lang, documents } = useData();
  const isAr = lang === 'ar';

  const certificates = documents.filter(d => d.type === 'certificate');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F3F0E9] text-[#1F292C]">
      {/* Header */}
      <div className="space-y-3 border-b border-[#DCD3C5] pb-6">
        <span className="text-xs font-mono uppercase text-[#B96543] font-bold">
          {isAr ? 'منظومة الجودة والامتثال البيئي' : 'Quality Assurance & Environmental Governance'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123D40]">
          {isAr ? 'الاعتمادات وشهادات الجودة (ISO)' : 'Quality Certifications & Technical Standards'}
        </h1>
        <p className="text-sm text-[#687174] max-w-3xl leading-relaxed">
          {isAr
            ? 'تلتزم شركة العاصمة الجديدة للتوريدات العمومية لأحمد شرف الدين بأعلى معايير إدارة الجودة والتوافق البيئي في عمليات التوريد والتخزين وخدمة مشروعات المقاولات الكبرى في مصر.'
            : 'New Capital for General Supplies adheres to verified international quality and environmental management standards in safety product sourcing, warehouse control, and project logistics.'
          }
        </p>
      </div>

      {/* Visual Feature: Quality & Documentation Panel */}
      <div className="rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D40]/10 border border-[#123D40]/20 text-xs font-bold text-[#123D40]">
            <FileCheck className="w-3.5 h-3.5 text-[#B96543]" />
            <span>{isAr ? 'التوثيق الفني والامتثال المعتمد' : 'Certified Technical Governance'}</span>
          </div>
          <h2 className="text-2xl font-bold text-[#123D40]">
            {isAr ? 'حوكمة الجودة وسلامة التوريدات الميدانية' : 'Quality Governance & Field Assurance'}
          </h2>
          <p className="text-xs sm:text-sm text-[#687174] leading-relaxed">
            {isAr
              ? 'تخضع كافة بنود التوريد للفحص الفني ومطابقة العينات للمواصفات القياسية المصرية والدولية (EN, ISO, ASTM). نضمن إرفاق شهادات الاختبار والتحليل مع كل دفعة توريد، مع توفير أصول شهادات ISO للجهات الرقابية واستشاريي المشروعات.'
              : 'All supply lots undergo rigorous technical verification, physical sample approval, and alignment with Egyptian and international standards. Certified test reports and original certificates are provided with every delivery.'
            }
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-xl bg-[#F3F0E9] border border-[#DCD3C5]">
              <span className="font-bold text-[#123D40] block">{isAr ? 'إدارة الجودة' : 'Quality Mgmt'}</span>
              <span className="text-[11px] text-[#687174] font-mono">ISO 9001:2015</span>
            </div>
            <div className="p-3 rounded-xl bg-[#F3F0E9] border border-[#DCD3C5]">
              <span className="font-bold text-[#123D40] block">{isAr ? 'الامتثال البيئي' : 'Environmental'}</span>
              <span className="text-[11px] text-[#687174] font-mono">ISO 14001:2015</span>
            </div>
            <div className="p-3 rounded-xl bg-[#F3F0E9] border border-[#DCD3C5]">
              <span className="font-bold text-[#123D40] block">{isAr ? 'المكتب الفني' : 'Datasheets'}</span>
              <span className="text-[11px] text-[#687174] font-mono">Verified Specs</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#DCD3C5] bg-[#F3F0E9] shadow-sm">
          <img
            src="/assets/20-quality-and-documentation.webp"
            alt="Quality and Documentation"
            className="w-full aspect-[4/3] object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* ISO Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map(cert => (
          <div 
            key={cert.id}
            className="rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] p-6 sm:p-8 space-y-6 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#DCD3C5] pb-4">
                <div className="flex items-center gap-2.5 text-[#123D40] font-bold">
                  <div className="w-9 h-9 rounded-full bg-[#123D40]/10 flex items-center justify-center text-[#B96543]">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-base sm:text-lg">{isAr ? cert.titleAr : cert.titleEn}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#F3F0E9] border border-[#DCD3C5] text-xs font-mono text-[#B96543] font-bold">
                  {cert.registrationNumber}
                </span>
              </div>

              {/* Certificate Metadata */}
              <div className="space-y-2 text-xs text-[#687174] bg-[#F3F0E9] p-4 rounded-xl font-mono border border-[#DCD3C5]">
                <div className="flex justify-between">
                  <span>{isAr ? 'رقم التسجيل المعتمد:' : 'Registration No:'}</span>
                  <span className="text-[#123D40] font-bold">{cert.registrationNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>{isAr ? 'تاريخ الإصدار بالشهادة:' : 'Certificate Issue Date:'}</span>
                  <span className="text-[#1F292C]">{cert.issueDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>{isAr ? 'سريان الصلاحية:' : 'Valid Until / Cycle Expiry:'}</span>
                  <span className="text-[#1F292C]">{cert.validUntil}</span>
                </div>
              </div>

              {/* Scope Wording */}
              <div className="space-y-1 text-xs">
                <span className="font-bold text-[#123D40] block">
                  {isAr ? 'نطاق الاعتماد المصرح به قانوناً:' : 'Official Certified Scope:'}
                </span>
                <p className="text-[#687174] leading-relaxed bg-[#FBFAF6] p-3 rounded-xl border border-[#DCD3C5]">
                  {isAr ? cert.noteAr : cert.noteEn}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#123D40] font-medium">
                <CheckCircle className="w-4 h-4 text-[#B96543]" />
                <span>{isAr ? 'مستند رسمي أصلي موثق ومتاح للتحميل' : 'Authentic verified certificate file'}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DCD3C5] flex items-center justify-between">
              <span className="text-xs text-[#687174] font-mono">{cert.sizeMb} • PDF</span>
              <a
                href={cert.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#123D40] hover:bg-[#1a4f53] text-white text-xs font-semibold transition-colors"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>{isAr ? 'تحميل الشهادة الأصلية (PDF)' : 'Download Original Certificate'}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

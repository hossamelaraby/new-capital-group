import React from 'react';
import { useData } from '../context/DataContext';
import { Award, FileDown, CheckCircle, Shield, AlertTriangle } from 'lucide-react';

export const Quality: React.FC = () => {
  const { lang, documents } = useData();
  const isAr = lang === 'ar';

  const certificates = documents.filter(d => d.type === 'certificate');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3 border-b border-[#D5C9B5]/15 pb-6">
        <span className="text-xs font-mono uppercase text-emerald-400">
          {isAr ? 'منظومة الجودة والامتثال البيئي' : 'Quality Assurance & Environmental Governance'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {isAr ? 'الاعتمادات وشهادات الجودة (ISO)' : 'Quality Certifications & Technical Standards'}
        </h1>
        <p className="text-sm text-[#D5C9B5]/85 max-w-3xl leading-relaxed">
          {isAr
            ? 'تلتزم مجموعة العاصمة الجديدة لأحمد شرف الدين بأعلى معايير إدارة الجودة والتوافق البيئي في عمليات التوريد والتخزين وخدمة مشروعات المقاولات الكبرى في مصر.'
            : 'New Capital for General Supplies adheres to verified international quality and environmental management standards in safety product sourcing, warehouse control, and project logistics.'
          }
        </p>
      </div>

      {/* ISO Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map(cert => (
          <div 
            key={cert.id}
            className="rounded-xl bg-[#12202A] border border-[#D5C9B5]/20 p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#D5C9B5]/10 pb-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Award className="w-6 h-6" />
                  <span className="text-lg">{isAr ? cert.titleAr : cert.titleEn}</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#0B1720] border border-[#D5C9B5]/20 text-xs font-mono text-[#E5A72B]">
                  {cert.registrationNumber}
                </span>
              </div>

              {/* Certificate Metadata */}
              <div className="space-y-2 text-xs text-[#D5C9B5]/80 bg-[#0B1720] p-4 rounded-lg font-mono">
                <div className="flex justify-between">
                  <span>{isAr ? 'رقم التسجيل المعتمد:' : 'Registration No:'}</span>
                  <span className="text-white font-bold">{cert.registrationNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>{isAr ? 'تاريخ الإصدار بالشهادة:' : 'Certificate Issue Date:'}</span>
                  <span className="text-white">{cert.issueDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>{isAr ? 'سريان الصلاحية:' : 'Valid Until / Cycle Expiry:'}</span>
                  <span className="text-white">{cert.validUntil}</span>
                </div>
              </div>

              {/* Scope */}
              <div className="space-y-1.5 text-xs text-[#D5C9B5]/90">
                <span className="font-bold text-white block">
                  {isAr ? 'نطاق الاعتماد المصرح به:' : 'Accredited Certification Scope:'}
                </span>
                <p className="leading-relaxed">
                  {isAr ? cert.noteAr : cert.noteEn}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D5C9B5]/10">
              <a
                href={cert.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded bg-[#1D3440] hover:bg-[#284757] text-[#E5A72B] font-bold text-xs transition-colors flex items-center justify-center gap-2 border border-[#E5A72B]/30"
              >
                <FileDown className="w-4 h-4" />
                <span>{isAr ? 'تحميل الشهادة الرسمية الكاملة (PDF)' : 'Download Original Certificate (PDF)'}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Corporate Quality Approach */}
      <div className="bg-[#12202A] border border-[#D5C9B5]/20 rounded-xl p-6 sm:p-8 space-y-6">
        <h3 className="text-lg font-bold text-white protection-line pb-2">
          {isAr ? 'منهجية الجودة والفحص قبل التوريد' : 'Pre-Delivery Inspection & Quality Methodology'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#D5C9B5]/85">
          <div className="p-4 rounded bg-[#0B1720] border border-[#D5C9B5]/15 space-y-2">
            <span className="w-6 h-6 rounded bg-[#1D3440] text-[#E5A72B] flex items-center justify-center font-bold">1</span>
            <h4 className="font-bold text-white">{isAr ? 'مطابقة العينات والمواصفات' : 'Sample Verification'}</h4>
            <p className="leading-relaxed">
              {isAr 
                ? 'تقديم عينات معتمدة للمهندس الاستشاري للمطابقة مع جداول المواصفات الخاصة بالمشروع قبل التوريد بكميات.'
                : 'Physical samples submitted to supervising consultants for compliance check against tender specs before batch dispatch.'
              }
            </p>
          </div>

          <div className="p-4 rounded bg-[#0B1720] border border-[#D5C9B5]/15 space-y-2">
            <span className="w-6 h-6 rounded bg-[#1D3440] text-[#E5A72B] flex items-center justify-center font-bold">2</span>
            <h4 className="font-bold text-white">{isAr ? 'الفحص الموقعي والشهادات' : 'Datasheets & Test Certs'}</h4>
            <p className="leading-relaxed">
              {isAr 
                ? 'إرفاق بطاقات البيانات الفنية (Datasheets) وشهادات الفحص الميكانيكي أو الكهربائي المعتمدة للموديلات.'
                : 'Official product technical datasheets and mechanical or electrical ratings provided with supply dossiers.'
              }
            </p>
          </div>

          <div className="p-4 rounded bg-[#0B1720] border border-[#D5C9B5]/15 space-y-2">
            <span className="w-6 h-6 rounded bg-[#1D3440] text-[#E5A72B] flex items-center justify-center font-bold">3</span>
            <h4 className="font-bold text-white">{isAr ? 'الالتزام البيئي والسلامة' : 'Environmental Logistics'}</h4>
            <p className="leading-relaxed">
              {isAr 
                ? 'تخزين وتعبئة آمنة للمواد وفق نظام ISO 14001 لتقليل الفاقد وتأمين التوصيل السليم للمواقع دون تلف.'
                : 'Controlled warehouse storage and robust packaging complying with ISO 14001 for zero jobsite wastage.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

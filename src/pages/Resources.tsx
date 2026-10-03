import React from 'react';
import { useData } from '../context/DataContext';
import { FileDown, ExternalLink, Award, BookOpen, Layers, CheckCircle } from 'lucide-react';

export const Resources: React.FC = () => {
  const { lang, documents } = useData();
  const isAr = lang === 'ar';

  const publicDocuments = documents.filter(d => d.publicDisplay);
  const certificates = publicDocuments.filter(d => d.type === 'certificate');
  const catalogs = publicDocuments.filter(d => d.type === 'catalog' || d.type === 'brochure');
  const externalRefs = publicDocuments.filter(d => d.type === 'external_reference');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-16">
      {/* Page Title */}
      <div className="space-y-3 border-b border-[#D5C9B5]/15 pb-6">
        <span className="text-xs font-mono uppercase text-[#E5A72B]">
          {isAr ? 'المكتبة الهندسية والكتالوجات المعتمدة' : 'Official Downloads & Technical Library'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {isAr ? 'الكتالوجات، شهادات الجودة والملفات الفنية' : 'Official Catalogs, ISO Certificates & Submittals'}
        </h1>
        <p className="text-sm text-[#D5C9B5]/85 max-w-3xl leading-relaxed">
          {isAr
            ? 'يمكن لكافة العملاء، الاستشاريين، ومسؤولي السلامة والمشتريات تحميل الكتالوجات الشاملة للشركة، شهادات ISO 9001 و ISO 14001 الأصلية، والمراجع الفنية للمواسير والتجهيزات بصيغة PDF مباشرة.'
            : 'Explore and download complete New Capital catalogs, verified ISO 9001 & 14001 certificates, and technical engineering references in high-resolution PDF format.'
          }
        </p>
      </div>

      {/* 1. Master Company Catalogs Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-[#D5C9B5]/10 pb-3">
          <BookOpen className="w-5 h-5 text-[#E5A72B]" />
          <h2 className="text-xl font-bold text-white">
            {isAr ? '1. كتالوجات الشركة الرسمية (New Capital Catalogs)' : '1. Official Company Catalogs'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogs.map(doc => (
            <div
              key={doc.id}
              className="rounded-xl bg-[#12202A] border border-[#D5C9B5]/20 p-6 flex flex-col justify-between space-y-4 hover:border-[#E5A72B] transition-all shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-[#1D3440] text-[10px] font-mono text-[#E5A72B] uppercase">
                    {doc.type}
                  </span>
                  <span className="text-xs font-mono text-[#E5A72B] font-bold">{doc.sizeMb}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#E5A72B] transition-colors">
                  {isAr ? doc.titleAr : doc.titleEn}
                </h3>

                {doc.noteAr && (
                  <p className="text-xs text-[#D5C9B5]/75 leading-relaxed">
                    {isAr ? doc.noteAr : doc.noteEn}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#D5C9B5]/10">
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded bg-[#E5A72B] hover:bg-[#ffbe3b] text-[#0B1720] font-bold text-xs transition-colors flex items-center justify-center gap-2 signal-notch shadow-md"
                >
                  <FileDown className="w-4 h-4 stroke-[2.5]" />
                  <span>{isAr ? 'تحميل الكتالوج كاملاً (PDF)' : 'Download Full PDF'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ISO Certificates Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-[#D5C9B5]/10 pb-3">
          <Award className="w-5 h-5 text-emerald-400" />
          <h2 className="text-xl font-bold text-white">
            {isAr ? '2. شهادات الجودة والاعتمادات الرسمية (ISO Certificates)' : '2. Quality Management Accreditations'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map(doc => (
            <div
              key={doc.id}
              className="rounded-xl bg-[#12202A] border border-[#D5C9B5]/20 p-6 flex flex-col justify-between space-y-4 hover:border-emerald-500/60 transition-all shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {doc.registrationNumber}
                  </span>
                  <span className="text-xs font-mono text-[#D5C9B5]/60">{doc.sizeMb}</span>
                </div>

                <h3 className="text-base font-bold text-white">
                  {isAr ? doc.titleAr : doc.titleEn}
                </h3>

                <div className="p-3 rounded bg-[#0B1720] text-xs text-[#D5C9B5]/80 font-mono space-y-1">
                  <div>{isAr ? `تاريخ الإصدار: ${doc.issueDate}` : `Issue: ${doc.issueDate}`}</div>
                  <div>{isAr ? `سريان الشهادة: ${doc.validUntil}` : `Valid: ${doc.validUntil}`}</div>
                </div>

                {doc.noteAr && (
                  <p className="text-xs text-[#D5C9B5]/80 leading-relaxed">
                    {isAr ? doc.noteAr : doc.noteEn}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#D5C9B5]/10">
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 rounded bg-[#1D3440] hover:bg-[#274657] text-[#E5A72B] font-bold text-xs transition-colors flex items-center justify-center gap-2 border border-[#E5A72B]/30"
                >
                  <FileDown className="w-4 h-4" />
                  <span>{isAr ? 'تحميل الشهادة الرسمية الأصلية (PDF)' : 'Download Original Certificate PDF'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Technical Supplier References & Conduit Catalogs */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-[#D5C9B5]/10 pb-3">
          <Layers className="w-5 h-5 text-[#B8643F]" />
          <h2 className="text-xl font-bold text-white">
            {isAr ? '3. المراجع الفنية وكتالوجات التمديدات الكهروميكانيكية (EMT & Conduit)' : '3. Technical Conduit Engineering References'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {externalRefs.map(doc => (
            <div
              key={doc.id}
              className="rounded-xl bg-[#12202A] border border-[#D5C9B5]/15 p-5 flex flex-col justify-between space-y-3 hover:border-[#D5C9B5]/40 transition-all text-xs"
            >
              <div>
                <span className="font-mono text-[#D5C9B5]/50 block">{doc.sizeMb}</span>
                <h4 className="font-bold text-white mt-1 text-sm">{isAr ? doc.titleAr : doc.titleEn}</h4>
                {doc.noteAr && <p className="text-[#D5C9B5]/70 mt-1.5 line-clamp-3">{isAr ? doc.noteAr : doc.noteEn}</p>}
              </div>

              <a
                href={doc.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="pt-2 text-[#E5A72B] hover:underline flex items-center gap-1 font-bold"
              >
                <span>{isAr ? 'تنزيل المرجع (PDF)' : 'Download PDF'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

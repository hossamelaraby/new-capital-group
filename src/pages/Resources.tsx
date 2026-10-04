import React from 'react';
import { useData } from '../context/DataContext';
import { FileDown, BookOpen, Layers, CheckCircle } from 'lucide-react';

export const Resources: React.FC = () => {
  const { lang, documents } = useData();
  const isAr = lang === 'ar';

  const publicDocuments = documents.filter(d => d.publicDisplay);
  const certificates = publicDocuments.filter(d => d.type === 'certificate');
  const catalogs = publicDocuments.filter(d => d.type === 'catalog' || d.type === 'brochure');
  const externalRefs = publicDocuments.filter(d => d.type === 'external_reference');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-16 bg-[#F3F0E9] text-[#1F292C]">
      {/* Page Title */}
      <div className="space-y-3 border-b border-[#DCD3C5] pb-6">
        <span className="text-xs font-mono uppercase text-[#B96543] font-bold">
          {isAr ? 'المكتبة الهندسية والكتالوجات المعتمدة' : 'Official Downloads & Technical Library'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123D40]">
          {isAr ? 'الكتالوجات، شهادات الجودة والملفات الفنية' : 'Official Catalogs, ISO Certificates & Submittals'}
        </h1>
        <p className="text-sm text-[#687174] max-w-3xl leading-relaxed">
          {isAr
            ? 'يمكن لكافة العملاء، الاستشاريين، ومسؤولي السلامة والمشتريات تحميل الكتالوجات الشاملة للشركة، شهادات ISO 9001 و ISO 14001 الأصلية، والمراجع الفنية للمواسير والتجهيزات بصيغة PDF مباشرة.'
            : 'Explore and download complete New Capital catalogs, verified ISO 9001 & 14001 certificates, and technical engineering references in high-resolution PDF format.'
          }
        </p>
      </div>

      {/* 1. Master Company Catalogs Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-[#DCD3C5] pb-3">
          <div className="w-8 h-8 rounded-full bg-[#123D40]/10 flex items-center justify-center text-[#B96543]">
            <BookOpen className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold text-[#123D40]">
            {isAr ? '1. كتالوجات الشركة الرسمية (New Capital Catalogs)' : '1. Official Company Catalogs'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogs.map(doc => (
            <div
              key={doc.id}
              className="rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] p-6 flex flex-col justify-between space-y-4 hover:border-[#123D40] transition-all shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#123D40]/10 text-[10px] font-mono text-[#123D40] uppercase font-bold">
                    {doc.type}
                  </span>
                  <span className="text-xs font-mono text-[#B96543] font-bold">{doc.sizeMb}</span>
                </div>

                <h3 className="text-base font-bold text-[#123D40]">
                  {isAr ? doc.titleAr : doc.titleEn}
                </h3>

                {doc.noteAr && (
                  <p className="text-xs text-[#687174] leading-relaxed">
                    {isAr ? doc.noteAr : doc.noteEn}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#DCD3C5] flex items-center justify-between">
                <span className="text-[11px] text-[#687174] font-mono">PDF • High Res</span>
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#123D40] hover:bg-[#1a4f53] text-white text-xs font-semibold transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>{isAr ? 'تحميل الملف' : 'Download'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ISO Certificates Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-[#DCD3C5] pb-3">
          <div className="w-8 h-8 rounded-full bg-[#123D40]/10 flex items-center justify-center text-[#B96543]">
            <CheckCircle className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold text-[#123D40]">
            {isAr ? '2. شهادات الاعتماد والامتثال البيئي (Original ISO Certificates)' : '2. Quality & Environmental Certificates'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map(doc => (
            <div
              key={doc.id}
              className="rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] p-6 flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#123D40]/10 text-[#123D40] text-xs font-mono font-bold">
                    {doc.registrationNumber}
                  </span>
                  <span className="text-xs font-mono text-[#B96543] font-bold">{doc.sizeMb}</span>
                </div>

                <h3 className="text-base font-bold text-[#123D40]">
                  {isAr ? doc.titleAr : doc.titleEn}
                </h3>

                <p className="text-xs text-[#687174] leading-relaxed">
                  {isAr ? doc.noteAr : doc.noteEn}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCD3C5] flex items-center justify-between">
                <span className="text-xs text-[#123D40] font-mono font-medium">Original Verified PDF</span>
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#123D40] hover:bg-[#1a4f53] text-white text-xs font-semibold transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>{isAr ? 'تحميل الشهادة' : 'Download Cert'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. External Technical References */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-[#DCD3C5] pb-3">
          <div className="w-8 h-8 rounded-full bg-[#123D40]/10 flex items-center justify-center text-[#B96543]">
            <Layers className="w-4 h-4" />
          </div>
          <h2 className="text-xl font-bold text-[#123D40]">
            {isAr ? '3. المراجع الفنية وكتالوجات التمديدات الكهروميكانيكية (EMT)' : '3. EMT & Technical References'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {externalRefs.map(doc => (
            <div
              key={doc.id}
              className="rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] p-5 flex flex-col justify-between space-y-4 hover:border-[#123D40] transition-colors shadow-sm"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#687174] block uppercase">
                  SUPPLIER SPEC ARCHIVE
                </span>
                <h3 className="text-sm font-bold text-[#123D40] line-clamp-2">
                  {isAr ? doc.titleAr : doc.titleEn}
                </h3>
                <p className="text-xs text-[#687174] line-clamp-2 leading-relaxed">
                  {isAr ? doc.noteAr : doc.noteEn}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCD3C5] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#B96543] font-bold">{doc.sizeMb}</span>
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-[#F3F0E9] hover:bg-[#DCD3C5] text-[#123D40] text-xs font-semibold transition-colors flex items-center gap-1 border border-[#DCD3C5]"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

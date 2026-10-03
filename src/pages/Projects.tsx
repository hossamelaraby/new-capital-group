import React from 'react';
import { useData } from '../context/DataContext';
import { Building2, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const { lang, projects } = useData();
  const isAr = lang === 'ar';

  const visibleProjects = projects.filter(p => p.publicDisplay);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <div className="space-y-3 border-b border-[#D5C9B5]/15 pb-6">
        <span className="text-xs font-mono uppercase text-[#B8643F]">
          {isAr ? 'سجل المراجع الهندسية والمشروعات' : 'Engineering References & Field Context'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {isAr ? 'بيئات المشروعات ومجالات التوريد المعمول بها' : 'Project References & Application Environments'}
        </h1>
        <p className="text-sm text-[#D5C9B5]/85 max-w-3xl leading-relaxed">
          {isAr
            ? 'تستعرض هذه الصفحة بيئات المشروعات الكبرى في جمهورية مصر العربية التي صُممت منتجاتنا لتلبية اشتراطاتها الفنية وفق كود السلامة ومواصفات الجهات المالكة والاستشارية.'
            : 'Major Egyptian project environments where our product lines are specified and referenced to meet consultant and contractor safety criteria.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map(proj => (
          <div
            key={proj.id}
            className="rounded-xl bg-[#12202A] border border-[#D5C9B5]/20 overflow-hidden shadow-lg flex flex-col justify-between"
          >
            {proj.image && (
              <div className="h-44 overflow-hidden relative">
                <img
                  src={proj.image}
                  alt={isAr ? proj.titleAr : proj.titleEn}
                  className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#0B1720]/80 text-[10px] font-mono text-[#E5A72B] border border-[#D5C9B5]/20">
                  {proj.sectorEn}
                </span>
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#1D3440]/90 text-[10px] font-mono text-amber-300">
                  {isAr ? 'مرجع هندسي' : 'Reference Only'}
                </span>
              </div>
            )}

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white">
                  {isAr ? proj.titleAr : proj.titleEn}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#D5C9B5]/70">
                  <MapPin className="w-3.5 h-3.5 text-[#B8643F] shrink-0" />
                  <span>{isAr ? proj.locationAr : proj.locationEn}</span>
                </div>
                <p className="text-xs text-[#D5C9B5]/80 leading-relaxed pt-1">
                  {isAr ? proj.descriptionAr : proj.descriptionEn}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D5C9B5]/10 space-y-1.5 text-xs">
                <span className="font-semibold text-white block">
                  {isAr ? 'نطاق بنود التوريد المتوافقة:' : 'Applicable Supply Scope:'}
                </span>
                <p className="text-[#D5C9B5]/80 leading-relaxed font-mono text-[11px]">
                  {isAr ? proj.scopeAr : proj.scopeEn}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Provenance and Legal Disclaimer for Project Claims */}
      <div className="p-5 rounded-xl bg-[#0B1720] border border-[#D5C9B5]/15 text-xs text-[#D5C9B5]/75 space-y-2">
        <div className="flex items-center gap-2 text-[#E5A72B] font-bold">
          <CheckCircle className="w-4 h-4" />
          <span>{isAr ? 'قواعد دقة التوثيق والمراجع الهندسية:' : 'Content Provenance & Verification Standards:'}</span>
        </div>
        <p className="leading-relaxed">
          {isAr
            ? 'تُدرج أسماء المشروعات في هذا القسم كأمثلة تطبيقية ونماذج للبيئات والمواصفات المعمول بها في كود البناء والمرافق المصري، ولا يمثل ذكر أي مشروع بمفرده ادعاءً بالاحتكار أو التنفيذ المباشر إلا وفق تعاقدات التوريد المعتمدة وسجلات أوامر الإسناد الرسمية المسجلة لدى الشركة.'
            : 'Project names and references are cataloged to showcase the operational and technical environments our products are engineered for. Actual site supply orders are governed by formal submittals and contracts on record.'
          }
        </p>
      </div>
    </div>
  );
};

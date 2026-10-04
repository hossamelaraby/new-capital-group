import React from 'react';
import { useData } from '../context/DataContext';
import { MapPin, Shield, CheckCircle, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Projects: React.FC = () => {
  const { lang, projects } = useData();
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const visibleProjects = projects.filter(p => p.publicDisplay);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F3F0E9] text-[#1F292C]">
      {/* Header */}
      <div className="space-y-3 border-b border-[#DCD3C5] pb-6">
        <span className="text-xs font-mono uppercase text-[#B96543] font-bold">
          {isAr ? 'سجل المراجع والقطاعات الهندسية' : 'Engineering Sector References'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123D40]">
          {isAr ? 'مشروعات وقطاعات التوريد المستهدفة' : 'Project Sourcing References & Industrial Sectors'}
        </h1>
        <p className="text-sm text-[#687174] max-w-3xl leading-relaxed">
          {isAr
            ? 'سجل قطاعات المشروعات الكبرى التي تتوافق معها بنود ومواصفات توريد مجموعة العاصمة الجديدة من مهمات السلامة والأشرطة التحذيرية ولوحات المواقع.'
            : 'Sector register representing target civil and industrial project environments aligned with New Capital general safety supply capabilities.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map(proj => (
          <div
            key={proj.id}
            className="rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#123D40] transition-colors"
          >
            {proj.image && (
              <div className="h-48 overflow-hidden relative bg-[#F3F0E9]">
                <img
                  src={proj.image}
                  alt={isAr ? proj.titleAr : proj.titleEn}
                  className="w-full h-full object-cover rounded-t-2xl hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#FBFAF6]/90 text-[10px] font-mono text-[#123D40] font-bold border border-[#DCD3C5]">
                  {proj.sectorEn}
                </span>
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#123D40]/90 text-[10px] font-mono text-white font-bold">
                  {isAr ? 'مرجع هندسي' : 'Reference Only'}
                </span>
              </div>
            )}

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-[#123D40]">
                  {isAr ? proj.titleAr : proj.titleEn}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#687174]">
                  <MapPin className="w-3.5 h-3.5 text-[#B96543] shrink-0" />
                  <span>{isAr ? proj.locationAr : proj.locationEn}</span>
                </div>
                <p className="text-xs text-[#687174] leading-relaxed pt-1">
                  {isAr ? proj.descriptionAr : proj.descriptionEn}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCD3C5] space-y-2 text-xs">
                <span className="font-bold text-[#123D40] block">
                  {isAr ? 'نطاق بنود التوريد المتوافقة:' : 'Applicable Supply Scope:'}
                </span>
                <p className="text-[#687174] leading-relaxed font-mono text-[11px] bg-[#F3F0E9] p-2.5 rounded-xl border border-[#DCD3C5]">
                  {isAr ? proj.scopeAr : proj.scopeEn}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-[#687174] font-mono">
                    {isAr ? 'تصنيف: مرجع قطاعي' : 'Status: Sector Reference'}
                  </span>
                  <Link
                    to="/request-a-quote"
                    className="text-xs font-bold text-[#B96543] hover:text-[#a55636] flex items-center gap-1 transition-colors"
                  >
                    <span>{isAr ? 'طلب خطة توريد' : 'Supply Plan'}</span>
                    <Arrow className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

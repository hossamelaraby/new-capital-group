import React, { useState, useMemo, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { MapPin, Shield, CheckCircle, Search, ArrowRight, ArrowLeft, Filter, Building2, HardHat, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { MajorClients } from '../components/MajorClients';

export const Projects: React.FC = () => {
  const { lang, projects } = useData();
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedSector, setSelectedSector] = useState<string>('all');

  useEffect(() => {
    const s = searchParams.get('search');
    if (s !== null) {
      setSearchQuery(s);
    }
  }, [searchParams]);

  const visibleProjects = projects.filter(p => p.publicDisplay);

  // Extract unique sectors
  const sectors = useMemo(() => {
    const set = new Set<string>();
    visibleProjects.forEach(p => {
      const s = isAr ? p.sectorAr : p.sectorEn;
      if (s) set.add(s);
    });
    return Array.from(set);
  }, [visibleProjects, isAr]);

  const filteredProjects = useMemo(() => {
    return visibleProjects.filter(p => {
      if (selectedSector !== 'all') {
        const s = isAr ? p.sectorAr : p.sectorEn;
        if (s !== selectedSector) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const title = (p.titleAr + ' ' + p.titleEn).toLowerCase();
        const loc = (p.locationAr + ' ' + p.locationEn).toLowerCase();
        const desc = (p.descriptionAr + ' ' + p.descriptionEn).toLowerCase();
        const scope = (p.scopeAr + ' ' + p.scopeEn).toLowerCase();
        return title.includes(q) || loc.includes(q) || desc.includes(q) || scope.includes(q);
      }
      return true;
    });
  }, [visibleProjects, selectedSector, searchQuery, isAr]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10 bg-[#F3F0E9] text-[#1F292C]">
      {/* Header */}
      <div className="space-y-4 border-b border-[#DCD3C5] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123D40]/10 text-xs font-mono font-bold text-[#123D40]">
            <Building2 className="w-3.5 h-3.5 text-[#B96543]" />
            <span>{isAr ? 'سجل سابقة الأعمال والتوريدات' : 'Verified Project & Supply Portfolio'}</span>
            <span>•</span>
            <span className="text-[#B96543]">{visibleProjects.length} {isAr ? 'مشروع قومي وصناعي بمصر' : 'Projects in Egypt'}</span>
          </span>

          <span className="text-xs font-mono text-[#687174]">
            {isAr ? 'مورّد معتمد لمهمات السلامة والأمن الصناعي' : 'Industrial Safety & Worksite Procurement Partner'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123D40]">
          {isAr ? 'سابقة الأعمال ومشروعات التوريد الميدانية' : 'Major Egyptian Projects & Supply Portfolio'}
        </h1>

        <p className="text-sm text-[#687174] max-w-4xl leading-relaxed">
          {isAr
            ? 'سجل سابقة أعمال وتوريدات مجموعة العاصمة الجديدة لأبرز المشروعات القومية والصناعية والبنية التحتية الكبرى داخل جمهورية مصر العربية (شاملاً كبرى مشروعات أوراسكوم للإنشاءات)، حيث نختص كمورّد معتمد لمهمات الوقاية الشخصية (PPE)، وأشرطة حماية المرافق التحتية المدفونة، ولوحات وإشارات السلامة والصحة المهنية ومستلزمات المواقع.'
            : 'Track record and verified supply portfolio of New Capital Group across major national, industrial, and infrastructure developments in Egypt (including iconic projects executed with Orascom Construction). Acting as specialized approved suppliers of certified PPE, underground warning tapes, and worksite compliance safety equipment.'
          }
        </p>
      </div>

      {/* Major Clients & Contractors Banner */}
      <div className="pt-2">
        <MajorClients layout="projects" showTitle={true} />
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#FBFAF6] p-4 rounded-2xl border border-[#DCD3C5] shadow-sm">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#687174] absolute top-3.5 right-3.5 rtl:right-3.5 rtl:left-auto ltr:left-3.5 ltr:right-auto" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (searchParams.has('search')) {
                searchParams.delete('search');
                setSearchParams(searchParams, { replace: true });
              }
            }}
            placeholder={isAr ? 'ابحث باسم المشروع، الموقع، أو نوع مهمات التوريد...' : 'Search by project name, location, or supply items...'}
            className="w-full bg-[#F3F0E9] border border-[#DCD3C5] rounded-xl py-2.5 px-10 text-xs text-[#1F292C] placeholder-[#687174]/70 focus:border-[#123D40] outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery('');
                if (searchParams.has('search')) {
                  searchParams.delete('search');
                  setSearchParams(searchParams, { replace: true });
                }
              }}
              className="absolute top-3 left-3 rtl:left-3 rtl:right-auto ltr:right-3 ltr:left-auto p-1 rounded-full text-[#687174] hover:bg-[#DCD3C5]/50 transition-colors"
              title={isAr ? 'إلغاء البحث' : 'Clear search'}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sector Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => setSelectedSector('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedSector === 'all'
                ? 'bg-[#123D40] text-white'
                : 'bg-[#F3F0E9] text-[#687174] border border-[#DCD3C5] hover:border-[#123D40]'
            }`}
          >
            {isAr ? `الكل (${visibleProjects.length})` : `All (${visibleProjects.length})`}
          </button>

          {sectors.map(sec => (
            <button
              key={sec}
              onClick={() => setSelectedSector(sec)}
              className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                selectedSector === sec
                  ? 'bg-[#B96543] text-white font-bold'
                  : 'bg-[#F3F0E9] text-[#687174] border border-[#DCD3C5] hover:border-[#123D40]'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-[#FBFAF6] rounded-2xl border border-[#DCD3C5] space-y-3">
          <HardHat className="w-10 h-10 text-[#687174] mx-auto opacity-50" />
          <p className="text-sm font-bold text-[#123D40]">
            {isAr ? 'لم يتم العثور على مشروعات تطابق معايير البحث' : 'No projects matched your search criteria'}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedSector('all'); }}
            className="text-xs text-[#B96543] font-bold underline"
          >
            {isAr ? 'إعادة ضبط البحث والتصفيات' : 'Reset search filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(proj => (
            <div
              key={proj.id}
              className="rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#123D40] hover:shadow-md transition-all group"
            >
              {proj.image && (
                <div className="h-52 overflow-hidden relative bg-[#F3F0E9]">
                  <img
                    src={proj.image}
                    alt={isAr ? proj.titleAr : proj.titleEn}
                    className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#FBFAF6]/95 backdrop-blur-sm text-[10px] font-mono text-[#123D40] font-bold border border-[#DCD3C5] shadow-xs">
                    {isAr ? proj.sectorAr : proj.sectorEn}
                  </span>
                  <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-[#123D40]/90 text-[10px] font-mono text-white font-bold">
                    {isAr ? 'مصر • توريد معتمد' : 'Egypt • Supply Verified'}
                  </span>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#123D40] group-hover:text-[#B96543] transition-colors leading-snug">
                    {isAr ? proj.titleAr : proj.titleEn}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#687174]">
                    <MapPin className="w-3.5 h-3.5 text-[#B96543] shrink-0" />
                    <span>{isAr ? proj.locationAr : proj.locationEn}</span>
                  </div>
                  <p className="text-xs text-[#687174] leading-relaxed pt-1 line-clamp-3">
                    {isAr ? proj.descriptionAr : proj.descriptionEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DCD3C5] space-y-2 text-xs">
                  <span className="font-bold text-[#123D40] block">
                    {isAr ? 'نطاق وتخصص التوريد للمشروع:' : 'Specialized Supply Scope:'}
                  </span>
                  <p className="text-[#1F292C] leading-relaxed font-mono text-[11px] bg-[#F3F0E9] p-2.5 rounded-xl border border-[#DCD3C5]/80">
                    {isAr ? proj.scopeAr : proj.scopeEn}
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] text-[#687174] font-mono">
                      {isAr ? 'سابقة أعمال وتوريد B2B' : 'B2B Project Supply'}
                    </span>
                    <Link
                      to="/request-a-quote"
                      className="text-xs font-bold text-[#B96543] hover:text-[#a55636] flex items-center gap-1 transition-colors"
                    >
                      <span>{isAr ? 'طلب خطة توريد مماثلة' : 'Request Supply Plan'}</span>
                      <Arrow className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

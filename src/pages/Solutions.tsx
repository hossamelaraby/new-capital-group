import React from 'react';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';
import { Construction, Building, ShieldCheck, Flame, Sun, ArrowRight, ArrowLeft } from 'lucide-react';

export const Solutions: React.FC = () => {
  const { lang } = useData();
  const isAr = lang === 'ar';
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  const solutionsList = [
    {
      id: 'construction',
      titleAr: 'تجهيزات قطاع الإنشاءات والأبراج السكنية',
      titleEn: 'Civil Construction & High-Rise Sites',
      icon: Building,
      descAr: 'توريد كامل لسترات السلامة، أحذية المهندسين والعمال، خوذ الأمان، وأحزمة الأمان للعمل على الارتفاعات وشبكات حماية الموقع.',
      descEn: 'Full supply of hi-vis apparel, protective safety boots, helmets, fall arrest harnesses, and mandatory zone signboards.',
      category: 'ppe'
    },
    {
      id: 'infrastructure',
      titleAr: 'مشروعات البنية التحتية والكباري والمترو',
      titleEn: 'Transport Infrastructure & Transit Corridors',
      icon: Construction,
      descAr: 'أشرطة تحذيرية مدفونة قابلة للكشف لحماية كابلات الكهرباء ومسارات المرافق، مع محددات المسارات والأقماع.',
      descEn: 'Detectable underground tapes for electrical and utility lines, road cones, and trench barricades.',
      category: 'traffic-utilities'
    },
    {
      id: 'industrial',
      titleAr: 'المصانع والمناطق الصناعية والورش',
      titleEn: 'Industrial Manufacturing & Heavy Workshops',
      icon: ShieldCheck,
      descAr: 'قفازات حماية ضد المخاطر الميكانيكية والقطع، لوحات منع وإلزام مطابقة للمواصفات، وأحذية حماية صناعية.',
      descEn: 'Chemical and cut-resistant gloves, ISO 7010 signage, and reinforced safety footwear.',
      category: 'safety-signs'
    },
    {
      id: 'emergency-fire',
      titleAr: 'تأمين المنشآت ومكافحة الحريق الميداني',
      titleEn: 'Emergency Response & Fire Safety Readiness',
      icon: Flame,
      descAr: 'لوحات فوسفورية مضيئة لتحديد مسارات الهروب ومواقع طفايات الحريق، وأجهزة الإطفاء وخزائن الخراطيم.',
      descEn: 'Photoluminescent evacuation wayfinding, fire equipment markers, extinguishers, and hose stations.',
      category: 'fire-safety'
    },
    {
      id: 'solar-lighting',
      titleAr: 'الإنارة الشمسية للمواقع المفتوحة والأسوار',
      titleEn: 'Off-Grid Solar Worksites & Perimeter Lighting',
      icon: Sun,
      descAr: 'كشافات إنارة شمسية مستقلة للمواقع الإنشائية النائية والأسوار المؤقتة دون الحاجة لمد شبكات كهرباء أو استهلاك ديزل.',
      descEn: 'High-power solar floodlights with LiFePO4 batteries for remote contractor base camps and security fences.',
      category: 'solar-lighting'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F3F0E9] text-[#1F292C]">
      <div className="space-y-3 border-b border-[#DCD3C5] pb-6">
        <span className="text-xs font-mono uppercase text-[#B96543] font-bold">
          {isAr ? 'منظومة التوريد حسب طبيعة العمل' : 'Engineered Solutions by Sector'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123D40]">
          {isAr ? 'حلول التوريد المتكاملة لبيئات العمل والمشروعات' : 'Integrated Supply Solutions for High-Demand Environments'}
        </h1>
        <p className="text-sm text-[#687174] max-w-3xl leading-relaxed">
          {isAr
            ? 'نقدم حزم توريد متخصصة تناسب المتطلبات الهندسية الفريدة لكل قطاع، من مشروعات البنية التحتية الكبرى إلى المصانع والمواقع الإنشائية المتقدمة.'
            : 'Customized supply packages engineered for the distinct hazards and compliance mandates of each industrial and civil sector.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutionsList.map(sol => {
          const Icon = sol.icon;
          return (
            <div
              key={sol.id}
              className="rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] p-6 space-y-5 hover:border-[#123D40] transition-all flex flex-col justify-between shadow-sm"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#123D40]/10 border border-[#123D40]/20 flex items-center justify-center text-[#123D40]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#123D40]">
                  {isAr ? sol.titleAr : sol.titleEn}
                </h3>
                <p className="text-xs text-[#687174] leading-relaxed">
                  {isAr ? sol.descAr : sol.descEn}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCD3C5] flex items-center justify-between">
                <Link
                  to={`/products?category=${sol.category}`}
                  className="text-xs font-bold text-[#B96543] hover:text-[#a55636] flex items-center gap-1.5 transition-colors"
                >
                  <span>{isAr ? 'استعراض البنود المعتمدة' : 'View Matching Items'}</span>
                  <Arrow className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to={`/request-a-quote?category=${sol.category}`}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F3F0E9] text-[#123D40] border border-[#DCD3C5] hover:bg-[#DCD3C5] transition-colors"
                >
                  {isAr ? 'طلب تسعير' : 'Quote'}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

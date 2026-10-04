import React from 'react';
import { useData } from '../context/DataContext';
import { Shield, Award, Target, CheckCircle, MapPin, Building2, FileCheck } from 'lucide-react';

export const About: React.FC = () => {
  const { lang, settings } = useData();
  const isAr = lang === 'ar';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-16 bg-[#F3F0E9] text-[#1F292C]">
      {/* Header */}
      <div className="space-y-3 border-b border-[#DCD3C5] pb-6">
        <span className="text-xs font-mono uppercase text-[#B96543] font-bold">
          {isAr ? 'الملف التعريفي للشركة' : 'Corporate Profile'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123D40]">
          {isAr ? 'عن شركة العاصمة الجديدة للتوريدات العمومية' : 'About New Capital Group — General Supplies'}
        </h1>
        {/* Exact Positioning Statement from Section 9 of PDF */}
        <p className="text-base text-[#123D40] max-w-3xl leading-relaxed font-semibold">
          {isAr
            ? 'شركة العاصمة الجديدة للتوريدات العمومية كيان متخصص في تجارة وتوريد مستلزمات الأمن الصناعي ومهمات السلامة والصحة المهنية للمشروعات الهندسية والمصانع والمراكز اللوجستية والمخازن العمومية. نركز على توفير مهمات الوقاية الشخصية ومستلزمات مكافحة الحريق واللوحات الإرشادية وحماية مواقع العمل، مع توفير بنود مكملة مثل الإنارة الشمسية ومراجع التمديدات الكهربائية حسب احتياج المشروع.'
            : 'New Capital is a specialized entity for trading and supplying industrial-safety products and occupational health and safety equipment for engineering projects, factories, logistics centers, and general warehouses, with complete focus on personal protective equipment and fire protection.'
          }
        </p>
      </div>

      {/* Story & Operations Grid (Section 6.8 & 9) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6 text-xs sm:text-sm text-[#687174] leading-relaxed">
          {/* Vision Box */}
          <div className="p-6 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-2">
            <span className="text-xs font-mono font-bold text-[#B96543] uppercase block">
              {isAr ? 'الرؤية (Vision)' : 'Our Vision'}
            </span>
            <p className="text-base font-bold text-[#123D40]">
              {isAr 
                ? 'أن نكون شريك توريد متخصصًا وموثوقًا في تجهيز بيئات العمل والمشروعات بمستلزمات الأمن الصناعي والسلامة المهنية.'
                : 'To be the trusted, specialized supply partner in equipping project environments with certified occupational safety gear.'
              }
            </p>
          </div>

          {/* Mission Box */}
          <div className="p-6 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-2">
            <span className="text-xs font-mono font-bold text-[#123D40] uppercase block">
              {isAr ? 'الرسالة (Mission)' : 'Our Mission'}
            </span>
            <p className="text-base font-bold text-[#123D40]">
              {isAr 
                ? 'تنظيم احتياجات المشروع وتحويلها إلى منتجات ومهمات توريد واضحة، مع الاهتمام بالعينة والمواصفة والمستند الفني ومتطلبات الموقع.'
                : 'Translating project requirements into structured, verified supply lots with dedicated focus on physical samples and technical compliance.'
              }
            </p>
          </div>
        </div>

        {/* Operational Warehouse Image (17-industrial-safety-warehouse) */}
        <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#DCD3C5] bg-[#FBFAF6] p-2 shadow-sm">
          <img
            src="/assets/17-industrial-safety-warehouse.webp"
            alt={isAr ? 'المخازن والجاهزية اللوجستية لمجموعة العاصمة الجديدة' : 'New Capital Group Warehouse & Staging Capacity'}
            className="w-full aspect-[16/10] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-3">
          <div className="w-10 h-10 rounded-full border border-[#DCD3C5] flex items-center justify-center text-[#B96543] bg-[#B96543]/10">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#123D40]">
            {isAr ? 'المسؤولية الفنية' : 'Engineering Responsibility'}
          </h3>
          <p className="text-xs text-[#687174] leading-relaxed">
            {isAr 
              ? 'توضيح حدود ومواصفات كل منتج بشفافية دون إطلاق ادعاءات غير موثقة، مع ربط كل مواصفة بالعينة والموديل المعتمد.'
              : 'Transparent technical disclosures with specifications tied directly to certified models and approved physical samples.'
            }
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-3">
          <div className="w-10 h-10 rounded-full border border-[#DCD3C5] flex items-center justify-center text-[#123D40] bg-[#123D40]/10">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#123D40]">
            {isAr ? 'نظام الجودة ISO' : 'ISO Certified Supply'}
          </h3>
          <p className="text-xs text-[#687174] leading-relaxed">
            {isAr 
              ? 'حاصلون على شهادتي ISO 9001:2015 و ISO 14001:2015 لتطبيق أعلى معايير الجودة والإدارة البيئية في سلسلة التوريد.'
              : 'Certified under ISO 9001 and ISO 14001 ensuring rigorous logistics, quality control, and environmental standards.'
            }
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] space-y-3">
          <div className="w-10 h-10 rounded-full border border-[#DCD3C5] flex items-center justify-center text-[#53787A] bg-[#53787A]/10">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-[#123D40]">
            {isAr ? 'الجاهزية الميدانية' : 'Field Operational Depth'}
          </h3>
          <p className="text-xs text-[#687174] leading-relaxed">
            {isAr 
              ? 'قريبون من ظروف وتحديات مواقع العمل المصرية في درجات الحرارة المرتفعة والغبار ومتطلبات التوريد الفوري.'
              : 'Tailored for Egyptian worksite realities—severe desert heat, heavy wear, and urgent delivery milestones.'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

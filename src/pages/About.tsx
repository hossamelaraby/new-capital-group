import React from 'react';
import { useData } from '../context/DataContext';
import { Shield, Award, Users, Target, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const { lang, settings } = useData();
  const isAr = lang === 'ar';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-16">
      {/* Header */}
      <div className="space-y-3 border-b border-[#D5C9B5]/15 pb-6">
        <span className="text-xs font-mono uppercase text-[#E5A72B]">
          {isAr ? 'الملف التعريفي للشركة' : 'Corporate Profile'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          {isAr ? 'عن مجموعة العاصمة الجديدة للتوريدات العمومية' : 'About New Capital Group — General Supplies'}
        </h1>
        <p className="text-sm text-[#D5C9B5]/85 max-w-3xl leading-relaxed">
          {isAr
            ? 'تأسست الشركة عام 2021 لتقديم منظومة توريدات هندسية متكاملة تركز على معدات الصحة والسلامة المهنية، ومهمات حماية الأفراد والمشروعات في مصر.'
            : 'Established in 2021 to deliver project-ready safety, personal protection, and site infrastructure supplies engineered for Egyptian contracting environments.'
          }
        </p>
      </div>

      {/* Story & Vision Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-[#D5C9B5]/85 leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold text-white protection-line pb-2">
            {isAr ? 'رؤيتنا ورسالتنا في دعم المشروعات' : 'Our Mission & Supply Capabilities'}
          </h2>
          <p>
            {isAr
              ? 'انطلقت مجموعة العاصمة الجديدة من قلب القاهرة ككيان متخصص في التوريدات العمومية للمشروعات الهندسية، مع التركيز التام على توفير مهمات الوقاية الشخصية، اللوحات الإرشادية والتحذيرية، وشرائط كشف المرافق التي تلبي معايير الجودة والاستدامة.'
              : 'Operating from Cairo, New Capital Group serves engineering and contracting firms with dependable sourcing of occupational safety gear, site signage, and utility protection materials that satisfy exacting consultant specifications.'
            }
          </p>
          <p>
            {isAr
              ? 'نحرص على سد الفجوة بين جداول الكميات النظرية واحتياجات الموقع الميدانية الفعلية، من خلال سرعة تجهيز العينات للاعتماد الفني، وتوفير الكميات المطلوبة في الجداول الزمنية المحددة للمشروعات.'
              : 'We bridge the gap between procurement schedules and real jobsite demands by delivering fast technical sample submittals, reliable batch fulfillment, and clear compliance documentation.'
            }
          </p>
        </div>

        <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#D5C9B5]/20 bg-[#12202A] p-2">
          <img
            src="/assets/20-quality-and-documentation.webp"
            alt={isAr ? 'الملف التعريفي لمجموعة العاصمة الجديدة' : 'New Capital Group Corporate Profile'}
            className="w-full h-80 object-cover rounded-xl brightness-90"
          />
        </div>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-[#12202A] border border-[#D5C9B5]/15 space-y-3">
          <div className="w-10 h-10 rounded bg-[#1D3440] flex items-center justify-center text-[#E5A72B]">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">
            {isAr ? 'المسؤولية الفنية' : 'Engineering Responsibility'}
          </h3>
          <p className="text-xs text-[#D5C9B5]/75 leading-relaxed">
            {isAr 
              ? 'توضيح حدود ومواصفات كل منتج بشفافية دون إطلاق ادعاءات غير موثقة، مع ربط كل مواصفة بالعينة والموديل المعتمد.'
              : 'Transparent technical disclosures with specifications tied directly to certified models and approved physical samples.'
            }
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#12202A] border border-[#D5C9B5]/15 space-y-3">
          <div className="w-10 h-10 rounded bg-[#1D3440] flex items-center justify-center text-emerald-400">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">
            {isAr ? 'نظام الجودة ISO' : 'ISO Certified Supply'}
          </h3>
          <p className="text-xs text-[#D5C9B5]/75 leading-relaxed">
            {isAr 
              ? 'حاصلون على شهادتي ISO 9001:2015 و ISO 14001:2015 لتطبيق أعلى معايير الجودة والإدارة البيئية في سلسلة التوريد.'
              : 'Certified under ISO 9001 and ISO 14001 ensuring rigorous logistics, quality control, and environmental standards.'
            }
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#12202A] border border-[#D5C9B5]/15 space-y-3">
          <div className="w-10 h-10 rounded bg-[#1D3440] flex items-center justify-center text-[#B8643F]">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white">
            {isAr ? 'الجاهزية الميدانية' : 'Field Operational Depth'}
          </h3>
          <p className="text-xs text-[#D5C9B5]/75 leading-relaxed">
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

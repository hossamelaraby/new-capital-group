import React from 'react';
import { useData } from '../context/DataContext';
import { Building2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PartnerCompany {
  id: string;
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  categoryEn: string;
  descriptionAr: string;
  descriptionEn: string;
  tag: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    badgeText: string;
  };
  symbol: string;
}

export const majorPartners: PartnerCompany[] = [
  {
    id: 'orascom',
    nameAr: 'أوراسكوم للإنشاءات',
    nameEn: 'Orascom Construction',
    categoryAr: 'المقاولات العامة والبنية التحتية الكبرى',
    categoryEn: 'EPC & Mega Infrastructure',
    descriptionAr: 'توريد مهمات الوقاية الشخصية، أشرطة التحذير لحماية المرافق التحتية، ومستلزمات السلامة لمشروعات النقل ومحطات المعالجة والطاقة.',
    descriptionEn: 'Supply of certified PPE, detectable utility warning tapes, and worksite compliance equipment for transport, water, and power mega-projects.',
    tag: 'ORASCOM',
    colorScheme: {
      bg: 'bg-[#123D40]/5',
      border: 'border-[#123D40]/20',
      text: 'text-[#123D40]',
      badgeBg: 'bg-[#123D40]',
      badgeText: 'text-white'
    },
    symbol: 'OC'
  },
  {
    id: 'hassan-allam',
    nameAr: 'حسن علام القابضة',
    nameEn: 'Hassan Allam Holding',
    categoryAr: 'الهندسة والإنشاءات والمرافق',
    categoryEn: 'Engineering, Construction & Utilities',
    descriptionAr: 'توريدات أمان صناعي ومعدات وقاية كهروميكانيكية وأشرطة كشف شبكات الكهرباء والغاز لمشروعات المرافق والمحاور القومية.',
    descriptionEn: 'Industrial safety supplies, electromechanical PPE, and detectable cable protection tapes for utilities and national road corridors.',
    tag: 'HASSAN ALLAM',
    colorScheme: {
      bg: 'bg-[#B96543]/5',
      border: 'border-[#B96543]/20',
      text: 'text-[#B96543]',
      badgeBg: 'bg-[#B96543]',
      badgeText: 'text-white'
    },
    symbol: 'HA'
  },
  {
    id: 'modon',
    nameAr: 'مدن للتطوير العقاري',
    nameEn: 'Modon Developments',
    categoryAr: 'التطوير العقاري والمشروعات الفندقية والإدارية',
    categoryEn: 'Real Estate & Commercial Development',
    descriptionAr: 'مستلزمات وإشارات السلامة الموقعية، تجهيزات الإخلاء والطوارئ، وحواجز تنظيم المسارات لأبراج العاصمة الإدارية والعلمين.',
    descriptionEn: 'Worksite safety signage, emergency evacuation systems, and crowd/traffic barriers for iconic towers and commercial landmarks.',
    tag: 'MODON',
    colorScheme: {
      bg: 'bg-[#2E5A54]/5',
      border: 'border-[#2E5A54]/20',
      text: 'text-[#2E5A54]',
      badgeBg: 'bg-[#2E5A54]',
      badgeText: 'text-white'
    },
    symbol: 'MD'
  },
  {
    id: 'ccc',
    nameAr: 'اتحاد المقاولين العالمية (CCC)',
    nameEn: 'Consolidated Contractors Company (CCC)',
    categoryAr: 'المقاولات الدولية ومشروعات الطاقة والغاز',
    categoryEn: 'International EPC & Heavy Industrial',
    descriptionAr: 'مهمات سلامة متطابقة مع معايير المشروعات الصناعية الكبرى، أحذية حماية S3، وبدل كيماويات للأعمال التخصصية المعقدة.',
    descriptionEn: 'Rigorous heavy industrial safety gear, S3 safety footwear, and chemical protective suits meeting strict international EPC criteria.',
    tag: 'CCC GLOBAL',
    colorScheme: {
      bg: 'bg-[#3A4B53]/5',
      border: 'border-[#3A4B53]/20',
      text: 'text-[#3A4B53]',
      badgeBg: 'bg-[#3A4B53]',
      badgeText: 'text-white'
    },
    symbol: 'CCC'
  },
  {
    id: 'elsewedy',
    nameAr: 'السويدي إليكتريك',
    nameEn: 'Elsewedy Electric',
    categoryAr: 'حلول الطاقة المتكاملة والبنية التحتية الكهربائية',
    categoryEn: 'Energy & Electrical Infrastructure',
    descriptionAr: 'أشرطة تحذيرية حمراء وصفراء لكابلات الجهد العالي والمتوسط، ومهمات عزل وقائي للمهندسين وفرق التمديدات الكهربائية.',
    descriptionEn: 'High-visibility detectable warning tapes for underground power cables and dielectric PPE for electrical transmission teams.',
    tag: 'ELSEWEDY',
    colorScheme: {
      bg: 'bg-[#B96543]/5',
      border: 'border-[#B96543]/20',
      text: 'text-[#B96543]',
      badgeBg: 'bg-[#B96543]',
      badgeText: 'text-white'
    },
    symbol: 'SW'
  },
  {
    id: 'solaris',
    nameAr: 'سولاريس للطاقة والمشروعات',
    nameEn: 'Solaris Energy Solutions',
    categoryAr: 'محطات الطاقة الشمسية والإنارة الميدانية المستقلة',
    categoryEn: 'Solar Energy & Autonomous Site Lighting',
    descriptionAr: 'توريد كشافات وأنظمة إنارة شمسية موثوقة لأسوار المشروعات النائية ومهمات حماية العمالة في حقول الطاقة المتجددة.',
    descriptionEn: 'Reliable standalone solar floodlights, perimeter lighting systems, and specialized PPE for renewable energy farms.',
    tag: 'SOLARIS',
    colorScheme: {
      bg: 'bg-[#8A6240]/5',
      border: 'border-[#8A6240]/20',
      text: 'text-[#8A6240]',
      badgeBg: 'bg-[#8A6240]',
      badgeText: 'text-white'
    },
    symbol: 'SOL'
  },
  {
    id: 'argas',
    nameAr: 'أرجاز لتجهيزات الغاز والمرافق',
    nameEn: 'Argas Utilities & Gas Systems',
    categoryAr: 'شبكات الغاز الطبيعي وخدمات المرافق التحتية',
    categoryEn: 'Gas Networks & Subterranean Utilities',
    descriptionAr: 'أشرطة تحذيرية صفراء فائقة المتانة لخطوط الغاز الطبيعي (بأمرك كشف معدني)، وأجهزة قياس ومهمات بيئات العمل البترولية.',
    descriptionEn: 'Heavy-duty yellow detectable warning tapes for natural gas grids (metallic foil tracer) and hazardous environment safety items.',
    tag: 'ARGAS',
    colorScheme: {
      bg: 'bg-[#123D40]/5',
      border: 'border-[#123D40]/20',
      text: 'text-[#123D40]',
      badgeBg: 'bg-[#123D40]',
      badgeText: 'text-white'
    },
    symbol: 'ARG'
  }
];

interface MajorClientsProps {
  layout?: 'home' | 'projects' | 'compact';
  showTitle?: boolean;
}

export const MajorClients: React.FC<MajorClientsProps> = ({ 
  layout = 'home',
  showTitle = true 
}) => {
  const { lang } = useData();
  const isAr = lang === 'ar';

  return (
    <section className="w-full">
      {showTitle && (
        <div className="space-y-2 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono uppercase text-[#B96543] tracking-wider font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B96543]" />
              {isAr ? 'شركاء الإنجاز والمقاولون العامون' : 'Major General Contractors & Developer Clients'}
            </span>
            <span className="text-[11px] font-mono text-[#687174] bg-[#FBFAF6] px-2.5 py-1 rounded-md border border-[#DCD3C5]">
              {isAr ? 'توريدات معتمدة لكبرى الصروح الهندسية' : 'Approved B2B Procurement Partner'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123D40]">
            {isAr ? 'كبرى الكيانات الهندسية وشركات المقاولات الشريكة' : 'Key Construction Giants & Clients Supplied'}
          </h2>
          <p className="text-xs sm:text-sm text-[#687174] max-w-4xl leading-relaxed">
            {isAr
              ? 'تعتز مجموعة العاصمة الجديدة بثقة نخبة من أكبر مقاولي ومطوري مصر والشرق الأوسط، حيث نقدم حلول توريد متكاملة ومعتمدة لمهمات الأمن الصناعي وحماية المرافق لفرق عملهم الميدانية.'
              : 'New Capital Group takes pride in being a trusted safety equipment and worksite utility supply partner for leading regional construction conglomerates and developers.'
            }
          </p>
        </div>
      )}

      {/* Grid of Partners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {majorPartners.map((partner) => (
          <div
            key={partner.id}
            className="group relative bg-[#FBFAF6] rounded-2xl p-5 border border-[#DCD3C5] hover:border-[#123D40] transition-all duration-300 hover:shadow-md flex flex-col justify-between"
          >
            <div>
              {/* Header with Monogram Badge & Tag */}
              <div className="flex items-center justify-between gap-3 mb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-black font-mono text-sm tracking-wider shadow-sm transition-transform group-hover:scale-105 ${partner.colorScheme.badgeBg} ${partner.colorScheme.badgeText}`}>
                    {partner.symbol}
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold text-[#123D40] group-hover:text-[#B96543] transition-colors leading-tight">
                      {isAr ? partner.nameAr : partner.nameEn}
                    </h3>
                    <span className="text-[10px] font-mono text-[#687174] block mt-0.5">
                      {isAr ? partner.nameEn : partner.nameAr}
                    </span>
                  </div>
                </div>
              </div>

              {/* Specialization Category */}
              <div className="mb-3">
                <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-md border ${partner.colorScheme.bg} ${partner.colorScheme.border} ${partner.colorScheme.text}`}>
                  {isAr ? partner.categoryAr : partner.categoryEn}
                </span>
              </div>

              {/* Scope of Supply Description */}
              <p className="text-xs text-[#687174] leading-relaxed line-clamp-3">
                {isAr ? partner.descriptionAr : partner.descriptionEn}
              </p>
            </div>

            {/* Bottom Supply Role Indicator */}
            <div className="pt-3.5 mt-3.5 border-t border-[#DCD3C5]/70 flex items-center justify-between text-[11px]">
              <span className="font-mono text-[#123D40] font-semibold flex items-center gap-1">
                <Building2 className="w-3 h-3 text-[#B96543]" />
                {isAr ? 'نطاق التوريد المعتمد' : 'Verified Scope'}
              </span>
              <Link 
                to={`/projects?search=${encodeURIComponent(isAr ? partner.nameAr : partner.nameEn)}`}
                className="text-[#B96543] hover:text-[#123D40] font-semibold flex items-center gap-0.5 transition-colors"
                title={isAr ? 'عرض المشروعات المرتبطة' : 'View related projects'}
              >
                <span>{isAr ? 'المشروعات' : 'Projects'}</span>
                <ArrowUpRight className="w-3 h-3 rtl:rotate-[-90deg]" />
              </Link>
            </div>
          </div>
        ))}

        {/* 8th CTA Card for New Projects Inquiry */}
        <div className="relative bg-[#123D40] text-white rounded-2xl p-5 border border-[#123D40] flex flex-col justify-between shadow-sm">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold text-white">
              B2B
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-white">
                {isAr ? 'هل تمثل مقاولاً عاماً أو جهة إشرافية؟' : 'Representing a General Contractor?'}
              </h3>
              <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
                {isAr
                  ? 'نوفر اعتمادات استشاريين سريعة، وعينات مطابقة للمواصفات القياسية، وتوريدات فورية بموجب أوامر التوريد للمشروعات الكبرى.'
                  : 'Fast consultant submittals, testing samples, and scheduled site-delivery agreements for mega construction sites.'
                }
              </p>
            </div>
          </div>
          <div className="pt-4 mt-3 border-t border-white/20">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#B96543] hover:bg-[#a85938] text-white text-xs font-bold transition-colors"
            >
              <span>{isAr ? 'طلب اعتماد وتوريد مشروع' : 'Request Project Submittal'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

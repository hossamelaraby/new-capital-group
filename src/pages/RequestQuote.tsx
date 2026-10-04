import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { 
  FileText, 
  CheckCircle, 
  Trash2, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  AlertCircle
} from 'lucide-react';

export const RequestQuote: React.FC = () => {
  const { lang, quoteBasket, removeFromQuoteBasket, clearQuoteBasket, submitQuoteRequest, products } = useData();
  const [searchParams] = useSearchParams();
  const preselectedProductId = searchParams.get('product');
  const isAr = lang === 'ar';

  const preselectedProduct = products.find(p => p.id === preselectedProductId);

  // Form states matching PDF Section 10
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCity, setCountryCity] = useState('');
  const [projectType, setProjectType] = useState('');
  const [mainRequirement, setMainRequirement] = useState(preselectedProduct?.categorySlug || 'ppe');
  const [projectDetails, setProjectDetails] = useState('');
  const [timeline, setTimeline] = useState('');
  const [preferredChannel, setPreferredChannel] = useState<'whatsapp' | 'email' | 'phone'>('whatsapp');
  
  // Custom manual item if basket is empty
  const [manualItemTitle, setManualItemTitle] = useState(preselectedProduct ? (isAr ? preselectedProduct.titleAr : preselectedProduct.titleEn) : '');
  const [manualItemQty, setManualItemQty] = useState('100');

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !company.trim() || !phone.trim()) {
      setErrorMessage(isAr ? 'يرجى إكمال الحقول الأساسية: الاسم، الشركة، ورقم الهاتف.' : 'Please fill in the required fields: Name, Company, and Phone.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    // Build items payload
    const itemsPayload = quoteBasket.length > 0 
      ? quoteBasket.map(b => ({
          productId: b.product.id,
          title: isAr ? b.product.titleAr : b.product.titleEn,
          quantity: b.quantity || 'حسب الاتفاق'
        }))
      : [{
          title: manualItemTitle || (isAr ? 'طلب توريد عام' : 'General supply request'),
          quantity: manualItemQty || '1'
        }];

    try {
      const ref = await submitQuoteRequest({
        name,
        company,
        email: email || 'not-provided@client.sample',
        phone,
        countryCity: countryCity || 'مصر / القاهرة',
        projectType: projectType || 'مشروع عام',
        selectedCategory: mainRequirement,
        items: itemsPayload,
        projectDetails,
        timeline: timeline || 'عاجل',
        preferredChannel,
      });

      setSubmittedRef(ref);
    } catch (err) {
      setErrorMessage(isAr ? 'حدث خطأ أثناء إرسال الطلب، يرجى المحاولة لاحقًا.' : 'An error occurred while submitting. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedRef) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6 bg-[#F3F0E9] text-[#1F292C]">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center border border-emerald-300">
          <CheckCircle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#123D40]">
            {isAr ? 'تم استلام طلب عرض التوريد بنجاح' : 'Quote Request Submitted Successfully'}
          </h2>
          <p className="text-sm text-[#687174]">
            {isAr ? 'الرقم المرجعي المعتمد لطلب التوريد:' : 'Official Request Reference Number:'}
          </p>
          <div className="inline-block p-3.5 rounded-2xl bg-[#FBFAF6] border border-[#B96543] font-mono text-xl font-bold text-[#B96543] shadow-sm">
            {submittedRef}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#687174] max-w-md mx-auto leading-relaxed">
          {isAr 
            ? 'يقوم المكتب الفني بمراجعة بنود المشروع للتواصل معك وتوفير العينات المعتمدة والعرض الفني والمالي.'
            : 'Our technical office will review the specifications and reach out to deliver approval samples and pricing submittals.'
          }
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <Link
            to="/products"
            className="px-6 py-2.5 rounded-full bg-[#FBFAF6] text-[#123D40] border border-[#DCD3C5] hover:border-[#123D40] text-xs font-semibold"
          >
            {isAr ? 'متابعة تصفح الكتالوج' : 'Continue Browsing'}
          </Link>
          <Link
            to="/"
            className="px-6 py-2.5 rounded-full bg-[#123D40] text-white text-xs font-bold hover:bg-[#1a4f53]"
          >
            {isAr ? 'العودة للرئيسية' : 'Return Home'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8 bg-[#F3F0E9] text-[#1F292C]">
      {/* Title Block */}
      <div className="space-y-2 border-b border-[#DCD3C5] pb-6">
        <span className="text-xs font-mono uppercase text-[#B96543] font-bold">
          {isAr ? 'طلب خطة توريد وجداول كميات (BOQ)' : 'Project Sizing & BOQ Supply Plan'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#123D40]">
          {isAr ? 'طلب عرض توريد معتمد للمشروع' : 'Request a Project Supply Plan'}
        </h1>
        <p className="text-xs sm:text-sm text-[#687174]">
          {isAr
            ? 'أرسل احتياج موقعك أو جدول الكميات، وسنساعدك في تنظيم طلب التوريد وتجهيز العينات المعتمدة.'
            : 'Send your BOQ or site requirement. We will help structure the supply request and physical submittal samples.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form (Col 7) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-6 bg-[#FBFAF6] border border-[#DCD3C5] p-6 sm:p-8 rounded-2xl shadow-sm">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-300 text-red-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Client Info */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-[#123D40] uppercase tracking-wider font-mono border-b border-[#DCD3C5] pb-1.5">
                {isAr ? '1. بيانات جهة الطلب والمسؤول' : '1. Contact & Organization Info'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1F292C] mb-1.5">
                    {isAr ? 'الاسم بالكامل *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isAr ? 'م. أحمد محمود' : 'Eng. Ahmed Mahmoud'}
                    className="w-full bg-[#F3F0E9] border border-[#DCD3C5] rounded-xl p-2.5 text-xs text-[#1F292C] focus:border-[#123D40] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F292C] mb-1.5">
                    {isAr ? 'اسم الشركة / المقاول العام *' : 'Company / Contractor *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={isAr ? 'شركة المقاولات العامة' : 'General Contracting Corp'}
                    className="w-full bg-[#F3F0E9] border border-[#DCD3C5] rounded-xl p-2.5 text-xs text-[#1F292C] focus:border-[#123D40] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F292C] mb-1.5">
                    {isAr ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010XXXXXXXX"
                    dir="ltr"
                    className="w-full bg-[#F3F0E9] border border-[#DCD3C5] rounded-xl p-2.5 text-xs text-[#1F292C] focus:border-[#123D40] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F292C] mb-1.5">
                    {isAr ? 'البريد الإلكتروني' : 'Work Email'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="procurement@company.com"
                    dir="ltr"
                    className="w-full bg-[#F3F0E9] border border-[#DCD3C5] rounded-xl p-2.5 text-xs text-[#1F292C] focus:border-[#123D40] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4 pt-4 border-t border-[#DCD3C5]">
              <h3 className="text-xs font-bold text-[#123D40] uppercase tracking-wider font-mono border-b border-[#DCD3C5] pb-1.5">
                {isAr ? '2. طبيعة المشروع ومجال التوريد' : '2. Project Scope & Specialty'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1F292C] mb-1.5">
                    {isAr ? 'المحافظة / المدينة / الموقع' : 'Location / City'}
                  </label>
                  <input
                    type="text"
                    value={countryCity}
                    onChange={(e) => setCountryCity(e.target.value)}
                    placeholder={isAr ? 'القاهرة / العاصمة الإدارية' : 'Cairo / New Capital'}
                    className="w-full bg-[#F3F0E9] border border-[#DCD3C5] rounded-xl p-2.5 text-xs text-[#1F292C] focus:border-[#123D40] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F292C] mb-1.5">
                    {isAr ? 'التخصص الرئيسي المطلوب' : 'Main Requirement Specialty'}
                  </label>
                  <select
                    value={mainRequirement}
                    onChange={(e) => setMainRequirement(e.target.value)}
                    className="w-full bg-[#F3F0E9] border border-[#DCD3C5] rounded-xl p-2.5 text-xs text-[#1F292C] focus:border-[#123D40] outline-none"
                  >
                    <option value="ppe">{isAr ? 'مهمات الوقاية الشخصية (PPE)' : 'PPE & Safety'}</option>
                    <option value="fire-safety">{isAr ? 'مكافحة الحريق ومعدات الطوارئ' : 'Fire Protection'}</option>
                    <option value="safety-signs">{isAr ? 'لوحات السلامة وحماية الموقع' : 'Safety Signs'}</option>
                    <option value="traffic-utilities">{isAr ? 'سلامة الطرق وأشرطة المرافق المدفونة' : 'Traffic & Utilities'}</option>
                    <option value="solar-lighting">{isAr ? 'إنارة شمسية للمواقع والأسوار' : 'Solar Lighting'}</option>
                    <option value="electrical-conduit">{isAr ? 'مراجع مواسير EMT والتمديدات' : 'EMT References'}</option>
                  </select>
                </div>
              </div>

              {/* Free-form notes */}
              <div>
                <label className="block text-xs font-semibold text-[#1F292C] mb-1.5">
                  {isAr ? 'تفاصيل الطلب أو بنود الـ BOQ والكميات المطلوبة' : 'BOQ Specifications or Quantity Notes'}
                </label>
                <textarea
                  rows={4}
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder={isAr ? 'اكتب المقاسات المطلوبة، اشتراطات الاستشاري، أو أرفق ملخص بنود التوريد...' : 'Specify quantities, consultant requirements, or delivery schedule...'}
                  className="w-full bg-[#F3F0E9] border border-[#DCD3C5] rounded-xl p-2.5 text-xs text-[#1F292C] focus:border-[#123D40] outline-none"
                ></textarea>
              </div>

              {/* Channel preference */}
              <div className="flex items-center gap-6 text-xs text-[#687174]">
                <span className="font-semibold text-[#123D40]">{isAr ? 'قناة التواصل المفضلة:' : 'Preferred Contact:'}</span>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="channel"
                    checked={preferredChannel === 'whatsapp'}
                    onChange={() => setPreferredChannel('whatsapp')}
                    className="accent-[#B96543]"
                  />
                  <span>واتساب (WhatsApp)</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="channel"
                    checked={preferredChannel === 'phone'}
                    onChange={() => setPreferredChannel('phone')}
                    className="accent-[#B96543]"
                  />
                  <span>اتصال هاتفي</span>
                </label>
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-[#123D40] hover:bg-[#1a4f53] text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isSubmitting
                    ? (isAr ? 'جاري إرسال الطلب...' : 'Submitting Request...')
                    : (isAr ? 'إرسال طلب خطة التوريد' : 'Submit Supply Quote Request')
                  }
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Basket / Summary Rail (Col 5) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#FBFAF6] border border-[#DCD3C5] rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#DCD3C5] pb-3">
              <h3 className="text-sm font-bold text-[#123D40] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#B96543]" />
                <span>{isAr ? 'قائمة البنود المطلوبة' : 'Selected Quote Items'}</span>
              </h3>
              {quoteBasket.length > 0 && (
                <button
                  onClick={clearQuoteBasket}
                  className="text-[11px] text-[#B96543] font-semibold hover:underline"
                >
                  {isAr ? 'تفريغ القائمة' : 'Clear All'}
                </button>
              )}
            </div>

            {quoteBasket.length === 0 ? (
              <div className="space-y-3">
                <p className="text-xs text-[#687174]">
                  {isAr 
                    ? 'لم تقم باختيار بنود محددة من الكتالوج بعد. يمكنك كتابة البند المطلوب مباشرة بالأسفل:'
                    : 'No specific items in basket yet. You can type your request directly below:'
                  }
                </p>
                <div>
                  <label className="block text-[11px] font-semibold text-[#1F292C] mb-1">
                    {isAr ? 'اسم المنتج أو البند المطلوب' : 'Item Name / Description'}
                  </label>
                  <input
                    type="text"
                    value={manualItemTitle}
                    onChange={(e) => setManualItemTitle(e.target.value)}
                    placeholder={isAr ? 'مثال: أحذية سلامة S3 أو شريط تحذيري 500م' : 'e.g., S3 Safety boots or warning tape'}
                    className="w-full bg-[#F3F0E9] border border-[#DCD3C5] rounded-xl p-2 text-xs text-[#1F292C] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#1F292C] mb-1">
                    {isAr ? 'الكمية التقديرية' : 'Estimated Quantity'}
                  </label>
                  <input
                    type="text"
                    value={manualItemQty}
                    onChange={(e) => setManualItemQty(e.target.value)}
                    placeholder={isAr ? '100 زوج / قطعة' : '100 units'}
                    className="w-full bg-[#F3F0E9] border border-[#DCD3C5] rounded-xl p-2 text-xs text-[#1F292C] outline-none"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {quoteBasket.map((item) => (
                  <div 
                    key={item.product.id}
                    className="p-3 rounded-xl bg-[#F3F0E9] border border-[#DCD3C5] flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={item.product.primaryImage} 
                        alt="item" 
                        className="w-11 h-11 object-cover rounded-xl border border-[#DCD3C5]" 
                      />
                      <div>
                        <span className="font-bold text-[#123D40] block">
                          {isAr ? item.product.titleAr : item.product.titleEn}
                        </span>
                        <span className="text-[10px] text-[#B96543] font-mono font-bold">{item.product.sku}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromQuoteBasket(item.product.id)}
                      className="text-[#687174] hover:text-red-500 p-1"
                      title={isAr ? 'حذف البند' : 'Remove item'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Direct Contacts */}
          <div className="p-5 rounded-2xl bg-[#FBFAF6] border border-[#DCD3C5] text-xs text-[#687174] space-y-2.5 shadow-sm">
            <span className="font-bold text-[#123D40] block">
              {isAr ? 'للتنسيق الفني والميداني المباشر:' : 'Direct Engineering Line:'}
            </span>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#B96543]" />
              <span dir="ltr">01010550857 / 02 2460 2460</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#B96543]" />
              <span className="truncate">newcapitalcompany2020@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

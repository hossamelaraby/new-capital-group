import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { 
  FileText, 
  CheckCircle, 
  Trash2, 
  Send, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  AlertCircle
} from 'lucide-react';

export const RequestQuote: React.FC = () => {
  const { lang, quoteBasket, removeFromQuoteBasket, clearQuoteBasket, submitQuoteRequest, products } = useData();
  const [searchParams] = useSearchParams();
  const preselectedProductId = searchParams.get('product');
  const isAr = lang === 'ar';

  const preselectedProduct = products.find(p => p.id === preselectedProductId);

  // Form states
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCity, setCountryCity] = useState('');
  const [projectType, setProjectType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(preselectedProduct?.categorySlug || 'ppe');
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
        selectedCategory,
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
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
          <CheckCircle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {isAr ? 'تم استلام طلب عرض الأسعار بنجاح' : 'Quote Request Submitted Successfully'}
          </h2>
          <p className="text-sm text-[#D5C9B5]/80">
            {isAr ? 'رقم المرجع الفني للطلب:' : 'Official Request Reference Number:'}
          </p>
          <div className="inline-block p-3 rounded bg-[#12202A] border border-[#E5A72B] font-mono text-lg font-bold text-[#E5A72B]">
            {submittedRef}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#D5C9B5]/80 max-w-md mx-auto leading-relaxed">
          {isAr 
            ? 'سيقوم مهندس المبيعات والمكتب الفني بمراجعة متطلبات المشروع والتواصل معك لتقديم العرض الفني والمالي والعينات المعتمدة.'
            : 'Our sales and technical office will review your specifications and contact you shortly with the preliminary BOQ submittal.'
          }
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <Link
            to="/products"
            className="px-6 py-2.5 rounded bg-[#1D3440] hover:bg-[#284757] text-white text-xs font-medium"
          >
            {isAr ? 'متابعة تصفح المنتجات' : 'Continue Browsing'}
          </Link>
          <Link
            to="/"
            className="px-6 py-2.5 rounded bg-[#E5A72B] text-[#0B1720] text-xs font-bold"
          >
            {isAr ? 'العودة للرئيسية' : 'Return Home'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Title Block */}
      <div className="space-y-2 border-b border-[#D5C9B5]/15 pb-6">
        <span className="text-xs font-mono uppercase text-[#E5A72B]">
          {isAr ? 'طلب توريد المشروعات وجداول الكميات' : 'Project Sizing & BOQ Quote Request'}
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
          {isAr ? 'طلب عرض أسعار معتمد لموقعك' : 'Request a Project Specification Quote'}
        </h1>
        <p className="text-xs sm:text-sm text-[#D5C9B5]/80">
          {isAr
            ? 'أرسل بيانات مشروعك وجدول الكميات المطلوب لتجهيز العرض الفني، شهادات المطابقة، والعينات المعتمدة.'
            : 'Submit your jobsite requirements or Bill of Quantities to receive formal pricing, datasheets, and sample submittals.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form (Col 7) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-6 bg-[#12202A] border border-[#D5C9B5]/20 p-6 sm:p-8 rounded-xl shadow-xl">
            {errorMessage && (
              <div className="p-3 rounded bg-red-950/80 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Client Info */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider protection-line pb-1">
                {isAr ? '1. بيانات جهة الطلب والمسؤول' : '1. Contact & Organization Info'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#D5C9B5] mb-1.5">
                    {isAr ? 'الاسم بالكامل *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={isAr ? 'م. أحمد محمود' : 'Eng. Ahmed Mahmoud'}
                    className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2.5 text-xs text-white focus:border-[#E5A72B] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D5C9B5] mb-1.5">
                    {isAr ? 'اسم الشركة / المقاول العام *' : 'Company / Contractor *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={isAr ? 'شركة الإنشاءات الهندسية' : 'Engineering Construction Corp'}
                    className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2.5 text-xs text-white focus:border-[#E5A72B] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D5C9B5] mb-1.5">
                    {isAr ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010XXXXXXXX"
                    dir="ltr"
                    className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2.5 text-xs text-white focus:border-[#E5A72B] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D5C9B5] mb-1.5">
                    {isAr ? 'البريد الإلكتروني' : 'Work Email'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="procurement@company.com"
                    dir="ltr"
                    className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2.5 text-xs text-white focus:border-[#E5A72B] outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4 pt-4 border-t border-[#D5C9B5]/10">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider protection-line pb-1">
                {isAr ? '2. طبيعة المشروع وموقع العمل' : '2. Project Details & Site Scope'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#D5C9B5] mb-1.5">
                    {isAr ? 'المحافظة / المدينة / الموقع' : 'Location / City'}
                  </label>
                  <input
                    type="text"
                    value={countryCity}
                    onChange={(e) => setCountryCity(e.target.value)}
                    placeholder={isAr ? 'العاصمة الإدارية / الساحل الشمالي' : 'Cairo / New Capital'}
                    className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2.5 text-xs text-white focus:border-[#E5A72B] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#D5C9B5] mb-1.5">
                    {isAr ? 'نوع المشروع' : 'Project Sector'}
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2.5 text-xs text-white focus:border-[#E5A72B] outline-none"
                  >
                    <option value="">{isAr ? '-- اختر قطاع المشروع --' : '-- Select Sector --'}</option>
                    <option value="بنية تحتية ونقل">{isAr ? 'بنية تحتية ونقل وطرق' : 'Infrastructure & Transport'}</option>
                    <option value="مباني وأبراج">{isAr ? 'إنشاءات وأبراج سكنية' : 'Civil Buildings & Towers'}</option>
                    <option value="صناعي ومصانع">{isAr ? 'منطقة صناعية ومصانع' : 'Industrial Complex'}</option>
                    <option value="طاقة ومرافق">{isAr ? 'محطات طاقة وكهرباء ومياه' : 'Power & Utilities'}</option>
                  </select>
                </div>
              </div>

              {/* Free-form notes */}
              <div>
                <label className="block text-xs font-medium text-[#D5C9B5] mb-1.5">
                  {isAr ? 'تفاصيل الطلب أو بنود الـ BOQ الإضافية' : 'Technical Specifications or BOQ Notes'}
                </label>
                <textarea
                  rows={4}
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  placeholder={isAr ? 'اكتب أي مقاسات مطلوبة، مواصفات استشاري، خامات، أو جدول زمني للتوريد...' : 'Specify required quantities, consultant requirements, or delivery schedule...'}
                  className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2.5 text-xs text-white focus:border-[#E5A72B] outline-none"
                ></textarea>
              </div>

              {/* Channel preference */}
              <div className="flex items-center gap-6 text-xs text-[#D5C9B5]">
                <span>{isAr ? 'قناة التواصل المفضلة:' : 'Preferred Contact:'}</span>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="channel"
                    checked={preferredChannel === 'whatsapp'}
                    onChange={() => setPreferredChannel('whatsapp')}
                    className="accent-[#E5A72B]"
                  />
                  <span>واتساب (WhatsApp)</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="radio"
                    name="channel"
                    checked={preferredChannel === 'phone'}
                    onChange={() => setPreferredChannel('phone')}
                    className="accent-[#E5A72B]"
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
                className="w-full py-3.5 rounded bg-[#E5A72B] hover:bg-[#ffbe3b] text-[#0B1720] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg signal-notch disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isSubmitting
                    ? (isAr ? 'جاري إرسال الطلب...' : 'Submitting Request...')
                    : (isAr ? 'إرسال طلب عرض الأسعار' : 'Submit Formal Quote Request')
                  }
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Basket / Summary Rail (Col 5) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#12202A] border border-[#D5C9B5]/20 rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-[#D5C9B5]/10 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#E5A72B]" />
                <span>{isAr ? 'قائمة البنود المطلوبة' : 'Selected Quote Items'}</span>
              </h3>
              {quoteBasket.length > 0 && (
                <button
                  onClick={clearQuoteBasket}
                  className="text-[11px] text-[#B8643F] hover:underline"
                >
                  {isAr ? 'تفريغ القائمة' : 'Clear All'}
                </button>
              )}
            </div>

            {quoteBasket.length === 0 ? (
              <div className="space-y-3">
                <p className="text-xs text-[#D5C9B5]/70">
                  {isAr 
                    ? 'لم تقم بإضافة منتجات محددة من الكتالوج بعد. يمكنك كتابة البند المطلوب مباشرة بالأسفل:'
                    : 'No specific items in basket yet. You can type your request directly below:'
                  }
                </p>
                <div>
                  <label className="block text-[11px] font-medium text-[#D5C9B5] mb-1">
                    {isAr ? 'اسم المنتج أو البند المطلوب' : 'Item Name / Description'}
                  </label>
                  <input
                    type="text"
                    value={manualItemTitle}
                    onChange={(e) => setManualItemTitle(e.target.value)}
                    placeholder={isAr ? 'مثال: أحذية سلامة S3 أو شريط تحذيري 500م' : 'e.g., S3 Safety shoes or warning tape'}
                    className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-xs text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#D5C9B5] mb-1">
                    {isAr ? 'الكمية التقديرية' : 'Estimated Quantity'}
                  </label>
                  <input
                    type="text"
                    value={manualItemQty}
                    onChange={(e) => setManualItemQty(e.target.value)}
                    placeholder={isAr ? '100 قطعة' : '100 units'}
                    className="w-full bg-[#0B1720] border border-[#D5C9B5]/20 rounded p-2 text-xs text-white outline-none"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {quoteBasket.map((item) => (
                  <div 
                    key={item.product.id}
                    className="p-3 rounded bg-[#0B1720] border border-[#D5C9B5]/15 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={item.product.primaryImage} 
                        alt="item" 
                        className="w-10 h-10 object-cover rounded border border-[#D5C9B5]/20" 
                      />
                      <div>
                        <span className="font-bold text-white block">
                          {isAr ? item.product.titleAr : item.product.titleEn}
                        </span>
                        <span className="text-[10px] text-[#E5A72B] font-mono">{item.product.sku}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromQuoteBasket(item.product.id)}
                      className="text-[#D5C9B5]/40 hover:text-red-400 p-1"
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
          <div className="p-4 rounded-lg bg-[#0B1720] border border-[#D5C9B5]/15 text-xs text-[#D5C9B5]/80 space-y-2">
            <span className="font-bold text-white block">
              {isAr ? 'للتنسيق الفني المباشر والفوري:' : 'Immediate Project Hotline:'}
            </span>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#E5A72B]" />
              <span dir="ltr">01010550857 / 02 2460 2460</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#E5A72B]" />
              <span>newcapitalcompany2020@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

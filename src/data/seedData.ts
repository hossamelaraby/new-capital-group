import { Product, Category, ProjectReference, DocumentItem, SiteSettings, QuoteRequest } from '../types';

export const initialSiteSettings: SiteSettings = {
  companyNameAr: 'مجموعة العاصمة الجديدة للتوريدات العمومية',
  companyNameEn: 'New Capital Group — General Supplies',
  legalNameAr: 'شركة العاصمة الجديدة للتوريدات العمومية — أحمد شرف الدين',
  legalNameEn: 'New Capital for General Supplies — Ahmed Sharaf El Dien',
  establishedYear: '2021',
  addressAr: 'المقر الرئيسي: 6 شارع النخيل، الحي المتميز، السادس من أكتوبر | فرع القاهرة: 11 شارع الحرية، الساحل، القاهرة',
  addressEn: 'Headquarters: 6 El-Nakheel St, Al-Motamayez District, 6th of October City | Cairo Branch: 11 El-Horreya St, Al-Sahel, Cairo',
  landline: '02 2460 2460',
  primaryEmail: 'newcapitalcompany2020@gmail.com',
  taglineAr: 'مستلزمات الأمن الصناعي ومهمات الوقاية الشخصية ومكافحة الحريق وحماية العاملين والمنشآت',
  taglineEn: 'Industrial Safety, PPE, Fire Protection Supplies & Workforce Protection',
  phoneNumbers: [
    { number: '01010550857', label: 'المبيعات والمشروعات (Sales)', active: true, public: true },
    { number: '01019644315', label: 'خدمة العملاء والتوريدات (Support)', active: true, public: true },
    { number: '01092920624', label: 'المكتب الفني والمواصفات (Technical Office)', active: true, public: true },
    { number: '01001761107', label: 'التوريدات الميدانية (Site Delivery)', active: true, public: true },
    { number: '01001761127', label: 'متابعة المشروعات والعمليات (Project Tracking)', active: true, public: true },
    { number: '01210250001', label: 'الإدارة العامة والمشتريات (Procurement)', active: true, public: true },
  ]
};

export const initialCategories: Category[] = [
  {
    id: 'cat-ppe',
    slug: 'ppe',
    nameAr: 'مهمات الوقاية الشخصية (PPE)',
    nameEn: 'Personal Protective Equipment',
    descAr: 'معدات حماية متكاملة للأفراد تشمل أحذية السلامة المهنية، السترات العاكسة، قفازات العمل الميكانيكية، وخوذات حماية الرأس.',
    descEn: 'Certified personal protective equipment engineered for civil construction, heavy industries, and site engineering.',
    iconName: 'Shield',
    image: '/assets/02-category-ppe.webp', // Verified correct PPE hero category image
    published: true,
    order: 1,
    subcategories: [
      { slug: 'footwear', nameAr: 'أحذية سلامة واقية بمواصفات S3 - S1B', nameEn: 'Safety Footwear S3 / S1B' },
      { slug: 'vests', nameAr: 'سترات السلامة العاكسة الفوسفورية', nameEn: 'Hi-Vis Reflective Vests' },
      { slug: 'gloves', nameAr: 'قفازات الحماية الميكانيكية والقطع', nameEn: 'Work & Protective Gloves' },
      { slug: 'head-eye', nameAr: 'خوذات الرأس وحماية الأعين والوجه', nameEn: 'Helmets & Eye Protection' },
      { slug: 'harness', nameAr: 'أحزمة الأمان والعمل على الارتفاعات', nameEn: 'Fall Arrest & Safety Harnesses' },
      { slug: 'chemical-suits', nameAr: 'الملابس الواقية من الأحماض والكيماويات', nameEn: 'Chemical & Acid Protective Suits' },
      { slug: 'welding-heat-electric', nameAr: 'مهمات الوقاية من اللحام والحرارة المرتفعة والكهرباء', nameEn: 'Welding, Heat & Electrical PPE' }
    ]
  },
  {
    id: 'cat-signs',
    slug: 'safety-signs',
    nameAr: 'المستلزمات المرورية ولوحات السلامة والصحة المهنية داخل المواقع والمنشآت',
    nameEn: 'Safety Signs & Site Signage',
    descAr: 'لوحات المنع، التحذير من المخاطر، إلزام مهمات الوقاية، ولوحات مسارات الإخلاء والطوارئ مطابقة لمواصفات ISO 7010 والكود المصري.',
    descEn: 'Durable rigid PVC, aluminum, and reflective safety signage boards for industrial hazard control.',
    iconName: 'AlertTriangle',
    image: '/assets/04-category-safety-signs.webp', // Verified correct Safety Signs Category image
    published: true,
    order: 2,
    subcategories: [
      { slug: 'prohibition-warning', nameAr: 'لوحات المنع والتحذير', nameEn: 'Prohibition & Hazard Signs' },
      { slug: 'ppe-mandatory', nameAr: 'لوحات إلزام مهمات الوقاية', nameEn: 'Mandatory PPE Signs' },
      { slug: 'evacuation-fire', nameAr: 'لوحات مخارج الطوارئ ومسارات الهروب', nameEn: 'Emergency Evacuation Signs' }
    ]
  },
  {
    id: 'cat-traffic',
    slug: 'traffic-utilities',
    nameAr: 'سلامة الطرق والمرافق والشبكات المدفونة',
    nameEn: 'Traffic & Utility Safety',
    descAr: 'أشرطة تحذيرية مدفونة قابلة للكشف (Detectable Warning Tape)، محددات مسارات العمل، وحواجز تأمين شبكات الكهرباء والغاز والمياه.',
    descEn: 'Subterranean detectable warning tapes, traffic cones, delineators, and utility trench protection.',
    iconName: 'Construction',
    image: '/assets/13-detectable-warning-tape.webp', // Verified correct Underground Tapes category image
    published: true,
    order: 3,
    subcategories: [
      { slug: 'warning-tape', nameAr: 'أشرطة تحذيرية مدفونة قابلة للكشف', nameEn: 'Detectable Underground Tape' },
      { slug: 'traffic-control', nameAr: 'أقماع وحواجز ومحددات المسار', nameEn: 'Cones & Site Delineators' }
    ]
  },
  {
    id: 'cat-fire',
    slug: 'fire-safety',
    nameAr: 'مستلزمات ولوحات مكافحة الحريق',
    nameEn: 'Fire Safety Supplies & Signs',
    descAr: 'لوحات فوسفورية مضيئة لتحديد معدات الإطفاء ومخارج الطوارئ، ومستلزمات مكافحة الحريق الميدانية لتأمين المنشآت والمشروعات.',
    descEn: 'Photoluminescent fire equipment locator signs, emergency wayfinding, and approved site-readiness supplies.',
    iconName: 'Flame',
    image: '/assets/03-category-fire-protection.webp', // Verified correct Fire Safety category image
    published: true,
    order: 4,
    subcategories: [
      { slug: 'fire-signs', nameAr: 'لوحات تحديد نقاط الإطفاء الفوسفورية', nameEn: 'Photoluminescent Fire Signs' },
      { slug: 'fire-supplies', nameAr: 'معدات ومستلزمات الإطفاء الميداني', nameEn: 'Fire Equipment & Supplies' }
    ]
  },
  {
    id: 'cat-solar',
    slug: 'solar-lighting',
    nameAr: 'كشافات الإنارة الشمسية للمواقع والأسوار',
    nameEn: 'Autonomous Solar Worksite Lighting',
    descAr: 'كشافات ليد شمسية مستقلة للواجهات وأسوار المشروعات المؤقتة والمواقع الإنشائية النائية ببطاريات فوسفات الليثيوم LiFePO4.',
    descEn: 'High-power solar floodlights and off-grid luminaires for project perimeters and contractor base camps.',
    iconName: 'Sun',
    image: '/assets/05-category-solar-lighting.webp', // Verified correct Solar Lights category image
    published: true,
    order: 5,
    subcategories: [
      { slug: 'floodlights', nameAr: 'كشافات إنارة شمسية للأسوار والمواقع', nameEn: 'Solar Floodlights' },
      { slug: 'street-pole', nameAr: 'أعمدة وإنارة الطرق المستقلة', nameEn: 'Solar Street Luminaires' }
    ]
  },
  {
    id: 'cat-conduit',
    slug: 'electrical-conduit',
    nameAr: 'مواسير وتمديدات كهروميكانيكية EMT (مراجع الموردين)',
    nameEn: 'Electrical Conduit Systems & Fittings',
    descAr: 'مواسير معدنية مجلفنة ملونة EMT ومستلزماتها الفنية لمشروعات التمديدات (كتالوجات موردين معتمدة قيد المراجعة).',
    descEn: 'Metallic conduit systems, fittings, and industrial raceways (Supplier catalogs archived under review).',
    iconName: 'Zap',
    image: '/assets/19-emt-reference-material.webp', // Verified correct electrical conduit image
    published: true,
    order: 6,
    subcategories: [
      { slug: 'emt-conduit', nameAr: 'مواسير EMT مجلفنة وملونة', nameEn: 'Galvanized EMT Conduit' },
      { slug: 'fittings', nameAr: 'وصلات ومثبتات وجلب المواسير', nameEn: 'Conduit Fittings & Couplings' }
    ]
  }
];

export const initialProducts: Product[] = [
  // 1. أحذية السلامة المهنية S3
  {
    id: 'prod-01',
    sku: 'NC-PPE-SH01',
    titleAr: 'أحذية السلامة الصناعية الواقية بمواصفات S3 و S1B',
    titleEn: 'Industrial Protective Safety Footwear S3 & S1B Certified',
    shortDescAr: 'أحذية سلامة واقية معتمدة بمواصفات S3 و S1B بمقدمة فولاذية لحماية الأصابع ونعل مزدوج مانع للانزلاق والاختراق والزيوت.',
    shortDescEn: 'Premium industrial safety boots featuring steel/composite toe cap, puncture-resistant midsole, and oil-proof outsole.',
    longDescAr: 'صُممت أحذية السلامة لمجموعة العاصمة الجديدة لتلبي أقسى معايير الأمان الميداني في مشروعات التشييد والمصانع والبنية التحتية. تشمل الخيارات حماية كاملة للأصابع تتحمل صدمات حتى 200 جول، شريحة مانعة لاختراق المسامير، ونعل بولي يوريثان مقاوم للحرارة والتآكل والانزلاق (SRC).',
    longDescEn: 'Engineered for maximum foot protection across civil works, high-rise construction, and industrial fabrication. Built with treated split leather, breathable ergonomic lining, and certified anti-fatigue insole.',
    categorySlug: 'ppe',
    subcategorySlug: 'footwear',
    tag: 'C-ZAR • PPE FOOTWEAR',
    primaryImage: '/assets/06-safety-footwear-product.webp',
    galleryImages: [],
    imageAltAr: 'حذاء سلامة صناعي عالي التحمل للمهندسين والعمال',
    imageAltEn: 'Heavy duty safety footwear for industrial site',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'C-ZAR / Approved Specification',
    materialAr: 'جلد طبيعي معالج / مقدمة فولاذية / نعل PU/PU مزدوج الكثافة',
    materialEn: 'Treated industrial leather / Steel toe / Dual-density PU outsole',
    standards: [
      { name: 'EN ISO 20345:2011 S3 / S1B / S1P SRC', verified: true, documentRef: 'datasheets/shoe-s3-datasheet.pdf' },
      { name: 'EEHC Standard EDMS Specification Reference', verified: true }
    ],
    specifications: [
      { keyAr: 'مقاومة الصدمات', keyEn: 'Impact Resistance', valueAr: 'حتى 200 جول (Steel Toe Cap)', valueEn: '200 Joules steel toe cap' },
      { keyAr: 'مقاومة الانزلاق', keyEn: 'Slip Resistance', valueAr: 'تصنيف SRC مانع للانزلاق على السيراميك والزيوت', valueEn: 'SRC rated slip resistance' },
      { keyAr: 'المقاسات المتاحة', keyEn: 'Available Sizes', valueAr: 'من مقاس 38 حتى 47', valueEn: 'EU 38 to 47' },
      { keyAr: 'مقاومة الاختراق', keyEn: 'Puncture Resistance', valueAr: 'شريحة صلبة مقاومة لقوة اختراق حتى 1100 نيوتن', valueEn: 'Puncture resistant up to 1100N' }
    ],
    applicationsAr: ['المواقع الإنشائية الكبرى والأبراج', 'مصانع الحديد والصلب والورش الثقيلة', 'أعمال الحفر وتمديدات المرافق الميدانية'],
    applicationsEn: ['Major construction sites', 'Steel & heavy fabrication plants', 'Infrastructure trenching & utilities'],
    datasheetUrl: '/datasheets/shoe-s3-datasheet.pdf',
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 2. سترات السلامة العاكسة
  {
    id: 'prod-02',
    sku: 'NC-PPE-VT02',
    titleAr: 'سترات السلامة الفوسفورية عالية الوضوح Class 2',
    titleEn: 'Hi-Vis Fluorescent Reflective Safety Vests',
    shortDescAr: 'سترات عاكسة للضوء بأشرطة تحذيرية 360 درجة لضمان الرؤية النهارية والليلية لفرق العمل والمهندسين على الطرق.',
    shortDescEn: 'Fluorescent polyester safety vests with premium retro-reflective tape ensuring maximum worksite visibility.',
    longDescAr: 'سترات سلامة عالية الجودة مصنعة من بوليستر خفيف وقابل للتنفس مزودة بشرائط عاكسة متطورة تعكس أضواء المعدات والمركبات من مسافات بعيدة. تتوفر بألوان أصفر فوسفوري وبرتقالي تحذيري، مع إمكانية إضافة سحاب متين وجيوب متعددة للأجهزة والمخططات، وطباعة شعار المشروع للكميات المخصصة.',
    longDescEn: 'Essential safety apparel conforming to EN ISO 20471. Designed for day and night roadworks, logistics yards, and civil engineering sites with high vehicle and heavy equipment traffic.',
    categorySlug: 'ppe',
    subcategorySlug: 'vests',
    tag: 'HIGH-VISIBILITY APPAREL',
    primaryImage: '/assets/08-reflective-vest-product.webp',
    galleryImages: [],
    imageAltAr: 'سترة سلامة عاكسة فوسفورية لمواقع الطرق والإنشاءات',
    imageAltEn: 'Neon reflective high visibility safety vest',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital Spec',
    materialAr: 'بوليستر 100% متين / شرائط عاكسة فضية عالية الانعكاس',
    materialEn: '100% Breathable polyester / Glass bead reflective striping',
    standards: [
      { name: 'EN ISO 20471 Class 2 Visibility', verified: true, documentRef: 'datasheets/vest-datasheet.pdf' }
    ],
    specifications: [
      { keyAr: 'الألوان المعتمدة', keyEn: 'Colors', valueAr: 'أصفر فوسفوري، برتقالي تحذيري', valueEn: 'Fluorescent Yellow, Safety Orange' },
      { keyAr: 'نوع الغلق', keyEn: 'Closure Mechanism', valueAr: 'سحاب أمامي متين أو شريط فيلكرو لاصق', valueEn: 'Heavy zipper or heavy-duty velcro' },
      { keyAr: 'المقاسات المتاحة', keyEn: 'Sizes', valueAr: 'M, L, XL, XXL, 3XL', valueEn: 'M, L, XL, 2XL, 3XL' },
      { keyAr: 'الطباعة المخصصة', keyEn: 'Branding', valueAr: 'إمكانية طباعة هوية وشعار المقاول والمشروع', valueEn: 'Custom screen printing available for bulk' }
    ],
    applicationsAr: ['مشروعات الطرق والكباري والمحاور السريعة', 'تنظيم حركة المرور والمعدات بالمواقع', 'الموانئ والمطارات والمستودعات اللوجستية'],
    applicationsEn: ['Highway & bridge civil projects', 'Site traffic marshalling', 'Ports, airports & logistics hubs'],
    datasheetUrl: '/datasheets/vest-datasheet.pdf',
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 3. قفازات الحماية الميكانيكية
  {
    id: 'prod-03',
    sku: 'NC-PPE-GL03',
    titleAr: 'قفازات الحماية الميكانيكية والصناعية المقاومة للتآكل',
    titleEn: 'Heavy Mechanical & Cut Resistant Gloves',
    shortDescAr: 'قفازات عمل مبطنة بالنيتريل والبولي يوريثان أو الجلد الطبيعي لمناولة الحديد، الألواح المعدنية، وأعمال الورش.',
    shortDescEn: 'Task-specific gloves providing puncture, abrasion, and cut resistance for heavy engineering tasks.',
    longDescAr: 'توفر مجموعة العاصمة الجديدة حلول حماية متكاملة للأيدي تناسب مختلف المخاطر الميكانيكية والكيميائية. تشمل قفازات مطلية بنيتريل رغوي مانع للانزلاق للأعمال الدقيقة، وقفازات جلدية معالجة مخصصة لأعمال اللحام والمقاولات العامة والحدادة المسلحة.',
    longDescEn: 'Comprehensive hand safety lines tested against EN 388 mechanical hazards. Ergonomic design reduces hand fatigue during continuous manual handling and assembly work.',
    categorySlug: 'ppe',
    subcategorySlug: 'gloves',
    tag: 'HAND PROTECTION',
    primaryImage: '/assets/07-protective-gloves-product.webp',
    galleryImages: [],
    imageAltAr: 'قفازات سلامة صناعية لمناولة المواد الإنشائية',
    imageAltEn: 'Reinforced industrial handling gloves',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital WorkSafe',
    materialAr: 'ألياف نايلون مقواة / طلاء نيتريل أو PU / جلد بقري مدبوغ',
    materialEn: 'Seamless nylon shell / Sandy nitrile dip / Split cowhide leather',
    standards: [
      { name: 'EN 388 (Abrasion, Cut, Tear, Puncture)', verified: true, documentRef: 'datasheets/gloves-datasheet.pdf' },
      { name: 'EEHC Standard EDMS 30-309-1 (Electrical Reference)', verified: true }
    ],
    specifications: [
      { keyAr: 'المقاومة الميكانيكية', keyEn: 'Mechanical Grade', valueAr: 'مقاومة تآكل وثقب وتمزق ميكانيكي عالي', valueEn: 'High tear & puncture resistance' },
      { keyAr: 'المقاسات', keyEn: 'Sizes', valueAr: '8 (M), 9 (L), 10 (XL), 11 (XXL)', valueEn: 'Size 8 to 11' },
      { keyAr: 'مقاومة الانزلاق', keyEn: 'Grip', valueAr: 'طبقة حبيبية تمنع انزلاق الأدوات والزيوت', valueEn: 'Sandy textured grip for oily parts' }
    ],
    applicationsAr: ['تشكيل وتركيب حديد التسليح والصاج', 'أعمال التجميع الميكانيكي والصيانة', 'مناولة المواد والكتل الخشنة بالمواقع'],
    applicationsEn: ['Rebar tying & sheet metal handling', 'Mechanical workshops', 'General building material logistics'],
    datasheetUrl: '/datasheets/gloves-datasheet.pdf',
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 4. خوذات الرأس وحماية الأعين
  {
    id: 'prod-04',
    sku: 'NC-PPE-HE04',
    titleAr: 'خوذات حماية الرأس ونظارات الأمان الصناعية EN 397',
    titleEn: 'Industrial Hard Hats & Eye Protection EN 397 / EN 166',
    shortDescAr: 'خوذات سلامة مهنية عالية المتانة مزودة ببطانة داخلية ماصة للصدمات ونظارات أمان بانورامية ضد الشظايا وتطاير الأجسام.',
    shortDescEn: 'Impact-resistant industrial hard hats with 6-point suspension harness and optical safety eyewear.',
    longDescAr: 'حماية متكاملة للرأس والوجه للعمل في بيئات المشروعات المعقدة. خوذات مصنعة من بولي إيثيلين عالي الكثافة (HDPE) أو ABS المقاوم للصدمات المباشرة والعزل الكهربائي حتى 440 فولت، متوافقة مع نظارات سلامة شفافة ومعتمة مضادة للخدش والضباب لحماية العين في مواقع الحفر والتقطيع.',
    longDescEn: 'Engineered for complete head and ocular defense. Features adjustable ratchet wheel, ventilation vents, and certified UV & ballistic particle protection.',
    categorySlug: 'ppe',
    subcategorySlug: 'head-eye',
    tag: 'HEAD & EYE PROTECTION',
    primaryImage: '/assets/09-hard-hat-eye-protection.webp',
    galleryImages: [],
    imageAltAr: 'خوذات أمان بيضاء ونظارات حماية صناعية للمهندسين',
    imageAltEn: 'White safety hard hat and industrial goggles',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital Shield',
    materialAr: 'بلاستيك هندسي ABS عالي الكثافة / عدسات بولي كربونات مقاومة للصدمات',
    materialEn: 'High-density ABS shell / Polycarbonate anti-impact lenses',
    standards: [
      { name: 'EN 397 Industrial Safety Helmets', verified: true },
      { name: 'EN 166 Personal Eye-Protection Standards', verified: true }
    ],
    specifications: [
      { keyAr: 'العزل الكهربائي', keyEn: 'Electrical Insulation', valueAr: 'عازل حتى 440 فولت تيار متردد', valueEn: '440V AC electrical insulation' },
      { keyAr: 'نظام التثبيت', keyEn: 'Harness Suspension', valueAr: 'نظام تعليق داخلي بـ 6 نقاط مع بكرة ضبط المقاس', valueEn: '6-point textile suspension with ratchet knob' },
      { keyAr: 'الألوان المتاحة', keyEn: 'Colors', valueAr: 'أبيض (مهندسين)، أصفر (فنيين)، أزرق، برتقالي', valueEn: 'White, Yellow, Blue, Orange' }
    ],
    applicationsAr: ['مواقع التشييد والبناء الشاهقة', 'أعمال الحفر والرافعات والتحميل', 'محطات الطاقة ومصانع البتروكيماويات'],
    applicationsEn: ['High-rise construction sites', 'Crane lifting zones', 'Power plants & petrochemical refineries'],
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 5. أحزمة الأمان والعمل على الارتفاعات
  {
    id: 'prod-05',
    sku: 'NC-PPE-HN05',
    titleAr: 'أحزمة الأمان والعمل على الارتفاعات ومهمات منع السقوط',
    titleEn: 'Full Body Fall Arrest Harness & Shock Absorbing Lanyard',
    shortDescAr: 'أحزمة أمان جسدية كاملة بحلقات فولاذية D-Ring مزدوجة وحبال امتصاص الصدمات معتمدة طبقا لمعايير EN 361.',
    shortDescEn: 'Heavy-duty full body safety harness with twin lanyards, energy absorber and scaffold hooks.',
    longDescAr: 'مهمات متكاملة للعمل الآمن على السقالات والارتفاعات والأبراج المعدنية. تصنع الأحزمة من ألياف بوليستر عالية الشد مع خياطة مدعمة ونقاط تثبيت فولاذية متعددة، ومزودة بحبل مزدوج لامتصاص طاقة السقوط وخطافات كبيرة سريعة القفل تضمن سلامة الفني في كل حركة.',
    longDescEn: 'Certified fall protection systems adhering to EN 361 and EN 355. Designed for maximum ergonomic comfort with padded leg straps and breathable back support.',
    categorySlug: 'ppe',
    subcategorySlug: 'harness',
    tag: 'FALL PROTECTION HARNESS',
    primaryImage: '/assets/product-safety-harness.webp',
    galleryImages: [],
    imageAltAr: 'مهندس يرتدي حزام أمان كامل مع حبال مانعة للسقوط على سقالة',
    imageAltEn: 'Full body safety harness worn by industrial site worker',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital SafeClimb',
    materialAr: 'ألياف بوليستر عالية القوة بعرض 45 مم / حلقات فولاذية مطلية ضد الصدأ',
    materialEn: '45mm High-tenacity polyester webbing / Forged alloy steel hardware',
    standards: [
      { name: 'EN 361 Full Body Harnesses Specification', verified: true },
      { name: 'EN 355 Energy Absorbers & Shock Lanyards', verified: true }
    ],
    specifications: [
      { keyAr: 'قوة الكسر والشد', keyEn: 'Breaking Strength', valueAr: 'أكثر من 22 كيلو نيوتن (22 kN)', valueEn: 'Over 22 kN breaking force' },
      { keyAr: 'نوع الحبل', keyEn: 'Lanyard Type', valueAr: 'حبل مطاطي مزدوج ممتص للصدمات مع مشابك سقالات', valueEn: 'Twin elastic lanyard with scaffold snap hooks' },
      { keyAr: 'الوزن الأقصى للمستخدم', keyEn: 'Capacity', valueAr: 'حتى 140 كجم مع المعدات', valueEn: 'Rated up to 140 kg user mass' }
    ],
    applicationsAr: ['أعمال السقالات وتركيب الهياكل المعدنية', 'أبراج الاتصالات وخطوط الضغط العالي', 'صيانة الواجهات والمنصات المرتفعة'],
    applicationsEn: ['Scaffolding & structural steel erection', 'Telecom & transmission towers', 'Facade maintenance & elevated platforms'],
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 6. طفايات ومعدات الحريق
  {
    id: 'prod-06',
    sku: 'NC-FIR-EX06',
    titleAr: 'أجهزة وطفايات مكافحة الحريق الميدانية وخزائن الإطفاء',
    titleEn: 'Industrial Fire Extinguishers & Fire Hose Station Equipment',
    shortDescAr: 'طفايات حريق بودرة كيميائية جافة وثاني أكسيد الكربون وخزائن إطفاء مجهزة بخراطيم مطابقة لكود الدفاع المدني.',
    shortDescEn: 'Certified dry chemical powder, CO2 extinguishers, and complete worksite fire cabinet stations.',
    longDescAr: 'منظومات إطفاء حريق ميدانية موثقة لتأمين المنشآت الإدارية ومستودعات المواد القابلة للاشتعال ومواقع المشروعات. تشمل طفايات بودرة جافة (ABC) بأحجام من 6 كجم حتى 50 كجم للمعدات المتنقلة، وطفايات CO2 للوحات الكهربائية، مع إمكانية توفير صناديق حريق حديدية معالجة ضد العوامل الجوية.',
    longDescEn: 'Comprehensive first-response firefighting gear aligned with Egyptian Civil Defense and NFPA regulations. Pressure tested with heavy-gauge brass valves and pressure gauges.',
    categorySlug: 'fire-safety',
    subcategorySlug: 'fire-supplies',
    tag: 'FIREFIGHTING EQUIPMENT',
    primaryImage: '/assets/product-fire-equipment.webp',
    galleryImages: ['/assets/10-fire-extinguisher-product.webp'],
    imageAltAr: 'طفايات حريق صناعية حمراء وخزانة إطفاء بمحطة الموقع',
    imageAltEn: 'Industrial fire extinguishers and fire hose cabinet',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'Approved Egyptian Standard Spec',
    materialAr: 'صلب مسحوب عالي التحمل / صمامات نحاسية / دهان إلكتروستاتيك أحمر',
    materialEn: 'Deep-drawn steel cylinder / Forged brass valve / Red powder coating',
    standards: [
      { name: 'Egyptian Civil Defense Fire Code Compliance', verified: true },
      { name: 'EN 3 Portable Fire Extinguishers Standard', verified: true }
    ],
    specifications: [
      { keyAr: 'السعات المتوفرة', keyEn: 'Capacities', valueAr: '6 كجم، 9 كجم، 12 كجم، و50 كجم على عجلات', valueEn: '6kg, 9kg, 12kg hand-held & 50kg wheeled' },
      { keyAr: 'نوع وسيط الإطفاء', keyEn: 'Extinguishing Agent', valueAr: 'بودرة جافة متعددة الأغراض ABC أو غاز CO2', valueEn: 'Multi-purpose ABC Dry Chemical or CO2' },
      { keyAr: 'ضغط التشغيل', keyEn: 'Working Pressure', valueAr: '14 بار مع مؤشر ضغط فوسفوري', valueEn: '14 bar with calibrated pressure gauge' }
    ],
    applicationsAr: ['المستودعات ومخازن الوقود والمواد القابلة للاشتعال', 'غرف المولدات ومحطات الكهرباء', 'المباني والمكاتب الإدارية بالمشروعات'],
    applicationsEn: ['Storage depots & fuel stores', 'Generator & electrical switchgear rooms', 'Project admin offices'],
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 7. لوحات ومستلزمات مكافحة الحريق
  {
    id: 'prod-07',
    sku: 'NC-FIR-SN07',
    titleAr: 'لوحات ومستلزمات مكافحة الحريق الفوسفورية (Fire Safety)',
    titleEn: 'Photoluminescent Fire Safety Signs & Accessories',
    shortDescAr: 'لوحات تحديد مواقع طفايات الحريق وخراطيم الإطفاء المضيئة ذاتياً في الظلام عند انقطاع الكهرباء وتصاعد الدخان.',
    shortDescEn: 'Glow-in-the-dark fire equipment markers complying with DIN 67510 and ISO 7010.',
    longDescAr: 'علامات ولوحات تحديد معدات الإطفاء مصنعة من مواد فوسفورية متطورة تختزن الضوء وتتوهج تلقائياً لساعات طويلة في حال انقطاع التيار الكهربائي أو تصاعد الدخان، مما يرشد فرق الإطفاء والعمال فوراً إلى وسائل مكافحة الحريق ومخارج النجاة.',
    longDescEn: 'Critical life-safety indicators aligning with NFPA 170 and DIN 67510 standards. Zero power consumption ensures perpetual reliability during building blackout crises.',
    categorySlug: 'fire-safety',
    subcategorySlug: 'fire-signs',
    tag: 'PHOTOLUMINESCENT SIGNS',
    primaryImage: '/assets/11-fire-safety-signage.webp',
    galleryImages: [],
    imageAltAr: 'لوحات إرشادية فوسفورية لمعدات الإطفاء ومخارج الطوارئ',
    imageAltEn: 'Photoluminescent fire equipment locator sign',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital Fire Division',
    materialAr: 'بوليمر فوسفوري مشع ذاتي الإطفاء / ألومنيوم مركب',
    materialEn: 'Self-extinguishing photoluminescent polymer / Aluminum backing',
    standards: [
      { name: 'DIN 67510 Luminescence Specification', verified: true, documentRef: 'datasheets/fire-signs-datasheet.pdf' },
      { name: 'NFPA 170 Standard for Fire Safety Symbols', verified: true }
    ],
    specifications: [
      { keyAr: 'مدة التوهج في الظلام', keyEn: 'Glow Duration', valueAr: 'توهج يستمر حتى 6 إلى 8 ساعات بعد انقطاع الضوء', valueEn: 'Luminescent afterglow up to 8 hours' },
      { keyAr: 'المقاسات المتاحة', keyEn: 'Dimensions', valueAr: '15×15 سم، 20×20 سم، 20×40 سم، 30×30 سم', valueEn: '15x15cm, 20x20cm, 20x40cm, 30x30cm' }
    ],
    applicationsAr: ['غرف المولدات ومحولات الضغط العالي', 'المباني الإدارية بالمشروعات والكمبوندات', 'المستودعات والأنفاق'],
    applicationsEn: ['Substations & generator rooms', 'Administrative site compounds', 'Depots & transit corridors'],
    datasheetUrl: '/datasheets/fire-signs-datasheet.pdf',
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 8. لوحات مخارج الطوارئ ومسارات الهروب
  {
    id: 'prod-08',
    sku: 'NC-FIR-EV08',
    titleAr: 'لوحات مخارج الطوارئ ومسارات الهروب (Emergency Evacuation)',
    titleEn: 'Emergency Exit & Evacuation Route Signboards',
    shortDescAr: 'علامات ولوحات إرشادية خضراء معيارية لتوجيه الأفراد نحو مخارج النجاة ونقاط التجمع الآمنة عند الطوارئ.',
    shortDescEn: 'Green directional wayfinding signs marking emergency escape routes and muster points.',
    longDescAr: 'لوحات مسارات الهروب المعيارية طبقا لكود الدفاع المدني، مصنعة على ألواح خفيفة ومتينة بألوان خضراء فسفورية أو عاكسة، توجه العمال والزوار بدقة نحو أقرب سلم طوارئ أو مخرج نجاة أو نقطة تجمع آمنة في الموقع.',
    longDescEn: 'Essential safety wayfinding boards ensuring rapid building and site evacuation during fire or emergency incidents.',
    categorySlug: 'fire-safety',
    subcategorySlug: 'evacuation-fire',
    tag: 'EVACUATION WAYFINDING',
    primaryImage: '/assets/12-emergency-exit-signage.webp',
    galleryImages: [],
    imageAltAr: 'لوحات مخارج الطوارئ ومسارات الهروب الخضراء',
    imageAltEn: 'Green emergency exit route sign',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital Signage Division',
    materialAr: 'PVC صلب فوسفوري ذاتي الإضاءة أو ألومنيوم عاكس',
    materialEn: 'Photoluminescent rigid PVC or reflective aluminum',
    standards: [
      { name: 'ISO 7010 Safe Condition Symbols (E-Series)', verified: true }
    ],
    specifications: [
      { keyAr: 'المقاسات المتاحة', keyEn: 'Dimensions', valueAr: '15×30 سم، 20×40 سم، 30×60 سم', valueEn: '15x30cm, 20x40cm, 30x60cm' },
      { keyAr: 'الوضوح البصري', keyEn: 'Visibility', valueAr: 'رؤية واضحة حتى مسافة 25 متراً في الممرات', valueEn: 'Visible up to 25m in hallways' }
    ],
    applicationsAr: ['ممرات ومخارج مباني المشروعات الإدارية', 'محطات المترو والأنفاق والمطارات', 'المستودعات والورش المغلقة'],
    applicationsEn: ['Administrative site buildings', 'Metro stations & tunnels', 'Warehouses and enclosed workshops'],
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 9. أشرطة تحذيرية مدفونة قابلة للكشف
  {
    id: 'prod-09',
    sku: 'NC-UTL-TP09',
    titleAr: 'أشرطة تحذيرية مدفونة قابلة للكشف (Detectable Warning Tape)',
    titleEn: 'Detectable Subterranean Warning Tape with Foil Core',
    shortDescAr: 'شريط تحذيري تحت الأرض برقائق ألومنيوم مدمجة لتحديد مسارات كابلات الكهرباء وأنابيب الغاز والمياه بواسطة أجهزة الكشف.',
    shortDescEn: 'Underground warning tape with continuous aluminum foil core for early excavator locator detection.',
    longDescAr: 'شريط بولي إيثيلين مدفون مصمم خصيصاً للتمديدات والمرافق التحتية ليوفر إنذاراً مبكراً مزدوجاً: إنذار مرئي بألوان قياسية وكتابات تحذيرية غير قابلة للمحو، وإنذار كهرومغناطيسي تكتشفه أجهزة تتبع مسارات الكابلات والأنابيب السطحية قبل بدء الحفر بالمعدات الثقيلة، مما يحمي الشبكات من التلف والانقطاع.',
    longDescEn: 'Engineered for high chemical resistance against subterranean acids, alkalis, and moisture. Conforms to EEHC EDMS electrical utility specifications with permanent bilingual warning texts.',
    categorySlug: 'traffic-utilities',
    subcategorySlug: 'warning-tape',
    tag: 'UTILITY INFRASTRUCTURE',
    primaryImage: '/assets/product-warning-tape.webp',
    galleryImages: ['/assets/13-detectable-warning-tape.webp'],
    imageAltAr: 'لفات أشرطة تحذيرية مدفونة قابلة للكشف لكابلات الكهرباء والمياه',
    imageAltEn: 'Rolls of detectable warning tape for underground utilities',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital Core Spec',
    materialAr: 'بولي إيثيلين بكر عالي الكثافة (HDPE) مع شريحة ألومنيوم غير متآكلة',
    materialEn: 'Virgin HDPE laminated with non-degrading metallic aluminum foil',
    standards: [
      { name: 'EEHC Standard EDMS 30-310-1 for Buried Tapes', verified: true, documentRef: 'datasheets/tape-datasheet.pdf' },
      { name: 'ASTM D2103 Soil Chemical & Acid Resistance', verified: true }
    ],
    specifications: [
      { keyAr: 'عرض الشريط', keyEn: 'Roll Width', valueAr: '15 سم، 20 سم، 30 سم (حسب الطلب)', valueEn: '150mm, 200mm, 300mm' },
      { keyAr: 'طول اللفة', keyEn: 'Length Per Roll', valueAr: '250 متر / 500 متر', valueEn: '250m or 500m rolls' },
      { keyAr: 'الترميز اللوني', keyEn: 'Color Coding', valueAr: 'أحمر (كهرباء)، أصفر (غاز)، أزرق (مياه)، برتقالي (اتصالات)', valueEn: 'Red (Electric), Yellow (Gas), Blue (Water), Orange (Telecom)' },
      { keyAr: 'الكشف الميداني', keyEn: 'Detectability', valueAr: 'قابل للكشف بأجهزة Radio Detection و Pipe Locators', valueEn: 'Detectable by standard RF line locators' }
    ],
    applicationsAr: ['مسارات كابلات الجهد العالي والمتوسط', 'شبكات الغاز الطبيعي وخطوط البترول', 'خطوط المياه والصرف الصحي الرئيسية', 'مسارات كابلات الألياف الضوئية والاتصالات'],
    applicationsEn: ['Power transmission lines', 'Natural gas pipelines', 'Water & wastewater mains', 'Fiber optic corridors'],
    datasheetUrl: '/datasheets/tape-datasheet.pdf',
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 10. أقماع وحواجز ومحددات المسار المرورية
  {
    id: 'prod-10',
    sku: 'NC-TRF-CN10',
    titleAr: 'أقماع وحواجز ومحددات المسار المرورية والموقعية',
    titleEn: 'Heavy Duty Traffic Cones, Delineators & Site Barriers',
    shortDescAr: 'أقماع مرورية مرنة عالية الارتداد بشرائط عاكسة وحواجز أمان بلاستيكية لتحديد مسارات التحويلات ومناطق العمل المؤقتة.',
    shortDescEn: 'Heavyweight PVC traffic cones with prismatic reflective sleeves and interlockable worksite barriers.',
    longDescAr: 'مهمات تأمين السلامة المرورية في مواقع المشروعات والشوارع والمحاور السريعة. تتميز الأقماع بقاعدة ثقيلة مضادة للانقلاب بفعل الرياح أو سرعة المركبات، مع مصدات وحواجز قابلة للملء بالماء أو الرمل لعزل مناطق الحفر والمعدات الثقيلة عن حركة المرور.',
    longDescEn: 'Engineered for high visibility and durable impact recovery. Reflective sheeting guarantees 24/7 visibility for incoming traffic.',
    categorySlug: 'traffic-utilities',
    subcategorySlug: 'traffic-control',
    tag: 'TRAFFIC & SITE CONTROL',
    primaryImage: '/assets/14-traffic-cones-barriers.webp',
    galleryImages: [],
    imageAltAr: 'أقماع مرورية برتقالية وحواجز تأمين مسار العمل بالموقع',
    imageAltEn: 'Reflective traffic cones and site demarcating barriers',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital SiteSafe',
    materialAr: 'بولي فينيل كلوريد مرن (Flexible PVC) عالي التحمل وقاعدة مطاطية',
    materialEn: 'UV-stabilized flexible PVC with heavy recycled rubber base',
    standards: [
      { name: 'EN 13422 Traffic Cones & Delineators Specification', verified: true }
    ],
    specifications: [
      { keyAr: 'الارتفاعات المتاحة', keyEn: 'Cone Heights', valueAr: '50 سم، 75 سم، 100 سم مع شريط عاكس فوسفوري', valueEn: '50cm, 75cm, 100cm with reflective collar' },
      { keyAr: 'الوزن والثبات', keyEn: 'Base Weight', valueAr: 'من 2.5 كجم إلى 5 كجم لضمان الثبات الميداني', valueEn: '2.5kg to 5kg wind-resistant weighted base' }
    ],
    applicationsAr: ['تحويلات الطرق السريعة والمحاور الحضرية', 'عزل وتأمين حواف خنادق الحفر بالمواقع', 'تنظيم حركة شاحنات ومعدات الخرسانة'],
    applicationsEn: ['Highway detours & worksites', 'Trench perimeter barricades', 'Heavy site logistics lanes'],
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 11. لوحات وإشارات السلامة الموقعية والمنع والإلزام
  {
    id: 'prod-11',
    sku: 'NC-SGN-SG11',
    titleAr: 'لوحات وإشارات السلامة الموقعية والمنع والإلزام ISO 7010',
    titleEn: 'Worksite Safety, Hazard Warning & Mandatory Directive Signboards',
    shortDescAr: 'منظومة لوحات السلامة الشاملة للتحذير من المخاطر وإلزام مهمات الوقاية الموقعية من الألومنيوم المقاوم للشمس والطقس.',
    shortDescEn: 'Standard industrial compliance sign panels: Caution hazards, Mandatory PPE directives, and Site Access rules.',
    longDescAr: 'لوحات إرشادية وتحذيرية موحدة مصنعة بأعلى مواصفات المتانة لتناسب ظروف العمل الصعبة بالمواقع الإنشائية ومحطات المحولات. تشمل لوحات التحذير من المخاطر العلوية، لوحات إلزام ارتداء معدات الوقاية الشخصية، ولوحات تنظيم الدخول للمصرح لهم فقط بأحبار مقاومة للتآكل والأشعة فوق البنفسجية.',
    longDescEn: 'Comprehensive compliance signage designed in strict accordance with ISO 7010. Clean bilingual typography and standardized pictograms prevent worksite violations and improve site auditing scores.',
    categorySlug: 'safety-signs',
    subcategorySlug: 'prohibition-warning',
    tag: 'WORKSITE SAFETY PANELS',
    primaryImage: '/assets/product-safety-signs.webp',
    galleryImages: ['/assets/04-category-safety-signs.webp'],
    imageAltAr: 'لوحات وإشارات إرشادية وتحذيرية وإلزامية موحدة بالموقع',
    imageAltEn: 'Comprehensive worksite compliance and hazard warning sign stand',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital Signage Division',
    materialAr: 'ألومنيوم مركب بسُمك 3 مم / PVC صلب / طبقة حماية UV',
    materialEn: '3mm Aluminum Composite / Rigid PVC / UV outdoor laminate',
    standards: [
      { name: 'ISO 7010 Graphical Symbols & Safety Signs', verified: true, documentRef: 'datasheets/signs-datasheet.pdf' },
      { name: 'Egyptian Civil Defense Safety Sign Guidelines', verified: true }
    ],
    specifications: [
      { keyAr: 'المقاسات القياسية', keyEn: 'Dimensions', valueAr: '30×40 سم، 40×60 سم، 60×80 سم، 100×120 سم للمداخل', valueEn: '30x40cm, 40x60cm, 60x80cm, 100x120cm entry boards' },
      { keyAr: 'مقاومة العوامل الجوية', keyEn: 'Outdoor Rating', valueAr: 'مقاومة تامة للشمس والغبار والماء حتى 5 سنوات', valueEn: '5+ year outdoor weather & UV resistance' }
    ],
    applicationsAr: ['بوابات الدخول للمشروعات الكبرى', 'مناطق الرافعات والعمل على الارتفاعات', 'غرف لوحات الكهرباء والتحكم'],
    applicationsEn: ['Major site entrance portals', 'Crane & elevated working zones', 'Electrical distribution switchyards'],
    datasheetUrl: '/datasheets/signs-datasheet.pdf',
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 12. كشافات الإنارة الشمسية المستقلة
  {
    id: 'prod-12',
    sku: 'NC-SOL-FL12',
    titleAr: 'كشافات الإنارة الشمسية المستقلة للأسوار والمواقع (Solar LED)',
    titleEn: 'Heavy-Duty Commercial Off-Grid Solar LED Floodlights',
    shortDescAr: 'أنظمة إنارة شمسية ذكية متكاملة للمواقع الإنشائية والأسوار المؤقتة ببطاريات فوسفات الليثيوم LiFePO4 وحماية IP66.',
    shortDescEn: 'Integrated 500W IP66 solar floodlights with high-capacity LiFePO4 batteries and remote controls.',
    longDescAr: 'كشافات إنارة شمسية عالية السطوع تجمع بين لوح مونوكريستالين فائق الكفاءة، مصابيح ليد SMD ذات كفاءة ضوئية عالية، وحزمة بطاريات ليثيوم LiFePO4 تتحمل درجات الحرارة المرتفعة في الصحراء المصرية. تعمل ذاتياً من الغسق حتى الفجر دون الحاجة لتمديدات أسلاك أو استهلاك ديزل المولدات.',
    longDescEn: 'Rugged IP66 alloy structure resisting sandstorms, torrential rain, and extreme solar heat. Features intelligent motion and twilight sensors to ensure illumination for up to 2-3 cloudy nights.',
    categorySlug: 'solar-lighting',
    subcategorySlug: 'floodlights',
    tag: 'SOLAR INFRASTRUCTURE',
    primaryImage: '/assets/product-solar-floodlight.webp',
    galleryImages: ['/assets/15-solar-floodlight-product.webp'],
    imageAltAr: 'كشاف إنارة شمسي عالي القدرة مع لوح شمسي مستقل وريموت تحكم',
    imageAltEn: 'Commercial solar LED floodlight kit with monocrystalline panel',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'project_order',
    brand: 'New Capital Solar Spec',
    materialAr: 'هيكل ألومنيوم مصبوب مع معالجة ضد الصدأ وزجاج سيكوريت مقوى',
    materialEn: 'Die-cast aluminum housing / Tempered glass / IP66 weatherproofing',
    standards: [
      { name: 'IEC 61215 PV Module Performance Criteria', verified: true, documentRef: 'datasheets/solar-datasheet.pdf' },
      { name: 'CE & RoHS Compliant Power Components', verified: true }
    ],
    specifications: [
      { keyAr: 'القدرة الضوئية', keyEn: 'Power Output', valueAr: '200 واط / 500 واط / 600 واط (حسب الارتفاع المطلوب)', valueEn: '200W, 500W, 600W options' },
      { keyAr: 'تقنية البطارية', keyEn: 'Battery Cell', valueAr: 'ليثيوم فوسفات الحديد LiFePO4 (أكثر من 2000 دورة تفريغ)', valueEn: 'LiFePO4 high-temperature resistant cells' },
      { keyAr: 'فترة الإضاءة', keyEn: 'Runtime', valueAr: '12-14 ساعة متواصلة يومياً مع احتياطي يومين غائمين', valueEn: '12-14 hours continuous / 2 nights backup' },
      { keyAr: 'درجة الحماية الجوية', keyEn: 'Ingress Rating', valueAr: 'IP66 عازل تام للأتربة ومقاوم لرشاشات المياه القوية', valueEn: 'IP66 water & dust sealed' }
    ],
    applicationsAr: ['أسوار تأمين المواقع والمشروعات القومية', 'ساحات التخزين والتشوين المكشوفة', 'مخيمات سكن المهندسين والعمال في المناطق المعزولة'],
    applicationsEn: ['National project boundary security', 'Open-air equipment storage yards', 'Remote engineering living compounds'],
    datasheetUrl: '/datasheets/solar-datasheet.pdf',
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 13. أعمدة وإنارة الشوارع المستقلة بالطاقة الشمسية
  {
    id: 'prod-13',
    sku: 'NC-SOL-ST13',
    titleAr: 'أعمدة وإنارة الشوارع والطرق المستقلة بالطاقة الشمسية',
    titleEn: 'Autonomous Commercial Solar Street Lighting Luminaires',
    shortDescAr: 'أنظمة إنارة شوارع وطرق موقعية قائمة بذاتها بأعمدة مدمجة وألواح شمسية لتأمين محاور المشروعات الإنشائية.',
    shortDescEn: 'All-in-one commercial solar street lights for arterial access roads and remote worksite infrastructure.',
    longDescAr: 'حلول إنارة مستدامة ومستقلة تماماً عن شبكة الكهرباء العامة لإنارة المداخل الرئيسية للمشروعات، ساحات التشوين اللوجستية، والطرق الفرعية بالمواقع النائية. توفر مستويات إضاءة قياسية تلبي متطلبات السلامة والأمن الميداني.',
    longDescEn: 'Zero-grid civil lighting solutions engineered for prolonged project lifespans with automated twilight-to-dawn switching.',
    categorySlug: 'solar-lighting',
    subcategorySlug: 'street-pole',
    tag: 'SOLAR STREET LIGHTS',
    primaryImage: '/assets/16-solar-street-light-project.webp',
    galleryImages: [],
    imageAltAr: 'أعمدة إنارة شوارع شمسية بموقع إنشائي',
    imageAltEn: 'Solar street luminaires installed on access road',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'project_order',
    brand: 'New Capital Solar Spec',
    materialAr: 'أعمدة صلب مجلفن / أذرع تثبيت معالجة / مصابيح ليد عالية الكفاءة',
    materialEn: 'Galvanized steel poles / Heavy-duty alloy brackets / High-lumen LED chips',
    standards: [
      { name: 'IEC 60598-2-3 Luminaires for Road and Street Lighting', verified: true }
    ],
    specifications: [
      { keyAr: 'الارتفاع الموصى به', keyEn: 'Pole Height', valueAr: 'من 6 أمتار حتى 10 أمتار', valueEn: '6m to 10m mounting height' },
      { keyAr: 'شدة الإضاءة', keyEn: 'Luminous Flux', valueAr: 'من 8,000 إلى 15,000 لومن', valueEn: '8,000 to 15,000 lumens' }
    ],
    applicationsAr: ['المحاور الرئيسية لمشروعات التشييد والبنية التحتية', 'المجمعات السكنية والمناطق الصناعية الجديدة'],
    applicationsEn: ['Primary project arterial roads', 'New industrial cities & remote basecamps'],
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 14. مواسير التمديدات الكهربائية المجلفنة EMT
  {
    id: 'prod-14',
    sku: 'NC-ELE-EM14',
    titleAr: 'مواسير التمديدات الكهربائية المجلفنة EMT والإكسسوارات',
    titleEn: 'Galvanized EMT Steel Conduit Systems, Couplings & Fittings',
    shortDescAr: 'مواسير EMT معدنية مجلفنة وإكسسواراتها من جلب ومثبتات لمشروعات التمديدات الكهروميكانيكية المتوافقة مع الكود.',
    shortDescEn: 'UL listed electrical metallic tubing (EMT) with zinc coating and precision fittings for industrial wire protection.',
    longDescAr: 'أنظمة مواسير معدنية صلبة ومجلفنة لحماية تمديدات كابلات الكهرباء والتيار الخفيف من الصدمات والحرارة في المنشآت الصناعية والمباني الإدارية، مطابقة للمواصفات الفنية المعتمدة مع تشكيلة متكاملة من الجلب، الأكواع، وصناديق التجميع.',
    longDescEn: 'Designed for safe commercial raceways. Features smooth interior finish for easy wire pull, resistance to corrosion, and complete mechanical shielding.',
    categorySlug: 'electrical-conduit',
    subcategorySlug: 'emt-conduit',
    tag: 'ELECTRICAL CONDUIT SPEC',
    primaryImage: '/assets/product-emt-conduit.webp',
    galleryImages: ['/assets/19-emt-reference-material.webp'],
    imageAltAr: 'مواسير كهربائية معدنية مجلفنة EMT وإكسسواراتها وجلب التثبيت',
    imageAltEn: 'Galvanized EMT steel conduit pipes and electrical fittings display',
    sourceType: 'supplier',
    verificationStatus: 'verified',
    availability: 'project_order',
    brand: 'Alex EMT / Approved Supplier Spec',
    materialAr: 'صلب عالي الجودة مجلفن بالغمس الساخن (Hot-Dip Galvanized Steel)',
    materialEn: 'High grade hot-dip galvanized steel / Precision zinc alloy fittings',
    standards: [
      { name: 'ANSI C80.3 / UL 797 Metallic Tubing Reference', verified: true, documentRef: 'documents/Catalogo-alex.pdf' }
    ],
    specifications: [
      { keyAr: 'الأقطار المتاحة', keyEn: 'Nominal Sizes', valueAr: '1/2 بوصة، 3/4 بوصة، 1 بوصة، 1-1/4 بوصة، 2 بوصة', valueEn: '1/2", 3/4", 1", 1-1/4", 2" Trade Sizes' },
      { keyAr: 'طول الماسورة', keyEn: 'Length', valueAr: '3.05 متر (10 أقدام) قياسي', valueEn: '3.05m (10ft) standard length' }
    ],
    applicationsAr: ['تمديدات الكابلات بالمصانع ومحطات الكهرباء', 'الأنفاق والمشروعات السكنية والإدارية الكبرى', 'غرف التحكم والموزعات الكهروميكانيكية'],
    applicationsEn: ['Factory raceways & power plants', 'Underground tunnels & high-rises', 'Control rooms & industrial switchgears'],
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 15. الملابس الواقية من الأحماض والكيماويات
  {
    id: 'prod-15',
    sku: 'NC-PPE-CH15',
    titleAr: 'الملابس والبدل الواقية من الأحماض والكيماويات والسوائل الخطرة',
    titleEn: 'Chemical, Acid & Hazardous Liquid Splash Protective Coveralls',
    shortDescAr: 'بدل كاملة عازلة للأحماض والمواد الكيميائية مع غطاء رأس وخياطة ملحومة محكمة ومقاومة للرذاذ الكيميائي والبترولي.',
    shortDescEn: 'Type 3/4/5 chemical protective coveralls offering liquid-tight and spray-tight barrier against aggressive acids and chemicals.',
    longDescAr: 'توفر مجموعة العاصمة الجديدة حلول وقاية متقدمة للعاملين في بيئات الصناعات الكيميائية، محطات معالجة المياه، والمنشآت البترولية. صُنعت البدل من نسيج بوليمري متعدد الطبقات عازل للأحماض المركزة والمذيبات مع سحاب مزدوج محكم وأساور مطاطية تمنع تسرب السوائل.',
    longDescEn: 'Engineered to shield operators against high-risk chemical splashes and toxic particulate exposure. Features reinforced seams and storm flap closure.',
    categorySlug: 'ppe',
    subcategorySlug: 'chemical-suits',
    tag: 'CHEMICAL & ACID DEFENSE',
    primaryImage: '/assets/product-chemical-suit.webp',
    galleryImages: [],
    imageAltAr: 'بدلة وقاية صفراء عازلة للأحماض والمواد الكيميائية مع قناع تنفس',
    imageAltEn: 'Yellow chemical and acid protective coverall suit with respirator',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital ChemSafe',
    materialAr: 'نسيج بوليمري مصفح متعدد الطبقات مع خياطة حرارية ملحومة',
    materialEn: 'Multi-layer laminated polymer fabric with ultrasonically sealed seams',
    standards: [
      { name: 'EN 14605 Type 3/4 Liquid-Tight Chemical Suit', verified: true },
      { name: 'EN ISO 13982-1 Particulate Protection', verified: true }
    ],
    specifications: [
      { keyAr: 'مستوى الحماية', keyEn: 'Protection Level', valueAr: 'عازل تام للسوائل ورذاذ الأحماض Type 3 & 4', valueEn: 'Type 3-B / 4-B liquid-tight' },
      { keyAr: 'المقاسات المتاحة', keyEn: 'Sizes', valueAr: 'M, L, XL, XXL, 3XL', valueEn: 'M, L, XL, 2XL, 3XL' },
      { keyAr: 'مقاومة الشد', keyEn: 'Tensile Strength', valueAr: 'نسيج مقوى ضد التمزق والاهتراء الكيميائي', valueEn: 'High tear & puncture resistance' }
    ],
    applicationsAr: ['مصانع الكيماويات ومحطات معالجة المياه', 'صناعات البترول والغاز والتكرير', 'مختبرات ومخازن المواد الخطرة'],
    applicationsEn: ['Chemical plants & water treatment facilities', 'Petroleum refineries', 'Hazardous storage yards'],
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 16. مهمات الوقاية من اللحام والحرارة المرتفعة والكهرباء
  {
    id: 'prod-16',
    sku: 'NC-PPE-WL16',
    titleAr: 'مهمات الوقاية من أعمال اللحام والحرارة المرتفعة ومخاطر الكهرباء',
    titleEn: 'Welding, Heat-Resistant & Electrical Arc Flash Protection Gear',
    shortDescAr: 'سترات جلدية معالجة، أقنعة لحام إلكترونية أوتوماتيكية، وقفازات عازلة للحرارة والشرر والجهد الكهربائي.',
    shortDescEn: 'Heavy split leather welding apparel, auto-darkening helmets, and high-temperature arc-flash protective equipment.',
    longDescAr: 'منظومة حماية متخصصة لأعمال اللحام والقطع الحراري وتجهيزات المحطات الكهربائية. تشمل جواكت وسترات جلد طبيعي مقاوم للاحتراق وتطاير الشرر، خوذات لحام بعدسات تظليل إلكترونية فورية، وقفازات معزولة تتحمل درجات حرارة تتجاوز 500 درجة مئوية مع عزل ضد الصدمات الكهربائية.',
    longDescEn: 'Certified thermal and arc-flash personal equipment conforming to EN ISO 11611 and EN 407. Built for heavy structural welding and electrical fabrication.',
    categorySlug: 'ppe',
    subcategorySlug: 'welding-heat-electric',
    tag: 'WELDING & HEAT PROTECTION',
    primaryImage: '/assets/product-welding-heat.webp',
    galleryImages: [],
    imageAltAr: 'جاكيت لحام جلد طبيعي مع قناع لحام إلكتروني وقفازات عازلة للحرارة',
    imageAltEn: 'Leather welding jacket, auto-darkening welding helmet, and heat gloves',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital ThermoShield',
    materialAr: 'جلد بقري مدبوغ ثقيل معالج ضد اللهب / ألياف كيفلار / بولي كربونات كهربائي',
    materialEn: 'Heavy-duty split cowhide / Kevlar stitching / Dielectric polycarbonate',
    standards: [
      { name: 'EN ISO 11611 Protective Clothing for Welding', verified: true },
      { name: 'EN 407 Thermal Hazards Protection', verified: true },
      { name: 'EN 60903 Live Working Electrical Gloves Reference', verified: true }
    ],
    specifications: [
      { keyAr: 'مقاومة الحرارة', keyEn: 'Heat Resistance', valueAr: 'مقاومة شرر وتلامس حراري حتى 500° مئوية', valueEn: 'Contact heat resistance up to 500°C' },
      { keyAr: 'قناع اللحام', keyEn: 'Helmet Optic', valueAr: 'تظليل تلقائي DIN 9-13 مع استجابة 1/25000 ثانية', valueEn: 'Auto-darkening shade DIN 9-13' },
      { keyAr: 'العزل الكهربائي', keyEn: 'Electrical Insulation', valueAr: 'قفازات ومهمات عازلة طبقاً للمواصفة EN 60903', valueEn: 'Dielectric insulation to EN 60903' }
    ],
    applicationsAr: ['أعمال اللحام الإنشائي وهياكل الصلب', 'محطات توليد الطاقة والمحولات الكهربائية', 'المسابك وورش الحدادة والتشكيل الحراري'],
    applicationsEn: ['Structural steel welding', 'Power substations & generator yards', 'Foundries & heavy workshops'],
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  }
];

export const initialProjects: ProjectReference[] = [
  {
    id: 'proj-monorail',
    titleAr: 'مشروع مونوريل شرق وغرب النيل',
    titleEn: 'East & West Nile Monorail Project',
    locationAr: 'القاهرة الكبرى / العاصمة الإدارية / الجيزة',
    locationEn: 'Greater Cairo / New Administrative Capital / Giza',
    sectorAr: 'النقل الذكي والبنية التحتية',
    sectorEn: 'Smart Mass Transit & Infrastructure',
    descriptionAr: 'من أهم مشروعات النقل الجماعي في مصر لربط العاصمة الإدارية ومدينة 6 أكتوبر بالقاهرة الكبرى.',
    descriptionEn: 'Major transit line connecting the New Capital and 6th of October City with central Cairo.',
    relationship: 'reference_only',
    scopeAr: 'توريد مهمات السلامة ومحددات مناطق العمل والأشرطة التحذيرية لمسارات التشييد.',
    scopeEn: 'Supply of site safety equipment, delineators, and warning tapes during construction works.',
    svgIcon: '/assets/project-monorail.svg',
    image: '/assets/18-project-site-safety.webp',
    publicDisplay: true,
    verificationNote: 'Included as reference project from company materials. Scope subject to contract validation.'
  },
  {
    id: 'proj-high-speed',
    titleAr: 'مشروع القطار الكهربائي السريع (LRT & HSR)',
    titleEn: 'High-Speed Electric Rail Network',
    locationAr: 'العين السخنة - العلمين - مطروح',
    locationEn: 'Ain Sokhna - New Alamein - Matrouh',
    sectorAr: 'السكك الحديدية والنقل الثقيل',
    sectorEn: 'Railways & Heavy Transit',
    descriptionAr: 'شبكة القطارات السريعة الحديثة التي تربط البحرين الأحمر والمتوسط.',
    descriptionEn: 'Intercity high-speed network linking the Red Sea to the Mediterranean coast.',
    relationship: 'reference_only',
    scopeAr: 'مهمات الوقاية الشخصية، لوحات التوجيه، وشرائط تأمين شبكات الكهرباء والخدمات.',
    scopeEn: 'Supplies of PPE, safety signaling boards, and utility detection markers.',
    svgIcon: '/assets/project-high-speed.svg',
    image: '/assets/17-industrial-safety-warehouse.webp',
    publicDisplay: true,
    verificationNote: 'Listed in profile materials. Relationship classified as Reference Only.'
  },
  {
    id: 'proj-el-dabaa',
    titleAr: 'مشروع محطة الضبعة للطاقة النووية',
    titleEn: 'El-Dabaa Nuclear Power Plant Project',
    locationAr: 'الضبعة، مطروح',
    locationEn: 'El-Dabaa, Matrouh',
    sectorAr: 'الطاقة وتوليد الكهرباء',
    sectorEn: 'Energy & Power Generation',
    descriptionAr: 'المشروع القومي الرائد لتوليد الكهرباء بالطاقة النووية السلمية بأعلى معايير الأمان الدولية.',
    descriptionEn: 'Egypt’s premier nuclear energy development adhering to rigorous international safety standards.',
    relationship: 'reference_only',
    scopeAr: 'توريد لوحات إرشادية متخصصة ومهمات وقاية للأعمال الإنشائية والمدنية التمهيدية.',
    scopeEn: 'Specialized industrial signage and PPE for preliminary civil and infrastructural works.',
    svgIcon: '/assets/project-el-dabaa.svg',
    image: '/assets/16-solar-street-light-project.webp',
    publicDisplay: true,
    verificationNote: 'Designated strictly as Reference / Target Supply under verification protocol.'
  },
  {
    id: 'proj-central-bank',
    titleAr: 'مجمع البنك المركزي المصري بالعاصمة الإدارية',
    titleEn: 'Central Bank of Egypt Complex',
    locationAr: 'حي المال والأعمال، العاصمة الإدارية الجديدة',
    locationEn: 'Financial District, New Administrative Capital',
    sectorAr: 'المباني الحكومية والمصرفية الكبرى',
    sectorEn: 'Government & Financial Headquarter',
    descriptionAr: 'أحد الصروح المعمارية والمالية الكبرى في الحي المالي بالمدينة.',
    descriptionEn: 'Monumental architectural complex in the central business district.',
    relationship: 'reference_only',
    scopeAr: 'تجهيزات ومهمات سلامة للمقاولين المنفذين للأعمال المدنية والتشطيبات.',
    scopeEn: 'Safety gear and work-zone supplies during interior and exterior civil execution.',
    svgIcon: '/assets/project-central-bank.svg',
    image: '/assets/20-quality-and-documentation.webp',
    publicDisplay: true,
    verificationNote: 'Reference project listed in company credentials.'
  },
  {
    id: 'proj-new-alamein',
    titleAr: 'أبراج مدينة العلمين الجديدة',
    titleEn: 'New Alamein Coastal Towers',
    locationAr: 'الساحل الشمالي، العلمين',
    locationEn: 'North Coast, New Alamein',
    sectorAr: 'الأبراج السكنية والأعمال الشاطئية',
    sectorEn: 'High-Rise Construction & Urban Dev',
    descriptionAr: 'ناطحات سحاب ساحلية وأعمال بنية تحتية متقدمة في قلب مدينة العلمين الجديدة.',
    descriptionEn: 'Iconic beachfront high-rises and integrated civil waterfront construction.',
    relationship: 'reference_only',
    scopeAr: 'سترات عاكسة، خوذات أمان، أحذية سلامة، وشبكات ولوحات تحذيرية.',
    scopeEn: 'Reflective vests, helmets, footwear, and safety boundary signs.',
    svgIcon: '/assets/project-new-alamein-towers.svg',
    image: '/assets/18-project-site-safety.webp',
    publicDisplay: true,
    verificationNote: 'Reference project from supplied archive.'
  },
  {
    id: 'proj-solar-energy',
    titleAr: 'مشروعات الطاقة الشمسية والرياح',
    titleEn: 'Renewable Solar & Wind Farms',
    locationAr: 'بنبان (أسوان) / خليج السويس / جبل الزيت',
    locationEn: 'Benban (Aswan) / Gulf of Suez / Gabal El-Zeit',
    sectorAr: 'الطاقة النظيفة والمتجددة',
    sectorEn: 'Clean & Renewable Energy',
    descriptionAr: 'محطات توليد الطاقة المتجددة الممتدة في صحراء مصر وسواحل البحر الأحمر.',
    descriptionEn: 'Major renewable power generation installations across upper Egypt and the Red Sea.',
    relationship: 'reference_only',
    scopeAr: 'كشافات إنارة شمسية، علامات خطر الكهرباء، وأشرطة حماية الكابلات.',
    scopeEn: 'Off-grid lighting luminaires, high-voltage safety signs, and cable protection markers.',
    svgIcon: '/assets/project-solar-energy.svg',
    image: '/assets/16-solar-street-light-project.webp',
    publicDisplay: true,
    verificationNote: 'Reference sector in supplied catalog.'
  }
];

export const initialDocuments: DocumentItem[] = [
  {
    id: 'doc-iso-9001',
    titleAr: 'شهادة الجودة العالمية ISO 9001:2015 الأصلية',
    titleEn: 'ISO 9001:2015 Quality Management Certificate',
    type: 'certificate',
    fileUrl: '/documents/New_Capital_for_General_Supplies_-_Ahmed_Sharaf_El_Dien_ISO_9001-2015_Certificate_2026-2514.pdf',
    sizeMb: '0.34 MB',
    sourceType: 'company',
    verificationStatus: 'verified',
    publicDisplay: true,
    registrationNumber: 'EGY1091QMS',
    issueDate: '02/08/2026',
    validUntil: '01/08/2027 (تاريخ الدورة حتى: 01/08/2029)',
    noteAr: 'نطاق الاعتماد المصرح به: توريد مهمات الصحة والسلامة المهنية ومعدات الوقاية الشخصية والأشرطة التحذيرية ومهمات الطرق.',
    noteEn: 'Scope: Supply of occupational health and safety products, PPE, detectable warning tapes, and traffic supplies.'
  },
  {
    id: 'doc-iso-14001',
    titleAr: 'شهادة الإدارة البيئية ISO 14001:2015 الأصلية',
    titleEn: 'ISO 14001:2015 Environmental Management Certificate',
    type: 'certificate',
    fileUrl: '/documents/New_Capital_for_General_Supplies_-_Ahmed_Sharaf_El_Dien_ISO_14001-2015_Certificate_2026-2515.pdf',
    sizeMb: '0.34 MB',
    sourceType: 'company',
    verificationStatus: 'verified',
    publicDisplay: true,
    registrationNumber: 'EGY455EMS',
    issueDate: '02/08/2026',
    validUntil: '01/08/2027 (تاريخ الدورة حتى: 01/08/2029)',
    noteAr: 'نطاق الاعتماد: الامتثال البيئي في توريد وتخزين وتوزيع منتجات السلامة ومهمات المشروعات.',
    noteEn: 'Scope: Environmental management in general supplies, safety products, warning tapes and traffic materials.'
  },
  {
    id: 'doc-comprehensive-catalog',
    titleAr: 'الكتالوج الشامل لمنتجات مجموعة العاصمة الجديدة (12 MB)',
    titleEn: 'New Capital Comprehensive Product Master Catalog',
    type: 'catalog',
    fileUrl: '/documents/new_capital_comprehensive_catalog.pdf',
    sizeMb: '12.2 MB',
    sourceType: 'company',
    verificationStatus: 'verified',
    publicDisplay: true,
    noteAr: 'الكتالوج الرئيسي الأكبر الشامل لكافة فئات مهمات الوقاية، اللوحات، الأشرطة والتوريدات الميدانية.',
    noteEn: 'Complete high-resolution technical catalogue covering all approved product lines and specifications.'
  },
  {
    id: 'doc-catalog',
    titleAr: 'كتالوج منتجات العاصمة الجديدة المختصر (New Capital Catalog)',
    titleEn: 'New Capital Official Product Catalog (Summary Edition)',
    type: 'catalog',
    fileUrl: '/documents/New Capital  Catalog 1.pdf',
    sizeMb: '1.84 MB',
    sourceType: 'company',
    verificationStatus: 'verified',
    publicDisplay: true,
    noteAr: 'كتالوج ملخص وسريع لمنتجات السلامة، الوقاية الشخصية، اللوحات، والأشرطة التحذيرية.',
    noteEn: 'Official compact project catalog containing primary product lines.'
  },
  {
    id: 'doc-profile',
    titleAr: 'الملف التعريفي للشركة (Company Profile 2026)',
    titleEn: 'New Capital Corporate Profile',
    type: 'brochure',
    fileUrl: '/documents/New Capital Profile.pdf',
    sizeMb: '3.34 MB',
    sourceType: 'company',
    verificationStatus: 'verified',
    publicDisplay: true,
    noteAr: 'نبذة عن الشركة، الرؤية، السجل التجاري، والقدرات اللوجستية للمشروعات القومية.',
    noteEn: 'Corporate overview, capabilities, vision, and strategic project supply sectors.'
  },
  {
    id: 'doc-ext-alex',
    titleAr: 'كتالوج مواسير وتمديدات ALEX EMT المعدنية (مرجع فني للمشروعات)',
    titleEn: 'ALEX EMT Conduit & Accessories Engineering Catalog',
    type: 'external_reference',
    fileUrl: '/documents/Catalogo-alex.pdf',
    sizeMb: '4.72 MB',
    sourceType: 'supplier',
    verificationStatus: 'verified',
    publicDisplay: true,
    noteAr: 'المواصفات الهندسية وجداول الأقطار والأوزان لمواسير EMT المعدنية المجلفنة.',
    noteEn: 'Full dimensional tables and mechanical specs for EMT steel conduit systems.'
  },
  {
    id: 'doc-ext-smartube',
    titleAr: 'كتالوج Smartube للمواسير المجلفنة الملونة (مرجع كهروميكانيكي)',
    titleEn: 'Smartube Coloured Steel Conduit Catalog',
    type: 'external_reference',
    fileUrl: '/documents/1472201974_smart_tube_catalog.pdf',
    sizeMb: '0.60 MB',
    sourceType: 'supplier',
    verificationStatus: 'verified',
    publicDisplay: true,
    noteAr: 'كتالوج تخصصي للمواسير الملونة لمسارات إنذار الحريق والجهد المتوسط والمنخفض.',
    noteEn: 'Color-coded conduit applications for fire alarm, low-voltage, and electrical safety paths.'
  },
  {
    id: 'doc-ext-fittings',
    titleAr: 'كتالوج مستلزمات وإكسسوارات المواسير Smart Fittings',
    titleEn: 'Smart Fittings & Clamps Catalog',
    type: 'external_reference',
    fileUrl: '/documents/Smart-Fittings-brochure.pdf',
    sizeMb: '6.42 MB',
    sourceType: 'supplier',
    verificationStatus: 'verified',
    publicDisplay: true,
    noteAr: 'جلب، أكواع، أربطة ومثبتات مواسير EMT للتمديدات الصناعية.',
    noteEn: 'Complete technical reference for conduit couplings, elbows, and mounting hardware.'
  },
  {
    id: 'doc-ext-emt-brochure',
    titleAr: 'دليل تمديدات الأنابيب والمواسير الفنية EMT & Conduit Brochure',
    titleEn: 'EMT & Conduit Comprehensive Technical Brochure',
    type: 'external_reference',
    fileUrl: '/documents/EMT-and-Conduit-Brochure.pdf',
    sizeMb: '0.82 MB',
    sourceType: 'supplier',
    verificationStatus: 'verified',
    publicDisplay: true,
    noteAr: 'دليل هندسي موجز لاختيار نوع الماسورة وسمك الجلفنة المناسب لبيئة المشروع.',
    noteEn: 'Guideline for conduit selection and galvanic protection requirements.'
  }
];

export const initialQuoteRequests: QuoteRequest[] = [
  {
    id: 'req-001',
    refNumber: 'NC-REQ-2026-081',
    createdAt: '2026-03-28T11:20:00Z',
    name: 'م. عصام فوزي',
    company: 'شركة أوراسكوم للإنشاءات (مشروع المونوريل)',
    email: 'e.fawzy@orascom-construction.sample',
    phone: '01098877665',
    countryCity: 'القاهرة - العاصمة الإدارية',
    projectType: 'بنية تحتية ونقل ذكي',
    selectedCategory: 'ppe',
    items: [
      { productId: 'prod-01', title: 'أحذية السلامة الصناعية S3', quantity: '350 زوج' },
      { productId: 'prod-02', title: 'سترات السلامة الفوسفورية العاكسة', quantity: '500 قطعة' }
    ],
    projectDetails: 'مطلوب توريد عاجل خلال أسبوعين لموقع العمل بمحطة المشير، مع تقديم عينات واعتماد المواصفة الفنية.',
    timeline: 'خلال 14 يوم عمل',
    preferredChannel: 'whatsapp',
    status: 'in_review',
    internalNotes: 'تم التواصل مع المهندس وإرسال الكتالوج الفني، في انتظار تحديد موعد تسليم العينات.',
    assignedTo: 'أحمد شرف الدين'
  },
  {
    id: 'req-002',
    refNumber: 'NC-REQ-2026-082',
    createdAt: '2026-04-01T09:15:00Z',
    name: 'م. طارق عبد الحميد',
    company: 'بتروجت للمشروعات البترولية',
    email: 't.abdelhamid@petrojet.sample',
    phone: '01223344556',
    countryCity: 'السويس - خليج السويس',
    projectType: 'بترول وطاقة',
    selectedCategory: 'traffic-utilities',
    items: [
      { productId: 'prod-04', title: 'أشرطة تحذيرية مدفونة قابلة للكشف (كابلات كهرباء)', quantity: '40 لفة (500م)' },
      { productId: 'prod-05', title: 'لوحات تحذيرية من مخاطر الكهرباء والضغط العالي', quantity: '80 لوحة' }
    ],
    projectDetails: 'مطلوب شريط كابلات كهربائية بعرض 20 سم مطابق لمواصفات وزارة الكهرباء EEHC EDMS.',
    timeline: 'خلال 3 أسابيع',
    preferredChannel: 'email',
    status: 'new',
    internalNotes: 'طلب جديد وارد عبر الموقع الإلكتروني، يحتاج لتسعير وفق كميات اللفات.',
    assignedTo: 'فريق المبيعات'
  }
];

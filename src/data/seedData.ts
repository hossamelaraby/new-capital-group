import { Product, Category, ProjectReference, DocumentItem, SiteSettings, QuoteRequest } from '../types';

export const initialSiteSettings: SiteSettings = {
  companyNameAr: 'مجموعة العاصمة الجديدة للتوريدات العمومية',
  companyNameEn: 'New Capital Group — General Supplies',
  legalNameAr: 'شركة العاصمة الجديدة للتوريدات العمومية — أحمد شرف الدين',
  legalNameEn: 'New Capital for General Supplies — Ahmed Sharaf El Dien',
  establishedYear: '2021',
  addressAr: '20 شارع الملك الصالح، الساحل، القاهرة، جمهورية مصر العربية',
  addressEn: '20 Al-Malek Al-Saleh Street, Al-Sahel, Cairo, Egypt',
  landline: '02 2460 2460',
  primaryEmail: 'newcapitalcompany2020@gmail.com',
  taglineAr: 'حلول توريد متكاملة للمشروعات وحماية بيئات العمل والبنية التحتية',
  taglineEn: 'Project-ready safety and site-protection supplies for high-demand environments',
  phoneNumbers: [
    { number: '01010550857', label: 'المبيعات والمشروعات (Sales)', active: true, public: true },
    { number: '01019644315', label: 'خدمة العملاء (Client Support)', active: true, public: true },
    { number: '01210250001', label: 'الإدارة والتوريدات (Procurement)', active: true, public: true },
    { number: '01092920624', label: 'المكتب الفني (Technical Office)', active: true, public: true },
    { number: '01001761107', label: 'التوريدات الميدانية (Site Delivery)', active: true, public: false },
    { number: '01001761127', label: 'متابعة المشروعات (Project Tracking)', active: true, public: false },
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
    image: '/assets/safety-protection.jpg', // Verified correct PPE hero category image
    published: true,
    order: 1,
    subcategories: [
      { slug: 'footwear', nameAr: 'أحذية السلامة المهنية S1/S3', nameEn: 'Safety Footwear S1/S3' },
      { slug: 'vests', nameAr: 'سترات السلامة العاكسة الفوسفورية', nameEn: 'Hi-Vis Reflective Vests' },
      { slug: 'gloves', nameAr: 'قفازات الحماية الميكانيكية والقطع', nameEn: 'Work & Protective Gloves' },
      { slug: 'head-eye', nameAr: 'خوذات الرأس وحماية الأعين والوجه', nameEn: 'Helmets & Eye Protection' }
    ]
  },
  {
    id: 'cat-signs',
    slug: 'safety-signs',
    nameAr: 'لوحات وإشارات السلامة الموقعية',
    nameEn: 'Safety Signs & Site Signage',
    descAr: 'لوحات المنع، التحذير من المخاطر، إلزام مهمات الوقاية، ولوحات مسارات الإخلاء والطوارئ مطابقة لمواصفات ISO 7010 والكود المصري.',
    descEn: 'Durable rigid PVC, aluminum, and reflective safety signage boards for industrial hazard control.',
    iconName: 'AlertTriangle',
    image: '/assets/evacuation-signs.jpg', // Verified correct Safety Signs Category image
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
    image: '/assets/warning-tapes.jpg', // Verified correct Underground Tapes category image
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
    image: '/assets/fire-signs.jpg', // Verified correct Fire Safety category image
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
    image: '/assets/solar-lights.jpg', // Verified correct Solar Lights category image
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
    image: '/assets/electrical-warning.jpg', // Verified correct electrical conduit image
    published: true,
    order: 6,
    subcategories: [
      { slug: 'emt-conduit', nameAr: 'مواسير EMT مجلفنة وملونة', nameEn: 'Galvanized EMT Conduit' },
      { slug: 'fittings', nameAr: 'وصلات ومثبتات وجلب المواسير', nameEn: 'Conduit Fittings & Couplings' }
    ]
  }
];

export const initialProducts: Product[] = [
  // 1. أحذية السلامة المهنية
  {
    id: 'prod-01',
    sku: 'NC-PPE-SH01',
    titleAr: 'أحذية السلامة الصناعية المقاومة للصدمات S3',
    titleEn: 'Heavy-Duty Industrial Safety Footwear S3',
    shortDescAr: 'أحذية سلامة هندسية بمقدمة فولاذية لحماية الأصابع ونعل مزدوج الكثافة مانع للانزلاق ومقاوم للاختراق والزيوت.',
    shortDescEn: 'Premium industrial safety boots featuring steel/composite toe cap, puncture-resistant midsole, and oil-proof outsole.',
    longDescAr: 'صُممت أحذية السلامة لمجموعة العاصمة الجديدة لتلبي أقسى معايير الأمان الميداني في مشروعات التشييد والمصانع والبنية التحتية. تشمل الخيارات حماية كاملة للأصابع تتحمل صدمات حتى 200 جول، شريحة مانعة لاختراق المسامير، ونعل بولي يوريثان مقاوم للحرارة والتآكل والانزلاق (SRC).',
    longDescEn: 'Engineered for maximum foot protection across civil works, high-rise construction, and industrial fabrication. Built with treated split leather, breathable ergonomic lining, and certified anti-fatigue insole.',
    categorySlug: 'ppe',
    subcategorySlug: 'footwear',
    tag: 'C-ZAR • PPE FOOTWEAR',
    primaryImage: '/assets/safety-footwear.jpg', // EXACT MATCH: safety-footwear.jpg
    galleryImages: ['/assets/ppe-shoes.jpg', '/assets/safety-protection.jpg'],
    imageAltAr: 'حذاء سلامة صناعي عالي التحمل للمهندسين والعمال',
    imageAltEn: 'Heavy duty safety footwear for industrial site',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'C-ZAR / Approved Specification',
    materialAr: 'جلد طبيعي معالج / مقدمة فولاذية / نعل PU/PU مزدوج الكثافة',
    materialEn: 'Treated industrial leather / Steel toe / Dual-density PU outsole',
    standards: [
      { name: 'EN ISO 20345:2011 S3 SRC', verified: true, documentRef: 'datasheets/shoe-s3-datasheet.pdf' },
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
    primaryImage: '/assets/reflective-vest.jpg', // EXACT MATCH: reflective-vest.jpg
    galleryImages: ['/assets/safety-vest.jpg'],
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

  // 3. قفازات الحماية
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
    primaryImage: '/assets/safety-gloves.jpg', // EXACT MATCH: safety-gloves.jpg
    galleryImages: ['/assets/safety-protection.jpg'],
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

  // 4. أشرطة تحذيرية مدفونة قابلة للكشف
  {
    id: 'prod-04',
    sku: 'NC-UTL-TP04',
    titleAr: 'أشرطة تحذيرية مدفونة قابلة للكشف (Detectable Warning Tape)',
    titleEn: 'Detectable Subterranean Warning Tape',
    shortDescAr: 'شريط تحذيري تحت الأرض برقائق ألومنيوم مدمجة لتحديد مسارات كابلات الكهرباء وأنابيب الغاز والمياه بواسطة أجهزة الكشف.',
    shortDescEn: 'Underground warning tape with continuous aluminum foil core for early excavator locator detection.',
    longDescAr: 'شريط بولي إيثيلين مدفون مصمم خصيصاً للتمديدات والمرافق التحتية ليوفر إنذاراً مبكراً مزدوجاً: إنذار مرئي بألوان قياسية وكتابات تحذيرية غير قابلة للمحو، وإنذار كهرومغناطيسي تكتشفه أجهزة تتبع مسارات الكابلات والأنابيب السطحية قبل بدء الحفر بالمعدات الثقيلة، مما يحمي الشبكات من التلف والانقطاع.',
    longDescEn: 'Engineered for high chemical resistance against subterranean acids, alkalis, and moisture. Conforms to EEHC EDMS electrical utility specifications with permanent bilingual warning texts.',
    categorySlug: 'traffic-utilities',
    subcategorySlug: 'warning-tape',
    tag: 'UTILITY INFRASTRUCTURE',
    primaryImage: '/assets/warning-tapes.jpg', // EXACT MATCH: warning-tapes.jpg
    galleryImages: ['/assets/electrical-warning.jpg'],
    imageAltAr: 'لفات أشرطة تحذيرية مدفونة قابلة للكشف لكابلات الكهرباء والمياه',
    imageAltEn: 'Rolls of detectable warning tape for underground cables',
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

  // 5. لوحات المنع والتحذير من المخاطر
  {
    id: 'prod-05',
    sku: 'NC-SGN-PW05',
    titleAr: 'لوحات المنع والتحذير من المخاطر الصناعية ISO 7010',
    titleEn: 'Prohibition & Hazard Warning Signage ISO 7010',
    shortDescAr: 'لوحات إرشادية وتحذيرية من الألومنيوم والـ PVC المقاوم للشمس والأمطار لتنبيه العاملين من المخاطر وحظر التصرفات غير الآمنة.',
    shortDescEn: 'Rigid outdoor-rated warning and prohibition signboards engineered for harsh jobsites and substations.',
    longDescAr: 'منظومة متكاملة من لوحات السلامة الميدانية المصنعة على ألواح ألومنيوم مصفح (ديبوند) أو PVC صلب بأحبار مقاومة للأشعة فوق البنفسجية لا تبهت مع حرارة الصيف والشمس المباشرة. تشمل لوحات التحذير من الجهد العالي، السقوط، المواد القابلة للاشتعال، ولوحات حظر التدخين أو دخول غير المصرح لهم.',
    longDescEn: 'Designed in strict compliance with ISO 7010 and Egyptian Civil Defense graphic norms. High legibility guarantees maximum hazard comprehension for site staff and machine operators.',
    categorySlug: 'safety-signs',
    subcategorySlug: 'prohibition-warning',
    tag: 'HAZARD WARNING SIGNS',
    primaryImage: '/assets/prohibition-signs.jpg', // EXACT MATCH: prohibition-signs.jpg
    galleryImages: ['/assets/evacuation-signs.jpg'],
    imageAltAr: 'لوحات منع وتحذير موضعية للمشروعات والمنشآت',
    imageAltEn: 'Industrial warning and prohibition signboards',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital Signage Division',
    materialAr: 'ألواح PVC بسُمك 3 مم / ألومنيوم مركب / طبقة حماية UV',
    materialEn: '3mm Rigid PVC / Aluminum Composite / UV protective lamination',
    standards: [
      { name: 'ISO 7010 Graphical Symbols & Safety Signs', verified: true, documentRef: 'datasheets/signs-datasheet.pdf' },
      { name: 'Egyptian Civil Defense Signage Alignment', verified: true }
    ],
    specifications: [
      { keyAr: 'المقاسات القياسية', keyEn: 'Dimensions', valueAr: '20×30 سم، 30×40 سم، 40×60 سم، 60×80 سم ومقاسات مخصصة', valueEn: '20x30cm, 30x40cm, 40x60cm, 60x80cm, Custom' },
      { keyAr: 'مقاومة الطقس', keyEn: 'Weather Resistance', valueAr: 'مقاومة تامة للحرارة والشمس والرطوبة حتى 5 سنوات', valueEn: 'UV & weatherproof rated for 5+ years' },
      { keyAr: 'طريقة التثبيت', keyEn: 'Mounting', valueAr: 'ثقوب تثبيت للبراغي، شريط لاصق صناعي 3M، أو مشابك أعمدة', valueEn: 'Pre-drilled holes, industrial 3M tape, or post clamps' }
    ],
    applicationsAr: ['مداخل وبوابات المشروعات الكبرى', 'محطات المحولات وغرف لوحات الكهرباء', 'المصانع وخطوط الإنتاج والكيماويات'],
    applicationsEn: ['Site entrance portals', 'Electrical substation rooms', 'Production yards & chemical plants'],
    datasheetUrl: '/datasheets/signs-datasheet.pdf',
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 6. لوحات إلزام مهمات الوقاية الشخصية
  {
    id: 'prod-06',
    sku: 'NC-SGN-PP06',
    titleAr: 'لوحات إلزام ارتداء مهمات الوقاية الشخصية (Mandatory PPE)',
    titleEn: 'Mandatory PPE Compliance Signboards',
    shortDescAr: 'لوحات زرقاء دائرية قياسية تلزم العاملين بارتداء الخوذة، النظارة، الحذاء، والسترة قبل دخول مناطق العمل الخطرة.',
    shortDescEn: 'Standard blue circular mandatory boards specifying compulsory PPE requirements at project check-points.',
    longDescAr: 'لوحات إرشادية إلزامية توضح التعليمات الأمنية الواجب اتباعها قبل دخول ورش التقطيع، مواقع التشييد، والمنصات المرتفعة. تساعد مسؤولي السلامة والصحة المهنية (HSE) في ضبط بيئة العمل وتطبيق شروط السلامة والتفتيش الدوري.',
    longDescEn: 'Clear visual directives minimizing jobsite violations and injuries. Manufactured with scratch-resistant finishes for heavy dust and wind environments.',
    categorySlug: 'safety-signs',
    subcategorySlug: 'ppe-mandatory',
    tag: 'MANDATORY PPE DIRECTIVES',
    primaryImage: '/assets/ppe-signs.jpg', // EXACT MATCH: ppe-signs.jpg
    galleryImages: ['/assets/evacuation-signs.jpg'],
    imageAltAr: 'لوحات إلزام ارتداء خوذة وحذاء وسترة الأمان',
    imageAltEn: 'Mandatory PPE directive sign board',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital Signage Division',
    materialAr: 'PVC مضغوط أو صفائح ألومنيوم مع طبقة عاكسة للضوء',
    materialEn: 'Compressed PVC or Aluminum sheet with reflective foil',
    standards: [
      { name: 'ISO 7010 Mandatory Action Symbols (M-Series)', verified: true, documentRef: 'datasheets/ppe-signs-datasheet.pdf' }
    ],
    specifications: [
      { keyAr: 'اللغات المتاحة', keyEn: 'Languages', valueAr: 'عربي وإنجليزي مع الرموز التعبيرية المعيارية', valueEn: 'Bilingual (Arabic & English) with ISO symbols' },
      { keyAr: 'المقاسات', keyEn: 'Sizes', valueAr: '30×40 سم، 40×60 سم، 60×90 سم', valueEn: '30x40cm, 40x60cm, 60x90cm' },
      { keyAr: 'المتانة الميكانيكية', keyEn: 'Durability', valueAr: 'مقاومة للصدمات والخدش ومواد التنظيف', valueEn: 'Scratch & detergent resistant' }
    ],
    applicationsAr: ['بوابات الدخول للمشروعات ومحطات المترو', 'المناجم والمحاجر ومصانع الأسمنت', 'مناطق الرافعات والعمل على ارتفاعات'],
    applicationsEn: ['Major site entrance security gates', 'Quarries & cement plants', 'Crane loading & scaffolding areas'],
    datasheetUrl: '/datasheets/ppe-signs-datasheet.pdf',
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 7. لوحات ومستلزمات الحريق
  {
    id: 'prod-07',
    sku: 'NC-FIR-SN07',
    titleAr: 'لوحات ومستلزمات مكافحة الحريق الفوسفورية (Fire Safety)',
    titleEn: 'Photoluminescent Fire Safety Signs & Accessories',
    shortDescAr: 'لوحات تحديد مواقع طفايات الحريق وخراطيم الإطفاء ومسارات الإخلاء المضيئة ذاتياً في الظلام عند انقطاع الكهرباء.',
    shortDescEn: 'Glow-in-the-dark fire equipment markers and emergency wayfinding signs complying with DIN 67510.',
    longDescAr: 'علامات ولوحات تحديد معدات الإطفاء ومخارج الطوارئ مصنعة من مواد فوسفورية متطورة تختزن الضوء وتتوهج تلقائياً لساعات طويلة في حال انقطاع التيار الكهربائي أو تصاعد الدخان، مما يرشد فرق الإطفاء والعمال فوراً إلى وسائل مكافحة الحريق ومخارج النجاة.',
    longDescEn: 'Critical life-safety indicators aligning with NFPA 170 and DIN 67510 standards. Zero power consumption ensures perpetual reliability during building blackout crises.',
    categorySlug: 'fire-safety',
    subcategorySlug: 'fire-signs',
    tag: 'LIFE SAFETY & FIRE',
    primaryImage: '/assets/fire-signs.jpg', // EXACT MATCH: fire-signs.jpg
    galleryImages: ['/assets/evacuation-signs.jpg'],
    imageAltAr: 'لوحات إرشادية فوسفورية لمعدات الإطفاء ومخارج الطوارئ',
    imageAltEn: 'Photoluminescent fire equipment locator sign',
    sourceType: 'company',
    verificationStatus: 'verified',
    availability: 'available',
    brand: 'New Capital Fire Division',
    materialAr: 'بوليمر فوسفوري مشع (Photoluminescent) ذاتي الإطفاء / ألومنيوم',
    materialEn: 'Self-extinguishing photoluminescent polymer / Aluminum backing',
    standards: [
      { name: 'DIN 67510 Luminescence Specification', verified: true, documentRef: 'datasheets/fire-signs-datasheet.pdf' },
      { name: 'NFPA 170 Standard for Fire Safety Symbols', verified: true }
    ],
    specifications: [
      { keyAr: 'مدة التوهج في الظلام', keyEn: 'Glow Duration', valueAr: 'توهج يستمر حتى 6 إلى 8 ساعات بعد انقطاع الضوء', valueEn: 'Luminescent afterglow up to 8 hours' },
      { keyAr: 'المقاسات المتاحة', keyEn: 'Dimensions', valueAr: '15×15 سم، 20×20 سم، 20×40 سم، 30×30 سم', valueEn: '15x15cm, 20x20cm, 20x40cm, 30x30cm' },
      { keyAr: 'مقاومة الحريق', keyEn: 'Flame Retardancy', valueAr: 'خامات ذاتية الإطفاء غير ناشرة للهب', valueEn: 'Self-extinguishing Class B1' }
    ],
    applicationsAr: ['غرف المولدات ومحولات الضغط العالي', 'المباني الإدارية بالمشروعات والكمبوندات', 'المستودعات ومخازن الوقود والمواد القابلة للاشتعال'],
    applicationsEn: ['Substations & generator rooms', 'Administrative site compounds', 'Flammable material depots'],
    datasheetUrl: '/datasheets/fire-signs-datasheet.pdf',
    quoteEnabled: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-03-25T12:00:00Z'
  },

  // 8. كشافات الإنارة الشمسية
  {
    id: 'prod-08',
    sku: 'NC-SOL-LT08',
    titleAr: 'كشافات الإنارة الشمسية المستقلة للمواقع والأسوار (Solar LED)',
    titleEn: 'Commercial Autonomous Solar Worksite Floodlights',
    shortDescAr: 'أنظمة إنارة شمسية ذكية متكاملة (All-In-One) للمواقع الإنشائية والأسوار المؤقتة ببطاريات فوسفات الليثيوم LiFePO4.',
    shortDescEn: 'Integrated off-grid solar floodlights engineered for remote jobsite perimeters and contractor base camps.',
    longDescAr: 'كشافات إنارة شمسية عالية السطوع تجمع بين لوح مونوكريستالين فائق الكفاءة، مصابيح ليد SMD ذات كفاءة ضوئية عالية، وحزمة بطاريات ليثيوم LiFePO4 تتحمل درجات الحرارة المرتفعة في الصحراء المصرية. تعمل ذاتياً من الغسق حتى الفجر دون الحاجة لتمديدات أسلاك أو استهلاك ديزل المولدات.',
    longDescEn: 'Rugged IP66 alloy structure resisting sandstorms, torrential rain, and extreme solar heat. Features intelligent motion and twilight sensors to ensure illumination for up to 2-3 cloudy nights.',
    categorySlug: 'solar-lighting',
    subcategorySlug: 'floodlights',
    tag: 'SOLAR INFRASTRUCTURE',
    primaryImage: '/assets/solar-lights.jpg', // EXACT MATCH: solar-lights.jpg
    galleryImages: ['/assets/campaign-home.jpg'],
    imageAltAr: 'كشافات إنارة شمسية متكاملة لأسوار المشروعات',
    imageAltEn: 'Commercial solar LED floodlight for worksite perimeters',
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
      { keyAr: 'القدرة الضوئية', keyEn: 'Power Output', valueAr: '200 واط / 400 واط / 600 واط (حسب الارتفاع المطلوب)', valueEn: '200W, 400W, 600W options' },
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

  // 9. لوحات مخارج الطوارئ ومسارات الهروب
  {
    id: 'prod-09',
    sku: 'NC-SGN-EV09',
    titleAr: 'لوحات مخارج الطوارئ ومسارات الهروب (Emergency Evacuation)',
    titleEn: 'Emergency Exit & Evacuation Route Signboards',
    shortDescAr: 'علامات ولوحات إرشادية خضراء معيارية لتوجيه الأفراد نحو مخارج النجاة ونقاط التجمع الآمنة عند الطوارئ.',
    shortDescEn: 'Green directional wayfinding signs marking emergency escape routes and muster points.',
    longDescAr: 'لوحات مسارات الهروب المعيارية طبقا لكود الدفاع المدني، مصنعة على ألواح خفيفة ومتينة بألوان خضراء فسفورية أو عاكسة، توجه العمال والزوار بدقة نحو أقرب سلم طوارئ أو مخرج نجاة أو نقطة تجمع آمنة في الموقع.',
    longDescEn: 'Essential safety wayfinding boards ensuring rapid building and site evacuation during fire or gas alarm incidents.',
    categorySlug: 'safety-signs',
    subcategorySlug: 'evacuation-fire',
    tag: 'EVACUATION WAYFINDING',
    primaryImage: '/assets/evacuation-signs.jpg', // EXACT MATCH: evacuation-signs.jpg
    galleryImages: ['/assets/fire-signs.jpg'],
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

  // 10. مواسير التمديدات الكهربائية EMT
  {
    id: 'prod-10',
    sku: 'NC-ELE-EM10',
    titleAr: 'مواسير التمديدات الكهربائية المجلفنة EMT والإكسسوارات',
    titleEn: 'Galvanized EMT Steel Conduit & Accessories',
    shortDescAr: 'مواسير EMT معدنية مجلفنة وإكسسواراتها من جلب ومثبتات لمشروعات التمديدات الكهروميكانيكية المتوافقة مع الكود.',
    shortDescEn: 'UL listed electrical metallic tubing (EMT) with zinc coating for industrial wire management.',
    longDescAr: 'أنظمة مواسير معدنية صلبة ومجلفنة لحماية تمديدات كابلات الكهرباء والتيار الخفيف من الصدمات والحرارة في المنشآت الصناعية والمباني الإدارية، مطابقة للمواصفات الفنية المعتمدة مع تشكيلة متكاملة من الجلب، الأكواع، وصناديق التجميع.',
    longDescEn: 'Designed for safe commercial raceways. Features smooth interior finish for easy wire pull, resistance to corrosion, and complete mechanical shielding.',
    categorySlug: 'electrical-conduit',
    subcategorySlug: 'emt-conduit',
    tag: 'ELECTRICAL CONDUIT SPEC',
    primaryImage: '/assets/electrical-warning.jpg', // EXACT MATCH: electrical-warning.jpg
    galleryImages: ['/assets/contact-profile.jpg'],
    imageAltAr: 'مواسير كهربائية معدنية مجلفنة EMT لمشروعات التمديدات',
    imageAltEn: 'Galvanized EMT steel conduit for electrical wiring',
    sourceType: 'supplier',
    verificationStatus: 'verified',
    availability: 'project_order',
    brand: 'Alex EMT / Approved Supplier Spec',
    materialAr: 'صلب عالي الجودة مجلفن بالغمس الساخن (Hot-Dip Galvanized Steel)',
    materialEn: 'High grade hot-dip galvanized steel',
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
    image: '/assets/projects-1.jpg',
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
    image: '/assets/projects-2.jpg',
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
    image: '/assets/projects-3.jpg',
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
    image: '/assets/government-clients.jpg',
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
    image: '/assets/projects-1.jpg',
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
    image: '/assets/projects-2.jpg',
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

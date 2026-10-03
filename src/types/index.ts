export type Language = 'ar' | 'en';

export type SourceType = 'company' | 'supplier' | 'external_reference' | 'admin_entered' | 'unknown';
export type VerificationStatus = 'verified' | 'pending_review' | 'rejected' | 'archived';
export type AvailabilityStatus = 'available' | 'project_order' | 'on_request' | 'archived' | 'pending_review';

export interface Product {
  id: string;
  sku: string;
  titleAr: string;
  titleEn: string;
  shortDescAr: string;
  shortDescEn: string;
  longDescAr: string;
  longDescEn: string;
  categorySlug: string;
  subcategorySlug: string;
  tag: string;
  primaryImage: string;
  galleryImages: string[];
  imageAltAr: string;
  imageAltEn: string;
  sourceType: SourceType;
  verificationStatus: VerificationStatus;
  availability: AvailabilityStatus;
  brand?: string;
  model?: string;
  materialAr: string;
  materialEn: string;
  standards: { name: string; verified: boolean; documentRef?: string }[];
  specifications: { keyAr: string; keyEn: string; valueAr: string; valueEn: string }[];
  applicationsAr: string[];
  applicationsEn: string[];
  datasheetUrl?: string;
  quoteEnabled: boolean;
  published: boolean;
  internalNote?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  iconName: string;
  image: string;
  published: boolean;
  order: number;
  subcategories: { slug: string; nameAr: string; nameEn: string }[];
}

export interface ProjectReference {
  id: string;
  titleAr: string;
  titleEn: string;
  locationAr: string;
  locationEn: string;
  sectorAr: string;
  sectorEn: string;
  descriptionAr: string;
  descriptionEn: string;
  relationship: 'supplied' | 'quoted' | 'target' | 'reference_only' | 'pending_confirmation';
  scopeAr: string;
  scopeEn: string;
  svgIcon?: string;
  image?: string;
  publicDisplay: boolean;
  verificationNote: string;
}

export interface DocumentItem {
  id: string;
  titleAr: string;
  titleEn: string;
  type: 'certificate' | 'catalog' | 'datasheet' | 'brochure' | 'external_reference';
  fileUrl: string;
  sizeMb?: string;
  sourceType: SourceType;
  verificationStatus: VerificationStatus;
  publicDisplay: boolean;
  issueDate?: string;
  validUntil?: string;
  registrationNumber?: string;
  noteAr?: string;
  noteEn?: string;
}

export interface QuoteRequest {
  id: string;
  refNumber: string;
  createdAt: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  countryCity: string;
  projectType: string;
  selectedCategory: string;
  items: { productId?: string; title: string; quantity: string }[];
  projectDetails: string;
  timeline: string;
  preferredChannel: 'whatsapp' | 'email' | 'phone';
  status: 'new' | 'in_review' | 'needs_information' | 'quoted' | 'won' | 'lost' | 'archived';
  internalNotes: string;
  assignedTo?: string;
}

export interface SiteSettings {
  companyNameAr: string;
  companyNameEn: string;
  legalNameAr: string;
  legalNameEn: string;
  establishedYear: string;
  addressAr: string;
  addressEn: string;
  landline: string;
  primaryEmail: string;
  phoneNumbers: { number: string; label: string; active: boolean; public: boolean }[];
  taglineAr: string;
  taglineEn: string;
}

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Category, ProjectReference, DocumentItem, SiteSettings, QuoteRequest, Language } from '../types';
import { initialProducts, initialCategories, initialProjects, initialDocuments, initialSiteSettings, initialQuoteRequests } from '../data/seedData';

interface DataContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  products: Product[];
  categories: Category[];
  projects: ProjectReference[];
  documents: DocumentItem[];
  settings: SiteSettings;
  quoteRequests: QuoteRequest[];
  quoteBasket: { product: Product; quantity: string }[];
  addToQuoteBasket: (product: Product, quantity?: string) => void;
  removeFromQuoteBasket: (productId: string) => void;
  clearQuoteBasket: () => void;
  // CMS mutations
  saveProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  saveCategory: (category: Category) => void;
  deleteCategory: (id: string) => void;
  saveProject: (project: ProjectReference) => void;
  saveDocument: (document: DocumentItem) => void;
  saveSettings: (settings: SiteSettings) => void;
  submitQuoteRequest: (request: Omit<QuoteRequest, 'id' | 'refNumber' | 'createdAt' | 'status' | 'internalNotes'>) => Promise<string>;
  updateQuoteStatus: (id: string, status: QuoteRequest['status'], notes?: string) => void;
  resetToInitialData: () => void;
  // Auth state for CMS
  isAdminAuthenticated: boolean;
  adminUser: { name: string; role: 'owner' | 'editor' | 'reviewer' | 'sales' } | null;
  adminLogin: (password: string) => boolean;
  adminLogout: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Storage key version v7 provides clean slate and robust validation
const V_KEY = 'nc_v7_';

// Safe localStorage write helper that catches quota exceeded errors gracefully
function safeSetStorage(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`[DataContext] LocalStorage quota exceeded or error writing ${key}:`, err);
  }
}

// Sanitizers to prevent runtime undefined crashes
function sanitizeProduct(p: Partial<Product>): Product {
  return {
    id: p.id || `prod-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    sku: p.sku || `NC-PROD-${Math.floor(100 + Math.random() * 900)}`,
    titleAr: p.titleAr || '',
    titleEn: p.titleEn || p.titleAr || '',
    shortDescAr: p.shortDescAr || '',
    shortDescEn: p.shortDescEn || p.shortDescAr || '',
    longDescAr: p.longDescAr || '',
    longDescEn: p.longDescEn || p.longDescAr || '',
    categorySlug: p.categorySlug || 'ppe',
    subcategorySlug: p.subcategorySlug || 'general',
    tag: p.tag || 'PROJECT SPEC',
    primaryImage: p.primaryImage || '/products_gallery/nc-prod-01.jpg',
    galleryImages: Array.isArray(p.galleryImages) ? p.galleryImages : [],
    imageAltAr: p.imageAltAr || p.titleAr || '',
    imageAltEn: p.imageAltEn || p.titleEn || '',
    sourceType: p.sourceType || 'company',
    verificationStatus: p.verificationStatus || 'verified',
    availability: p.availability || 'available',
    brand: p.brand,
    model: p.model,
    materialAr: p.materialAr || '',
    materialEn: p.materialEn || '',
    standards: Array.isArray(p.standards) ? p.standards : [],
    specifications: Array.isArray(p.specifications) ? p.specifications : [],
    applicationsAr: Array.isArray(p.applicationsAr) ? p.applicationsAr : [],
    applicationsEn: Array.isArray(p.applicationsEn) ? p.applicationsEn : [],
    datasheetUrl: p.datasheetUrl,
    quoteEnabled: p.quoteEnabled !== undefined ? p.quoteEnabled : true,
    published: p.published !== undefined ? p.published : true,
    internalNote: p.internalNote,
    createdAt: p.createdAt || new Date().toISOString(),
    updatedAt: p.updatedAt || new Date().toISOString()
  };
}

function sanitizeCategory(c: Partial<Category>): Category {
  return {
    id: c.id || `cat-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    slug: c.slug ? c.slug.trim().toLowerCase().replace(/\s+/g, '-') : `cat-${Date.now()}`,
    nameAr: c.nameAr || '',
    nameEn: c.nameEn || c.nameAr || '',
    descAr: c.descAr || '',
    descEn: c.descEn || c.descAr || '',
    iconName: c.iconName || 'Shield',
    image: c.image || '/products_gallery/nc-prod-01.jpg',
    published: c.published !== undefined ? c.published : true,
    order: typeof c.order === 'number' ? c.order : 1,
    subcategories: Array.isArray(c.subcategories) ? c.subcategories : []
  };
}

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      return (localStorage.getItem('nc_lang') as Language) || 'ar';
    } catch {
      return 'ar';
    }
  });

  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem(V_KEY + 'products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map(sanitizeProduct);
        }
      }
    } catch (err) {
      console.warn('Failed to parse saved products, falling back to initial seed:', err);
    }
    return initialProducts.map(sanitizeProduct);
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    try {
      const saved = localStorage.getItem(V_KEY + 'categories');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.map(sanitizeCategory);
        }
      }
    } catch (err) {
      console.warn('Failed to parse saved categories, falling back to initial seed:', err);
    }
    return initialCategories.map(sanitizeCategory);
  });

  const [projects, setProjects] = useState<ProjectReference[]>(() => {
    try {
      const saved = localStorage.getItem(V_KEY + 'projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return initialProjects;
  });

  const [documents, setDocuments] = useState<DocumentItem[]>(() => {
    try {
      const saved = localStorage.getItem(V_KEY + 'documents');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return initialDocuments;
  });

  const [settings, setSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(V_KEY + 'settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') return parsed;
      }
    } catch {
      // ignore
    }
    return initialSiteSettings;
  });

  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>(() => {
    try {
      const saved = localStorage.getItem('nc_quote_requests');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore
    }
    return initialQuoteRequests;
  });

  const [quoteBasket, setQuoteBasket] = useState<{ product: Product; quantity: string }[]>(() => {
    try {
      const saved = localStorage.getItem('nc_quote_basket');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore
    }
    return [];
  });

  // Admin auth
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem('nc_admin_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [adminUser, setAdminUser] = useState<{ name: string; role: 'owner' | 'editor' | 'reviewer' | 'sales' } | null>(() => {
    try {
      const saved = localStorage.getItem('nc_admin_user');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return null;
  });

  // Sync to local storage with quota-safe helper
  useEffect(() => {
    try {
      localStorage.setItem('nc_lang', lang);
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  }, [lang]);

  useEffect(() => { safeSetStorage(V_KEY + 'products', products); }, [products]);
  useEffect(() => { safeSetStorage(V_KEY + 'categories', categories); }, [categories]);
  useEffect(() => { safeSetStorage(V_KEY + 'projects', projects); }, [projects]);
  useEffect(() => { safeSetStorage(V_KEY + 'documents', documents); }, [documents]);
  useEffect(() => { safeSetStorage(V_KEY + 'settings', settings); }, [settings]);
  useEffect(() => { safeSetStorage('nc_quote_requests', quoteRequests); }, [quoteRequests]);
  useEffect(() => { safeSetStorage('nc_quote_basket', quoteBasket); }, [quoteBasket]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const addToQuoteBasket = (product: Product, quantity = '1') => {
    setQuoteBasket(prev => {
      const exists = prev.find(item => item.product.id === product.id);
      if (exists) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity } : item);
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromQuoteBasket = (productId: string) => {
    setQuoteBasket(prev => prev.filter(item => item.product.id !== productId));
  };

  const clearQuoteBasket = () => {
    setQuoteBasket([]);
  };

  const saveProduct = (product: Product) => {
    const clean = sanitizeProduct(product);
    setProducts(prev => {
      const index = prev.findIndex(p => p.id === clean.id);
      if (index >= 0) {
        const copy = [...prev];
        copy[index] = { ...clean, updatedAt: new Date().toISOString() };
        return copy;
      }
      return [{ ...clean, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, ...prev];
    });
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const saveCategory = (category: Category) => {
    const clean = sanitizeCategory(category);
    setCategories(prev => {
      const idx = prev.findIndex(c => c.id === clean.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = clean;
        return copy;
      }
      return [...prev, clean];
    });
  };

  const deleteCategory = (id: string) => {
    setCategories(prev => {
      const target = prev.find(c => c.id === id);
      const filtered = prev.filter(c => c.id !== id);
      if (target) {
        // Also update products belonging to this category to unpublish or reassign
        setProducts(prodList => prodList.map(p => p.categorySlug === target.slug ? { ...p, published: false } : p));
      }
      return filtered;
    });
  };

  const saveProject = (project: ProjectReference) => {
    setProjects(prev => {
      const idx = prev.findIndex(p => p.id === project.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = project;
        return copy;
      }
      return [...prev, project];
    });
  };

  const saveDocument = (document: DocumentItem) => {
    setDocuments(prev => {
      const idx = prev.findIndex(d => d.id === document.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = document;
        return copy;
      }
      return [...prev, document];
    });
  };

  const saveSettings = (newSettings: SiteSettings) => {
    setSettings(newSettings);
  };

  const resetToInitialData = () => {
    setProducts(initialProducts.map(sanitizeProduct));
    setCategories(initialCategories.map(sanitizeCategory));
    setDocuments(initialDocuments);
    setProjects(initialProjects);
    setSettings(initialSiteSettings);
    try {
      localStorage.removeItem(V_KEY + 'products');
      localStorage.removeItem(V_KEY + 'categories');
      localStorage.removeItem(V_KEY + 'documents');
      localStorage.removeItem(V_KEY + 'projects');
      localStorage.removeItem(V_KEY + 'settings');
      localStorage.removeItem('nc_v5_products');
      localStorage.removeItem('nc_v5_categories');
      localStorage.removeItem('nc_v6_products');
      localStorage.removeItem('nc_v6_categories');
    } catch {
      // ignore
    }
  };

  const submitQuoteRequest = async (requestData: Omit<QuoteRequest, 'id' | 'refNumber' | 'createdAt' | 'status' | 'internalNotes'>): Promise<string> => {
    const refNum = `NC-REQ-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;
    const newRequest: QuoteRequest = {
      ...requestData,
      id: `req-${Date.now()}`,
      refNumber: refNum,
      createdAt: new Date().toISOString(),
      status: 'new',
      internalNotes: 'تم الاستلام عبر النموذج الرقمي'
    };
    setQuoteRequests(prev => [newRequest, ...prev]);
    clearQuoteBasket();
    return refNum;
  };

  const updateQuoteStatus = (id: string, status: QuoteRequest['status'], notes?: string) => {
    setQuoteRequests(prev => prev.map(req => {
      if (req.id === id) {
        return {
          ...req,
          status,
          internalNotes: notes !== undefined ? notes : req.internalNotes
        };
      }
      return req;
    }));
  };

  const adminLogin = (password: string): boolean => {
    if (password === 'admin2026' || password === 'newcapital2026') {
      setIsAdminAuthenticated(true);
      const user = { name: 'مهندس / أحمد شرف', role: 'owner' as const };
      setAdminUser(user);
      try {
        localStorage.setItem('nc_admin_auth', 'true');
        localStorage.setItem('nc_admin_user', JSON.stringify(user));
      } catch {
        // ignore
      }
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminAuthenticated(false);
    setAdminUser(null);
    try {
      localStorage.removeItem('nc_admin_auth');
      localStorage.removeItem('nc_admin_user');
    } catch {
      // ignore
    }
  };

  return (
    <DataContext.Provider value={{
      lang,
      setLang,
      products,
      categories,
      projects,
      documents,
      settings,
      quoteRequests,
      quoteBasket,
      addToQuoteBasket,
      removeFromQuoteBasket,
      clearQuoteBasket,
      saveProduct,
      deleteProduct,
      saveCategory,
      deleteCategory,
      saveProject,
      saveDocument,
      saveSettings,
      submitQuoteRequest,
      updateQuoteStatus,
      resetToInitialData,
      isAdminAuthenticated,
      adminUser,
      adminLogin,
      adminLogout
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

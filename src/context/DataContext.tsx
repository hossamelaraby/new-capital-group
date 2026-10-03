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

// Storage key version v3 ensures users immediately see the corrected images
const V_KEY = 'nc_v3_';

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem('nc_lang') as Language) || 'ar';
  });

  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem(V_KEY + 'products');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [categories, setCategories] = useState<Category[]>(() => {
    const saved = localStorage.getItem(V_KEY + 'categories');
    return saved ? JSON.parse(saved) : initialCategories;
  });

  const [projects, setProjects] = useState<ProjectReference[]>(() => {
    const saved = localStorage.getItem(V_KEY + 'projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [documents, setDocuments] = useState<DocumentItem[]>(() => {
    const saved = localStorage.getItem(V_KEY + 'documents');
    return saved ? JSON.parse(saved) : initialDocuments;
  });

  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem(V_KEY + 'settings');
    return saved ? JSON.parse(saved) : initialSiteSettings;
  });

  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>(() => {
    const saved = localStorage.getItem('nc_quote_requests');
    return saved ? JSON.parse(saved) : initialQuoteRequests;
  });

  const [quoteBasket, setQuoteBasket] = useState<{ product: Product; quantity: string }[]>(() => {
    const saved = localStorage.getItem('nc_quote_basket');
    return saved ? JSON.parse(saved) : [];
  });

  // Admin auth
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('nc_admin_auth') === 'true';
  });
  const [adminUser, setAdminUser] = useState<{ name: string; role: 'owner' | 'editor' | 'reviewer' | 'sales' } | null>(() => {
    const saved = localStorage.getItem('nc_admin_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('nc_lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => { localStorage.setItem(V_KEY + 'products', JSON.stringify(products)); }, [products]);
  useEffect(() => { localStorage.setItem(V_KEY + 'categories', JSON.stringify(categories)); }, [categories]);
  useEffect(() => { localStorage.setItem(V_KEY + 'projects', JSON.stringify(projects)); }, [projects]);
  useEffect(() => { localStorage.setItem(V_KEY + 'documents', JSON.stringify(documents)); }, [documents]);
  useEffect(() => { localStorage.setItem(V_KEY + 'settings', JSON.stringify(settings)); }, [settings]);
  useEffect(() => { localStorage.setItem('nc_quote_requests', JSON.stringify(quoteRequests)); }, [quoteRequests]);
  useEffect(() => { localStorage.setItem('nc_quote_basket', JSON.stringify(quoteBasket)); }, [quoteBasket]);

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
    setProducts(prev => {
      const index = prev.findIndex(p => p.id === product.id);
      if (index >= 0) {
        const copy = [...prev];
        copy[index] = { ...product, updatedAt: new Date().toISOString() };
        return copy;
      }
      return [{ ...product, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, ...prev];
    });
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const saveCategory = (category: Category) => {
    setCategories(prev => {
      const idx = prev.findIndex(c => c.id === category.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = category;
        return copy;
      }
      return [...prev, category];
    });
  };

  const deleteCategory = (id: string) => {
    setCategories(prev => prev.filter(c => c.id !== id));
    setProducts(prev => prev.map(p => p.categorySlug === id ? { ...p, published: false } : p));
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
    setProducts(initialProducts);
    setCategories(initialCategories);
    setDocuments(initialDocuments);
    setProjects(initialProjects);
    setSettings(initialSiteSettings);
    localStorage.removeItem(V_KEY + 'products');
    localStorage.removeItem(V_KEY + 'categories');
    localStorage.removeItem(V_KEY + 'documents');
    localStorage.removeItem(V_KEY + 'projects');
    localStorage.removeItem(V_KEY + 'settings');
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
      localStorage.setItem('nc_admin_auth', 'true');
      localStorage.setItem('nc_admin_user', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminAuthenticated(false);
    setAdminUser(null);
    localStorage.removeItem('nc_admin_auth');
    localStorage.removeItem('nc_admin_user');
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

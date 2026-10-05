import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Public Pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { RequestQuote } from './pages/RequestQuote';
import { Quality } from './pages/Quality';
import { Solutions } from './pages/Solutions';
import { Resources } from './pages/Resources';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Standalone Admin Portal
import { AdminDashboard } from './pages/AdminDashboard';
import { ErrorBoundary } from './components/ErrorBoundary';

/**
 * Public website layout with main navigation header and footer.
 * Only applied to public-facing visitor pages.
 */
const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3F0E9] text-[#1F292C]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <DataProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Dedicated Standalone Admin Portal - Completely isolated from public website */}
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Public Website Routes (with public header and footer) */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:categorySlug/:productId" element={<ProductDetail />} />
              <Route path="/request-a-quote" element={<RequestQuote />} />
              <Route path="/quality" element={<Quality />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* 404 Catch-all */}
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </ErrorBoundary>
  );
};

export default App;

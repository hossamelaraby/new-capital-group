import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Pages
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
import { AdminDashboard } from './pages/AdminDashboard';

export const App: React.FC = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#0B1720] text-[#F4F1EA]">
          <Header />
          <main className="flex-1">
            <Routes>
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
              <Route path="/admin" element={<AdminDashboard />} />
              {/* 404 Catch-all */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;

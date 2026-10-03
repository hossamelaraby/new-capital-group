-- SQL Schema Script for New Capital Group (Supabase)
-- You can run this in Supabase Dashboard -> SQL Editor

CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name_ar TEXT NOT NULL,
  name_en TEXT NOT NULL,
  desc_ar TEXT,
  desc_en TEXT,
  icon_name TEXT,
  image TEXT,
  published BOOLEAN DEFAULT true,
  display_order INT DEFAULT 0,
  subcategories JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  sku TEXT UNIQUE NOT NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  short_desc_ar TEXT,
  short_desc_en TEXT,
  long_desc_ar TEXT,
  long_desc_en TEXT,
  category_slug TEXT REFERENCES categories(slug) ON DELETE CASCADE,
  subcategory_slug TEXT,
  tag TEXT,
  primary_image TEXT,
  gallery_images JSONB DEFAULT '[]'::jsonb,
  image_alt_ar TEXT,
  image_alt_en TEXT,
  source_type TEXT DEFAULT 'company',
  verification_status TEXT DEFAULT 'verified',
  availability TEXT DEFAULT 'available',
  material_ar TEXT,
  material_en TEXT,
  standards JSONB DEFAULT '[]'::jsonb,
  specifications JSONB DEFAULT '[]'::jsonb,
  applications_ar JSONB DEFAULT '[]'::jsonb,
  applications_en JSONB DEFAULT '[]'::jsonb,
  datasheet_url TEXT,
  quote_enabled BOOLEAN DEFAULT true,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS quote_requests (
  id TEXT PRIMARY KEY,
  ref_number TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT,
  phone TEXT NOT NULL,
  country_city TEXT,
  project_type TEXT,
  selected_category TEXT,
  items JSONB DEFAULT '[]'::jsonb,
  project_details TEXT,
  timeline TEXT,
  preferred_channel TEXT DEFAULT 'whatsapp',
  status TEXT DEFAULT 'new',
  internal_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS and simple policies
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read published products" ON products FOR SELECT USING (true);
CREATE POLICY "Public insert quote requests" ON quote_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin manage all categories" ON categories FOR ALL USING (true);
CREATE POLICY "Admin manage all products" ON products FOR ALL USING (true);
CREATE POLICY "Admin manage quote requests" ON quote_requests FOR ALL USING (true);

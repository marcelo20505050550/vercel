-- Schema para produtos da BV Boaventura
-- Tabela principal de produtos

CREATE TABLE IF NOT EXISTS produtos (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN (
    'produtos-bv-boaventura',
    'feitos-na-bv', 
    'vendidos-pela-bv',
    'servicos-terceiros'
  )),
  description TEXT NOT NULL,
  short_description TEXT NOT NULL,
  cover_image TEXT,
  completion_date TEXT,
  location TEXT,
  client_sector TEXT,
  project_scope TEXT,
  challenges TEXT[] DEFAULT '{}',
  specifications TEXT[] DEFAULT '{}',
  about TEXT,
  solution TEXT,
  results TEXT,
  gallery TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'disponível' CHECK (status IN ('disponível', 'vendido', 'em_desenvolvimento')),
  price NUMERIC,
  discount_price NUMERIC,
  benefits TEXT[] DEFAULT '{}',
  technical_details JSONB DEFAULT '{}',
  related_products INTEGER[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  seo_keywords TEXT[] DEFAULT '{}',
  seo_description TEXT,
  video_url TEXT,
  model_3d_url TEXT,
  warranty_info TEXT,
  delivery_time TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_produtos_category ON produtos(category);
CREATE INDEX IF NOT EXISTS idx_produtos_slug ON produtos(slug);
CREATE INDEX IF NOT EXISTS idx_produtos_featured ON produtos(featured);
CREATE INDEX IF NOT EXISTS idx_produtos_status ON produtos(status);

-- Trigger para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_produtos_updated_at 
    BEFORE UPDATE ON produtos 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Comentários das categorias:
-- 'produtos-bv-boaventura': Produtos da BV Boaventura
-- 'feitos-na-bv': Produtos de parceiros feitos na BV Boaventura  
-- 'vendidos-pela-bv': Produtos de parceiros vendidos pela BV Boaventura
-- 'servicos-terceiros': Serviços em produtos de terceiros
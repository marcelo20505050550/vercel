-- Criação da tabela projects
CREATE TABLE IF NOT EXISTS public.projects (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
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
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Permissões para acesso anônimo (somente leitura)
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir leitura anônima de projetos" 
ON public.projects
FOR SELECT 
TO anon
USING (true);

-- Permissões para usuários autenticados (leitura e escrita)
CREATE POLICY "Permitir escrita autenticada para projetos" 
ON public.projects
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Índices para melhorar performance
CREATE INDEX IF NOT EXISTS projects_slug_idx ON public.projects (slug);
CREATE INDEX IF NOT EXISTS projects_featured_idx ON public.projects (featured);
CREATE INDEX IF NOT EXISTS projects_category_idx ON public.projects (category); 
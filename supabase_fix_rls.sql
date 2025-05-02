-- Desabilitar temporariamente RLS para verificar se é o problema
ALTER TABLE public.projects DISABLE ROW LEVEL SECURITY;

-- Se isso resolver, podemos reabilitar e configurar corretamente:
-- ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Verificar políticas existentes
SELECT * FROM pg_policies WHERE tablename = 'projects';

-- Remover políticas existentes se necessário
-- DROP POLICY IF EXISTS "Permitir leitura anônima de projetos" ON public.projects;
-- DROP POLICY IF EXISTS "Permitir escrita autenticada para projetos" ON public.projects;

-- Recriação das políticas
CREATE POLICY "Permitir leitura anônima de projetos" 
ON public.projects
FOR SELECT 
TO anon
USING (true);

CREATE POLICY "Permitir escrita autenticada para projetos" 
ON public.projects
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Verificar se a tabela existe e tem o formato esperado
SELECT EXISTS (
   SELECT FROM information_schema.tables 
   WHERE table_schema = 'public'
   AND table_name = 'projects'
);

-- Verificar a estrutura da tabela
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'projects';

-- Verificar contagem de registros
SELECT COUNT(*) FROM public.projects; 
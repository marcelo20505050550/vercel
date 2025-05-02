-- Visualizar quais registros têm arrays nulos
SELECT 
  id, 
  slug, 
  title, 
  challenges IS NULL AS challenges_null, 
  specifications IS NULL AS specifications_null, 
  gallery IS NULL AS gallery_null
FROM 
  public.projects
WHERE 
  challenges IS NULL OR specifications IS NULL OR gallery IS NULL;

-- Corrigir arrays nulos usando COALESCE para substituir NULL por array vazio
UPDATE public.projects 
SET 
  challenges = COALESCE(challenges, '{}'),
  specifications = COALESCE(specifications, '{}'),
  gallery = COALESCE(gallery, '{}')
WHERE 
  challenges IS NULL OR specifications IS NULL OR gallery IS NULL;

-- Verificar se todos os arrays nulos foram corrigidos
SELECT 
  id, 
  slug, 
  title, 
  challenges IS NULL AS challenges_null, 
  specifications IS NULL AS specifications_null, 
  gallery IS NULL AS gallery_null
FROM 
  public.projects
WHERE 
  challenges IS NULL OR specifications IS NULL OR gallery IS NULL; 
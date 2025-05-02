-- Este script atualiza os campos de array que estão como NULL para arrays vazios

-- Atualizar o campo challenges onde for NULL
UPDATE public.projects 
SET challenges = '{}' 
WHERE challenges IS NULL;

-- Atualizar o campo specifications onde for NULL
UPDATE public.projects 
SET specifications = '{}' 
WHERE specifications IS NULL;

-- Atualizar o campo gallery onde for NULL
UPDATE public.projects 
SET gallery = '{}' 
WHERE gallery IS NULL;

-- Verificar se as atualizações foram aplicadas
SELECT 
  id, 
  slug, 
  title, 
  challenges IS NULL AS challenges_is_null, 
  array_length(challenges, 1) AS challenges_length,
  specifications IS NULL AS specifications_is_null, 
  array_length(specifications, 1) AS specifications_length,
  gallery IS NULL AS gallery_is_null, 
  array_length(gallery, 1) AS gallery_length
FROM public.projects; 
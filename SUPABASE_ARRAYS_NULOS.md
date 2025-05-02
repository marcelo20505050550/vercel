# Solução para Campos de Array Nulos no Supabase

## Problema

Ao importar dados para a tabela `projects` no Supabase via CSV, os campos do tipo array (`challenges`, `specifications`, `gallery`) podem ser importados como valores `NULL` em vez de arrays vazios. Isso causa problemas na renderização das páginas, resultando em mensagens como "Nenhum projeto encontrado", mesmo quando existem projetos no banco de dados.

## Soluções

### 1. Corrigir via API (Recomendado)

Acesse o endpoint criado especificamente para corrigir este problema:

```
GET /api/fix-arrays
```

Este endpoint executa as seguintes operações SQL:
- Atualiza o campo `challenges` onde for NULL para um array vazio `[]`
- Atualiza o campo `specifications` onde for NULL para um array vazio `[]` 
- Atualiza o campo `gallery` onde for NULL para um array vazio `[]`

### 2. Corrigir via SQL (Alternativa)

Você também pode executar o SQL manualmente no painel do Supabase:

1. Acesse o painel do Supabase (https://app.supabase.com/)
2. Selecione o projeto `lcwzjehpjjgmekuculue`
3. No menu lateral, vá para **SQL Editor**
4. Crie um novo script (New Query)
5. Cole o seguinte SQL:

```sql
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
```

6. Clique em **Run** para executar

### 3. Prevenção no Código (Já Implementado)

O código já possui proteções contra valores NULL:

1. A função `processProject` no arquivo `src/lib/supabase.ts` converte valores NULL para arrays vazios.
2. Esta função é chamada em todos os métodos do `projectService.ts` que buscam dados do Supabase.

## Como Prevenir Futuros Problemas

Ao importar dados via CSV, certifique-se de:

1. Formatar arrays vazios como `"{}"` (sem espaços) no arquivo CSV
2. Para arrays com valores, usar o formato `"{""valor1"",""valor2"",""valor3""}"` 
3. Verificar no preview de importação se os campos estão sendo reconhecidos como tipo array
4. Executar o endpoint `/api/fix-arrays` após importações em massa

## Diagnóstico

Para verificar o estado atual dos campos de array no banco de dados:

1. Acesse o endpoint de teste:

```
GET /api/test-supabase
```

2. Verifique na resposta JSON se os campos `challenges`, `specifications` e `gallery` estão sendo retornados como arrays (mesmo que vazios) ou como `null`. 
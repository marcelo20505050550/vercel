# Memória de Alterações - BV BoaVentura

## 2025-10-14 - Reorganização da Página de Serviços e Produtos

### Alterações Realizadas:

#### 1. Reordenação dos Itens na Página `/servicos`
- ✅ **Ordem atualizada**: Primeiro os 4 serviços, depois os 2 produtos
  - **Serviços (1-4):**
    1. Caldeiraria Leve
    2. Máquinas Especiais
    3. Ferramentaria
    4. Rebarbação (antiga "Rebarba")
  - **Produtos (5-6):**
    5. Peças de Reposição
    6. Cilindros

#### 2. Alteração de "Rebarba" para "Rebarbação"
- ✅ **ID atualizado**: `rebarba` → `rebarbacao` (mantido caminho de mídia como `/servicos/rebarba/` para compatibilidade)
- ✅ **Título atualizado**: "Rebarba" → "Rebarbação" em todos os arquivos
- ✅ **Link atualizado**: `#rebarba` → `#rebarbacao` no Footer e navegação

#### 3. Diferenciação entre Serviços e Produtos
- ✅ **Propriedade `type` adicionada** a cada item:
  - `type: "service"` - Para Caldeiraria, Máquinas, Ferramentaria, Rebarbação
  - `type: "product"` - Para Peças de Reposição e Cilindros
- ✅ **Badge dinâmico**: Mostra "Serviço Especializado" para serviços e "Produto" para produtos

#### 4. MEDIA_CONFIG Atualizado
```typescript
rebarbacao: [
  { type: 'image', src: '/servicos/rebarba/bv.png' }
]
```

### Arquivos Modificados:
1. `src/components/ui/ServicesPageContent.tsx` - Reordenação, renomeação e tipagem
2. `src/components/ui/ServicesSection.tsx` - Título atualizado para "Rebarbação"
3. `src/components/layout/Footer.tsx` - Link e texto atualizados
4. `src/components/ui/SobrePageContent.tsx` - Texto descritivo atualizado

### Observações Importantes:
- Galeria de "Trabalhos" mantida com o nome atualizado (já estava correto)
- Caminho físico da pasta `/public/servicos/rebarba/` mantido para não quebrar imagens existentes
- Todos os links internos atualizados para `#rebarbacao`

---

## 2025-10-14 - Correção: Timeline de Processo com elementos desalinhados

### Problema Identificado:
- ❌ **Círculos numerados duplicados/deslocados**: Na seção "Nosso Processo de Trabalho", os círculos 02 e 04 apareciam fora de posição no lado esquerdo
- ❌ **Causa raiz**: Uso incorreto de `order` do flexbox causava conflito no posicionamento dos elementos
- ❌ **Layout confuso**: Estrutura anterior usava `md:order-last` de forma inconsistente

### Solução Implementada:
- ✅ **Renderização condicional explícita**: Substituído o sistema de `order` por renderização condicional clara
- ✅ **Estrutura corrigida**:
  - **Itens PARES (01, 03)**: `[Card à esquerda] → [Círculo central] → [Espaço vazio à direita]`
  - **Itens ÍMPARES (02, 04)**: `[Espaço vazio à esquerda] → [Círculo central] → [Card à direita]`
- ✅ **Classe `shrink-0` adicionada** ao container do círculo para evitar compressão
- ✅ **Alinhamento `items-center`** mantido para centralização vertical
- ✅ **Comentários explicativos** adicionados para facilitar manutenção futura

### Layout Final da Timeline:
```
01 [Consulta Inicial      ] ●━━━━━━━━━━━━━━━━━━━
                            ┃
02 ━━━━━━━━━━━━━━━━━━━ ●  [Projeto Técnico    ]
                            ┃
03 [Fabricação            ] ●━━━━━━━━━━━━━━━━━━━
                            ┃
04 ━━━━━━━━━━━━━━━━━━━ ●  [Entrega e Instalação]
```

**Arquivo modificado:** `src/components/ui/ServicesPageContent.tsx` (linhas 386-442)

---

## 2025-10-14 - Correção: Vídeos não aparecem e erro no modal de imagens

### Problemas Identificados:
- ❌ **Vídeos não apareciam**: Arquivo `ze.mp4` existia em `/public/servicos/caldeiraria/` mas não estava configurado no `MEDIA_CONFIG`
- ❌ **Erro no modal expandido**: `Image with src "..." has "fill" and a height value of 0` ao clicar para expandir imagem
- ❌ **Causa do erro no modal**: Container usava `aspect-video` que não define altura explícita necessária para `<Image fill>`

### Solução Implementada:
- ✅ **Vídeo adicionado ao MEDIA_CONFIG** (linha 24):
  ```typescript
  caldeiraria: [
    { type: 'image', src: '/servicos/caldeiraria/bv.png' },
    { type: 'video', src: '/servicos/caldeiraria/ze.mp4' }
  ]
  ```
- ✅ **Modal corrigido** (linha 112): Substituído `aspect-video` por `h-[80vh]` no container da imagem expandida
- ✅ **Classe atualizada**: `className="relative w-full h-[80vh] rounded-lg overflow-hidden"`

### Regra Crítica - Modal de Imagem com fill:
**Para modal/lightbox com Next.js Image + fill:**
1. Container DEVE ter altura explícita (`h-[80vh]`, `h-screen`, etc.) ✅
2. NÃO usar apenas `aspect-video` ou `aspect-*` - eles não definem altura concreta ❌
3. Usar `object-contain` para imagens manterem proporção ✅
4. Adicionar `priority` se for modal/visualização imediata ✅

**Arquivo modificado:** `src/components/ui/ServicesPageContent.tsx`

---

## 2025-10-14 - Correção: Erro de altura zero em imagens com fill no Next.js

### Problema Identificado:
- ❌ **Erro no console**: `Image with src "/servicos/pecas-reposicao/bv.png" has "fill" and a height value of 0`
- ❌ **Imagens não apareciam**: Apesar de existirem em `/public/servicos/`, não eram exibidas na galeria da página
- ❌ **Causa raiz**: Elemento pai do `<Image fill>` usava `aspect-video` que não define altura explícita suficiente para o Next.js

### Solução Implementada:
- ✅ **Substituído `aspect-video` por `h-48`** no container da galeria (linha 69)
- ✅ **Classe final**: `className="relative w-full h-48 rounded-lg overflow-hidden cursor-pointer group"`
- ✅ **Prop `sizes` mantida** para otimização: `sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"`
- ✅ **Altura de 192px (h-48)** garante que as imagens sejam exibidas corretamente

### Regra Importante:
**Quando usar `fill` em Next.js Image:**
1. Elemento pai DEVE ter `position: relative` ✅
2. Elemento pai DEVE ter largura explícita (`w-full`) ✅
3. Elemento pai DEVE ter altura explícita em pixels (`h-48`, `h-64`, etc.) - **NÃO usar apenas `aspect-video`** ❌
4. SEMPRE adicionar prop `sizes` para performance ✅

**Arquivo modificado:** `src/components/ui/ServicesPageContent.tsx`

---

## 2025-10-14 - Correção: Imagens não apareciam na página /servicos

### Problema Identificado:
- ✅ **Imagens existentes mas não exibidas**: Todas as pastas em `/public/servicos/` continham imagens (`bv.png`), mas não apareciam na galeria da página `/servicos`
- ✅ **Causa raiz**: A API `/api/media` usava leitura dinâmica do sistema de arquivos (`fs.readdirSync`), que pode falhar em ambientes Next.js dependendo da configuração

### Solução Implementada:
- ✅ **Substituída API dinâmica por configuração estática** no componente `MediaGallery`
- ✅ **Criada constante `MEDIA_CONFIG`** fora do componente para evitar re-renderizações
- ✅ **Configuração explícita** de todas as imagens disponíveis para cada serviço:
  - caldeiraria → `/servicos/caldeiraria/bv.png`
  - maquinas → `/servicos/maquinas/bv.png`
  - ferramentaria → `/servicos/ferramentaria/bv.png`
  - pecas-reposicao → `/servicos/pecas-reposicao/bv.png`
  - rebarba → `/servicos/rebarba/bv.png`
  - cilindros → `/servicos/cilindros/bv.png`

### Para Adicionar Novas Imagens:
1. Adicionar imagem na pasta correspondente em `/public/servicos/{id-do-servico}/`
2. Atualizar a constante `MEDIA_CONFIG` em `ServicesPageContent.tsx` com o caminho da nova imagem

**Arquivo modificado:** `src/components/ui/ServicesPageContent.tsx`

---

## 2025-10-14 - Reposicionamento da Galeria de Serviços

### Alterações Realizadas:

#### Reposicionamento da Galeria
- ✅ **Galeria movida** de dentro do card de texto para após cada seção completa de serviço
- ✅ **Centralização** da galeria com container `max-w-5xl`
- ✅ **Título centralizado** com tamanho aumentado para `text-2xl`
- ✅ **Grid responsivo** ajustado para `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- ✅ **Espaçamento** de `mt-12` entre o serviço e a galeria

#### Estrutura Atualizada:
```
[Seção do Serviço]
  ├── Texto e descrição (lado esquerdo/direito alternado)
  ├── Card visual do serviço (lado direito/esquerdo alternado)
  └── Botão "Solicitar Orçamento"

[Galeria Centralizada] ← Nova posição
  ├── Título "Galeria" (centralizado)
  └── Grid de imagens/vídeos
```

**Arquivo modificado:** `src/components/ui/ServicesPageContent.tsx`

---

## 2025-10-14 - Remoção de "Implementos Agrícolas" e Ajustes na Página de Serviços

### Alterações Realizadas:

#### 1. Página de Serviços (`/servicos`)
- ✅ Removida a seção de cards coloridos do topo da página (grid de 5 cards com links "Ver detalhes")
- ✅ Corrigidos textos em branco para preto nas áreas de descrição dos serviços
- ✅ Mantida a galeria de imagens/vídeos funcional para cada serviço

#### 2. Remoção de "Implementos Agrícolas"
Removido de todos os locais:
- ✅ Footer.tsx - Seção "Nossos Serviços" e descrição da empresa
- ✅ bannerData.ts - Removido banner de "Implementos Agrícolas" da página inicial
- ✅ RotatingBanner.tsx - Removido slide de "Implementos Agrícolas"
- ✅ SobrePageContent.tsx - Removido da descrição da empresa
- ✅ FeaturedProductsSection.tsx - Removido da descrição padrão
- ✅ Metadados SEO em:
  - `app/produtos/page.tsx`
  - `app/produtos/produtos-bv-boaventura/page.tsx`

### Estrutura da Galeria de Mídia

A galeria de imagens/vídeos já está implementada e funcional:

**Localização das mídias:** `/public/servicos/{id-do-servico}/`

**Pastas disponíveis:**
- `/public/servicos/caldeiraria/` - Caldeiraria Leve
- `/public/servicos/maquinas/` - Máquinas Especiais
- `/public/servicos/ferramentaria/` - Ferramentaria
- `/public/servicos/pecas-reposicao/` - Peças de Reposição
- `/public/servicos/rebarba/` - Rebarba
- `/public/servicos/cilindros/` - Cilindros

**Formatos suportados:**
- Imagens: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
- Vídeos: `.mp4`, `.webm`, `.mov`

**Como funciona:**
1. Basta colocar arquivos nas pastas correspondentes
2. A API `/api/media` detecta automaticamente os arquivos
3. Se não houver mídia, a galeria fica invisível
4. Componente `MediaGallery` em `ServicesPageContent.tsx` cuida da exibição

### Arquivos Modificados:
1. `src/components/ui/ServicesPageContent.tsx`
2. `src/components/layout/Footer.tsx`
3. `src/data/bannerData.ts`
4. `src/components/ui/RotatingBanner.tsx`
5. `src/components/ui/SobrePageContent.tsx`
6. `src/components/ui/FeaturedProductsSection.tsx`
7. `src/app/produtos/page.tsx`
8. `src/app/produtos/produtos-bv-boaventura/page.tsx`

### Observações:
- API de mídia já estava implementada em `src/app/api/media/route.ts`
- Estrutura de pastas já estava criada em `/public/servicos/`
- README com instruções já existia em `/public/servicos/README.md`

---

## 2025-10-14 - Otimização Completa de SEO e Correção de Domínio

### Problema Identificado:
- ❌ **Domínio Vercel aparecia no Google**: O endereço `.vercel.app` estava sendo indexado ao invés do domínio oficial `bvboaventura.com.br`
- ❌ **Falta de otimização SEO**: Site sem robots.txt, sitemap.xml, metadados completos e dados estruturados

### Soluções Implementadas:

#### 1. Redirects Permanentes (301)
- ✅ **Arquivo**: `next.config.js`
- ✅ **Redirect www → domínio principal**: `www.bvboaventura.com.br` → `bvboaventura.com.br`
- ✅ **Redirect Vercel → domínio oficial**: `*.vercel.app` → `bvboaventura.com.br`
- ✅ **Tipo**: Redirects permanentes (301) para transferir autoridade SEO

#### 2. Robots.txt Dinâmico
- ✅ **Arquivo criado**: `src/app/robots.ts`
- ✅ **Permite indexação**: `User-agent: *` com `Allow: /`
- ✅ **Bloqueia**: `/api/`, `/admin/`, `/_next/`
- ✅ **Referencia sitemap**: `https://bvboaventura.com.br/sitemap.xml`
- ✅ **Define host**: `https://bvboaventura.com.br`

#### 3. Sitemap.xml Dinâmico
- ✅ **Arquivo criado**: `src/app/sitemap.ts`
- ✅ **Páginas incluídas**:
  - Home (priority: 1.0, weekly)
  - Sobre (priority: 0.8, monthly)
  - Serviços (priority: 0.9, weekly)
  - Produtos (priority: 0.9, weekly)
  - Produtos/categorias (priority: 0.8, weekly)
  - Parceiros (priority: 0.7, monthly)
  - Contato (priority: 0.7, yearly)

#### 4. Metadados Completos no Layout Principal
- ✅ **Arquivo**: `src/app/layout.tsx`
- ✅ **metadataBase**: `https://bvboaventura.com.br`
- ✅ **Título dinâmico**: Template `%s | BV BoaVentura`
- ✅ **Keywords otimizadas**: caldeiraria, implementos agrícolas, máquinas especiais, etc.
- ✅ **Open Graph completo**: Para compartilhamento em redes sociais
- ✅ **Twitter Cards**: Configurado para Twitter/X
- ✅ **Robots meta**: Index e follow habilitados
- ✅ **URL canônica**: Sempre aponta para `bvboaventura.com.br`
- ✅ **Manifest PWA**: `/manifest.json`
- ✅ **Ícones**: Configurados para todos os tamanhos

#### 5. Metadados Específicos por Página
- ✅ **Home** (`src/app/page.tsx`):
  - Título: "BV BoaVentura - Caldeiraria e Implementos Agrícolas"
  - Descrição otimizada com localização
  
- ✅ **Sobre** (`src/app/sobre/page.tsx`):
  - Título: "Sobre Nós - BV BoaVentura"
  - Foco em história e valores
  
- ✅ **Serviços** (`src/app/servicos/page.tsx`):
  - Título: "Serviços - BV BoaVentura"
  - Lista completa de serviços
  
- ✅ **Produtos** (`src/app/produtos/page.tsx`):
  - Título: "Produtos - BV BoaVentura"
  - Categorias de produtos
  
- ✅ **Contato** (`src/app/contato/page.tsx`):
  - Título: "Contato - BV BoaVentura"
  - Inclui telefone e email na descrição
  
- ✅ **Parceiros** (`src/app/parceiros/page.tsx`):
  - Título: "Parceiros - BV BoaVentura"
  - Foco em parcerias

#### 6. Dados Estruturados (JSON-LD)
- ✅ **Arquivo criado**: `src/components/JsonLd.tsx`
- ✅ **Schema Organization**: Informações da empresa
  - Nome, logo, descrição
  - Endereço completo
  - Telefone de contato
  - Redes sociais
  
- ✅ **Schema LocalBusiness**: Negócio local
  - Dados de contato
  - Geolocalização (latitude/longitude)
  - Horário de funcionamento
  - Faixa de preço

#### 7. Manifest para PWA
- ✅ **Arquivo criado**: `public/manifest.json`
- ✅ **Nome**: BV BoaVentura - Soluções Industriais
- ✅ **Tema**: Azul industrial (#1e3a8a)
- ✅ **Ícones**: Configurados para instalação
- ✅ **Idioma**: pt-BR

### Arquivos Criados:
1. `src/app/robots.ts` - Geração dinâmica de robots.txt
2. `src/app/sitemap.ts` - Geração dinâmica de sitemap.xml
3. `src/components/JsonLd.tsx` - Dados estruturados Schema.org
4. `public/manifest.json` - Manifest PWA

### Arquivos Modificados:
1. `next.config.js` - Redirects 301 permanentes
2. `src/app/layout.tsx` - Metadados completos + JSON-LD
3. `src/app/page.tsx` - Metadata específica
4. `src/app/sobre/page.tsx` - Metadata específica
5. `src/app/servicos/page.tsx` - Metadata específica
6. `src/app/produtos/page.tsx` - Metadata específica
7. `src/app/contato/page.tsx` - Metadata específica
8. `src/app/parceiros/page.tsx` - Metadata específica

### Google Search Console - Configuração Concluída:
1. **Verificação do Domínio**:
   - ✅ Código de verificação adicionado: `cgB-tvJly5ybye0T27pmB24o_SrB0-UA6rCUy_HGuA0`
   - ✅ Localização: `src/app/layout.tsx` linha 78
   
2. **Próximos Passos**:
   - Aguardar deploy do site para ativar a verificação
   - Submeter sitemap: `https://bvboaventura.com.br/sitemap.xml`
   - Solicitar remoção do domínio `.vercel.app` da indexação
   
2. **Vercel Dashboard**:
   - Configurar domínio customizado: `bvboaventura.com.br`
   - Redirecionar automaticamente `www.bvboaventura.com.br` → `bvboaventura.com.br`
   - Certificado SSL automático será provisionado
   
3. **Monitoramento**:
   - Aguardar re-indexação do Google (pode levar dias/semanas)
   - Verificar que apenas `bvboaventura.com.br` aparece nos resultados
   - Monitorar Core Web Vitals no Search Console

### Benefícios SEO Implementados:
- ✅ URLs canônicas definidas
- ✅ Sitemap XML para facilitar crawling
- ✅ Robots.txt configurado corretamente
- ✅ Dados estruturados para rich snippets
- ✅ Open Graph para redes sociais
- ✅ Metadados otimizados por página
- ✅ PWA com manifest
- ✅ Redirects 301 para evitar conteúdo duplicado
- ✅ Mobile-friendly e responsivo

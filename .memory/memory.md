# Memória de Alterações - BV BoaVentura

## 🚨 Correções de Deploy na Vercel (Atualizado em 20/10/2025)

### Problema: 4º Erro de Deploy
**Erro:** "An unexpected error happened when running this build" durante fase "Deploying outputs"

### Causas Identificadas:
1. **Middleware complexo** com validação CSRF que pode causar problemas no deploy
2. **Logging no middleware** que pode interferir com o processo de deploy
3. **Falta de otimizações** no next.config.js
4. **Output mode padrão** sem otimizações standalone

### Soluções Implementadas:

#### 1. Middleware Simplificado (middleware.ts)
- ✅ **CSRF Protection desabilitado temporariamente** (comentado)
- ✅ **Logging desabilitado temporariamente** (comentado)
- ✅ Mantido apenas `NextResponse.next()` para garantir funcionamento
- ⚠️ **TODO:** Reabilitar CSRF e logging APÓS confirmar que deploy funciona

#### 2. Next.js Otimizado (next.config.js)
- ✅ `experimental.optimizePackageImports` para `lucide-react` e `framer-motion`
- ✅ `swcMinify: true` para reduzir tamanho do bundle
- ✅ `output: 'standalone'` para otimizar deploy na Vercel

#### 3. Vercel.json Criado (vercel.json)
- ✅ **Região otimizada:** `gru1` (São Paulo) para menor latência
- ✅ **Timeout configurado:** `maxDuration: 10s` para APIs
- ✅ **Memória otimizada:** `1024MB` para funções serverless
- ✅ **Headers CORS:** Configurados para APIs
- ✅ **Framework:** Next.js detectado automaticamente
- ⚠️ **Nota:** Não contém secrets, apenas configurações públicas

#### 4. Regras de Deploy:
- ⚠️ **NUNCA usar** `setInterval`, `setTimeout` ou processos em background (incompatível com serverless)
- ✅ **vercel.json** agora está versionado (sem secrets - usar env vars na Vercel)
- ✅ Sempre usar **limpeza sob demanda** ou **cache externo** (Redis, Vercel KV)

### ✅ Correção Adicional (Tentativa 6):
**Problemas encontrados no 5º deploy:**
1. ❌ `swcMinify` inválido no Next.js 15 (já é padrão)
2. ❌ `autoprefixer` e `postcss` em devDependencies (precisam estar em dependencies)
3. ❌ `vercel.json` muito complexo causando conflitos

**Soluções aplicadas:**
- ✅ Removido `swcMinify` e `output: 'standalone'` do next.config.js
- ✅ Movido `autoprefixer` e `postcss` para dependencies
- ✅ Simplificado `vercel.json` drasticamente (apenas região e timeout de API)
- ✅ Deixado Vercel usar comandos padrão de build e install

### Próximos Passos:
1. ✅ Commit e push realizados (commit 4b5204a)
2. ⏳ Aguardar novo deploy na Vercel (tentativa 6)
3. Se deploy funcionar, reabilitar CSRF e logging gradualmente
4. Considerar implementar rate limiting com Vercel KV ou Upstash Redis

---

## 📋 Histórico de Problemas Resolvidos

### Rate Limiter em Serverless
**Problema:** setInterval não funciona em ambientes serverless
**Solução:** Implementado limpeza sob demanda via `cleanupExpiredRecords()`

### Variáveis de Ambiente
**Atenção:** Verificar se `NEXT_PUBLIC_SITE_URL` está configurada na Vercel

---


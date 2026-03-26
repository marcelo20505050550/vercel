import { createClient } from '@supabase/supabase-js';

// ============================================
// VALIDAÇÃO DE VARIÁVEIS DE AMBIENTE
// ============================================
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE;

// Log seguro apenas em desenvolvimento
if (process.env.NODE_ENV === 'development') {
  console.log('[Supabase] Inicializando clientes');
  console.log('[Supabase] URL:', supabaseUrl ? '✓ Configurada' : '✗ Não configurada');
  console.log('[Supabase] Anon Key:', supabaseAnonKey ? '✓ Configurada' : '✗ Não configurada');
  console.log('[Supabase] Service Role:', supabaseServiceRole ? '✓ Configurada' : '✗ Não configurada');
}

// SEGURANÇA: Validação estrita - falha explicitamente se variáveis não existirem
if (!supabaseUrl) {
  throw new Error('[SEGURANÇA] NEXT_PUBLIC_SUPABASE_URL não configurada. Verifique as variáveis de ambiente.');
}

if (!supabaseAnonKey) {
  throw new Error('[SEGURANÇA] NEXT_PUBLIC_SUPABASE_ANON_KEY não configurada. Verifique as variáveis de ambiente.');
}

// ============================================
// CLIENTE SUPABASE PARA USO PÚBLICOo
// ============================================
// Usa a chave anônima (anon key) com RLS ativado
// SEGURO para uso em componentes cliente e Server Components
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // SEGURANÇA: Não persistir sessão no servidor
    autoRefreshToken: false, // SEGURANÇA: Sem refresh automático no servidor
  }
});

// ============================================
// CLIENTE SUPABASE PARA SERVER-SIDE (ADMIN)
// ============================================
// Usa service_role key - BYPASS RLS (usar com EXTREMA cautela)
// APENAS para operações administrativas em server-side
// NUNCA exponha este cliente ao navegador
export const supabaseAdmin = supabaseServiceRole 
  ? createClient(supabaseUrl, supabaseServiceRole, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      }
    })
  : null;

// Log de aviso se admin não disponível
if (!supabaseAdmin && process.env.NODE_ENV === 'development') {
  console.warn('[Supabase] Cliente Admin não disponível (SUPABASE_SERVICE_ROLE não configurada)');
} 
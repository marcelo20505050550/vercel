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
// CLIENTE SUPABASE PARA USO PÚBLICO
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

export type Produto = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  short_description: string;
  cover_image: string;
  completion_date: string;
  location: string;
  client_sector: string;
  project_scope: string;
  challenges: string[];
  specifications: string[];
  about: string;
  solution: string;
  results: string;
  gallery: string[];
  featured: boolean;
  created_at: string;
  status?: 'disponível' | 'vendido' | 'em_desenvolvimento';
  price?: number;
  discount_price?: number;
  benefits?: string[];
  technical_details?: {
    material?: string;
    acabamento?: string;
    sistema_hidraulico?: string;
    garantia?: string;
    [key: string]: any;
  };
  related_products?: number[];
  tags?: string[];
  seo_keywords?: string[];
  seo_description?: string;
  video_url?: string;
  model_3d_url?: string;
  warranty_info?: string;
  delivery_time?: string;
  updated_at?: string;
};

/**
 * Processa um produto para garantir que campos de array não sejam null
 */
export function processProduto(produto: any): Produto {
  if (!produto) return produto;
  
  // Criar um novo objeto com arrays vazios em vez de null
  const processedProduto = {
    ...produto,
    challenges: produto.challenges === null ? [] : (Array.isArray(produto.challenges) ? produto.challenges : []),
    specifications: produto.specifications === null ? [] : (Array.isArray(produto.specifications) ? produto.specifications : []),
    gallery: produto.gallery === null ? [] : (Array.isArray(produto.gallery) ? produto.gallery : []),
    benefits: produto.benefits === null ? [] : (Array.isArray(produto.benefits) ? produto.benefits : []),
    tags: produto.tags === null ? [] : (Array.isArray(produto.tags) ? produto.tags : []),
    seo_keywords: produto.seo_keywords === null ? [] : (Array.isArray(produto.seo_keywords) ? produto.seo_keywords : []),
    related_products: produto.related_products === null ? [] : (Array.isArray(produto.related_products) ? produto.related_products : []),
    technical_details: produto.technical_details === null ? {} : (typeof produto.technical_details === 'object' ? produto.technical_details : {})
  };
  
  return processedProduto;
} 
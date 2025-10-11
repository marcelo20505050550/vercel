import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Log seguro apenas em desenvolvimento
if (process.env.NODE_ENV === 'development') {
  console.log('[Supabase] Inicializando cliente');
  console.log('[Supabase] URL:', supabaseUrl ? 'Configurada' : 'Não configurada');
  console.log('[Supabase] API Key:', supabaseKey ? 'Configurada' : 'Não configurada');
}

// Verificar se as variáveis de ambiente estão configuradas
if (!supabaseUrl || !supabaseKey) {
  console.warn('[Supabase] Variáveis de ambiente não configuradas. Cliente não será inicializado.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key'
);

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
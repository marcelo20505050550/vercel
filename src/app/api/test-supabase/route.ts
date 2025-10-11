import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import logger from '@/utils/logger';

export async function GET(request: NextRequest) {
  // PROTEÇÃO: Bloquear em produção ou exigir autenticação
  if (process.env.NODE_ENV === 'production') {
    const authHeader = request.headers.get('authorization');
    const adminSecret = process.env.ADMIN_SECRET;
    
    if (!adminSecret || authHeader !== `Bearer ${adminSecret}`) {
      logger.warn('Tentativa de acesso não autorizado ao endpoint de debug');
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      );
    }
  }
  
  logger.info('Testando conexão com Supabase');
  
  try {
    // Testar conexão com o Supabase
    const { data, error } = await supabase
      .from('produtos')
      .select('*', { count: 'exact', head: true });
      
    if (error) {
      logger.error('Erro ao conectar com Supabase', error);
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      }, { status: 500 });
    }
    
    // Buscar uma amostra de produtos
    const { data: sampleProducts } = await supabase
      .from('produtos')
      .select('id, slug, title')
      .limit(2);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Conexão com Supabase estabelecida com sucesso',
      count: data?.length || 0,
      sample: sampleProducts || [],
      url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'Não configurada'
    });
    
  } catch (err) {
    logger.error('Erro ao testar conexão com Supabase', err);
    return NextResponse.json({ 
      success: false, 
      error: err instanceof Error ? err.message : 'Erro desconhecido',
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || 'Não configurada',
      supabaseKeyConfigured: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    }, { status: 500 });
  }
} 
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  console.log('Testando conexão com Supabase...');
  
  try {
    // Testar conexão com o Supabase
    const { data, error } = await supabase
      .from('projects')
      .select('*', { count: 'exact', head: true });
      
    if (error) {
      console.error('Erro ao conectar com Supabase:', error);
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
      sample: sampleProjects || [],
      url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'Não configurada'
    });
    
  } catch (err) {
    console.error('Erro ao testar conexão com Supabase:', err);
    return NextResponse.json({ 
      success: false, 
      error: err instanceof Error ? err.message : 'Erro desconhecido',
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || 'Não configurada',
      supabaseKeyConfigured: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    }, { status: 500 });
  }
} 
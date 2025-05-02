import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    console.log('Testando conexão com Supabase...');
    
    // Tenta buscar projetos diretamente
    const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select('*')
      .limit(5);
      
    if (projectsError) {
      console.error('Erro ao buscar projetos:', projectsError);
      return NextResponse.json({
        success: false,
        error: projectsError,
        message: 'Erro ao buscar projetos'
      }, { status: 500 });
    }
    
    // Contar o número total de projetos
    const { count, error: countError } = await supabase
      .from('projects')
      .select('*', { count: 'exact', head: true });
    
    const result = {
      success: true,
      connection: 'OK',
      projectsTable: {
        count: projects?.length || 0,
        totalCount: count || 0,
        firstProject: projects?.[0] || null,
        projectFields: projects && projects[0] ? Object.keys(projects[0]) : [],
        allProjectsData: projects
      },
      environment: {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Configurada' : 'Não configurada',
        key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Configurada' : 'Não configurada'
      }
    };
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Erro ao testar conexão:', error);
    return NextResponse.json({
      success: false,
      error,
      message: 'Exceção ao testar conexão com o Supabase'
    }, { status: 500 });
  }
} 
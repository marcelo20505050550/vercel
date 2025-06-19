import { NextResponse } from 'next/server';
import { supabase, processProject } from '@/lib/supabase';

export async function GET() {
  console.log('Executando script para corrigir arrays nulos...');
  
  try {
    // Buscar todos os projetos
    const { data, error } = await supabase
      .from('projects')
      .select('*');
      
    if (error) {
      console.error('Erro ao buscar projetos:', error);
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      }, { status: 500 });
    }
    
    console.log(`Encontrados ${data?.length || 0} projetos`);
    
    // Array para armazenar resultados
    const results = [];
    
    // Processar cada projeto
    for (const project of data || []) {
      console.log(`Processando projeto ${project.id} (${project.slug})`);
      console.log('challenges antes:', project.challenges);
      console.log('specifications antes:', project.specifications);
      console.log('gallery antes:', project.gallery);
      
      // Verificar se algum campo de array é null
      if (project.challenges === null || project.specifications === null || project.gallery === null) {
        console.log(`Atualizando projeto com ID ${project.id}, slug: ${project.slug}`);
        
        // Criar objeto com os campos a serem atualizados
        const updates = {
          challenges: project.challenges === null ? [] : project.challenges,
          specifications: project.specifications === null ? [] : project.specifications,
          gallery: project.gallery === null ? [] : project.gallery
        };
        
        // Atualizar o projeto no Supabase
        const { data: updateData, error: updateError } = await supabase
          .from('projects')
          .update(updates)
          .eq('id', project.id);
          
        if (updateError) {
          console.error(`Erro ao atualizar projeto ${project.id}:`, updateError);
          results.push({
            id: project.id,
            slug: project.slug,
            success: false,
            error: updateError.message
          });
        } else {
          console.log(`Projeto ${project.id} atualizado com sucesso`);
          results.push({
            id: project.id,
            slug: project.slug,
            success: true
          });
        }
      } else {
        console.log(`Projeto ${project.id} não precisa de atualização`);
        results.push({
          id: project.id,
          slug: project.slug,
          success: true,
          noUpdateNeeded: true
        });
      }
    }
    
    console.log(`Resultado final: ${results.filter(r => r.success && !r.noUpdateNeeded).length} projetos atualizados com sucesso`);
    
    return NextResponse.json({ 
      success: true, 
      results 
    });
    
  } catch (err) {
    console.error('Erro ao executar script:', err);
    return NextResponse.json({ 
      success: false, 
      error: err instanceof Error ? err.message : 'Erro desconhecido' 
    }, { status: 500 });
  }
} 
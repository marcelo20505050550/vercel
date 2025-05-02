import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { processProject } from '@/lib/supabase';

export async function GET() {
  try {
    console.log('Executando script para corrigir arrays nulos...');
    
    // Buscar todos os projetos
    const { data: projects, error: fetchError } = await supabase
      .from('projects')
      .select('*');
    
    if (fetchError) {
      console.error('Erro ao buscar projetos:', fetchError);
      return NextResponse.json({
        success: false,
        error: fetchError,
        message: 'Erro ao buscar projetos'
      }, { status: 500 });
    }
    
    console.log(`Encontrados ${projects?.length || 0} projetos`);
    
    if (!projects || projects.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'Nenhum projeto encontrado para atualizar'
      });
    }
    
    // Lista para registrar os projetos que foram atualizados
    const updatedProjects = [];
    
    // Processar e atualizar cada projeto
    for (const project of projects) {
      const processedProject = processProject(project);
      
      // Verificar se algum campo era nulo e foi processado para array vazio
      const needsUpdate = 
        (project.challenges === null && Array.isArray(processedProject.challenges)) ||
        (project.specifications === null && Array.isArray(processedProject.specifications)) ||
        (project.gallery === null && Array.isArray(processedProject.gallery));
      
      if (needsUpdate) {
        console.log(`Atualizando projeto com ID ${project.id}, slug: ${project.slug}`);
        
        // Atualizar o projeto no Supabase
        const { error: updateError } = await supabase
          .from('projects')
          .update({
            challenges: processedProject.challenges,
            specifications: processedProject.specifications,
            gallery: processedProject.gallery
          })
          .eq('id', project.id);
        
        if (updateError) {
          console.error(`Erro ao atualizar projeto ${project.id}:`, updateError);
        } else {
          updatedProjects.push(project.id);
          console.log(`Projeto ${project.id} atualizado com sucesso`);
        }
      }
    }
    
    // Buscar projetos atualizados para confirmar
    const { data: updatedData, error: verifyError } = await supabase
      .from('projects')
      .select('id, slug, title, challenges, specifications, gallery');
    
    // Montar resposta com resultados
    const result = {
      success: true,
      updatedCount: updatedProjects.length,
      updatedIds: updatedProjects,
      message: `${updatedProjects.length} projetos atualizados com sucesso`,
      projects: updatedData || []
    };
    
    console.log('Resultado final:', result.message);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Exceção ao tentar corrigir arrays nulos:', error);
    return NextResponse.json({
      success: false,
      error,
      message: 'Exceção ao tentar corrigir arrays nulos'
    }, { status: 500 });
  }
} 
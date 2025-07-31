import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  console.log('Executando script para corrigir arrays nulos...');
  
  try {
    // Buscar todos os produtos
    const { data, error } = await supabase
      .from('produtos')
      .select('*');
      
    if (error) {
      console.error('Erro ao buscar produtos:', error);
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      }, { status: 500 });
    }
    
    console.log(`Encontrados ${data?.length || 0} produtos`);
    
    // Array para armazenar resultados
    const results = [];
    
    // Processar cada produto
    for (const produto of data || []) {
      console.log(`Processando produto ${produto.id} (${produto.slug})`);
      console.log('gallery antes:', produto.gallery);
      console.log('seo_keywords antes:', produto.seo_keywords);
      
      // Verificar se algum campo de array é null
      if (produto.gallery === null || produto.seo_keywords === null) {
        console.log(`Atualizando produto com ID ${produto.id}, slug: ${produto.slug}`);
        
        // Criar objeto com os campos a serem atualizados
        const updates = {
          gallery: produto.gallery === null ? [] : produto.gallery,
          seo_keywords: produto.seo_keywords === null ? [] : produto.seo_keywords
        };
        
        // Atualizar o produto no Supabase
        const { data: updateData, error: updateError } = await supabase
          .from('produtos')
          .update(updates)
          .eq('id', produto.id);
          
        if (updateError) {
          console.error(`Erro ao atualizar produto ${produto.id}:`, updateError);
          results.push({
            id: produto.id,
            slug: produto.slug,
            success: false,
            error: updateError.message
          });
        } else {
          console.log(`Produto ${produto.id} atualizado com sucesso`);
          results.push({
            id: produto.id,
            slug: produto.slug,
            success: true
          });
        }
      } else {
        console.log(`Produto ${produto.id} não precisa de atualização`);
        results.push({
          id: produto.id,
          slug: produto.slug,
          success: true,
          noUpdateNeeded: true
        });
      }
    }
    
    console.log(`Resultado final: ${results.filter(r => r.success && !r.noUpdateNeeded).length} produtos atualizados com sucesso`);
    
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
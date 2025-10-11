import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import logger from '@/utils/logger';

export async function GET(request: NextRequest) {
  // PROTEÇÃO: Bloquear em produção ou exigir autenticação
  if (process.env.NODE_ENV === 'production') {
    const authHeader = request.headers.get('authorization');
    const adminSecret = process.env.ADMIN_SECRET;
    
    if (!adminSecret || authHeader !== `Bearer ${adminSecret}`) {
      logger.warn('Tentativa de acesso não autorizado ao endpoint de manutenção');
      return NextResponse.json(
        { error: 'Não autorizado' },
        { status: 401 }
      );
    }
  }
  
  logger.info('Executando script para corrigir arrays nulos');
  
  try {
    // Buscar todos os produtos
    const { data, error } = await supabase
      .from('produtos')
      .select('*');
      
    if (error) {
      logger.error('Erro ao buscar produtos', error);
      return NextResponse.json({ 
        success: false, 
        error: error.message 
      }, { status: 500 });
    }
    
    logger.info(`Encontrados ${data?.length || 0} produtos`);
    
    // Array para armazenar resultados
    const results = [];
    
    // Processar cada produto
    for (const produto of data || []) {
      logger.debug(`Processando produto ${produto.id}`, produto.slug);
      
      // Verificar se algum campo de array é null
      if (produto.gallery === null || produto.seo_keywords === null) {
        logger.info(`Atualizando produto ${produto.id}`, produto.slug);
        
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
          logger.error(`Erro ao atualizar produto ${produto.id}`, updateError);
          results.push({
            id: produto.id,
            slug: produto.slug,
            success: false,
            error: updateError.message
          });
        } else {
          logger.success(`Produto ${produto.id} atualizado`);
          results.push({
            id: produto.id,
            slug: produto.slug,
            success: true
          });
        }
      } else {
        logger.debug(`Produto ${produto.id} já está correto`);
        results.push({
          id: produto.id,
          slug: produto.slug,
          success: true,
          noUpdateNeeded: true
        });
      }
    }
    
    const updatedCount = results.filter(r => r.success && !r.noUpdateNeeded).length;
    logger.success(`${updatedCount} produtos atualizados com sucesso`);
    
    return NextResponse.json({ 
      success: true, 
      results 
    });
    
  } catch (err) {
    logger.error('Erro ao executar script', err);
    return NextResponse.json({ 
      success: false, 
      error: err instanceof Error ? err.message : 'Erro desconhecido' 
    }, { status: 500 });
  }
}
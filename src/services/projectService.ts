import { supabase, Project, processProject } from '@/lib/supabase';

/**
 * Lista as tabelas disponíveis no Supabase (para diagnóstico)
 */
export async function listTables() {
  try {
    console.log('Tentando listar tabelas disponíveis...');
    
    // Esta consulta pode não funcionar com usuário anônimo
    const { data, error } = await supabase.rpc('get_tables');
    
    if (error) {
      console.error('Erro ao listar tabelas:', error);
      return;
    }
    
    console.log('Tabelas disponíveis:', data || []);
  } catch (err) {
    console.error('Erro ao listar tabelas:', err);
  }
}

/**
 * Busca todos os projetos do Supabase
 */
export async function getAllProjects(): Promise<Project[]> {
  console.log('Iniciando getAllProjects - URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      console.error('Erro ao buscar projetos:', error);
      return [];
    }

    console.log('Projetos encontrados:', data?.length || 0);
    
    // Processar os dados para garantir que os campos de array não sejam null
    const processedData = data?.map(processProject) || [];
    
    return processedData;
  } catch (err) {
    console.error('Exceção ao buscar projetos:', err);
    return [];
  }
}

/**
 * Busca projetos em destaque
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  console.log('Iniciando getFeaturedProjects');
  
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)
      .order('id', { ascending: false });

    if (error) {
      console.error('Erro ao buscar projetos em destaque:', error);
      return [];
    }

    console.log('Projetos em destaque encontrados:', data?.length || 0);
    
    // Processar os dados para garantir que os campos de array não sejam null
    const processedData = data?.map(processProject) || [];
    
    return processedData;
  } catch (err) {
    console.error('Exceção ao buscar projetos em destaque:', err);
    return [];
  }
}

/**
 * Busca um projeto específico pelo slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  console.log(`Buscando projeto com slug: ${slug}`);
  
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error(`Erro ao buscar projeto com slug ${slug}:`, error);
      return null;
    }

    console.log('Projeto encontrado:', data ? 'Sim' : 'Não');
    
    // Processar os dados para garantir que os campos de array não sejam null
    const processedData = data ? processProject(data) : null;
    
    return processedData;
  } catch (err) {
    console.error(`Exceção ao buscar projeto com slug ${slug}:`, err);
    return null;
  }
}

/**
 * Busca projetos relacionados (mesma categoria, excluindo o projeto atual)
 */
export async function getRelatedProjects(currentSlug: string, category: string, limit = 3): Promise<Project[]> {
  console.log(`Buscando projetos relacionados à categoria: ${category}, excluindo: ${currentSlug}`);
  
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('category', category)
      .neq('slug', currentSlug)
      .limit(limit);

    if (error) {
      console.error('Erro ao buscar projetos relacionados:', error);
      return [];
    }

    console.log('Projetos relacionados encontrados:', data?.length || 0);
    
    // Processar os dados para garantir que os campos de array não sejam null
    const processedData = data?.map(processProject) || [];
    
    return processedData;
  } catch (err) {
    console.error('Exceção ao buscar projetos relacionados:', err);
    return [];
  }
}

/**
 * Busca projetos aleatórios
 * @param limit Número de projetos a serem retornados
 */
export async function getRandomProjects(limit = 3): Promise<Project[]> {
  console.log(`Buscando ${limit} projetos aleatórios`);
  
  try {
    // Buscar todos os projetos
    const { data, error } = await supabase
      .from('projects')
      .select('*');

    if (error) {
      console.error('Erro ao buscar projetos aleatórios:', error);
      return [];
    }

    console.log('Total de projetos encontrados:', data?.length || 0);
    
    // Processar os dados para garantir que os campos de array não sejam null
    let processedData = data?.map(processProject) || [];
    
    // Embaralhar o array de projetos (algoritmo Fisher-Yates shuffle)
    for (let i = processedData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [processedData[i], processedData[j]] = [processedData[j], processedData[i]];
    }
    
    // Retornar apenas o número solicitado de projetos
    return processedData.slice(0, limit);
  } catch (err) {
    console.error('Exceção ao buscar projetos aleatórios:', err);
    return [];
  }
}

/**
 * Obtém projetos por categoria
 * @param category Categoria para filtrar
 * @returns Lista de projetos da categoria
 */
export async function getProjectsByCategory(category: string): Promise<Project[]> {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('category', category)
      .order('id', { ascending: false });

    if (error) {
      console.error(`Erro ao buscar projetos da categoria ${category}:`, error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error(`Erro ao buscar projetos da categoria ${category}:`, error);
    return [];
  }
}

/**
 * Obtém projetos por status
 * @param status Status para filtrar (disponível, vendido, em_desenvolvimento)
 * @param limit Limite de projetos a retornar
 * @returns Lista de projetos com o status especificado
 */
export async function getProjectsByStatus(status: string, limit?: number): Promise<Project[]> {
  try {
    let query = supabase
      .from('projects')
      .select('*')
      .eq('status', status)
      .order('id', { ascending: false });
    
    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error(`Erro ao buscar projetos com status ${status}:`, error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error(`Erro ao buscar projetos com status ${status}:`, error);
    return [];
  }
}

/**
 * Busca projetos por tags
 * @param tag Tag para buscar
 * @param limit Limite de projetos a retornar
 * @returns Lista de projetos que contêm a tag
 */
export async function getProjectsByTag(tag: string, limit?: number): Promise<Project[]> {
  try {
    let query = supabase
      .from('projects')
      .select('*')
      .contains('tags', [tag])
      .order('id', { ascending: false });
    
    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) {
      console.error(`Erro ao buscar projetos com a tag ${tag}:`, error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error(`Erro ao buscar projetos com a tag ${tag}:`, error);
    return [];
  }
} 
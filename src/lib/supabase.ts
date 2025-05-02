import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

console.log('Inicializando cliente Supabase:');
console.log('URL:', supabaseUrl ? 'Configurada' : 'Não configurada');
console.log('API Key:', supabaseKey ? 'Configurada' : 'Não configurada');

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Project = {
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
};

/**
 * Processa um projeto para garantir que campos de array não sejam null
 */
export function processProject(project: any): Project {
  if (!project) return project;

  // Verificar os valores antes do processamento
  console.log(`Processando projeto ${project.id} (${project.slug})`);
  console.log('challenges antes:', project.challenges);
  console.log('specifications antes:', project.specifications);
  console.log('gallery antes:', project.gallery);
  
  // Criar um novo objeto com arrays vazios em vez de null
  const processedProject = {
    ...project,
    challenges: project.challenges === null ? [] : (Array.isArray(project.challenges) ? project.challenges : []),
    specifications: project.specifications === null ? [] : (Array.isArray(project.specifications) ? project.specifications : []),
    gallery: project.gallery === null ? [] : (Array.isArray(project.gallery) ? project.gallery : [])
  };
  
  // Verificar os valores após o processamento
  console.log('challenges depois:', processedProject.challenges);
  console.log('specifications depois:', processedProject.specifications);
  console.log('gallery depois:', processedProject.gallery);
  
  return processedProject;
} 
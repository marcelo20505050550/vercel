"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getRandomProjects } from '@/services/projectService';
import { Project } from '@/lib/supabase';

// Componente de decoração dos cards
const CardDecorator = () => (
  <>
    <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-yellow-500"></span>
    <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-yellow-500"></span>
    <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-yellow-500"></span>
    <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-yellow-500"></span>
  </>
);

// Componente de padrão de pontos para os cards
const DotPattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 opacity-10 ${className}`}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="projects-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#projects-dots)" />
    </svg>
  </div>
);

// Card de projeto moderno
interface ModernProjectCardProps {
  project: Project;
  delay: number;
}

const ModernProjectCard = ({ project, delay }: ModernProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-yellow-200"
  >
    <CardDecorator />
    <DotPattern className="text-yellow-400" />
    
    {/* Gradiente de fundo sutil */}
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-yellow-100/30 pointer-events-none" />
    
    <div className="relative z-10">
      {/* Imagem do projeto */}
      <div className="relative h-56 overflow-hidden rounded-t-2xl bg-gray-100">
        {project.cover_image ? (
          <img 
            src={project.cover_image} 
            alt={project.title}
            className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
            <svg className="w-16 h-16 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        )}
        
        {/* Badge de status */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-400 text-white shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            Disponível
          </span>
        </div>
        
        {/* Categoria */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-yellow-700 backdrop-blur-sm">
            {project.category || 'Implementos Agrícolas'}
          </span>
        </div>
      </div>
      
      {/* Conteúdo do card */}
      <div className="p-6">
        {/* Título */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-700 transition-colors">
          {project.title}
        </h3>
        
        {/* Descrição */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Informações adicionais */}
        <div className="space-y-3 mb-6">
          {project.completion_date && (
            <div className="flex items-center text-sm">
              <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">
                Conclusão: {project.completion_date}
              </span>
            </div>
          )}
        </div>
        
        {/* Botões de ação */}
        <div className="flex gap-3">
          <Link
            href={`/projetos/${project.slug}`}
            className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
      
      {/* Efeito hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  </motion.div>
);

// Loading skeleton moderno
const ProjectSkeleton = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-yellow-200"
  >
    <div className="h-56 bg-gradient-to-br from-yellow-100 to-yellow-200 animate-pulse"></div>
    <div className="p-6 space-y-4">
      <div className="h-6 bg-yellow-200 rounded animate-pulse"></div>
      <div className="space-y-2">
        <div className="h-4 bg-yellow-100 rounded animate-pulse"></div>
        <div className="h-4 bg-yellow-100 rounded w-3/4 animate-pulse"></div>
      </div>
      <div className="h-10 bg-yellow-200 rounded animate-pulse"></div>
    </div>
  </motion.div>
);

// Seção CTA para projetos
const ProjectsCTA = ({ shouldShow = true }: { shouldShow?: boolean }) => {
  if (!shouldShow) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <Link 
        href="/projetos" 
        className="group inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
      >
        Ver Todos os Projetos
        <motion.svg 
          className="w-5 h-5 ml-3" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </motion.svg>
      </Link>
    </motion.div>
  );
};

export default function RandomProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const randomProjects = await getRandomProjects(3);
        setProjects(randomProjects);
      } catch (error) {
        console.error('Erro ao carregar projetos aleatórios:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            Nossos Projetos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Alguns de Nossos{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos realizados pela BV BoaVentura, demonstrando nossa capacidade técnica e compromisso com resultados de qualidade.
          </p>
        </motion.div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 3 }, (_, index) => (
              <ProjectSkeleton key={index} delay={index * 0.1} />
            ))
          ) : projects.length > 0 ? (
            // Projetos carregados
            projects.map((project, index) => (
              <ModernProjectCard
                key={project.id}
                project={project}
                delay={index * 0.2}
              />
            ))
          ) : (
            // Estado vazio
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Projetos em Breve</h3>
              <p className="text-gray-600">Em breve compartilharemos nossos projetos mais recentes.</p>
            </motion.div>
          )}
        </div>

        {/* CTA - só aparece se houver mais de 1 projeto */}
        <ProjectsCTA shouldShow={!loading && projects.length > 1} />
      </div>

      {/* Estilos para animação blob */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
} 
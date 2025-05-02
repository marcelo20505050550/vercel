"use client";

import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { getRandomProjects } from '@/services/projectService';
import { Project } from '@/lib/supabase';

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
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Alguns de nossos projetos</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-dark">
            Conheça alguns dos projetos realizados pela BV BoaVentura, demonstrando nossa capacidade técnica e compromisso com resultados de qualidade.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-dark">Nenhum projeto encontrado. Em breve compartilharemos nossos projetos mais recentes.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <a 
            href="/projetos" 
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-text font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Ver todos os projetos
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 
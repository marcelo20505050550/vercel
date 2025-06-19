"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/supabase';
import { motion } from 'framer-motion';

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 to-primary/70 py-20">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
              {project.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>
            
            <div className="w-24 h-1 bg-white/40 mb-6"></div>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {project.description}
            </p>
            
            {/* Adicionar preço e status */}
            {project.price && (
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {project.status && (
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'disponível' ? 'bg-green-500/20 text-green-100' : 
                    project.status === 'vendido' ? 'bg-red-500/20 text-red-100' : 
                    'bg-yellow-500/20 text-yellow-100'
                  }`}>
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      project.status === 'disponível' ? 'bg-green-400' : 
                      project.status === 'vendido' ? 'bg-red-400' : 
                      'bg-yellow-400'
                    }`}></span>
                    {project.status === 'disponível' ? 'Disponível' : 
                     project.status === 'vendido' ? 'Vendido' : 
                     'Em Desenvolvimento'}
                  </span>
                )}
                
                <div className="flex items-baseline gap-2">
                  {project.discount_price ? (
                    <>
                      <span className="text-white/60 text-lg line-through">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project.price)}
                      </span>
                      <span className="text-white font-bold text-2xl">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project.discount_price)}
                      </span>
                    </>
                  ) : (
                    <span className="text-white font-bold text-2xl">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project.price)}
                    </span>
                  )}
                </div>
              </div>
            )}
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href={`https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20projeto%20similar%20à%20${encodeURIComponent(project.title)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-all shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar Orçamento
              </Link>
              
              <a 
                href="#especificacoes" 
                className="inline-flex items-center px-6 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                Ver Detalhes
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image 
                src={project.cover_image || '/image/project-placeholder.png'} 
                alt={project.title} 
                width={800} 
                height={500} 
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
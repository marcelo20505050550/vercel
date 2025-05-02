import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import ProjectCard from '@/components/ui/ProjectCard';
import { getProjectBySlug, getRelatedProjects } from '@/services/projectService';

export const revalidate = 3600; // Revalidar a página a cada hora

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  
  // Buscar o projeto atual
  const project = await getProjectBySlug(slug);
  
  // Redirecionar para 404 se o projeto não existir
  if (!project) {
    notFound();
  }
  
  // Buscar projetos relacionados
  const relatedProjects = await getRelatedProjects(slug, project.category);

  // Função para renderizar listas como array
  const renderList = (items: string[]) => {
    if (!items || !Array.isArray(items) || items.length === 0) return null;
    
    return (
      <ul className="list-disc pl-6 text-gray-dark mb-6 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <span className="bg-white text-primary text-sm font-semibold py-1 px-3 rounded-full">{project.category}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mt-4 mb-6">
                {project.title}
              </h1>
              <div className="w-20 h-1 bg-white mb-6"></div>
              <p className="text-lg text-text-light">
                {project.description}
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src={project.cover_image || '/image/project-placeholder.png'} 
                  alt={project.title} 
                  width={600} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detalhes do Projeto */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-6">Sobre o Projeto</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              
              <div className="prose max-w-none">
                <p className="text-gray-dark mb-6">
                  {project.about}
                </p>

                {project.challenges && project.challenges.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold text-text mt-8 mb-4">Desafios do Projeto</h3>
                    {renderList(project.challenges)}
                  </>
                )}

                {project.solution && (
                  <>
                    <h3 className="text-xl font-bold text-text mt-8 mb-4">Nossa Solução</h3>
                    <p className="text-gray-dark mb-6">
                      {project.solution}
                    </p>
                  </>
                )}

                {project.specifications && project.specifications.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold text-text mt-8 mb-4">Especificações Técnicas</h3>
                    {renderList(project.specifications)}
                  </>
                )}
              </div>
            </div>
            
            <div>
              <div className="bg-gray-light rounded-xl p-8 sticky top-24">
                <h3 className="text-xl font-bold text-text mb-6">Informações do Projeto</h3>
                
                <div className="space-y-4 mb-8">
                  {project.completion_date && (
                    <div className="flex items-start">
                      <div className="text-primary mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text">Período de Execução</h4>
                        <p className="text-gray-dark">{project.completion_date}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.location && (
                    <div className="flex items-start">
                      <div className="text-primary mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text">Localização</h4>
                        <p className="text-gray-dark">{project.location}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.client_sector && (
                    <div className="flex items-start">
                      <div className="text-primary mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text">Setor do Cliente</h4>
                        <p className="text-gray-dark">{project.client_sector}</p>
                      </div>
                    </div>
                  )}
                  
                  {project.project_scope && (
                    <div className="flex items-start">
                      <div className="text-primary mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text">Escopo do Projeto</h4>
                        <p className="text-gray-dark">{project.project_scope}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <a 
                  href={`https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20projeto%20similar%20à%20${encodeURIComponent(project.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-primary hover:bg-primary-dark text-text font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
                >
                  Solicitar Projeto Similar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 bg-gray-light">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 text-center">Galeria do Projeto</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <Image 
                    src={image || '/image/project-placeholder.png'} 
                    alt={`${project.title} - Imagem ${index + 1}`} 
                    width={400} 
                    height={300} 
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Resultados */}
      {project.results && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 text-center">Resultados</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>
              
              <div className="bg-gray-light p-8 rounded-xl">
                <p className="text-gray-dark mb-0 text-lg">
                  {project.results}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projetos Relacionados */}
      {relatedProjects.length > 0 && (
        <section className={`py-16 ${project.results ? 'bg-gray-light' : 'bg-white'}`}>
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-text mb-6 text-center">Projetos Relacionados</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-10"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((related) => (
                <ProjectCard key={related.id} project={related} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/projetos" 
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-text font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Ver Todos os Projetos
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  );
} 
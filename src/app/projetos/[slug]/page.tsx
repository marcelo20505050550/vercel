import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import ProjectCard from '@/components/ui/ProjectCard';
import { getProjectBySlug, getRelatedProjects } from '@/services/projectService';
import { Metadata } from 'next';

export const revalidate = 3600; // Revalidar a página a cada hora

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Projeto não encontrado',
      description: 'O projeto solicitado não foi encontrado.'
    };
  }
  
  return {
    title: `${project.title} | BV Boaventura`,
    description: project.seo_description || project.short_description,
    keywords: project.seo_keywords?.join(', ') || project.tags?.join(', '),
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
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
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li 
            key={index}
            className="flex items-start"
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <MainLayout>
      {/* Hero Section */}
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
            <div className="lg:w-1/2">
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
            </div>
            
            <div className="lg:w-1/2">
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
            </div>
          </div>
        </div>
      </section>

      {/* Resto do conteúdo... */}
      {/* Detalhes do Projeto */}
      <section className="py-20 bg-white" id="especificacoes">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Sobre o Projeto</h2>
                <div className="w-20 h-1 bg-primary mb-8"></div>
                
                <div className="prose max-w-none text-lg text-gray-700 leading-relaxed mb-12">
                  <p>{project.about}</p>
                </div>
              </div>

              {/* Desafios */}
              {project.challenges && project.challenges.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                    </svg>
                    Desafios do Projeto
                  </h3>
                  {renderList(project.challenges)}
                </div>
              )}

              {/* Solução */}
              {project.solution && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    Nossa Solução
                  </h3>
                  <div className="text-lg text-gray-700 leading-relaxed">
                    <p>{project.solution}</p>
                  </div>
                </div>
              )}
              
              {/* Benefícios */}
              {project.benefits && project.benefits.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Benefícios
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.benefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className="flex items-start bg-gray-50 p-4 rounded-lg"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Especificações */}
              {project.specifications && project.specifications.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                    </svg>
                    Especificações Técnicas
                  </h3>
                  {renderList(project.specifications)}
                </div>
              )}

              {/* Detalhes Técnicos */}
              {project.technical_details && Object.keys(project.technical_details).length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    Detalhes Técnicos
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(project.technical_details).map(([key, value], index) => (
                        <div key={index} className="border-b border-gray-200 pb-3">
                          <h4 className="font-medium text-gray-500 text-sm mb-1">
                            {key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')}
                          </h4>
                          <p className="text-gray-800">{String(value)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Vídeo */}
              {project.video_url && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Vídeo de Demonstração
                  </h3>
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                    <iframe 
                      src={project.video_url.replace('watch?v=', 'embed/')} 
                      title="Vídeo de demonstração"
                      className="w-full h-full" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
            
            {/* Card lateral */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg sticky top-24">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações do Projeto</h3>
                
                <div className="space-y-6 mb-8">
                  {/* Informações do projeto */}
                  {/* ... */}
                </div>
                
                <Link 
                  href={`https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20projeto%20similar%20à%20${encodeURIComponent(project.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 text-center"
                >
                  Solicitar Projeto Similar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Relacionados */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Projetos Relacionados</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((related) => (
                <div key={related.id}>
                  <ProjectCard project={related} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-final" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-final)" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para Iniciar seu Projeto?</h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato conosco para discutir como podemos ajudar a transformar sua ideia em realidade.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contato" 
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-all shadow-lg"
              >
                Fale Conosco
              </Link>
              <Link 
                href="/servicos" 
                className="inline-flex items-center px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 
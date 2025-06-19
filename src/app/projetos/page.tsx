import MainLayout from '@/components/layout/MainLayout';
import ProjectCard from '@/components/ui/ProjectCard';
import CsvImportInfo from '@/components/ui/CsvImportInfo';
import PageHeader from '@/components/ui/PageHeader';
import { getAllProjects } from '@/services/projectService';
import { Project } from '@/lib/supabase';

export const revalidate = 10; // Revalidar a página a cada 10 segundos

export default async function ProjetosPage() {
  // Buscar todos os projetos com tratamento de erro
  let allProjects: Project[] = [];
  try {
    allProjects = await getAllProjects();
    console.log(`Carregados ${allProjects.length} projetos com sucesso`);
  } catch (error) {
    console.error('Erro ao carregar projetos:', error);
    // Continuar com array vazio em caso de erro
  }

  return (
    <MainLayout>
      {/* Todos os Projetos */}
      <section id="projetos" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text">Todos os Projetos</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          {allProjects && allProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {allProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-dark text-lg">Nenhum projeto encontrado.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-cta" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-cta)" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Vamos desenvolver seu projeto?</h2>
                <p className="text-gray-dark mb-0">
                  Entre em contato conosco para discutir suas necessidades e descobrir como podemos ajudar a transformar sua ideia em realidade.
                </p>
              </div>
              <div className="md:w-1/3 text-center md:text-right">
                <a 
                  href="https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20projeto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-text font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Componente de informação sobre importação CSV */}
      <CsvImportInfo />
    </MainLayout>
  );
} 
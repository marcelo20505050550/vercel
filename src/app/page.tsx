import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import ServicesSection from '@/components/ui/ServicesSection';
import RotatingBanner from '@/components/ui/RotatingBanner';
import RandomProjects from '@/components/ui/RandomProjects';
import { bannerData } from '@/data/bannerData';

export default function Home() {
  return (
    <MainLayout>
      {/* Banner Rotativo */}
      <section className="relative overflow-hidden">
        <RotatingBanner banners={bannerData} />
      </section>

      {/* Projetos Aleatórios */}
      <RandomProjects />

      {/* Sobre Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a BV BoaVentura</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-dark">
              Conheça nossa história, missão e os valores que guiam nossas operações.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="/sobre/faxada.png" 
                alt="Nossa Empresa" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-text">Nossa História</h3>
              <p className="mb-4 text-gray-dark">
                A BV BoaVentura foi fundada com o objetivo de oferecer serviços de alta qualidade no setor industrial, 
                especializando-se em caldeiraria e soluções metálicas para diversas indústrias.
              </p>
              <p className="mb-6 text-gray-dark">
                A meta da BV BoaVentura é ser referência não apenas em produtos, mas em atitude, ética e impacto positivo. Aqui, cada projeto é um passo para o futuro – tanto da indústria quanto de quem caminha ao nosso lado.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-text">Nossos Valores</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-dark">Qualidade e excelência em todos os projetos</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-dark">Segurança como prioridade em todas as operações</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-dark">Comprometimento com prazos e resultados</span>
                </li>
              </ul>
              
              <Link href="/sobre" className="btn-primary">
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <ServicesSection />

      {/* Orçamento CTA Section */}
      <section id="orcamento" className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Solicite um Orçamento Sem Compromisso!</h2>
                <p className="text-gray-dark mb-6">
                  Precisa de um serviço de caldeiraria de qualidade? Entre em contato conosco hoje mesmo e receba um orçamento personalizado para o seu projeto.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text">Atendimento Personalizado</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text">Preços Competitivos</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text">Resposta Rápida</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text">Qualidade Garantida</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-primary rounded-lg p-6 text-center">
                  <h3 className="text-2xl font-bold text-text mb-4">Horário de Atendimento</h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-text-light">
                      <span className="font-semibold">Segunda a Sexta:</span> 8h às 18h
                    </p>
                    <p className="text-text-light">
                      <span className="font-semibold">Sábado:</span> 8h às 12h
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-text text-white px-6 py-3 rounded-md font-semibold transition-all hover:bg-opacity-90 w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    WhatsApp Direto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 
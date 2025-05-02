import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import RotatingBanner from '@/components/ui/RotatingBanner';
import { servicosBanners } from '@/data/bannerData';

// Dados específicos para a página Serviços

export default function ServicosPage() {
  return (
    <MainLayout>
      {/* Banner Rotativo */}
      <section className="relative overflow-hidden">
        <RotatingBanner banners={servicosBanners} />
      </section>

      {/* Caldeiraria Industrial */}
      <section id="caldeiraria" className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-primary py-1 px-3 rounded-full text-sm font-medium text-text mb-4">
                Nosso Destaque
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Caldeiraria Leve</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-gray-dark mb-6">
              Na BV BoaVentura, somos especialistas em caldeiraria leve, com soluções sob medida para estruturas e equipamentos metálicos de menor porte, mas com alta exigência de precisão, qualidade e acabamento. Cada projeto é executado com rigor técnico e foco em segurança, eficiência e durabilidade.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-text mb-2">Estruturas Metálicas Customizadas</h3>
                  <p className="text-gray-dark">
                    Projetamos e fabricamos estruturas metálicas sob medida para atender às necessidades específicas 
                    do seu negócio, garantindo durabilidade e segurança.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-text mb-2">Tanques e Reservatórios</h3>
                  <p className="text-gray-dark">
                    Desenvolvemos tanques e reservatórios de diversos tamanhos e capacidades, seguindo normas técnicas 
                    e garantindo estanqueidade e resistência.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-text mb-2">Suportes e Instalações Industriais</h3>
                  <p className="text-gray-dark">
                    Fabricamos suportes, plataformas e instalações industriais completas, otimizando processos 
                    e garantindo segurança operacional.
                  </p>
                </div>
              </div>
              
              <a href="https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20caldeiraria%20industrial" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-text font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Solicitar Orçamento
              </a>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/servicos/caldeiraria.png" 
                  alt="Caldeiraria Industrial" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg shadow-lg hidden md:flex items-center justify-center">
                <span className="text-text font-bold text-3xl">01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementos Agrícolas */}
      <section id="implementos" className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/servicos/implementos_agricolas.png" 
                  alt="Implementos Agrícolas" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg shadow-lg hidden md:flex items-center justify-center">
                <span className="text-text font-bold text-3xl">02</span>
              </div>
            </div>
            <div>
              <div className="inline-block bg-primary py-1 px-3 rounded-full text-sm font-medium text-text mb-4">
                Máxima Eficiência
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Implementos Agrícolas</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-gray-dark mb-6">
                Nossa linha de implementos agrícolas é desenvolvida para proporcionar maior produtividade e 
                eficiência nas operações do campo. Trabalhamos com materiais de alta qualidade e processos que 
                garantem robustez e longa vida útil aos equipamentos.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-gray-light p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-text mb-2">Fabricação Personalizada</h3>
                  <p className="text-gray-dark">
                    Produzimos implementos agrícolas customizados, projetados especificamente para as necessidades 
                    da sua propriedade e tipo de cultivo.
                  </p>
                </div>
                
                <div className="bg-gray-light p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-text mb-2">Manutenção e Reforma</h3>
                  <p className="text-gray-dark">
                    Realizamos serviços de manutenção preventiva e corretiva, além de reformas completas em 
                    implementos agrícolas de diversas marcas e modelos.
                  </p>
                </div>
                
                <div className="bg-gray-light p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-text mb-2">Adaptações e Melhorias</h3>
                  <p className="text-gray-dark">
                    Desenvolvemos adaptações e melhorias em equipamentos existentes para aumentar sua 
                    eficiência, durabilidade e produtividade no campo.
                  </p>
                </div>
              </div>
              
              <a href="https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20implementos%20agrícolas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-text font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Máquinas Especiais */}
      <section id="maquinas" className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-primary py-1 px-3 rounded-full text-sm font-medium text-text mb-4">
                Soluções Exclusivas
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Máquinas Especiais</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-gray-dark mb-6">
                Desenvolvemos máquinas especiais sob medida para processos industriais específicos, 
                criando soluções exclusivas que otimizam a produção, aumentam a eficiência e resolvem 
                desafios complexos da sua operação.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-text mb-2">Projetos Exclusivos</h3>
                  <p className="text-gray-dark">
                    Desenvolvemos máquinas customizadas para solucionar problemas específicos de produção 
                    e otimizar processos operacionais.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-text mb-2">Automação Industrial</h3>
                  <p className="text-gray-dark">
                    Criamos soluções de automação que aumentam a produtividade, reduzem custos e 
                    proporcionam maior precisão nos processos industriais.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-text mb-2">Modernização de Equipamentos</h3>
                  <p className="text-gray-dark">
                    Modernizamos e adaptamos máquinas existentes com novas tecnologias e funcionalidades,
                    estendendo sua vida útil e melhorando seu desempenho.
                  </p>
                </div>
              </div>
              
              <a href="https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20máquinas%20especiais" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-text font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Solicitar Orçamento
              </a>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/servicos/maquina_especiais.png" 
                  alt="Máquinas Especiais" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg shadow-lg hidden md:flex items-center justify-center">
                <span className="text-text font-bold text-3xl">03</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Vamos Desenvolver seu Projeto?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-text-light">
              Entre em contato com a BV BoaVentura e descubra como podemos ajudar sua empresa com nossas soluções em caldeiraria e serviços industriais.
            </p>
            <a 
              href="https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-text text-white font-bold py-3 px-8 rounded-md transition-all duration-300 hover:bg-text/90 inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 
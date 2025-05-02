import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import RotatingBanner from '@/components/ui/RotatingBanner';
import { sobreBanners } from '@/data/bannerData';

export default function SobrePage() {
  return (
    <MainLayout>
      {/* Banner Rotativo */}
      <section className="relative overflow-hidden">
        <RotatingBanner banners={sobreBanners} />
      </section>

      {/* Nossa História */}
      <section id="nossa-historia" className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/sobre/01.png" 
                  alt="Nossa História" 
                  width={600} 
                  height={400} 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg shadow-lg hidden md:flex items-center justify-center">
                <span className="text-text font-bold text-2xl">2025</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">Nossa História</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-gray-dark mb-6">
                A BV BoaVentura – Implementos Agrícolas, Caldeiraria e Máquinas Especiais é uma empresa recém-construída, mas concebida com uma visão sólida e transformadora: ser muito mais do que uma fornecedora de soluções industriais. Nascemos com o propósito de unir técnica, propósito e pessoas, construindo não apenas máquinas, mas também caminhos de conhecimento e crescimento para quem acredita no poder da prática.
              </p>
              <p className="text-gray-dark mb-6">
                Nossa atuação é voltada para a fabricação de implementos agrícolas personalizados, projetos em caldeiraria sob medida e máquinas especiais adaptadas à necessidade do cliente, com foco inegociável em qualidade, funcionalidade e durabilidade. Entendemos que cada equipamento produzido deve ser uma extensão da força de trabalho do campo e da indústria, e por isso, cada projeto é tratado com atenção ao detalhe, engenharia de valor e compromisso com o resultado.
              </p>
              <p className="text-gray-dark mb-6">
                Mas a BV BoaVentura não nasceu apenas para empreender. Ela nasceu para ensinar, inspirar e transformar realidades através da prática, do conhecimento e do exemplo. Acreditamos profundamente que a evolução do nosso setor está diretamente ligada à formação de pessoas: por isso, queremos compartilhar experiências de chão de fábrica, conteúdos técnicos aplicáveis e uma vivência real da rotina industrial, valorizando o saber fazer como motor de desenvolvimento.
              </p>
              <p className="text-gray-dark mb-6">
                Mais do que produtos, entregamos postura, responsabilidade e ética. Queremos ser uma empresa que representa transformação, que contribui com o crescimento de quem está começando, que forma profissionais preparados para o futuro e que inspira outras empresas a fazerem o mesmo. Acreditamos na força da colaboração e do impacto coletivo. Cada implemento, estrutura ou equipamento que sai da nossa linha de produção leva junto o compromisso de gerar valor e abrir oportunidades.
              </p>
              <p className="text-gray-dark">
                A meta da BV BoaVentura é ser referência em produto e propósito. Uma marca que as pessoas reconhecem não só pelo que entrega, mas pelo que representa. Porque para nós, cada solda, cada parafuso e cada projeto entregue é um passo em direção a um futuro mais técnico, mais justo e mais humano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section id="missao-visao-valores" className="py-20 bg-gray-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Missão, Visão e Valores</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-dark">
              Pilares que orientam nossas ações e definem quem somos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white rounded-lg p-8 shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text">Missão</h3>
              <p className="text-gray-dark">
                Fornecer soluções em caldeiraria e estruturas metálicas com alta qualidade, 
                eficiência e precisão, contribuindo para o sucesso de nossos clientes e o 
                desenvolvimento do setor industrial.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white rounded-lg p-8 shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text">Visão</h3>
              <p className="text-gray-dark">
                Ser reconhecida como empresa referência em caldeiraria industrial, 
                destacando-se pela excelência técnica, inovação constante e 
                soluções que transformam positivamente os processos dos nossos clientes.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-lg p-8 shadow-lg transform transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text">Valores</h3>
              <ul className="space-y-2 text-gray-dark">
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Qualidade e excelência em todos os projetos</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Comprometimento com prazos e resultados</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Segurança como prioridade em todas as operações</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Ética e transparência nos negócios</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Inovação e melhoria contínua</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section id="nossa-equipe" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-dark">
              Profissionais dedicados que fazem a diferença em cada projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Membro 1 (pode ser substituído por imagens reais do time) */}
            <div className="bg-gray-light rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="/image/otavio_boaventura.png" 
                  alt="Otávio Boaventura" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-text">Otávio Boaventura</h3>
                <p className="text-primary font-medium mb-3">Gerente</p>
                <p className="text-gray-dark">
                  breve ...
                </p>
              </div>
            </div>

            {/* Membro 2 */}
            <div className="bg-gray-light rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img 
                  src="/image/jose_boaventura.png" 
                  alt="Jose Boaventura" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-text">Jose Boaventura</h3>
                <p className="text-primary font-medium mb-3">Proprietário</p>
                <p className="text-gray-dark">
                  Breve.
                </p>
              </div>
            </div>

            {/* Membro 3 */}
            <div className="bg-gray-light rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
              <img 
                  src="/image/marcelo_silveira_colmanetti.jpg" 
                  alt="Otávio Boaventumarcelo_silveira_colmanetti" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-text">Marcelo Silveira Colmanetti</h3>
                <p className="text-primary font-medium mb-3">Gerente</p>
                <p className="text-gray-dark">
                  breve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gray-light rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Vamos trabalhar juntos?</h2>
                <p className="text-gray-dark mb-0">
                  Entre em contato conosco hoje mesmo para discutir seu projeto e descobrir como podemos ajudar.
                </p>
              </div>
              <div className="md:w-1/3">
                <a 
                  href="https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-text font-bold py-3 px-8 rounded-lg transition-colors duration-300 w-full justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Entre em Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 
"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function SobrePageContent() {
  return (
    <>
      {/* Título Centralizado */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">Nossa História</h1>
          </div>
        </div>
      </section>

      {/* Nossa História - Redesenhada */}
      <section id="nossa-historia" className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="/image/1_Solucoes-Inteligentes-para-o-Agro-e-Industria.png" 
                  alt="BV BoaVentura História" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg -m-4 z-0"></div>
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text">
                
              </h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <div className="space-y-4 text-gray-dark">
                <p>
                  A BV BoaVentura – Implementos Agrícolas, Caldeiraria e Máquinas Especiais é uma empresa recém-construída, mas concebida com uma visão sólida e transformadora: ser muito mais do que uma fornecedora de soluções industriais. Nascemos com o propósito de unir técnica, propósito e pessoas, construindo não apenas máquinas, mas também caminhos de conhecimento e crescimento para quem acredita no poder da prática.
                </p>
                <p>
                  Nossa atuação é voltada para a fabricação de implementos agrícolas personalizados, projetos em caldeiraria sob medida e máquinas especiais adaptadas à necessidade do cliente, com foco inegociável em qualidade, funcionalidade e durabilidade. Entendemos que cada equipamento produzido deve ser uma extensão da força de trabalho do campo e da indústria, e por isso, cada projeto é tratado com atenção ao detalhe, engenharia de valor e compromisso com o resultado.
                </p>
                <p>
                  Mas a BV BoaVentura não nasceu apenas para empreender. Ela nasceu para ensinar, inspirar e transformar realidades através da prática, do conhecimento e do exemplo. Acreditamos profundamente que a evolução do nosso setor está diretamente ligada à formação de pessoas: por isso, queremos compartilhar experiências de chão de fábrica, conteúdos técnicos aplicáveis e uma vivência real da rotina industrial, valorizando o saber fazer como motor de desenvolvimento.
                </p>
                <p>
                  Mais do que produtos, entregamos postura, responsabilidade e ética. Queremos ser uma empresa que representa transformação, que contribui com o crescimento de quem está começando, que forma profissionais preparados para o futuro e que inspira outras empresas a fazerem o mesmo. Acreditamos na força da colaboração e do impacto coletivo. Cada implemento, estrutura ou equipamento que sai da nossa linha de produção leva junto o compromisso de gerar valor e abrir oportunidades.
                </p>
                <p>
                  A meta da BV BoaVentura é ser referência em produto e propósito. Uma marca que as pessoas reconhecem não só pelo que entrega, mas pelo que representa. Porque para nós, cada solda, cada parafuso e cada projeto entregue é um passo em direção a um futuro mais técnico, mais justo e mais humano.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section id="missao-visao-valores" className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Nossos Princípios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Missão, Visão e Valores</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-dark">
              Pilares que orientam nossas ações e definem quem somos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary transform hover:-translate-y-2 duration-300">
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
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary transform hover:-translate-y-2 duration-300">
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
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary transform hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text">Valores</h3>
              <ul className="space-y-2 text-gray-dark">
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Qualidade e excelência em todos os projetos</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Comprometimento com prazos e resultados</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Segurança como prioridade em todas as operações</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>Ética e transparência nos negócios</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* CTA Final */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-10 text-white text-center relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Trabalhar Juntos</h2>
              <p className="text-white/90 text-lg mb-8">
                Estamos prontos para transformar suas ideias em soluções de alta qualidade. Entre em contato e descubra como podemos ajudar seu negócio a crescer.
              </p>
              <Link href="/contato" className="inline-flex items-center px-8 py-4 bg-white text-primary hover:bg-white/90 font-medium rounded-lg transition-colors text-lg">
                Fale Conosco
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 
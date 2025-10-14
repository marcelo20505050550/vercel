"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wrench,
  Cog,
  Settings,
  CheckCircle2,
  ArrowRight,
  Phone,
  Hammer,
  Disc3,
  CircleDot,
  Play,
  X
} from "lucide-react";

// Configuração estática de mídias por serviço
const MEDIA_CONFIG: Record<string, { type: 'image' | 'video'; src: string }[]> = {
  caldeiraria: [
    
  ],
  maquinas: [
    
  ],
  ferramentaria: [
    
  ],
  'pecas-reposicao': [
    
  ],
  rebarbacao: [
    
  ],
  cilindros: [
    
  ]
};

// Componente de Galeria de Mídia
interface MediaGalleryProps {
  serviceId: string;
}

const MediaGallery = ({ serviceId }: MediaGalleryProps) => {
  const [media, setMedia] = useState<{ type: 'image' | 'video'; src: string }[]>([]);
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video'; src: string } | null>(null);

  useEffect(() => {
    // Carregar mídia da configuração estática
    const serviceMedia = MEDIA_CONFIG[serviceId] || [];
    setMedia(serviceMedia);
  }, [serviceId]);

  if (media.length === 0) {
    return null; // Não renderiza nada se não houver mídia
  }

  return (
    <>
      <div className="w-full">
        <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">Trabalhos</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {media.map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full h-48 rounded-lg overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={`Galeria ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              ) : (
                <div className="relative w-full h-full bg-slate-900">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de visualização */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
            onClick={() => setSelectedMedia(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'image' ? (
              <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
                <Image
                  src={selectedMedia.src}
                  alt="Visualização"
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full max-h-[80vh] rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default function ServicesPageContent() {
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  // Dados dos serviços
  const services = [
    {
      id: "caldeiraria",
      icon: <Wrench className="h-8 w-8" />,
      title: "Caldeiraria",
      description: "Soluções sob medida para estruturas e equipamentos metálicos de menor porte, com alta exigência de precisão, qualidade e acabamento.",
      color: "from-yellow-400 to-yellow-600",
      type: "service",
      features: [
        "Estruturas Metálicas Customizadas",
        "Tanques e Reservatórios",
        "Suportes e Instalações Industriais",
        "Manutenção Preventiva"
      ]
    },
    {
      id: "maquinas",
      icon: <Cog className="h-8 w-8" />,
      title: "Máquinas Especiais",
      description: "Desenvolvemos máquinas especiais sob medida para processos industriais específicos, criando soluções exclusivas.",
      color: "from-yellow-200 to-yellow-400",
      type: "service",
      features: [
        "Produtos Exclusivos",
        "Automação Industrial",
        "Modernização de Equipamentos",
        "Soluções Customizadas"
      ]
    },
    {
      id: "ferramentaria",
      icon: <Hammer className="h-8 w-8" />,
      title: "Ferramentaria",
      description: "Fabricação de ferramentas especializadas, moldes e dispositivos de precisão para otimizar processos produtivos e garantir qualidade superior nos resultados.",
      color: "from-yellow-600 to-yellow-800",
      type: "service",
      features: [
        "Ferramentas de Corte e Conformação",
        "Moldes e Matrizes de Precisão",
        "Dispositivos e Gabaritos",
        "Manutenção de Ferramental"
      ]
    },
    {
      id: "rebarbacao",
      icon: <Disc3 className="h-8 w-8" />,
      title: "Rebarbação",
      description: "Serviços especializados de acabamento e desbaste para remoção de rebarbas, garantindo superfícies lisas e acabamento profissional em peças metálicas.",
      color: "from-yellow-100 to-yellow-300",
      type: "service",
      features: [
        "Desbaste de Soldas e Rebarbas",
        "Acabamento de Superfícies Metálicas",
        "Polimento e Alisamento",
        "Preparação para Pintura"
      ]
    },
    {
      id: "pecas-reposicao",
      icon: <Settings className="h-8 w-8" />,
      title: "Peças de Reposição",
      description: "Componentes sob medida para manutenção e reposição de máquinas, garantindo desempenho contínuo, durabilidade e compatibilidade com seu equipamento.",
      color: "from-yellow-500 to-yellow-700",
      type: "product",
      features: [
        "Componentes de Caldeiraria e Estruturas",
        "Conjuntos Mecânicos e Hidráulicos",
        "Peças Customizadas",
        "Personalização sob Demanda"
      ]
    },
    {
      id: "cilindros",
      icon: <CircleDot className="h-8 w-8" />,
      title: "Cilindros",
      description: "Fabricação e manutenção de cilindros hidráulicos e pneumáticos sob medida, oferecendo soluções robustas para sistemas de automação industrial.",
      color: "from-yellow-700 to-yellow-900",
      type: "product",
      features: [
        "Cilindros Hidráulicos Customizados",
        "Cilindros Pneumáticos Especiais",
        "Manutenção e Recondicionamento",
        "Sistemas de Vedação Avançados"
      ]
    }
  ];

  // Etapas do processo
  const processSteps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Entendemos suas necessidades específicas e objetivos do projeto."
    },
    {
      number: "02",
      title: "Projeto Técnico",
      description: "Desenvolvemos projetos técnicos detalhados com especificações precisas."
    },
    {
      number: "03",
      title: "Fabricação",
      description: "Utilizamos tecnologia avançada e materiais de qualidade na produção."
    },
    {
      number: "04",
      title: "Entrega e Instalação",
      description: "Garantimos entrega no prazo e instalação profissional."
    }
  ];

  return (
    <>
      {/* Serviços Section - Redesenhada */}
      <section id="servicos" ref={servicesRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <React.Fragment key={service.id}>
              <motion.div
                id={service.id}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index !== 0 ? 'mt-32' : 'mt-0'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
              >
              <div className={`lg:w-1/2 order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="flex justify-center mb-8">
                  <div className={`inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r ${service.color} text-slate-900 text-xl md:text-2xl font-bold shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
                    {React.cloneElement(service.icon, { className: "h-10 w-10" })}
                    <span className="ml-4">{service.type === 'product' ? 'Produto' : 'Serviço Especializado'}</span>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 text-center">{service.title}</h2>

                <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6 mx-auto"></div>

                <p className="text-lg text-slate-700 mb-8 text-center">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start bg-slate-50 p-4 rounded-lg"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className={`p-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}>
                        <CheckCircle2 className="h-5 w-5 text-slate-900" />
                      </div>
                      <div>
                        <span className="font-medium text-slate-900">{feature}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8"
                >
                  <a
                    href={`https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r ${service.color} text-slate-900 font-bold hover:shadow-xl transition-all duration-300`}
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </motion.div>
              </div>

              <div className={`lg:w-1/2 order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center bg-gradient-to-r ${service.color}`}>
                    <div className="text-slate-900 text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                        {React.cloneElement(service.icon, { className: "h-12 w-12" })}
                      </div>
                      <h3 className="text-3xl font-bold mb-4 text-slate-900">{service.title}</h3>
                      <div className="w-16 h-1 bg-slate-800 mx-auto mb-4"></div>
                      <p className="text-slate-800 max-w-sm mx-auto">
                        Soluções de alta qualidade para atender às necessidades específicas do seu negócio
                      </p>
                    </div>
                  </div>

                  {/* Elemento decorativo */}
                  <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-left-6' : '-right-6'} w-24 h-24 rounded-2xl bg-white flex items-center justify-center text-slate-800 font-bold text-2xl shadow-lg`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </div>

                  {/* Padrão decorativo */}
                  <div className={`absolute -z-10 ${index % 2 === 0 ? '-right-10 top-10' : '-left-10 top-10'} w-32 h-32 rounded-full bg-white opacity-10`}></div>
                </motion.div>
              </div>
              </motion.div>

              {/* Galeria de Mídia - Centralizada após cada serviço */}
              <div className="flex justify-center mt-12">
                <div className="w-full max-w-5xl px-4">
                  <MediaGallery serviceId={service.id} />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Processo Section - Redesenhada */}
      <section ref={processRef} className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-slate-800 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Settings className="h-4 w-4 mr-2" />
              Metodologia de Trabalho
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Nosso Processo de Trabalho
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 mx-auto mb-6"></div>

            <p className="text-lg text-slate-700">
              Trabalhamos com metodologia própria que garante eficiência, qualidade e transparência
              em todas as etapas do projeto.
            </p>
          </motion.div>

          <div className="relative">
            {/* Linha conectora */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-200 to-yellow-400 hidden md:block"></div>

            <div className="space-y-16 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Card - Lado Esquerdo para itens pares (01, 03) */}
                  {index % 2 === 0 && (
                    <motion.div
                      className="md:w-1/2 flex md:justify-end"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 max-w-md md:text-right">
                        <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                        <p className="text-slate-700">{step.description}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Espaço vazio - Lado Esquerdo para itens ímpares (02, 04) */}
                  {index % 2 !== 0 && <div className="md:w-1/2 hidden md:block"></div>}

                  {/* Círculo Central */}
                  <div className="flex items-center justify-center shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-slate-800 flex items-center justify-center font-bold text-xl z-10 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Espaço vazio - Lado Direito para itens pares (01, 03) */}
                  {index % 2 === 0 && <div className="md:w-1/2 hidden md:block"></div>}

                  {/* Card - Lado Direito para itens ímpares (02, 04) */}
                  {index % 2 !== 0 && (
                    <motion.div
                      className="md:w-1/2 flex md:justify-start"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 max-w-md md:text-left">
                        <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                        <p className="text-slate-700">{step.description}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Elementos decorativos */}
            <motion.div
              className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-yellow-300/20 hidden md:block"
              animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <motion.div
              className="absolute bottom-1/4 left-10 w-24 h-24 rounded-full bg-yellow-400/15 hidden md:block"
              animate={{ y: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Nova seção de contato */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="p-8 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-2xl shadow-lg text-slate-900 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">Precisa de mais informações?</h3>
              <div className="w-20 h-1 bg-slate-900/50 mx-auto mb-6"></div>
              <p className="text-slate-900/80 max-w-xl mx-auto mb-8 text-lg">
                Nossa equipe está pronta para atender suas necessidades e responder a todas as suas dúvidas sobre nossos serviços especializados.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-yellow-600 font-bold rounded-lg hover:bg-yellow-50 transition-colors duration-300"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Fale Conosco pelo WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 
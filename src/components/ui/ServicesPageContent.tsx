"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  Quote,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Configuração estática de mídias por serviço
const MEDIA_CONFIG: Record<string, { type: 'image' | 'video'; src: string }[]> = {
  caldeiraria: [
    { type: 'video', src: '/servicos/caldeiraria/plataforma_eder-01.mp4' },
  ],
  maquinas: [
     { type: 'video', src: '/servicos/maquinas/desbobinador-torno.mp4' },
  ],
  ferramentaria: [
    { type: 'video', src: '/servicos/ferramentaria/01.mp4' },
    { type: 'video', src: '/servicos/ferramentaria/02.mp4' },
  ],
  'pecas-reposicao': [

  ],
  rebarbacao: [
    { type: 'image', src: '/servicos/rebarba/rebarbacao-1.jpeg' },
    { type: 'image', src: '/servicos/rebarba/1.png' },
    { type: 'image', src: '/servicos/rebarba/2.png' },
    { type: 'image', src: '/servicos/rebarba/3.png' },
    { type: 'image', src: '/servicos/rebarba/4.png' },
    { type: 'image', src: '/servicos/rebarba/5.png' },
    { type: 'image', src: '/servicos/rebarba/6.png' },
    { type: 'image', src: '/servicos/rebarba/7.png' },
    { type: 'video', src: '/servicos/rebarba/rebarbacao-2.mp4' },
    { type: 'video', src: '/servicos/rebarba/8.mp4' },
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
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    // Carregar mídia da configuração estática
    const serviceMedia = MEDIA_CONFIG[serviceId] || [];
    setMedia(serviceMedia);
  }, [serviceId]);

  // Função para navegar para a próxima mídia
  const handleNext = useCallback(() => {
    const nextIndex = (selectedIndex + 1) % media.length;
    setSelectedIndex(nextIndex);
    setSelectedMedia(media[nextIndex]);
  }, [selectedIndex, media]);

  // Função para navegar para a mídia anterior
  const handlePrev = useCallback(() => {
    const prevIndex = selectedIndex === 0 ? media.length - 1 : selectedIndex - 1;
    setSelectedIndex(prevIndex);
    setSelectedMedia(media[prevIndex]);
  }, [selectedIndex, media]);

  // Suporte para navegação por teclado
  useEffect(() => {
    if (!selectedMedia) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        setSelectedMedia(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia, handleNext, handlePrev]);

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
              onClick={() => {
                setSelectedIndex(index);
                setSelectedMedia(item);
              }}
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
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors z-10"
            onClick={() => setSelectedMedia(null)}
          >
            <X className="h-8 w-8" />
          </button>

          {/* Botões de navegação - apenas se houver mais de uma mídia */}
          {media.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white group z-10"
                aria-label="Mídia anterior"
              >
                <ChevronLeft className="h-8 w-8 group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white group z-10"
                aria-label="Próxima mídia"
              >
                <ChevronRight className="h-8 w-8 group-hover:scale-110 transition-transform" />
              </button>

              {/* Contador de mídia */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium z-10">
                {selectedIndex + 1} / {media.length}
              </div>
            </>
          )}

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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonialDirection, setTestimonialDirection] = useState(0);

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

  // Depoimentos
  const testimonials = [
    {
      name: "Aline Aparecida da Costa de Oliveira",
      role: "Líder de Pintura",
      company: "Yamaguchi",
      testimonial: "A entrega da Bv Boaventura foi de qualidade e com compromisso com o prazo",
      initial: "A"
    },
    {
      name: "Gualberto Rodrigues da Silva",
      role: "Chefe de Produção",
      company: "Yamaguchi",
      testimonial: "A Bv Boaventura, sempre atendeu as expectativas com os trabalhos. Muito bom a parceria",
      initial: "G"
    }
  ];

  const handleNextTestimonial = () => {
    setTestimonialDirection(1);
    setCurrentTestimonial((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevTestimonial = () => {
    setTestimonialDirection(-1);
    setCurrentTestimonial((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleTestimonialDotClick = (index: number) => {
    setTestimonialDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  // Auto-play do carrossel de depoimentos
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialDirection(1);
      setCurrentTestimonial((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [currentTestimonial, testimonials.length]);

  const testimonialSlideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

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

      {/* Seção de Depoimentos */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 to-white">
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
              <Quote className="h-4 w-4 mr-2" />
              Depoimentos de Clientes
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              O que nossos clientes dizem
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 mx-auto mb-6"></div>

            <p className="text-lg text-slate-700">
              Confira os depoimentos de quem confia no nosso trabalho
            </p>
          </motion.div>

          {/* Carrossel de Depoimentos */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden pt-8">
              <AnimatePresence initial={false} custom={testimonialDirection} mode="wait">
                <motion.div
                  key={currentTestimonial}
                  custom={testimonialDirection}
                  variants={testimonialSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100 relative"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 flex items-center justify-center shadow-lg">
                    <Quote className="h-8 w-8 text-slate-800" />
                  </div>
                  
                  <div className="mt-8 mb-8">
                    <p className="text-slate-700 text-xl md:text-2xl italic leading-relaxed text-center">
                      "{testimonials[currentTestimonial].testimonial}"
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 flex items-center justify-center text-slate-800 font-bold text-2xl mb-4">
                        {testimonials[currentTestimonial].initial}
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-slate-900 text-xl mb-1">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-slate-600 text-sm mb-1">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <p className="text-yellow-600 font-semibold">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Botões de navegação */}
            <button
              onClick={handlePrevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-800 hover:bg-yellow-400 hover:text-white group z-20"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={handleNextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-800 hover:bg-yellow-400 hover:text-white group z-20"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Indicadores de pontos */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleTestimonialDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-yellow-500 w-8"
                      : "bg-slate-300 hover:bg-yellow-300"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
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
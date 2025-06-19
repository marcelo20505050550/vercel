"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  Wrench, 
  Tractor, 
  Cog, 
  Settings, 
  CheckCircle2, 
  ArrowRight, 
  Phone
} from "lucide-react";

export default function ServicesPageContent() {
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  // Dados dos serviços
  const services = [
    {
      id: "caldeiraria",
      icon: <Wrench className="h-8 w-8" />,
      title: "Caldeiraria Leve",
      description: "Soluções sob medida para estruturas e equipamentos metálicos de menor porte, com alta exigência de precisão, qualidade e acabamento.",
      color: "from-yellow-400 to-yellow-600",
      features: [
        "Estruturas Metálicas Customizadas",
        "Tanques e Reservatórios",
        "Suportes e Instalações Industriais",
        "Manutenção Preventiva"
      ]
    },
    {
      id: "implementos",
      icon: <Tractor className="h-8 w-8" />,
      title: "Implementos Agrícolas",
      description: "Desenvolvemos implementos agrícolas para proporcionar maior produtividade e eficiência nas operações do campo.",
      color: "from-yellow-300 to-yellow-500",
      features: [
        "Fabricação Personalizada",
        "Manutenção e Reforma",
        "Adaptações e Melhorias",
        "Soluções para Diversos Cultivos"
      ]
    },
    {
      id: "maquinas",
      icon: <Cog className="h-8 w-8" />,
      title: "Máquinas Especiais",
      description: "Desenvolvemos máquinas especiais sob medida para processos industriais específicos, criando soluções exclusivas.",
      color: "from-yellow-200 to-yellow-400",
      features: [
        "Projetos Exclusivos",
        "Automação Industrial",
        "Modernização de Equipamentos",
        "Soluções Customizadas"
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
      {/* Nova seção de introdução */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Nossos <span className="text-yellow-500">Serviços</span>
              </h1>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {services.map((service) => (
                                  <motion.div 
                  key={service.id}
                  className={`bg-gradient-to-r ${service.color} rounded-lg p-6 shadow-sm text-center hover:shadow-md transition-all duration-300 text-white`}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mx-auto flex items-center justify-center mb-4">
                    {React.cloneElement(service.icon, { className: "h-10 w-10" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <div className="w-12 h-0.5 bg-white/50 mx-auto mb-3"></div>
                  <a 
                    href={`#${service.id}`}
                    className="text-white hover:text-white/80 font-medium inline-flex items-center"
                  >
                    Ver detalhes
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços Section - Redesenhada */}
      <section id="servicos" ref={servicesRef} className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index !== 0 ? 'mt-32' : 'mt-0'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={`lg:w-1/2 order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-medium mb-4`}>
                  {service.icon}
                  <span className="ml-2">Serviço Especializado</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">{service.title}</h2>
                
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6"></div>
                
                <p className="text-lg text-slate-600 mb-8">{service.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-start bg-slate-50 p-4 rounded-lg"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <div className={`p-2 rounded-full bg-gradient-to-r ${service.color} text-white mr-3 flex-shrink-0`}>
                        <CheckCircle2 className="h-5 w-5" />
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
                >
                  <a
                    href={`https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20${encodeURIComponent(service.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium hover:shadow-xl transition-all duration-300`}
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
                    <div className="text-white text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        {React.cloneElement(service.icon, { className: "h-12 w-12" })}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                      <div className="w-16 h-1 bg-white mx-auto mb-4"></div>
                      <p className="text-white/80 max-w-sm mx-auto">
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
            
            <p className="text-lg text-slate-600">
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
                  className="flex flex-col md:flex-row items-center md:items-start gap-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div 
                    className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:order-last'}`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`bg-white rounded-2xl p-8 shadow-lg border border-slate-100 max-w-md ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </motion.div>
                  
                  <div className="flex items-center justify-center">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-slate-800 flex items-center justify-center font-bold text-xl z-10 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {step.number}
                    </motion.div>
                  </div>
                  
                  <div className={`md:w-1/2 hidden md:block ${index % 2 === 0 ? 'md:order-last' : ''}`}></div>
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
              className="p-8 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-2xl shadow-lg text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Precisa de mais informações?</h3>
              <div className="w-20 h-1 bg-white/50 mx-auto mb-6"></div>
              <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
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
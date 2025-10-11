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
  Phone,
  Hammer,
  Disc3,
  CircleDot
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
      features: [
        "Ferramentas de Corte e Conformação",
        "Moldes e Matrizes de Precisão",
        "Dispositivos e Gabaritos",
        "Manutenção de Ferramental"
      ]
    },
    {
      id: "pecas-reposicao",
      icon: <Settings className="h-8 w-8" />,
      title: "Peças de Reposição",
      description: "Componentes sob medida para manutenção e reposição de máquinas, garantindo desempenho contínuo, durabilidade e compatibilidade com seu equipamento.",
      color: "from-yellow-500 to-yellow-700",
      features: [
        "Peças para Implementos Agrícolas",
        "Componentes de Caldeiraria e Estruturas",
        "Conjuntos Mecânicos e Hidráulicos",
        "Personalização sob Demanda"
      ]
    },
    {
      id: "rebarba",
      icon: <Disc3 className="h-8 w-8" />,
      title: "Rebarba",
      description: "Serviços especializados de acabamento e desbaste para remoção de rebarbas, garantindo superfícies lisas e acabamento profissional em peças metálicas.",
      color: "from-yellow-100 to-yellow-300",
      features: [
        "Desbaste de Soldas e Rebarbas",
        "Acabamento de Superfícies Metálicas",
        "Polimento e Alisamento",
        "Preparação para Pintura"
      ]
    },
    {
      id: "cilindros",
      icon: <CircleDot className="h-8 w-8" />,
      title: "Cilindros",
      description: "Fabricação e manutenção de cilindros hidráulicos e pneumáticos sob medida, oferecendo soluções robustas para sistemas de automação industrial.",
      color: "from-yellow-700 to-yellow-900",
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
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

      {/* Seção de Testemunho */}
      <section className="py-24 bg-white relative overflow-hidden">
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
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Depoimentos de Clientes
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              O que nossos clientes dizem
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 mx-auto mb-6"></div>
          </motion.div>

          {/* Depoimentos */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Depoimento 1 - Gualberto */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-xl border border-slate-100 relative h-full flex flex-col">
                {/* Aspas decorativas */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                <div className="flex-1">
                  <blockquote className="text-lg text-slate-700 font-medium leading-relaxed mb-6 italic">
                    "A Bv Boaventura, sempre atendeu as expectativas com os trabalhos. Muito bom a parceria"
                  </blockquote>
                </div>

                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-lg">GS</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-bold text-slate-900">Gualberto Rodrigues da Silva</h4>
                    <p className="text-slate-600 text-sm">Chefe de Produção - Yamaguchi</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-8 right-8 w-20 h-20 bg-yellow-200/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>

            {/* Depoimento 2 - Aline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-xl border border-slate-100 relative h-full flex flex-col">
                {/* Aspas decorativas */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                <div className="flex-1">
                  <blockquote className="text-lg text-slate-700 font-medium leading-relaxed mb-6 italic">
                    "A entrega da Bv Boaventura foi de qualidade e com compromisso com o prazo"
                  </blockquote>
                </div>

                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-lg">AO</span>
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-bold text-slate-900">Aline Aparecida da Costa de Oliveira</h4>
                    <p className="text-slate-600 text-sm">Líder de Pintura - Yamaguchi</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-8 right-8 w-20 h-20 bg-yellow-200/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>

          {/* Elementos decorativos de fundo */}
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-yellow-300/15 rounded-full blur-2xl"></div>
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
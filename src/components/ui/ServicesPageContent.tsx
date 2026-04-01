"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, Cog, Hammer, Disc3, CircleDot, Settings } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServicesPageContent() {
  const services = [
    {
      title: "Rebarbação",
      description: "Acabamento profissional em peças metálicas. Remoção de rebarbas, polimento e preparação para pintura com qualidade superior.",
      icon: Disc3,
      href: "/servicos/rebarbacao",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Caldeiraria",
      description: "Soluções sob medida para estruturas e equipamentos metálicos com alta precisão, qualidade e acabamento profissional.",
      icon: Wrench,
      href: "/servicos/caldeiraria",
      gradient: "from-yellow-300 to-yellow-500"
    },
    {
      title: "Máquinas Especiais",
      description: "Desenvolvimento de máquinas sob medida para processos industriais específicos, criando soluções exclusivas e inovadoras.",
      icon: Cog,
      href: "/servicos/maquinas-especiais",
      gradient: "from-yellow-500 to-yellow-700"
    },
    {
      title: "Ferramentaria",
      description: "Fabricação de ferramentas especializadas, moldes e dispositivos de precisão para otimizar processos produtivos.",
      icon: Hammer,
      href: "/servicos/ferramentaria",
      gradient: "from-yellow-600 to-yellow-800"
    },
    {
      title: "Peças de Reposição",
      description: "Componentes sob medida para manutenção e reposição de máquinas, garantindo desempenho contínuo e durabilidade.",
      icon: Settings,
      href: "/servicos/pecas-reposicao",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Cilindros",
      description: "Fabricação e manutenção de cilindros hidráulicos e pneumáticos sob medida para sistemas de automação industrial.",
      icon: CircleDot,
      href: "/servicos/cilindros",
      gradient: "from-yellow-700 to-yellow-900"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #000000 100%)' }}>
        {/* Padrão de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold mb-6 border border-yellow-500/30">
              Nossos Serviços
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Soluções Completas para
              <span className="block text-yellow-400 mt-2">Sua Indústria</span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />

            <p className="text-xl leading-relaxed" style={{ color: '#d4d4d4' }}>
              Serviços especializados em caldeiraria, usinagem, rebarbação e muito mais. 
              Qualidade, precisão e compromisso em cada projeto.
            </p>
          </motion.div>
        </div>

        {/* Elemento decorativo */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Grid de Serviços */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                gradient={service.gradient}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #fafafa 0%, #ffffff 100%)' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
          >
            {/* Padrão decorativo */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Precisa de um Orçamento?
              </h2>
              <p className="text-yellow-100 text-lg mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e receba um orçamento personalizado para o seu projeto
              </p>

              <motion.a
                href="https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl shadow-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.89-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                Falar no WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

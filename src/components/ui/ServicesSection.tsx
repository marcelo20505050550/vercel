"use client";

import { motion } from 'framer-motion';

// Componente de decoração dos cards
const CardDecorator = () => (
  <>
    <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-yellow-500"></span>
    <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-yellow-500"></span>
    <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-yellow-500"></span>
    <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-yellow-500"></span>
  </>
);

// Componente de padrão de pontos para os cards
const DotPattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 opacity-10 ${className}`}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  </div>
);

// Card de serviço moderno
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

const ServiceCard = ({ icon, title, description, features, delay }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-yellow-200"
  >
    <CardDecorator />
    <DotPattern className="text-yellow-400" />

    {/* Gradiente de fundo sutil */}
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-yellow-100/30 pointer-events-none" />

    <div className="relative z-10 p-8">
      {/* Ícone */}
      <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
        <div className="text-white text-2xl">
          {icon}
        </div>
      </div>

      {/* Título */}
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-yellow-700 transition-colors">
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-gray-600 text-center mb-6 leading-relaxed">
        {description}
      </p>

      {/* Lista de características */}
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center mr-3 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700 text-sm font-medium">{feature}</span>
          </div>
        ))}
      </div>

      {/* Efeito hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  </motion.div>
);

// Seção CTA moderna
const CTASection = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    viewport={{ once: true }}
    className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-10 text-center overflow-hidden shadow-2xl"
  >
    {/* Padrão de fundo decorativo */}
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
        Solicite um Orçamento Sem Compromisso!
      </h2>
      <p className="text-yellow-100 text-lg mb-8 max-w-3xl mx-auto">
        Precisa de um serviço de caldeiraria de qualidade? Entre em contato conosco hoje mesmo e receba um orçamento personalizado para o seu projeto.
      </p>

      {/* Grid de benefícios */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: "👤", text: "Atendimento Personalizado" },
          { icon: "💰", text: "Preços Competitivos" },
          { icon: "⚡", text: "Resposta Rápida" },
          { icon: "✅", text: "Qualidade Garantida" }
        ].map((benefit, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl mb-2">{benefit.icon}</div>
            <span className="text-white text-sm font-medium">{benefit.text}</span>
          </div>
        ))}
      </div>

      {/* Informações de contato */}
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto">
        <h3 className="text-xl font-bold text-white mb-4">Horário de Atendimento</h3>
        <div className="space-y-2 text-yellow-100">
          <p><span className="font-semibold">Segunda a Sexta:</span> 8h às 18h</p>
          <p><span className="font-semibold">Sábado:</span> 8h às 12h</p>
        </div>
      </div>

      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg group"
      >
        <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.89-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        WhatsApp Direto
      </a>
    </div>
  </motion.div>
);

export default function ServicesSection() {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Caldeiraria Leve",
      description: "Produtos sob medida com alta precisão na fabricação de estruturas metálicas, tanques, suportes e peças especiais. Qualidade, segurança e durabilidade para o setor industrial.",
      features: [
        "Estruturas metálicas personalizadas",
        "Tanques e reservatórios",
        "Suportes e bases industriais",
        "Peças especiais sob medida"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Implementos Agrícolas",
      description: "Fabricação e manutenção de implementos robustos e eficientes para o trabalho no campo. Soluções que aumentam a produtividade e a vida útil dos seus equipamentos.",
      features: [
        "Grades e arados de alta resistência",
        "Roçadeiras profissionais",
        "Guinchos e equipamentos de tração",
        "Manutenção preventiva e corretiva"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Máquinas Especiais",
      description: "Desenvolvimento e adaptação de máquinas sob demanda, conforme as necessidades do seu processo. Tecnologia, inovação e desempenho para sua produção.",
      features: [
        "Máquinas customizadas por demanda",
        "Automação industrial",
        "Adaptações e melhorias",
        "Consultoria técnica especializada"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655-5.653a2.548 2.548 0 010-3.586l.837-.836c.41-.41.947-.628 1.508-.628s1.099.218 1.508.628l.837.836a2.548 2.548 0 010 3.586l-3.586 3.586z" />
        </svg>
      ),
      title: "Ferramentaria",
      description: "Fabricação de ferramentas especializadas, moldes e dispositivos de precisão para otimizar processos produtivos e garantir qualidade superior nos resultados.",
      features: [
        "Ferramentas de corte e conformação",
        "Moldes e matrizes de precisão",
        "Dispositivos e gabaritos",
        "Manutenção de ferramental"
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
        </svg>
      ),
      title: "Peças de Reposição",
      description: "Componentes sob medida para manutenção e reposição de máquinas, garantindo desempenho contínuo, durabilidade e compatibilidade com seu equipamento.",
      features: [
        "Peças para Implementos Agrícolas",
        "Componentes de Caldeiraria e Estruturas",
        "Conjuntos Mecânicos e Hidráulicos",
        "Personalização sob Demanda"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Soluções Completas para{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Seu Negócio
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções completas em caldeiraria, implementos agrícolas e máquinas especiais,
            desenvolvidas para impulsionar o desempenho do seu negócio.
          </p>
        </motion.div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Seção CTA */}
        <CTASection />
      </div>

      {/* Estilos para animação blob */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
} 
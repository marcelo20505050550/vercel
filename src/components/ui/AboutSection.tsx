"use client";

import Link from 'next/link';
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
        <pattern id="about-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#about-dots)" />
    </svg>
  </div>
);

// Card de conteúdo moderno
interface ContentCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  delay: number;
  className?: string;
}

const ContentCard = ({ icon, title, content, delay, className = "" }: ContentCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-yellow-200 ${className}`}
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
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center group-hover:text-yellow-700 transition-colors">
        {title}
      </h3>
      
      {/* Conteúdo */}
      <div className="text-gray-600 leading-relaxed">
        {content}
      </div>
      
      {/* Efeito hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  </motion.div>
);

// Componente de valor individual
const ValueItem = ({ value, delay }: { value: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex items-start group"
  >
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-md">
      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-gray-700 font-medium group-hover:text-yellow-700 transition-colors">
      {value}
    </span>
  </motion.div>
);

// Seção CTA para "Sobre"
const AboutCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <Link 
      href="/sobre" 
      className="group inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
    >
      Conheça Nossa História Completa
      <motion.svg 
        className="w-5 h-5 ml-3" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </motion.svg>
    </Link>
  </motion.div>
);

export default function AboutSection() {
  const values = [
    "Qualidade e excelência em todos os produtos",
    "Segurança como prioridade em todas as operações", 
    "Comprometimento com prazos e resultados"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-8 left-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      
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
            Sobre a BV BoaVentura
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Conheça Nossa{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              História
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça nossa história, missão e os valores que guiam nossas operações.
          </p>
        </motion.div>

        {/* Grid de conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Nossa História */}
          <ContentCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            }
            title="Nossa História"
            content={
              <div className="space-y-4 text-center">
                <p>
                  A BV BoaVentura foi fundada com o objetivo de oferecer serviços de alta qualidade no setor industrial, 
                  especializando-se em caldeiraria e soluções metálicas para diversas indústrias.
                </p>
                <p>
                  A meta da BV BoaVentura é ser referência não apenas em produtos, mas em atitude, ética e impacto positivo. 
                  Aqui, cada projeto é um passo para o futuro – tanto da indústria quanto de quem caminha ao nosso lado.
                </p>
              </div>
            }
            delay={0}
          />

          {/* Nossos Valores */}
          <ContentCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="Nossos Valores"
            content={
              <div className="space-y-6">
                {values.map((value, index) => (
                  <ValueItem 
                    key={index} 
                    value={value} 
                    delay={0.2 + index * 0.1} 
                  />
                ))}
              </div>
            }
            delay={0.2}
          />
        </div>

        {/* CTA */}
        <AboutCTA />
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
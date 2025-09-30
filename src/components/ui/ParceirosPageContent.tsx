"use client";


import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { parceiros } from '@/data/parceiros';
import { Parceiro } from '@/types/parceiros';

// Componente de decoração dos cards (reutilizado do AboutSection)
const CardDecorator = () => (
  <>
    <span className="absolute -left-px -top-px block size-2 border-l-2 border-t-2 border-yellow-500"></span>
    <span className="absolute -right-px -top-px block size-2 border-r-2 border-t-2 border-yellow-500"></span>
    <span className="absolute -bottom-px -left-px block size-2 border-b-2 border-l-2 border-yellow-500"></span>
    <span className="absolute -bottom-px -right-px block size-2 border-b-2 border-r-2 border-yellow-500"></span>
  </>
);

// Componente de padrão de pontos
const DotPattern = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 opacity-10 ${className}`}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="parceiros-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#parceiros-dots)" />
    </svg>
  </div>
);

// Card do Parceiro
interface ParceiroCardProps {
  parceiro: Parceiro;
  delay: number;
}

const ParceiroCard = ({ parceiro, delay }: ParceiroCardProps) => (
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
    
    <div className="relative z-10">
      {/* Imagem da empresa */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        <Image
          src={parceiro.imagem}
          alt={`Imagem da empresa ${parceiro.nome}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback para imagem padrão se a imagem não carregar
            const target = e.target as HTMLImageElement;
            target.src = '/image/placeholder-company.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <div className="p-6">
        {/* Logo da empresa */}
        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-4 mx-auto -mt-12 relative z-10 border-2 border-yellow-200">
          <Image
            src={parceiro.logo}
            alt={`Logo da ${parceiro.nome}`}
            width={48}
            height={48}
            className="object-contain"
            onError={(e) => {
              // Fallback para logo padrão se a logo não carregar
              const target = e.target as HTMLImageElement;
              target.src = '/image/placeholder-logo.png';
            }}
          />
        </div>
        
        {/* Nome da empresa */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-yellow-700 transition-colors">
          {parceiro.nome}
        </h3>
        
        {/* Descrição */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
          {parceiro.descricao}
        </p>
        
        {/* Botão para o site */}
        <div className="text-center">
          <Link
            href={parceiro.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
          >
            Visitar Site
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Efeito hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  </motion.div>
);



export default function ParceirosPageContent() {
  // Mostrar todos os parceiros ativos
  const parceirsFiltrados = parceiros.filter(p => p.ativo);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-8 left-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
        {/* Cabeçalho da página */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            Nossos Parceiros
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Empresas que{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Confiam
            </span>{" "}
            em Nós
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça as empresas que fazem parte da nossa rede de parceiros estratégicos, 
            fornecedores confiáveis e clientes que confiam em nossas soluções industriais.
          </p>
        </motion.div>



        {/* Grid de parceiros */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {parceirsFiltrados.map((parceiro, index) => (
            <ParceiroCard
              key={parceiro.id}
              parceiro={parceiro}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* Mensagem quando não há parceiros */}
        {parceirsFiltrados.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Nenhum parceiro encontrado
            </h3>
            <p className="text-gray-600">
              Não encontramos parceiros nesta categoria no momento.
            </p>
          </motion.div>
        )}

        {/* Seção de call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20 bg-white rounded-2xl shadow-lg p-12 border border-yellow-200 relative overflow-hidden"
        >
          <DotPattern className="text-yellow-400" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Quer ser nosso{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Parceiro?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Estamos sempre em busca de novas parcerias estratégicas. 
              Entre em contato conosco e descubra como podemos trabalhar juntos.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            >
              Entre em Contato
              <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
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
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, Play, Package, Clock, Shield, ThumbsUp } from "lucide-react";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";
import Image from "next/image";

export default function PecasReposicaoLandingPage() {
  const benefits = [
    {
      icon: Package,
      title: "Peças Sob Medida",
      description: "Fabricação de componentes personalizados para qualquer equipamento"
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Prazos otimizados para minimizar tempo de parada de máquinas"
    },
    {
      icon: Shield,
      title: "Qualidade Assegurada",
      description: "Peças fabricadas com materiais de alta qualidade e durabilidade"
    },
    {
      icon: ThumbsUp,
      title: "Compatibilidade Total",
      description: "Peças que se encaixam perfeitamente em seus equipamentos"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #1a1a1a, #0a0a0a, #000000)' }}>
        {/* Padrão de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna Esquerda - Texto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-semibold mb-6 border border-yellow-500/30">
                Serviço Especializado
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Peças de Reposição
                <span className="block text-yellow-400 mt-2">Sob Medida</span>
              </h1>

              <p className="text-xl leading-relaxed mb-8 max-w-xl" style={{ color: '#d4d4d4' }}>
                Componentes sob medida para manutenção e reposição de máquinas, garantindo desempenho contínuo e durabilidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20serviço%20de%20Peças%20de%20Reposição"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </motion.a>
              </div>
            </motion.div>

            {/* Coluna Direita - Vídeo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-500/20 bg-neutral-800 flex items-center justify-center">
                {/* Placeholder para vídeo */}
                <div className="text-center p-8">
                  <Play className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <p className="text-neutral-400 text-sm">Vídeo em breve</p>
                </div>
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Elemento decorativo inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Seção Antes & Depois */}
      <section id="antes-depois" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
              Resultados Comprovados
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Antes & Depois
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6" />
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Veja a qualidade das peças de reposição que fabricamos
            </p>
          </motion.div>

          {/* Placeholder para Slider */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[4/3] rounded-2xl bg-neutral-100 border-2 border-neutral-200 flex items-center justify-center">
              <p className="text-neutral-400">Fotos em breve</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Clientes */}
      <section className="py-6 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #fafafa, #ffffff)' }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
              Confiança Comprovada
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Nossos Clientes
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto" />
          </motion.div>

          <div className="max-w-xs mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Placeholder para cliente */}
              <div className="block relative bg-white rounded-lg shadow-sm p-3 border border-yellow-100">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative w-full max-w-[140px] mb-2">
                    <div className="relative bg-neutral-100 rounded-md p-2 border border-neutral-200 h-16 flex items-center justify-center">
                      <p className="text-xs text-neutral-400">Logo em breve</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Benefícios */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
              Por Que Escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Nossos Diferenciais
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="text-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border" style={{ background: 'linear-gradient(to bottom right, #fafafa, #ffffff)', borderColor: '#e5e5e5' }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #1a1a1a, #0a0a0a, #000000)' }}>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-yellow-500/20 flex items-center justify-center border-2 border-yellow-500/30">
              <Phone className="w-10 h-10 text-yellow-400" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Precisa de Peças de Reposição?
            </h2>

            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Entre em contato agora e receba um orçamento personalizado para suas peças
            </p>

            <motion.a
              href="https://wa.me/5516991624446?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20serviço%20de%20Peças%20de%20Reposição"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-lg hover:shadow-xl transition-all duration-300 mb-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </motion.a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-neutral-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                <span>Resposta em até 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                <span>Orçamento sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                <span>Atendimento personalizado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

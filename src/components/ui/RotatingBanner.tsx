"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { bannerData } from '@/data/bannerData';

// Hook para lidar com dimensões da tela de forma segura no SSR
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 1200, // Valor padrão
    height: 600  // Valor padrão
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Definir tamanho inicial
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};

// Componente de texto animado com palavras aparecendo uma por uma (evita corte)
const AnimatedText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const words = text.split(' ');
  
  return (
    <span className={`${className} inline-flex flex-wrap justify-center items-center gap-x-2`}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: delay + wordIndex * 0.15,
            ease: [0.25, 0.4, 0.25, 1]
          }}
          className="inline-block whitespace-nowrap"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

// Elemento flutuante animado
const FloatingElement = ({ 
  delay = 0, 
  size = 40, 
  className = "", 
  color = "yellow-300" 
}: { 
  delay?: number; 
  size?: number; 
  className?: string; 
  color?: string; 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1.2, 0],
        rotate: [0, 180, 360],
        y: [0, -20, 0]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
    >
      <div className={`w-full h-full bg-${color} rounded-full shadow-lg`} />
    </motion.div>
  );
};

// Formas geométricas flutuantes
const GeometricShape = ({ 
  type = "circle", 
  delay = 0, 
  size = 60, 
  className = "",
  color = "yellow-500"
}: { 
  type?: "circle" | "square" | "triangle"; 
  delay?: number; 
  size?: number; 
  className?: string;
  color?: string;
}) => {
  const shapeVariants = {
    initial: { opacity: 0, scale: 0, rotate: 0 },
    animate: { 
      opacity: [0, 0.7, 0.7, 0],
      scale: [0, 1, 1.1, 0],
      rotate: [0, 90, 180, 270],
      y: [0, -30, -60, -90]
    }
  };

  const getShape = () => {
    switch (type) {
      case "square":
        return <div className={`w-full h-full bg-${color} rounded-lg`} />;
      case "triangle":
        return <div className={`w-0 h-0 border-l-[${size/2}px] border-r-[${size/2}px] border-b-[${size}px] border-l-transparent border-r-transparent border-b-${color}`} />;
      default:
        return <div className={`w-full h-full bg-${color} rounded-full`} />;
    }
  };

  return (
    <motion.div
      variants={shapeVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
    >
      {getShape()}
    </motion.div>
  );
};

// Partículas flutuantes
const ParticleField = () => {
  const particles = Array.from({ length: 15 }, (_, i) => i);
  const { width, height } = useWindowSize();
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          initial={{ 
            x: Math.random() * width,
            y: height + 50,
            opacity: 0
          }}
          animate={{
            y: -50,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
        />
      ))}
    </div>
  );
};

// Interface para o banner
interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const ModernAnimatedBanner: React.FC = () => {
  const slides = bannerData;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsVisible(true);
      }, 500);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[600px] bg-white overflow-hidden">
      {/* Elementos de fundo animados */}
      <div className="absolute inset-0">
        {/* Formas geométricas flutuantes */}
        <GeometricShape type="circle" delay={0.5} size={80} className="left-[10%] top-[20%]" color="yellow-200" />
        <GeometricShape type="square" delay={1.2} size={60} className="right-[15%] top-[15%]" color="yellow-300" />
        <GeometricShape type="triangle" delay={0.8} size={70} className="left-[20%] bottom-[25%]" color="yellow-500" />
        <GeometricShape type="circle" delay={1.5} size={50} className="right-[25%] bottom-[20%]" color="yellow-600" />
        
        {/* Elementos flutuantes menores */}
        <FloatingElement delay={2} size={30} className="left-[5%] top-[60%]" color="yellow-400" />
        <FloatingElement delay={2.5} size={25} className="right-[8%] top-[45%]" color="yellow-500" />
        <FloatingElement delay={3} size={35} className="left-[60%] top-[80%]" color="yellow-300" />
        <FloatingElement delay={1.8} size={20} className="right-[45%] top-[25%]" color="yellow-600" />
      </div>

      {/* Partículas flutuantes */}
      <ParticleField />

      {/* Conteúdo principal */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 border border-yellow-300 mb-6"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-yellow-500 rounded-full"
                  />
                  <span className="text-sm text-yellow-800 font-semibold tracking-wide">BoaVentura</span>
                </motion.div>

                {/* Título principal com animação palavra por palavra */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-gray-800">
                  <AnimatedText 
                    text={slides[currentSlide].title} 
                    delay={0.5}
                    className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent"
                  />
                </h1>

                {/* Subtítulo */}
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-light mb-6 text-gray-700">
                  <AnimatedText 
                    text={slides[currentSlide].subtitle} 
                    delay={1.2}
                  />
                </h2>

                {/* Linha decorativa */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ duration: 1, delay: 2 }}
                  className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full"
                />

                {/* Descrição */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed break-words"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Botão de ação */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.6 }}
                >
                  <Link
                    href={slides[currentSlide].buttonLink}
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                  >
                    {slides[currentSlide].buttonText}
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Indicadores de slide */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-yellow-500 scale-125'
                : 'bg-yellow-200 hover:bg-yellow-300'
            }`}
          />
        ))}
      </div>

      {/* Gradiente sutil para melhor legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10 pointer-events-none" />
    </section>
  );
};

export default ModernAnimatedBanner; 
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play do carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length]);

  const slideVariants = {
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

  return (
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
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
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
                    "{testimonials[currentIndex].testimonial}"
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-8">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 flex items-center justify-center text-slate-800 font-bold text-2xl mb-4">
                      {testimonials[currentIndex].initial}
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-slate-900 text-xl mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-slate-600 text-sm mb-1">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-yellow-600 font-semibold">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-800 hover:bg-yellow-400 hover:text-white group z-20"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={handleNext}
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
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
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
  );
}

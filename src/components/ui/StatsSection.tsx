"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

const StatItem = ({ value, label, suffix = "", prefix = "", delay = 0 }: StatItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value);
      }, delay);
    }
  }, [isInView, value, motionValue, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-yellow-200 shadow-lg group-hover:shadow-2xl transition-all duration-300">
          <div
            ref={ref}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-3"
          >
            {prefix}0{suffix}
          </div>
          <p className="text-gray-700 font-medium text-lg">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function StatsSection() {
  const stats = [
    { value: 15, label: "Anos de Experiência", suffix: "+", prefix: "" },
    { value: 500, label: "Projetos Concluídos", suffix: "+", prefix: "" },
    { value: 98, label: "Satisfação dos Clientes", suffix: "%", prefix: "" },
    { value: 50, label: "Parceiros Ativos", suffix: "+", prefix: "" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            Números que Impressionam
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Nossa{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Trajetória
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados que comprovam nossa excelência e compromisso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              prefix={stat.prefix}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

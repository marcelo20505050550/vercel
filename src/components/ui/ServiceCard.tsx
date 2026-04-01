"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  gradient,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <Link href={href}>
        <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-yellow-100">
          {/* Gradiente de fundo */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
          
          {/* Padrão decorativo */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <pattern id={`pattern-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" className="text-yellow-600" />
              </pattern>
              <rect width="100" height="100" fill={`url(#pattern-${index})`} />
            </svg>
          </div>

          <div className="relative p-8 h-full flex flex-col">
            {/* Ícone */}
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <Icon className="w-8 h-8 text-white" />
            </div>

            {/* Título */}
            <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-600 transition-colors duration-300" style={{ color: '#1a1a1a' }}>
              {title}
            </h3>

            {/* Descrição */}
            <p className="leading-relaxed mb-6 flex-grow" style={{ color: '#525252' }}>
              {description}
            </p>

            {/* CTA */}
            <div className="flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700 transition-colors">
              <span>Saiba mais</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Borda animada no hover */}
          <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}

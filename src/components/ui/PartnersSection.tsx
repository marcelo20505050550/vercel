"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getParceirosAtivos } from "@/data/parceiros";

export default function PartnersSection() {
  const parceiros = getParceirosAtivos();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Empresas que{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Confiam
            </span>{" "}
            em Nós
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Parcerias estratégicas que fortalecem nosso compromisso com a excelência
          </p>
        </motion.div>

        {/* Grid de parceiros */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {parceiros.map((parceiro, index) => (
            <motion.div
              key={parceiro.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Logo */}
                <div className="relative h-24 mb-6 flex items-center justify-center">
                  <Image
                    src={parceiro.logo}
                    alt={parceiro.nome}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Nome */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-yellow-600 transition-colors">
                  {parceiro.nome}
                </h3>

                {/* Descrição */}
                <p className="text-gray-600 text-sm text-center mb-6 line-clamp-3">
                  {parceiro.descricao}
                </p>

                {/* Link */}
                {parceiro.website && (
                  <div className="text-center">
                    <Link
                      href={parceiro.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium text-sm group-hover:underline"
                    >
                      Visitar site
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                )}

                {/* Efeito hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/parceiros"
            className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
          >
            Ver Todos os Parceiros
            <svg
              className="w-5 h-5 ml-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

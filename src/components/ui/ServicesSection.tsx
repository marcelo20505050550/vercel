"use client";

import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
          Nossos Serviços
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-gray-dark text-lg mb-12">
          Soluções completas em caldeiraria, implementos agrícolas e máquinas especiais, desenvolvidas para impulsionar o desempenho do seu negócio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-gray-light p-6 rounded-2xl shadow-md transition-transform hover:scale-105">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text mb-3 text-center">
            Caldeiraria Leve
          </h3>
          <p className="text-gray-dark mb-4 text-center">
            Projetos sob medida com alta precisão na fabricação de estruturas metálicas, tanques, suportes e peças especiais. Qualidade, segurança e durabilidade para o setor industrial.
          </p>
        </div>

        <div className="bg-gray-light p-6 rounded-2xl shadow-md transition-transform hover:scale-105">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19H6.41a2 2 0 01-2.2-3.32l5.74-7.64a2 2 0 013.1 0l5.74 7.64a2 2 0 01-2.2 3.32H11z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text mb-3 text-center">
            Implementos Agrícolas
          </h3>
          <p className="text-gray-dark mb-4 text-center">
            Fabricação e manutenção de implementos robustos e eficientes para o trabalho no campo. Soluções que aumentam a produtividade e a vida útil dos seus equipamentos.
          </p>
        </div>

        <div className="bg-gray-light p-6 rounded-2xl shadow-md transition-transform hover:scale-105">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text mb-3 text-center">
            Máquinas Especiais
          </h3>
          <p className="text-gray-dark mb-4 text-center">
            Desenvolvimento e adaptação de máquinas sob demanda, conforme as necessidades do seu processo. Tecnologia, inovação e desempenho para sua produção.
          </p>
        </div>
      </div>
    </section>
  );
} 
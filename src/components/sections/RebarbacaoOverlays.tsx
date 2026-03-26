'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function getOpacity(progress: number, start: number, end: number, fade = 5): number {
  if (isNaN(progress)) return 0;
  if (progress < start - fade || progress > end + fade) return 0;
  if (progress >= start && progress <= end) return 1;
  if (progress < start) return (progress - (start - fade)) / fade;
  return 1 - (progress - end) / fade;
}

export default function RebarbacaoOverlays() {
  const [progressPct, setProgressPct] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const heroSection = document.querySelector('section');
      if (!heroSection) return;
      
      const rect = heroSection.getBoundingClientRect();
      const scrollable = heroSection.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      
      // Calcula progresso apenas para a primeira metade (rebarbação)
      const totalFrames = 60 + 192; // rebarbacao + hydraulic
      const currentFrame = Math.floor((scrolled / scrollable) * totalFrames);
      
      if (currentFrame < 60) {
        const localProgress = (currentFrame / 60) * 100;
        setProgressPct(Math.min(localProgress, 100));
        setScrollY(scrolled);
      } else {
        setProgressPct(100);
        setScrollY(scrolled);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const opacity1 = getOpacity(progressPct, 5, 35);
  const opacity2 = getOpacity(progressPct, 40, 70);
  const opacity3 = getOpacity(progressPct, 75, 95);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Primeira mensagem */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ 
          opacity: opacity1,
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
          Rebarbação Profissional
        </h1>
        <p className="text-lg md:text-2xl text-yellow-400 font-light" style={{ textShadow: '0 3px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.7)' }}>
          Acabamento perfeito em peças metálicas
        </p>
      </div>

      {/* Segunda mensagem */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ 
          opacity: opacity2,
          transform: `translateY(${scrollY * 0.05}px)`
        }}
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
          Serviço de Rebarbação
        </h2>
        <p className="text-lg md:text-xl text-yellow-300 max-w-2xl" style={{ textShadow: '0 3px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.7)' }}>
          Remoção de rebarbas com precisão e qualidade
        </p>
      </div>

      {/* Terceira mensagem com CTA */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ 
          opacity: opacity3,
          transform: `translateY(${scrollY * 0.02}px)`
        }}
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
          Excelência em Rebarbação
        </h2>
        <p className="text-lg md:text-xl text-yellow-300 max-w-3xl mb-6" style={{ textShadow: '0 3px 8px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.7)' }}>
          Equipamentos modernos e profissionais qualificados
        </p>
        <Link
          href="/contato"
          className="pointer-events-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Solicite um Orçamento
        </Link>
      </div>

      {/* Scroll hint no início */}
      {progressPct < 10 && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 scroll-bounce">
          <span className="text-white/70 text-sm tracking-wider" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>ROLE PARA BAIXO</span>
          <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </div>
  );
}

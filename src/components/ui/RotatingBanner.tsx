"use client";

import { useState, useEffect, useCallback, useRef, TouchEvent, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  customBackground?: string; // URL para um fundo personalizado (desktop)
  mobileBgImage?: string; // URL para um fundo personalizado em dispositivos móveis
  useOnlyBackground?: boolean; // Indica se deve usar apenas o fundo personalizado sem imagem
  contentPosition?: 'left' | 'center' | 'right'; // Posição do conteúdo quando useOnlyBackground é true
  textColor?: string; // Cor do texto quando usar fundo personalizado
  hideText?: boolean; // Nova propriedade para esconder todos os textos
}

interface RotatingBannerProps {
  banners: BannerItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const RotatingBanner = ({ 
  banners,
  autoPlay = true, 
  autoPlayInterval = 30000 
}: RotatingBannerProps) => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const goToNextBanner = useCallback(() => {
    setIsAnimating(true);
    setIsVisible(false);
    
    setTimeout(() => {
      setCurrentBanner((prevIndex) => (prevIndex + 1) % banners.length);
      setIsAnimating(false);
      
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }, 500);
  }, [banners.length]);

  const goToPrevBanner = useCallback(() => {
    setIsAnimating(true);
    setIsVisible(false);
    
    setTimeout(() => {
      setCurrentBanner((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
      setIsAnimating(false);
      
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }, 500);
  }, [banners.length]);

  const goToBanner = (index: number) => {
    if (index === currentBanner) return;
    setIsAnimating(true);
    setIsVisible(false);
    
    setTimeout(() => {
      setCurrentBanner(index);
      setIsAnimating(false);
      
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }, 500);
  };

  // Manipuladores de eventos de toque (touch)
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (isAnimating) return;
    startXRef.current = e.touches[0].clientX;
    setIsSwiping(true);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!startXRef.current || !isSwiping) return;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (!startXRef.current || !isSwiping || isAnimating) return;
    
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startXRef.current;
    
    // Se o deslizamento for maior que 50px, muda o banner
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        goToPrevBanner();
      } else {
        goToNextBanner();
      }
    }
    
    startXRef.current = null;
    setIsSwiping(false);
  };

  // Manipuladores de eventos de mouse
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (isAnimating) return;
    startXRef.current = e.clientX;
    setIsSwiping(true);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!startXRef.current || !isSwiping) return;
  };

  const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    if (!startXRef.current || !isSwiping || isAnimating) return;
    
    const diffX = e.clientX - startXRef.current;
    
    // Se o deslizamento for maior que 50px, muda o banner
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        goToPrevBanner();
      } else {
        goToNextBanner();
      }
    }
    
    startXRef.current = null;
    setIsSwiping(false);
  };

  const handleMouseLeave = () => {
    if (isSwiping) {
      startXRef.current = null;
      setIsSwiping(false);
    }
  };

  useEffect(() => {
    // Iniciar com o primeiro banner visível
    setIsVisible(true);
    
    let interval: NodeJS.Timeout;
    if (autoPlay && !isSwiping) {
      interval = setInterval(goToNextBanner, autoPlayInterval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, autoPlayInterval, goToNextBanner, isSwiping]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[850px] overflow-hidden rounded-lg shadow-xl cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fundo cinza-prata padrão */}
      <div className="absolute inset-0 bg-[#A9A9A9] z-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1NTUiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTJoLTJ2Mmg0djJ6bTAtNGgtNHYtMmg0djJ6bTAtNGgtNHYtMmg0djJ6bTAtNGgtNHYtMmg0djJ6bTAgMTZoLTR2LTJoNHYyem0wLTE0aC0ydi0yaDJ2MnptMC00aC0ydi0yaDJ2MnptMi0yaC0ydjJoMnYtMnptMCAxNGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6bTAgMjB2LTJoLTJ2Mmg0elYxNGgtMnYtNGgtNFY4aC00VjZoLTJ2Mkg4djJINnY0SDR2NGgtMnYySDB2NEgydjJoMnYyaDJ2NGg0djJoMnYyaDJ2Mkg4djJoNHY0aDR2Mmg0djJoMnYyaDZ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        </div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50"></div>
      </div>

      {/* Banner items */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 w-full h-full transition-all duration-700 ${
            index === currentBanner 
              ? isAnimating 
                ? 'opacity-30 scale-105' 
                : 'opacity-100 scale-100 z-10'
              : 'opacity-0 scale-95 -z-10'
          }`}
        >
          {/* Fundo personalizado para desktop e mobile */}
          {(banner.customBackground || banner.mobileBgImage) && (
            <>
              {/* Fundo para desktop - visível apenas em telas médias e maiores */}
              {banner.customBackground && (
                <div 
                  className="absolute inset-0 z-0 hidden md:block" 
                  style={{ 
                    backgroundImage: `url(${banner.customBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              )}
              
              {/* Fundo para mobile - visível apenas em telas pequenas */}
              {banner.mobileBgImage && (
                <div 
                  className="absolute inset-0 z-0 block md:hidden" 
                  style={{ 
                    backgroundImage: `url(${banner.mobileBgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              )}
            </>
          )}
          
          <div className="container-custom h-full relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
              {/* Imagem à direita - apenas visível em desktop e se não for apenas fundo */}
              {!banner.useOnlyBackground && (
                <div className="relative h-full hidden md:flex items-center justify-center md:order-1">
                  <div className="relative" style={{ width: '100%', maxWidth: '777px', height: 'auto', maxHeight: '850px' }}>
                    <div className="flex items-center justify-center">
                      <Image
                        src={banner.imageSrc}
                        alt={banner.title}
                        width={777}
                        height={777}
                        className="object-contain max-h-[850px]"
                        priority={index === 0}
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Conteúdo - ocupa toda largura em mobile ou quando usar apenas fundo */}
              <div className={`flex h-full items-center order-1 py-4 md:py-0 md:order-2 ${
                banner.useOnlyBackground ? 'col-span-2' : ''} ${
                banner.useOnlyBackground && banner.contentPosition ? 
                  banner.contentPosition === 'center' ? 'justify-center text-center' : 
                  banner.contentPosition === 'right' ? 'justify-end text-right' : 
                  'justify-start text-left' : ''}`
              }>
                {/* Se hideText for true, não exibe o conteúdo de texto */}
                {!banner.hideText && (
                  <div className={`text-gray-800 w-full ${banner.useOnlyBackground ? 'md:max-w-lg px-6' : ''}`}
                      style={banner.textColor ? { color: banner.textColor } : {}}>
                    <h2 
                      className={`text-2xl md:text-5xl font-bold mb-2 transition-all duration-1000 
                        ${isVisible && index === currentBanner ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                      style={{
                        color: banner.textColor || 'inherit',
                        textShadow: '0 0 3px #fff, 0 0 4px #fff, 0 0 6px #fff' // Borda branca maior
                      }}
                    >
                      {banner.title}
                    </h2>
                    <div className={`w-20 h-1 bg-primary mb-4 md:mb-6 transition-all duration-1000 delay-100
                      ${isVisible && index === currentBanner ? 'w-20 opacity-100' : 'w-0 opacity-0'} ${
                      banner.useOnlyBackground && banner.contentPosition === 'center' ? 'mx-auto' : 
                      banner.useOnlyBackground && banner.contentPosition === 'right' ? 'ml-auto' : ''}`}>
                    </div>
                    <h3 
                      className={`text-lg md:text-2xl font-semibold mb-2 md:mb-4 text-gray-600 transition-all duration-1000 delay-200
                        ${isVisible && index === currentBanner ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                      style={{
                        color: banner.textColor ? `${banner.textColor}cc` : 'inherit',
                        textShadow: '0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff' // Borda branca maior
                      }}
                    >
                      {banner.subtitle}
                    </h3>
                    <p 
                      className={`text-sm md:text-lg mb-4 md:mb-8 text-gray-700 line-clamp-3 md:line-clamp-none transition-all duration-1000 delay-300
                        ${isVisible && index === currentBanner ? 'translate-y-0 opacity-90' : 'translate-y-6 opacity-0'}`}
                      style={{
                        color: banner.textColor ? `${banner.textColor}aa` : 'inherit',
                        textShadow: '0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff' // Borda branca maior
                      }}
                    >
                      {banner.description}
                    </p>
                    
                    {/* Mostrar botão apenas se houver texto e link */}
                    {banner.buttonText && banner.buttonLink && (
                      <div 
                        className={`transition-all duration-1000 delay-500
                          ${isVisible && index === currentBanner ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                      >
                        <Link href={banner.buttonLink} className="bg-primary hover:bg-primary-dark text-text font-bold py-2 px-4 md:py-3 md:px-6 rounded-md transition-all duration-300 inline-flex items-center gap-1 md:gap-2 text-sm md:text-base group ring-2 ring-white">
                          {banner.buttonText}
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 md:h-5 md:w-5 transform transition-transform group-hover:translate-x-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBanner(index)}
            className={`transition-all duration-300 ${
              index === currentBanner
                ? 'bg-primary w-10 h-2 rounded-sm'
                : 'bg-white/30 w-3 h-2 rounded-sm hover:bg-white/60'
            }`}
            aria-label={`Ir para o banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingBanner; 
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "ANTES",
  afterLabel = "DEPOIS"
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* Imagem DEPOIS (fundo) */}
      <div className="absolute inset-0 bg-white">
        <Image
          src={afterImage}
          alt="Após rebarbação profissional"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {/* Label DEPOIS */}
        <div className="absolute top-4 right-4 px-4 py-2 bg-green-500/90 text-white font-bold rounded-lg backdrop-blur-sm z-10">
          {afterLabel}
        </div>
      </div>

      {/* Imagem ANTES (com clip) */}
      <div
        className="absolute inset-0 overflow-hidden bg-white"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Antes da rebarbação"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {/* Label ANTES */}
        <div className="absolute top-4 left-4 px-4 py-2 bg-red-500/90 text-white font-bold rounded-lg backdrop-blur-sm z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle circular */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-1 h-6 bg-gray-400 rounded"></div>
            <div className="w-1 h-6 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>

      {/* Instruções */}
      {!isDragging && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/70 text-white text-sm rounded-lg backdrop-blur-sm pointer-events-none"
        >
          ← Arraste para comparar →
        </motion.div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from 'react';
import { useScrollFrame } from '@/hooks/useScrollFrame';

interface AnimationSequence {
  framesPath: string;
  totalFrames: number;
  overlays: React.ReactNode;
  id: string;
}

interface SequentialFrameAnimationProps {
  sequences: AnimationSequence[];
  height?: string;
}

export default function SequentialFrameAnimation({
  sequences,
  height = '800vh',
}: SequentialFrameAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<Map<string, HTMLImageElement[]>>(new Map());
  const isReadyRef = useRef<Map<string, boolean>>(new Map());
  
  const totalFrames = sequences.reduce((sum, seq) => sum + seq.totalFrames, 0);
  const currentFrame = useScrollFrame(containerRef, totalFrames);

  // Calcula qual sequência está ativa e o frame dentro dela
  const getActiveSequence = () => {
    let frameCount = 0;
    for (let i = 0; i < sequences.length; i++) {
      const seq = sequences[i];
      if (currentFrame < frameCount + seq.totalFrames) {
        return {
          index: i,
          sequence: seq,
          localFrame: currentFrame - frameCount,
        };
      }
      frameCount += seq.totalFrames;
    }
    // Última sequência
    const lastSeq = sequences[sequences.length - 1];
    return {
      index: sequences.length - 1,
      sequence: lastSeq,
      localFrame: lastSeq.totalFrames - 1,
    };
  };

  const active = getActiveSequence();

  // Gera URL do frame
  const getFrameUrl = (framesPath: string, index: number) => {
    const padded = String(index + 1).padStart(4, '0');
    return `${framesPath}/frame_${padded}.webp`;
  };

  // Pré-carrega todas as sequências
  useEffect(() => {
    sequences.forEach((seq) => {
      const images: HTMLImageElement[] = Array(seq.totalFrames).fill(null).map(() => new Image());
      imagesRef.current.set(seq.id, images);

      const BATCH1_END = Math.min(30, seq.totalFrames);
      let loaded = 0;

      for (let i = 0; i < BATCH1_END; i++) {
        images[i].onload = () => {
          loaded++;
          if (loaded === 1 && seq.id === sequences[0].id) {
            syncCanvasSize();
            drawFrame(seq.framesPath, 0);
          }
          if (loaded === BATCH1_END) {
            isReadyRef.current.set(seq.id, true);
          }
        };
        images[i].src = getFrameUrl(seq.framesPath, i);
      }

      const loadRest = () => {
        for (let i = BATCH1_END; i < seq.totalFrames; i++) {
          images[i].src = getFrameUrl(seq.framesPath, i);
        }
      };

      if ('requestIdleCallback' in window) {
        requestIdleCallback(loadRest);
      } else {
        setTimeout(loadRest, 100);
      }
    });
  }, [sequences]);

  const syncCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  };

  const drawFrame = (framesPath: string, frameIndex: number) => {
    const canvas = canvasRef.current;
    const seqId = sequences.find(s => s.framesPath === framesPath)?.id;
    if (!seqId) return;
    
    const images = imagesRef.current.get(seqId);
    if (!images) return;
    
    const img = images[frameIndex];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvas.width / canvas.height;
    let drawW = 0, drawH = 0, offsetX = 0, offsetY = 0;

    // Detecta mobile e aplica zoom out
    const isMobile = window.innerWidth < 768;
    const mobileScale = isMobile ? 0.6 : 1;

    if (imgRatio > canvasRatio) {
      drawH = canvas.height * mobileScale;
      drawW = (canvas.height * imgRatio) * mobileScale;
      offsetX = (canvas.width - drawW) / 2;
      offsetY = (canvas.height - drawH) / 2;
    } else {
      drawW = canvas.width * mobileScale;
      drawH = (canvas.width / imgRatio) * mobileScale;
      offsetX = (canvas.width - drawW) / 2;
      offsetY = (canvas.height - drawH) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  };

  useEffect(() => {
    if (!isReadyRef.current.get(active.sequence.id)) return;
    requestAnimationFrame(() => drawFrame(active.sequence.framesPath, active.localFrame));
  }, [currentFrame, active]);

  useEffect(() => {
    const onResize = () => {
      syncCanvasSize();
      drawFrame(active.sequence.framesPath, active.localFrame);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [currentFrame, active]);

  return (
    <section ref={containerRef} style={{ height }} className="relative w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%)' }}
        />
        
        {/* Renderiza aapenas os overlays da sequência ativa */}
        {active.sequence.overlays}
      </div>
    </section>
  );
}

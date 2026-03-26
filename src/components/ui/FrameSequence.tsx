'use client';
import { useEffect, useRef } from 'react';
import { useScrollFrame } from '@/hooks/useScrollFrame';

interface FrameSequenceProps {
  framesPath: string;
  framePrefix?: string;
  zeroPad?: number;
  ext?: string;
  totalFrames: number;
  height?: string;
  children?: React.ReactNode;
  id?: string;
}

export default function FrameSequence({
  framesPath,
  framePrefix = 'frame_',
  zeroPad = 4,
  ext = 'webp',
  totalFrames,
  height = '300vh',
  children,
  id,
}: FrameSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const isReadyRef = useRef(false);

  const currentFrame = useScrollFrame(containerRef, totalFrames);

  // Gera URL do frame com zero-padding
  const getFrameUrl = (index: number) => {
    const padded = String(index + 1).padStart(zeroPad, '0');
    return `${framesPath}/${framePrefix}${padded}.${ext}`;
  };

  // Pré-carrega frames
  useEffect(() => {
    const images: HTMLImageElement[] = Array(totalFrames).fill(null).map(() => new Image());
    imagesRef.current = images;

    const BATCH1_END = Math.min(30, totalFrames);

    // Batch 1: frames críticos (LCP)
    let loaded = 0;
    for (let i = 0; i < BATCH1_END; i++) {
      images[i].onload = () => {
        loaded++;
        if (loaded === 1) {
          syncCanvasSize();
          drawFrame(0);
        }
        if (loaded === BATCH1_END) {
          isReadyRef.current = true;
          drawFrame(currentFrame);
        }
      };
      images[i].src = getFrameUrl(i);
    }

    // Batch 2: resto dos frames (idle)
    const loadRest = () => {
      for (let i = BATCH1_END; i < totalFrames; i++) {
        images[i].src = getFrameUrl(i);
      }
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadRest);
    } else {
      setTimeout(loadRest, 100);
    }
  }, [totalFrames, framesPath]);

  // Sincroniza tamanho do canvas com o container real
  const syncCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  };

  // Desenha frame com cover-fit
  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[frameIndex];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvas.width / canvas.height;
    let drawW = 0, drawH = 0, offsetX = 0, offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawH = canvas.height;
      drawW = canvas.height * imgRatio;
      offsetX = (canvas.width - drawW) / 2;
    } else {
      drawW = canvas.width;
      drawH = canvas.width / imgRatio;
      offsetY = (canvas.height - drawH) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  };

  // Reage ao frame atual
  useEffect(() => {
    if (!isReadyRef.current) return;
    requestAnimationFrame(() => drawFrame(currentFrame));
  }, [currentFrame]);

  // Resize handler
  useEffect(() => {
    const onResize = () => {
      syncCanvasSize();
      drawFrame(currentFrame);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [currentFrame]);

  return (
    <section ref={containerRef} id={id} style={{ height }} className="relative w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%)' }}
        />
        {children}
      </div>
    </section>
  );
}

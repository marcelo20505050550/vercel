import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ServicesSection from '@/components/ui/ServicesSection';
import SequentialFrameAnimation from '@/components/ui/SequentialFrameAnimation';
import RebarbacaoOverlays from '@/components/sections/RebarbacaoOverlays';
import HeroOverlays from '@/components/sections/HeroOverlays';

export const metadata: Metadata = {
  title: 'BV BoaVentura - Rebarbação e Cilindros Hidráulicos',
  description: 'Rebarbação e fabricação de cilindros hidráulicos. Soluções industriais completas com qualidade e excelência em São Joaquim da Barra, SP.',
  keywords: ['Rebarbação', 'Cilindro Hidráulico', 'máquinas especiais'],
  openGraph: {
    title: 'BV BoaVentura - Rebarbação e Cilindros Hidráulicos',
    description: 'Rebarbação e fabricação de cilindros hidráulicos. Soluções industriais completas com qualidade e excelência em São Joaquim da Barra, SP.',
    url: 'https://bvboaventura.com.br/sobre',
    type: 'website',
  },
};

export default function Home() {
  return (
    <MainLayout>
      {/* Animações Sequenciais na Mesma Posição */}
      <SequentialFrameAnimation
        sequences={[
          {
            id: 'rebarbacao',
            framesPath: '/frames/rebarbacao',
            totalFrames: 60,
            overlays: <RebarbacaoOverlays />,
          },
          {
            id: 'hydraulic',
            framesPath: '/frames/hydraulic',
            totalFrames: 192,
            overlays: <HeroOverlays />,
          },
        ]}
        height="800vh"
      />

      {/* Transição suave */}
      <div className="relative -mt-20 bg-gradient-to-b from-transparent via-white/50 to-white h-20 z-10" />

      {/* Conteúdo Principal */}
      <div className="relative z-20 bg-white">
        {/* Serviços Section */}
        <ServicesSection />
      </div>
    </MainLayout>
  );
} 
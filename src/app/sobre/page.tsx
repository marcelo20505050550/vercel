import { Metadata } from 'next';
import SobrePageContent from '@/components/ui/SobrePageContent';
import MainLayout from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'Sobre Nós - BV BoaVentura',
  description: 'Conheça a história da BV BoaVentura, empresa especializada em caldeiraria e implementos agrícolas. Nossa missão, visão e valores que nos tornam referência no setor industrial.',
  keywords: ['sobre BV BoaVentura', 'história', 'empresa caldeiraria', 'missão', 'visão', 'valores'],
  openGraph: {
    title: 'Sobre Nós - BV BoaVentura',
    description: 'Conheça a história da BV BoaVentura e nossa expertise em caldeiraria e implementos agrícolas.',
    url: 'https://bvboaventura.com.br/sobre',
  },
};

export default function SobrePage() {
  return (
    <MainLayout>
      <SobrePageContent />
    </MainLayout>
  );
} 
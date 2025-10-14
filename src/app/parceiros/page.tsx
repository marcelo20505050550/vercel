import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ParceirosPageContent from '@/components/ui/ParceirosPageContent';

export const metadata: Metadata = {
  title: 'Parceiros - BV BoaVentura',
  description: 'Conheça nossos parceiros estratégicos e empresas que confiam em nossas soluções industriais. Parcerias de qualidade no setor industrial.',
  keywords: ['parceiros industriais', 'empresas parceiras', 'clientes BV BoaVentura', 'parcerias'],
  openGraph: {
    title: 'Parceiros - BV BoaVentura',
    description: 'Empresas parceiras e clientes que confiam em nossas soluções industriais.',
    url: 'https://bvboaventura.com.br/parceiros',
  },
};

export default function ParceirosPage() {
  return (
    <MainLayout>
      <ParceirosPageContent />
    </MainLayout>
  );
}
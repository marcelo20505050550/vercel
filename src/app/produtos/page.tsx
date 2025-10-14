import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import FeaturedProductsSection from '@/components/ui/FeaturedProductsSection';

export const metadata: Metadata = {
  title: 'Produtos - BV BoaVentura',
  description: 'Conheça nossa linha completa de produtos: caldeiraria industrial, implementos agrícolas, máquinas especiais, produtos vendidos e serviços de terceiros.',
  keywords: ['produtos industriais', 'caldeiraria', 'implementos agrícolas', 'máquinas especiais', 'BV BoaVentura'],
  openGraph: {
    title: 'Produtos - BV BoaVentura',
    description: 'Linha completa de produtos: caldeiraria, implementos agrícolas e máquinas especiais.',
    url: 'https://bvboaventura.com.br/produtos',
  },
};

export default function ProdutosPage() {
  return (
    <MainLayout>
      <FeaturedProductsSection />
    </MainLayout>
  );
}
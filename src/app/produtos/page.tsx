import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ProdutosPageContent from '@/components/ui/ProdutosPageContent';
import FeaturedProductsSection from '@/components/ui/FeaturedProductsSection';

export const metadata: Metadata = {
  title: 'Produtos | BV Boaventura',
  description: 'Conheça nossa linha completa de produtos: Produtos da BV Boaventura, produtos de terceiros e serviços especializados.',
  keywords: ['produtos industriais', 'caldeiraria', 'implementos agrícolas', 'BV Boaventura', 'máquinas especiais'],
};

export default function ProdutosPage() {
  return (
    <MainLayout>
      <ProdutosPageContent />
      <FeaturedProductsSection />
    </MainLayout>
  );
}
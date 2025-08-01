import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ProdutosCategoryPage from '@/components/ui/ProdutosCategoryPage';

export const metadata: Metadata = {
  title: 'Produtos de Terceiros Vendidos pela BV | BV Boaventura',
  description: 'Produtos de terceiros comercializados pela BV Boaventura com garantia de qualidade.',
  keywords: ['produtos terceiros', 'revenda', 'comercialização', 'BV Boaventura'],
};

export default function VendidosPelaBVPage() {
  return (
    <MainLayout>
      <ProdutosCategoryPage 
        category="vendidos-pela-bv"
        title="Produtos de Terceiros Vendidos pela BV Boaventura"
        description="Produtos de terceiros selecionados e comercializados com nossa qualidade"
      />
    </MainLayout>
  );
}
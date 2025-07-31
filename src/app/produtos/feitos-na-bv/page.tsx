import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ProdutosCategoryPage from '@/components/ui/ProdutosCategoryPage';

export const metadata: Metadata = {
  title: 'Produtos de Terceiros Feitos na BV | BV Boaventura',
  description: 'Produtos de terceiros fabricados com a qualidade e precisão da BV Boaventura.',
  keywords: ['produtos terceiros', 'fabricação terceiros', 'caldeiraria', 'BV Boaventura'],
};

export default function FeitosNaBVPage() {
  return (
    <MainLayout>
      <ProdutosCategoryPage 
        category="feitos-na-bv"
        title="Produtos de Terceiros Feitos na BV Boaventura"
        description="Produtos de terceiros fabricados com nossa expertise e qualidade"
      />
    </MainLayout>
  );
}
import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ProdutosCategoryPage from '@/components/ui/ProdutosCategoryPage';

export const metadata: Metadata = {
  title: 'Serviços em Produtos de Terceiros | BV Boaventura',
  description: 'Serviços especializados em produtos de terceiros com a qualidade BV Boaventura.',
  keywords: ['serviços terceiros', 'manutenção', 'reparo', 'caldeiraria', 'BV Boaventura'],
};

export default function ServicosTerceirosPage() {
  return (
    <MainLayout>
      <ProdutosCategoryPage 
        category="servicos-terceiros"
        title="Serviços em Produtos de Terceiros"
        description="Serviços especializados em produtos de terceiros com nossa expertise técnica"
      />
    </MainLayout>
  );
}
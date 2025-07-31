import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ProdutosCategoryPage from '@/components/ui/ProdutosCategoryPage';

export const metadata: Metadata = {
  title: 'Produtos da BV Boaventura | BV Boaventura',
  description: 'Conheça os produtos desenvolvidos e fabricados pela BV Boaventura com qualidade e inovação.',
  keywords: ['produtos BV Boaventura', 'caldeiraria', 'implementos agrícolas', 'máquinas especiais'],
};

export default function ProdutosBVPage() {
  return (
    <MainLayout>
      <ProdutosCategoryPage 
        category="produtos-bv-boaventura"
        title="Produtos da BV Boaventura"
        description="Produtos desenvolvidos e fabricados com a qualidade e expertise da BV Boaventura"
      />
    </MainLayout>
  );
}
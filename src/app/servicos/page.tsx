import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ServicesPageContent from '@/components/ui/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Serviços - BV BoaVentura',
  description: 'Nossos serviços especializados: caldeiraria industrial, usinagem, solda, manutenção de equipamentos, projetos personalizados e muito mais. Soluções completas para sua indústria.',
  keywords: ['serviços industriais', 'caldeiraria', 'usinagem', 'solda', 'manutenção industrial', 'projetos personalizados'],
  openGraph: {
    title: 'Serviços - BV BoaVentura',
    description: 'Serviços especializados em caldeiraria industrial, usinagem, solda e projetos personalizados.',
    url: 'https://bvboaventura.com.br/servicos',
  },
};

export default function ServicosPage() {
  return (
    <MainLayout>
      <ServicesPageContent />
    </MainLayout>
  );
} 
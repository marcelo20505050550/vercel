import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import RebarbacaoLandingPage from '@/components/services/RebarbacaoLandingPage';

export const metadata: Metadata = {
  title: 'Rebarbação Profissional - BV BoaVentura',
  description: 'Serviço especializado de rebarbação e acabamento em peças metálicas. Remoção de rebarbas, polimento, alisamento e preparação para pintura com qualidade profissional.',
  keywords: ['rebarbação', 'acabamento metálico', 'polimento', 'desbaste', 'preparação para pintura', 'acabamento industrial'],
  openGraph: {
    title: 'Rebarbação Profissional - BV BoaVentura',
    description: 'Acabamento profissional em peças metálicas com remoção de rebarbas, polimento e preparação para pintura.',
    url: 'https://bvboaventura.com.br/servicos/rebarbacao',
    images: [
      {
        url: '/equipamentos/rebarbacao-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Serviço de Rebarbação BV BoaVentura',
      },
    ],
  },
};

export default function RebarbacaoPage() {
  return (
    <MainLayout>
      <RebarbacaoLandingPage />
    </MainLayout>
  );
}

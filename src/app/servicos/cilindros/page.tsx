import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'Cilindros Hidráulicos e Pneumáticos - BV BoaVentura',
  description: 'Fabricação e manutenção de cilindros hidráulicos e pneumáticos sob medida para sistemas de automação industrial.',
  keywords: ['cilindros hidráulicos', 'cilindros pneumáticos', 'automação', 'sistemas hidráulicos'],
  openGraph: {
    title: 'Cilindros Hidráulicos e Pneumáticos - BV BoaVentura',
    description: 'Fabricação e manutenção de cilindros sob medida para automação industrial.',
    url: 'https://bvboaventura.com.br/servicos/cilindros',
  },
};

export default function CilindrosPage() {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-white to-white">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Cilindros Hidráulicos e Pneumáticos</h1>
          <p className="text-lg text-neutral-600 mb-8">Landing page em desenvolvimento</p>
          <a
            href="/servicos"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-neutral-900 font-bold rounded-lg hover:shadow-xl transition-all duration-300"
          >
            Voltar para Serviços
          </a>
        </div>
      </div>
    </MainLayout>
  );
}

import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'Caldeiraria - BV BoaVentura',
  description: 'Soluções sob medida para estruturas e equipamentos metálicos com alta precisão, qualidade e acabamento profissional.',
  keywords: ['caldeiraria', 'estruturas metálicas', 'tanques', 'reservatórios', 'caldeiraria industrial'],
  openGraph: {
    title: 'Caldeiraria - BV BoaVentura',
    description: 'Soluções sob medida para estruturas e equipamentos metálicos com alta precisão e qualidade.',
    url: 'https://bvboaventura.com.br/servicos/caldeiraria',
  },
};

export default function CaldeirairaPage() {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-white to-white">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Caldeiraria</h1>
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

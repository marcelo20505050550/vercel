import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';

export const metadata: Metadata = {
  title: 'Máquinas Especiais - BV BoaVentura',
  description: 'Desenvolvimento de máquinas sob medida para processos industriais específicos, criando soluções exclusivas e inovadoras.',
  keywords: ['máquinas especiais', 'automação industrial', 'máquinas customizadas', 'equipamentos industriais'],
  openGraph: {
    title: 'Máquinas Especiais - BV BoaVentura',
    description: 'Desenvolvimento de máquinas sob medida para processos industriais específicos.',
    url: 'https://bvboaventura.com.br/servicos/maquinas-especiais',
  },
};

export default function MaquinasEspeciaisPage() {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-white to-white">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Máquinas Especiais</h1>
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

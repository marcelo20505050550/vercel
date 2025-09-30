import MainLayout from '@/components/layout/MainLayout';
import ParceirosPageContent from '@/components/ui/ParceirosPageContent';

export const metadata = {
  title: 'Parceiros - BV BoaVentura',
  description: 'Conheça nossos parceiros estratégicos e empresas que confiam em nossas soluções industriais.',
};

export default function ParceirosPage() {
  return (
    <MainLayout>
      <ParceirosPageContent />
    </MainLayout>
  );
}
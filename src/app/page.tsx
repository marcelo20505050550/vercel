import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import ServicesSection from '@/components/ui/ServicesSection';
import AboutSection from '@/components/ui/AboutSection';
import ModernAnimatedBanner from '@/components/ui/RotatingBanner';
import HomeFeaturedProducts from '@/components/ui/HomeFeaturedProducts';
import TestimonialsSection from '@/components/ui/TestimonialsSection';

export const metadata: Metadata = {
  title: 'BV BoaVentura - Caldeiraria e Implementos Agrícolas',
  description: 'Empresa especializada em caldeiraria, implementos agrícolas e máquinas especiais. Soluções industriais completas com qualidade e excelência em São Joaquim da Barra, SP.',
  keywords: ['caldeiraria industrial', 'implementos agrícolas', 'máquinas especiais', 'metalúrgica', 'soluções industriais', 'BV BoaVentura'],
  openGraph: {
    title: 'BV BoaVentura - Caldeiraria e Implementos Agrícolas',
    description: 'Empresa especializada em caldeiraria, implementos agrícolas e máquinas especiais.',
    url: 'https://bvboaventura.com.br',
    type: 'website',
  },
};

export default function Home() {
  return (
    <MainLayout>
      {/* Banner Moderno Animado */}
      <section className="relative overflow-hidden">
        <ModernAnimatedBanner />
      </section>

      {/* Produtos em Destaque */}
      <HomeFeaturedProducts />

      {/* Sobre Section - Moderno */}
      <AboutSection />

      {/* Seção de Depoimentos */}
      <TestimonialsSection />

      {/* Serviços Section */}
      <ServicesSection />
    </MainLayout>
  );
} 
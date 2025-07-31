import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import ServicesSection from '@/components/ui/ServicesSection';
import AboutSection from '@/components/ui/AboutSection';
import ModernAnimatedBanner from '@/components/ui/RotatingBanner';
import RandomProducts from '@/components/ui/RandomProducts';

export default function Home() {
  return (
    <MainLayout>
      {/* Banner Moderno Animado */}
      <section className="relative overflow-hidden">
        <ModernAnimatedBanner />
      </section>

      {/* Produtos em Destaque */}
      <RandomProducts />

      {/* Sobre Section - Moderno */}
      <AboutSection />

      {/* Serviços Section */}
      <ServicesSection />
    </MainLayout>
  );
} 
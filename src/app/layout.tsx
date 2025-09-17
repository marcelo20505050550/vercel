import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BV BoaVentura - Soluções Industriais',
  description: 'Empresa especializada em soluções industriais com excelência e qualidade.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen bg-gray-light`}>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
} 
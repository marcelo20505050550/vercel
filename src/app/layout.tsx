import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://bvboaventura.com.br';
const siteName = 'BV BoaVentura';
const siteDescription = 'BV BoaVentura - Empresa especializada em caldeiraria, implementos agrícolas e máquinas especiais. Soluções industriais completas em São Joaquim da Barra, SP.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - Soluções Industriais`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'caldeiraria',
    'implementos agrícolas',
    'máquinas especiais',
    'soluções industriais',
    'metalúrgica',
    'BV BoaVentura',
    'São Joaquim da Barra',
    'equipamentos industriais',
    'caldeiraria industrial',
    'usinagem',
    'solda',
  ],
  authors: [{ name: 'BV BoaVentura' }],
  creator: 'BV BoaVentura',
  publisher: 'BV BoaVentura',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} - Soluções Industriais`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/image/logo.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Soluções Industriais`,
    description: siteDescription,
    images: [`${siteUrl}/image/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'cgB-tvJly5ybye0T27pmB24o_SrB0-UA6rCUy_HGuA0',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/image/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/image/logo.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/image/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen bg-gray-light`}>
        <JsonLd />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
} 
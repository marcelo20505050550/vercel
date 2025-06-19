/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de imagem para Next.js 15
  images: {
    // Usando sharp como padrão no Next.js 15 (squoosh foi removido)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Configurações de bundle para melhor performance
  experimental: {
    // Configurações experimentais removidas/modificadas no Next.js 15
    optimizePackageImports: ['lucide-react'],
  },
  
  // Configurações de transpilação de pacotes externos
  transpilePackages: ['framer-motion'],
  
  // Configurações de logging para desenvolvimento
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  
  // Configurações de build
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig; 
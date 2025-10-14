/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO: Configurações de domínio e redirects
  // NOTA: Descomente os redirects APENAS APÓS configurar o domínio customizado na Vercel
  // async redirects() {
  //   return [
  //     // Redireciona www para domínio principal
  //     {
  //       source: '/:path*',
  //       has: [
  //         {
  //           type: 'host',
  //           value: 'www.bvboaventura.com.br',
  //         },
  //       ],
  //       destination: 'https://bvboaventura.com.br/:path*',
  //       permanent: true,
  //     },
  //     // Redireciona domínio Vercel para domínio principal
  //     {
  //       source: '/:path*',
  //       has: [
  //         {
  //           type: 'host',
  //           value: '(.*)vercel.app',
  //         },
  //       ],
  //       destination: 'https://bvboaventura.com.br/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },

  // Configurações de imagem para Next.js 15
  images: {
    // Usando sharp como padrão no Next.js 15 (squoosh foi removido)
    // SEGURANÇA: Restringir domínios permitidos para imagens
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'lcwzjehpjjgmekuculue.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'bvboaventura.com.br',
      },
      {
        protocol: 'https',
        hostname: 'www.bvboaventura.com.br',
      },
    ],
  },
  
  // SEGURANÇA: Headers de segurança para todas as páginas
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // unsafe-eval necessário para Next.js
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://*.supabase.co https://api.resend.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; ')
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          }
        ],
      },
    ];
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
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware para adicionar logs
export function middleware(request: NextRequest) {
  // Obter o caminho da URL
  const path = request.nextUrl.pathname;

  // Log apenas para rotas específicas (como API)
  if (path.startsWith('/api/')) {
    console.log(`[Middleware] Requisição para ${path}`);
  }

  // Sempre continua para a próxima middleware ou rota
  return NextResponse.next();
}

// Configurar os caminhos onde o middleware será executado
export const config = {
  matcher: [
    '/api/:path*'
  ],
}; 
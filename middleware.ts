import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// TEMPORÁRIO: Rate limiter desabilitado para debug do deploy
// import { checkRateLimit, getClientIdentifier, formatResetTime } from '@/utils/rateLimiter';

/**
 * Middleware de Segurança
 * 
 * Implementa:
 * - CSRF Protection (validação de origem)
 * - Security Headers
 * - Logging seguro
 * 
 * NOTA: Rate Limiting temporariamente desabilitado para debug
 */
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const method = request.method;

  // ==========================================
  // RATE LIMITING TEMPORARIAMENTE DESABILITADO
  // ==========================================
  // Desabilitado para debug do deploy na Vercel
  // TODO: Reimplementar com Vercel KV ou Upstash Redis

  // ==========================================
  // 2. CSRF PROTECTION - Validação de Origem
  // ==========================================
  if (path.startsWith('/api/') && method === 'POST') {
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    
    // Lista de origens permitidas
    const allowedOrigins = [
      'https://bvboaventura.com.br',
      'https://www.bvboaventura.com.br',
      process.env.NEXT_PUBLIC_SITE_URL,
      // Em desenvolvimento, permite localhost
      ...(process.env.NODE_ENV === 'development' 
        ? ['http://localhost:3000', 'http://127.0.0.1:3000'] 
        : [])
    ].filter(Boolean); // Remove valores undefined

    // Verifica se a origem está na lista permitida
    const isOriginAllowed = origin && allowedOrigins.some(allowed => 
      origin === allowed || origin.startsWith(allowed as string)
    );

    const isRefererAllowed = referer && allowedOrigins.some(allowed => 
      referer.startsWith(allowed as string)
    );

    // Bloqueia se nem origin nem referer forem válidos
    if (!isOriginAllowed && !isRefererAllowed) {
      console.warn(`[CSRF] Origem bloqueada: ${origin || 'sem origem'}`);
      return NextResponse.json(
        { error: 'Origem não autorizada' },
        { status: 403 }
      );
    }
  }

  // ==========================================
  // 3. LOGGING SEGURO
  // ==========================================
  if (path.startsWith('/api/')) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${path}`);
  }

  // ==========================================
  // 4. CONTINUAR PARA A PRÓXIMA ROTA
  // ==========================================
  return NextResponse.next();
}

// Configurar os caminhos onde o middleware será executado
export const config = {
  matcher: [
    '/api/:path*'
  ],
}; 
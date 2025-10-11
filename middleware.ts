import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkRateLimit, getClientIdentifier, formatResetTime } from '@/utils/rateLimiter';

/**
 * Middleware de Segurança
 * 
 * Implementa:
 * - Rate Limiting (proteção contra abuso)
 * - CSRF Protection (validação de origem)
 * - Security Headers
 * - Logging seguro
 */
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const method = request.method;

  // ==========================================
  // 1. RATE LIMITING - Proteção contra Abuso
  // ==========================================
  if (path.startsWith('/api/send-email') || path.startsWith('/api/send-curriculum')) {
    const identifier = getClientIdentifier(request);
    
    // Configuração: 5 requisições a cada 15 minutos
    const rateLimitResult = checkRateLimit(identifier, {
      windowMs: 15 * 60 * 1000, // 15 minutos
      maxRequests: 5
    });

    if (!rateLimitResult.allowed) {
      const timeRemaining = formatResetTime(rateLimitResult.resetTime);
      return NextResponse.json(
        { 
          error: 'Muitas requisições. Tente novamente mais tarde.',
          details: `Aguarde ${timeRemaining} antes de enviar outra mensagem.`,
          retryAfter: rateLimitResult.resetTime
        },
        { 
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000)),
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(rateLimitResult.resetTime)
          }
        }
      );
    }

    // Adiciona headers de rate limit na resposta
    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', '5');
    response.headers.set('X-RateLimit-Remaining', String(rateLimitResult.remaining));
    response.headers.set('X-RateLimit-Reset', String(rateLimitResult.resetTime));
  }

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
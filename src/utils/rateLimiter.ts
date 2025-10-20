/**
 * Sistema de Rate Limiting
 * 
 * Previne abuso de APIs e ataques DDoS básicos
 * Para produção com múltiplas instâncias, considere usar Redis
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

// Armazenamento em memória (para ambiente de desenvolvimento/single instance)
// Para produção com múltiplas instâncias, use Redis ou similar
const requestCounts = new Map<string, RateLimitRecord>();

/**
 * Limpeza sob demanda de registros expirados
 * Executa apenas quando checkRateLimit é chamado
 * Adequado para ambientes serverless como Vercel
 */
function cleanupExpiredRecords() {
  const now = Date.now();
  for (const [key, record] of requestCounts.entries()) {
    if (now > record.resetTime) {
      requestCounts.delete(key);
    }
  }
}

interface RateLimitConfig {
  windowMs: number;  // Janela de tempo em milissegundos
  maxRequests: number; // Número máximo de requisições na janela
}

/**
 * Verifica se um IP excedeu o limite de requisições
 * @returns true se dentro do limite, false se excedeu
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = { windowMs: 15 * 60 * 1000, maxRequests: 5 }
): { allowed: boolean; remaining: number; resetTime: number } {
  // Limpa registros expirados antes de verificar
  cleanupExpiredRecords();
  
  const now = Date.now();
  const record = requestCounts.get(identifier);

  if (record && now < record.resetTime) {
    // Dentro da janela de tempo atual
    if (record.count >= config.maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: record.resetTime
      };
    }
    
    record.count++;
    return {
      allowed: true,
      remaining: config.maxRequests - record.count,
      resetTime: record.resetTime
    };
  } else {
    // Nova janela de tempo
    const resetTime = now + config.windowMs;
    requestCounts.set(identifier, { count: 1, resetTime });
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime
    };
  }
}

/**
 * Obtém o identificador único do cliente (IP ou fallback)
 */
export function getClientIdentifier(request: Request): string {
  // Tenta obter o IP real do cliente
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  
  if (forwardedFor) {
    // x-forwarded-for pode conter múltiplos IPs, pega o primeiro
    return forwardedFor.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  // Fallback para user-agent + accept-language (menos preciso mas melhor que nada)
  const userAgent = request.headers.get('user-agent') || 'unknown';
  const acceptLang = request.headers.get('accept-language') || 'unknown';
  return `${userAgent}-${acceptLang}`.substring(0, 100);
}

/**
 * Formata o tempo restante até o reset
 */
export function formatResetTime(resetTime: number): string {
  const secondsUntilReset = Math.ceil((resetTime - Date.now()) / 1000);
  
  if (secondsUntilReset < 60) {
    return `${secondsUntilReset} segundos`;
  }
  
  const minutesUntilReset = Math.ceil(secondsUntilReset / 60);
  return `${minutesUntilReset} minuto${minutesUntilReset > 1 ? 's' : ''}`;
}

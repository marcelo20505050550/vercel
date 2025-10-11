/**
 * Sistema de Logs Seguro
 * 
 * Previne exposição de dados sensíveis em logs de produção
 * e fornece logs detalhados apenas em ambiente de desenvolvimento
 */

const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * Mascara dados sensíveis (emails, telefones, etc)
 */
function maskSensitiveData(data: string): string {
  if (!data) return '';
  
  // Mascara email (mantém 2 primeiros chars e domínio)
  if (data.includes('@')) {
    const [local, domain] = data.split('@');
    return `${local.substring(0, 2)}***@${domain}`;
  }
  
  // Mascara outros dados (mantém 25% dos caracteres)
  const visibleChars = Math.ceil(data.length * 0.25);
  return data.substring(0, visibleChars) + '*'.repeat(data.length - visibleChars);
}

export const logger = {
  /**
   * Log de informação geral (seguro para produção)
   */
  info: (message: string, data?: any) => {
    if (isDevelopment) {
      console.log(`[INFO] ${message}`, data);
    } else {
      console.log(`[INFO] ${message}`);
    }
  },

  /**
   * Log de erro (sempre registra, mas sem dados sensíveis em produção)
   */
  error: (message: string, error?: any) => {
    if (isDevelopment) {
      console.error(`[ERROR] ${message}`, error);
    } else {
      // Em produção, loga apenas a mensagem do erro
      const errorMessage = error?.message || String(error);
      console.error(`[ERROR] ${message}: ${errorMessage}`);
    }
  },

  /**
   * Log de aviso
   */
  warn: (message: string, data?: any) => {
    if (isDevelopment) {
      console.warn(`[WARN] ${message}`, data);
    } else {
      console.warn(`[WARN] ${message}`);
    }
  },

  /**
   * Log de debug (APENAS em desenvolvimento)
   */
  debug: (message: string, data?: any) => {
    if (isDevelopment) {
      console.log(`[DEBUG] ${message}`, data);
    }
  },

  /**
   * Log com dados sensíveis (email, telefone, etc)
   * Mascara os dados em produção
   */
  sensitive: (message: string, sensitiveData?: string) => {
    if (isDevelopment) {
      console.log(`[SENSITIVE] ${message}`, sensitiveData);
    } else if (sensitiveData) {
      console.log(`[SENSITIVE] ${message}`, maskSensitiveData(sensitiveData));
    }
  },

  /**
   * Log de sucesso
   */
  success: (message: string) => {
    if (isDevelopment) {
      console.log(`[SUCCESS] ✓ ${message}`);
    } else {
      console.log(`[SUCCESS] ${message}`);
    }
  },

  /**
   * Log de API request (para monitoramento)
   */
  apiRequest: (method: string, path: string, status?: number) => {
    if (isDevelopment) {
      console.log(`[API] ${method} ${path}${status ? ` - ${status}` : ''}`);
    }
  }
};

export default logger;

"use client";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

/**
 * Envia um email a partir do formulário de contato
 * @param formData Dados do formulário de contato
 * @returns Promise com o resultado do envio
 */
export async function sendContactEmail(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
  // Criar controller para timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout
  
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    const result = await response.json();
    
    if (response.ok) {
      return {
        success: true,
        message: result.message || 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      };
    } else {
      console.error('Erro ao enviar email (API):', result);
      return {
        success: false,
        message: result.error || 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
      };
    }
  } catch (error: any) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      return {
        success: false,
        message: 'Tempo de requisição excedido. Por favor, tente novamente.'
      };
    }
    
    console.error('Erro ao enviar email:', error);
    return {
      success: false,
      message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
    };
  }
}

/**
 * Função de fallback que simula o envio de email (para fins de demonstração)
 * Só será usada se a API falhar completamente
 */
export async function simulateEmailSending(formData: ContactFormData): Promise<{ success: boolean }> {
  return new Promise((resolve) => {
    // Simula um tempo de processamento
    setTimeout(() => {
      console.log('Simulando envio de email (fallback):', {
        to: 'bvcaldeiraria@gmail.com',
        emailSubject: `Contato pelo site: ${formData.subject}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      });
      
      resolve({ success: true });
    }, 1500);
  });
} 
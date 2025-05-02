"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormData } from '@/services/emailService';

// Regex para validação básica de formato de email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Lista de extensões de domínio válidas
const validExtensions = [
  'com', 'net', 'org', 'edu', 'gov', 'mil', 'br', 'info', 'io', 
  'co', 'us', 'uk', 'ca', 'au', 'de', 'jp', 'fr', 'it', 'es', 
  'nl', 'eu', 'tech', 'online', 'store', 'app', 'dev', 'site',
  'xyz', 'me', 'tv', 'biz', 'cc', 'name'
];

// Lista de domínios inválidos/de teste frequentemente usados
const invalidDomains = [
  'teste.com', 'teste.teste', 'teste.br', 'test.test', 'test.com',
  'exemplo.com', 'exemplo.com.br', 'example.com', 'mailinator.com',
  'exemplo.teste', 'example.test', 'invalid.com', 'invalid.invalid',
  '123.com', '123.123', 'aaa.aaa', 'bbb.bbb', 'zzz.zzz', 'abc.xyz'
];

// Função completa de validação de email
function validateEmail(email: string): boolean {
  // Verificação básica de formato
  if (!emailRegex.test(email)) return false;
  
  // Extrair domínio e extensão
  const domainPart = email.split('@')[1];
  if (!domainPart.includes('.')) return false;
  
  // Verificar se o domínio está na lista de domínios inválidos
  if (invalidDomains.includes(domainPart.toLowerCase())) return false;
  
  // Verificar se a extensão é válida
  const extension = domainPart.split('.').pop()?.toLowerCase();
  if (!extension || !validExtensions.includes(extension)) return false;
  
  return true;
}

// Regex para validação de telefone brasileiro (aceita os formatos mais comuns)
const phoneRegex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;

// Schema de validação aprimorado
const contactFormSchema = z.object({
  name: z.string()
    .min(3, { message: 'Nome deve ter pelo menos 3 caracteres' })
    .refine(name => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name), { 
      message: 'Nome deve conter apenas letras e espaços'
    }),
  
  email: z.string()
    .min(5, { message: 'Email é obrigatório' })
    .email({ message: 'Formato de email inválido' })
    .refine(email => validateEmail(email), {
      message: 'Por favor, insira um email válido (não use emails temporários ou fictícios)'
    }),
  
  phone: z.string()
    .min(10, { message: 'Telefone deve ter pelo menos 10 dígitos' })
    .refine(phone => phoneRegex.test(phone.replace(/\s+/g, '')), {
      message: 'Formato de telefone inválido. Use (00) 00000-0000'
    }),
  
  subject: z.string()
    .min(3, { message: 'Assunto deve ter pelo menos 3 caracteres' })
    .max(100, { message: 'Assunto muito longo' }),
  
  message: z.string()
    .min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' })
    .max(2000, { message: 'Mensagem muito longa' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [debugInfo, setDebugInfo] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur', // Valida quando o campo perde o foco
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });
    setDebugInfo(null);

    try {
      console.log('Enviando dados para a API:', data);
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Status da resposta:', response.status);

      // Tenta obter a resposta como texto primeiro para debug
      const responseText = await response.text();
      console.log('Resposta como texto:', responseText);

      // Tenta converter para JSON
      let result;
      try {
        result = JSON.parse(responseText);
        console.log('Resposta como JSON:', result);
      } catch (parseError) {
        console.error('Erro ao converter resposta para JSON:', parseError);
        setDebugInfo(`Erro ao analisar resposta: ${responseText}`);
        throw new Error(`Resposta inválida: ${responseText}`);
      }

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: result.message || 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        });
        reset(); // Limpa o formulário
      } else {
        const errorMessage = result.error || result.details || 'Ocorreu um erro ao enviar sua mensagem.';
        console.error('Erro da API:', errorMessage);
        setFormStatus({
          type: 'error',
          message: errorMessage + ' Por favor, tente novamente.',
        });
        setDebugInfo(`Status: ${response.status}, Erro: ${JSON.stringify(result)}`);
      }
    } catch (error: any) {
      console.error('Erro na requisição:', error);
      setFormStatus({
        type: 'error',
        message: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.',
      });
      setDebugInfo(`Erro técnico: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função para formatar o telefone enquanto digita
  const formatPhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove não-números
    
    if (value.length <= 2) {
      input.value = value;
    } else if (value.length <= 6) {
      input.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length <= 10) {
      input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else {
      input.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
          Nome Completo *
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.name ? 'border-red-500' : 'border-gray'
          }`}
          placeholder="Seu nome completo"
          {...register('name')}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      {/* Email e Telefone na mesma linha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.email ? 'border-red-500' : 'border-gray'
            }`}
            placeholder="seu.email@exemplo.com"
            {...register('email')}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text mb-1">
            Telefone *
          </label>
          <input
            id="phone"
            type="tel"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.phone ? 'border-red-500' : 'border-gray'
            }`}
            placeholder="(00) 00000-0000"
            {...register('phone')}
            onChange={formatPhoneNumber}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
        </div>
      </div>

      {/* Assunto */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">
          Assunto *
        </label>
        <input
          id="subject"
          type="text"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.subject ? 'border-red-500' : 'border-gray'
          }`}
          placeholder="Assunto da mensagem"
          {...register('subject')}
        />
        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
          Mensagem *
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.message ? 'border-red-500' : 'border-gray'
          }`}
          placeholder="Digite sua mensagem aqui..."
          {...register('message')}
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      {/* Status da mensagem */}
      {formStatus.type && (
        <div
          className={`p-4 rounded-md ${
            formStatus.type === 'success' ? 'bg-green-100 border border-green-400' : 'bg-red-100 border border-red-400'
          }`}
        >
          <p
            className={`text-sm ${
              formStatus.type === 'success' ? 'text-green-700' : 'text-red-700'
            }`}
          >
            {formStatus.message}
          </p>
          
          {/* Informações de debug, apenas visíveis em caso de erro */}
          {formStatus.type === 'error' && debugInfo && (
            <details className="mt-2 text-xs text-gray-700">
              <summary>Detalhes técnicos (para suporte)</summary>
              <pre className="mt-1 p-2 bg-gray-100 rounded whitespace-pre-wrap">{debugInfo}</pre>
            </details>
          )}
        </div>
      )}

      {/* Botão de envio */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary py-3 flex justify-center items-center ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : (
            'Enviar Mensagem'
          )}
        </button>
        <p className="text-xs text-gray-dark mt-2">
          * Campos obrigatórios
        </p>
      </div>
    </form>
  );
};

export default ContactForm; 
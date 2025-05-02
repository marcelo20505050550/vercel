import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Funções para validação
// Validar email usando regex mais rigorosa e lista de domínios válidos
function isValidEmail(email: string): boolean {
  // Regex básica para formato de email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!emailRegex.test(email)) {
    return false;
  }
  
  // Extrai o domínio do email
  const domainPart = email.split('@')[1];
  
  // Verifica se o domínio tem pelo menos um ponto (para excluir domínios como "exemplo")
  if (!domainPart.includes('.')) {
    return false;
  }
  
  // Extrai a extensão do domínio (com, br, org, etc)
  const extension = domainPart.split('.').pop()?.toLowerCase();
  
  // Lista de extensões de domínio comuns e válidas
  const validExtensions = [
    'com', 'net', 'org', 'edu', 'gov', 'mil', 'br', 'info', 'io', 
    'co', 'us', 'uk', 'ca', 'au', 'de', 'jp', 'fr', 'it', 'es', 
    'nl', 'eu', 'tech', 'online', 'store', 'app', 'dev', 'site',
    'xyz', 'me', 'tv', 'biz', 'cc', 'name'
  ];
  
  // Verificar domínios de teste frequentemente usados em formulários
  const invalidDomains = [
    'teste.com', 'teste.teste', 'teste.br', 'test.test', 'test.com',
    'exemplo.com', 'exemplo.com.br', 'example.com', 'mailinator.com',
    'exemplo.teste', 'example.test', 'invalid.com', 'invalid.invalid',
    '123.com', '123.123', 'aaa.aaa', 'bbb.bbb', 'zzz.zzz', 'abc.xyz'
  ];
  
  // Verifica se o domínio completo não está na lista de domínios inválidos
  if (invalidDomains.includes(domainPart.toLowerCase())) {
    console.log(`Email rejeitado: domínio ${domainPart} está na lista de domínios inválidos`);
    return false;
  }
  
  // Verifica se a extensão é válida
  if (!extension || !validExtensions.includes(extension)) {
    console.log(`Email rejeitado: extensão ${extension} não está na lista de extensões válidas`);
    return false;
  }
  
  return true;
}

// Validar telefone usando regex
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
}

// Inicializa o Resend com a chave API
const resendApiKey = process.env.RESEND_API_KEY;

// Verifica se a chave API está presente
if (!resendApiKey) {
  console.error("RESEND_API_KEY não está definida no ambiente!");
}

const resend = new Resend(resendApiKey);

// Email verificado para receber todas as mensagens
const verifiedEmail = "marcelodiassanto@gmail.com";

// Dados da empresa para incluir no email
const COMPANY_DATA = {
  name: "BV Caldeiraria",
  phone: "(16) 99162-4446",
  instagram: "@bvcaldeiraria",
  facebook: "@bvcaldeiraria",
  address: "Rua Antônio Stupelli, 676, São Joaquim da Barra - SP",
  email: "bvcaldeiraria@gmail.com"
};

export async function POST(request: NextRequest) {
  try {
    // Log para depuração da API
    console.log("API send-email chamada com sucesso");
    console.log("Ambiente:", process.env.NODE_ENV);
    console.log("Resend API Key configurada:", !!resendApiKey);

    const { name, email, phone, subject, message } = await request.json();

    // Validação básica de campos obrigatórios
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    // Validação específica para email
    if (!isValidEmail(email)) {
      console.log("Email inválido rejeitado:", email);
      return NextResponse.json(
        { error: "O email fornecido não é válido ou parece ser um email temporário/fictício" },
        { status: 400 }
      );
    }

    // Validação específica para telefone
    if (!isValidPhone(phone)) {
      console.log("Telefone inválido rejeitado:", phone);
      return NextResponse.json(
        { error: "O telefone fornecido não é válido. Use o formato (00) 00000-0000" },
        { status: 400 }
      );
    }
    
    console.log("Enviando email para:", verifiedEmail);

    // HTML mais elaborado com dados da empresa
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #FFD700;">
          <h1 style="color: #333; margin: 0;">Nova Mensagem de Contato</h1>
          <p style="color: #666; margin: 5px 0 0;">BV Caldeiraria</p>
        </div>
        
        <div style="padding: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Detalhes do Contato</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Assunto:</strong> ${subject}</p>
          
          <h3 style="color: #333; margin-top: 20px;">Mensagem:</h3>
          <div style="background-color: #f8f8f8; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666;">
          <p><strong>Mensagem recebida através do formulário de contato do site.</strong></p>
          <p>© ${new Date().getFullYear()} ${COMPANY_DATA.name} - ${COMPANY_DATA.address}</p>
        </div>
      </div>
    `;

    try {
      const { data, error } = await resend.emails.send({
        from: "BV BoaVentura <onboarding@resend.dev>",
        to: [verifiedEmail],
        subject: `Contato pelo site: ${subject}`,
        replyTo: email,
        text: `
          Nome: ${name}
          Email: ${email}
          Telefone: ${phone}
          
          Mensagem:
          ${message}
          
          ---
          Mensagem recebida através do formulário de contato do site.
          ${COMPANY_DATA.name} - ${COMPANY_DATA.phone}
        `,
        html: htmlContent,
      });

      if (error) {
        console.error("Erro do Resend:", error);
        return NextResponse.json(
          { 
            error: "Erro ao enviar mensagem", 
            details: error.message 
          },
          { status: 500 }
        );
      }

      console.log('Email enviado com sucesso para:', verifiedEmail);

      return NextResponse.json({ 
        success: true, 
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        data 
      });
    } catch (sendError: any) {
      console.error("Erro ao enviar email via Resend:", sendError);
      return NextResponse.json(
        { 
          error: "Erro ao enviar email via serviço", 
          details: sendError.message 
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Erro no servidor:", error);
    return NextResponse.json(
      { 
        error: "Erro interno do servidor", 
        details: error.message 
      },
      { status: 500 }
    );
  }
} 
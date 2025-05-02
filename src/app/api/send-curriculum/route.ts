import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Garantir que a chave API esteja sempre disponível
const resendApiKey = process.env.RESEND_API_KEY || "";
const resend = new Resend(resendApiKey);

// Email para receber os currículos (manter este email, pois é o verificado na conta Resend)
const emailDestino = "marcelodiassanto@gmail.com";

// Função para validar arquivo
const validateFile = (file: File): { isValid: boolean; errorMessage?: string } => {
  // Validar tamanho (máximo 5MB)
  if (file.size > 5 * 1024 * 1024) {
    return { isValid: false, errorMessage: 'O arquivo deve ter no máximo 5MB' };
  }

  // Validar tipo de arquivo (PDF, DOC, DOCX)
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  
  if (!allowedTypes.includes(file.type)) {
    return { isValid: false, errorMessage: 'Formato inválido. Por favor, envie um arquivo PDF, DOC ou DOCX' };
  }

  return { isValid: true };
};

export async function POST(request: NextRequest) {
  console.log('Iniciando processamento de currículo');
  
  // Verificar a chave API
  if (!resendApiKey) {
    console.error('ERRO: Chave de API da Resend não configurada!');
    return NextResponse.json({ error: 'Configuração do servidor incompleta. Contate o administrador.' }, { status: 500 });
  }

  try {
    // Obter o formulário enviado
    const formData = await request.formData();
    
    // Listar todos os campos recebidos
    console.log('Campos recebidos:', Array.from(formData.keys()));
    
    // Processar o arquivo
    const file = formData.get('resume') as File;
    if (file) {
      console.log('Arquivo recebido:', {
        nome: file.name,
        tamanho: `${(file.size / 1024).toFixed(2)}KB`,
        tipo: file.type
      });
    } else {
      console.warn('Nenhum arquivo recebido no formulário. Campos disponíveis:', Array.from(formData.keys()));
      return NextResponse.json({ error: 'É necessário anexar um currículo' }, { status: 400 });
    }

    // Validar arquivo
    const fileValidation = validateFile(file);
    if (!fileValidation.isValid) {
      console.error(`Arquivo inválido: ${fileValidation.errorMessage}`);
      return NextResponse.json({ error: fileValidation.errorMessage }, { status: 400 });
    }

    // Extrair o nome do arquivo (sem extensão) para usar como nome do candidato
    const fileName = file.name;
    const candidateName = fileName.substring(0, fileName.lastIndexOf('.')) || fileName;

    // Preparar arquivo para envio
    let fileContent;
    try {
      const buffer = Buffer.from(await file.arrayBuffer());
      fileContent = buffer.toString('base64');
      console.log(`Arquivo codificado em base64 com sucesso (${buffer.length} bytes)`);
    } catch (fileError) {
      console.error('Erro ao processar o arquivo:', fileError);
      return NextResponse.json({ error: 'Erro ao processar o arquivo enviado. Tente novamente.' }, { status: 500 });
    }

    console.log('Preparando para enviar email com currículo anexado');
    
    // HTML para o email
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px;">
        <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #FFD700;">
          <h1 style="color: #333; margin: 0;">Novo Currículo Recebido</h1>
          <p style="color: #666; margin: 5px 0 0;">BV Caldeiraria</p>
        </div>
        
        <div style="padding: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Detalhes do Arquivo</h2>
          <p><strong>Nome do arquivo:</strong> ${file.name}</p>
          <p><strong>Tamanho:</strong> ${(file.size / 1024).toFixed(2)}KB</p>
          <p><strong>Tipo:</strong> ${file.type}</p>
          
          <p style="background-color: #f8f8f8; padding: 15px; border-radius: 4px; margin-top: 20px;">
            O currículo está anexado a este email.
          </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; font-size: 12px; color: #666;">
          <p><strong>Currículo recebido através do formulário do site.</strong></p>
          <p>© ${new Date().getFullYear()} BV Caldeiraria - Rua Antônio Stupelli, 676, São Joaquim da Barra - SP</p>
        </div>
      </div>
    `;
    
    try {
      console.log(`Enviando email para: ${emailDestino}`);
      
      const { data, error } = await resend.emails.send({
        from: "BV BoaVentura <onboarding@resend.dev>", // Usar onboarding@resend.dev para evitar problemas com domínios não verificados
        to: [emailDestino],
        subject: `Currículo recebido - ${candidateName}`,
        html: htmlContent,
        attachments: [
          {
            filename: file.name,
            content: fileContent,
          },
        ],
      });

      if (error) {
        console.error('Erro ao enviar email com o Resend:', error);
        return NextResponse.json({ 
          error: 'Falha ao enviar currículo. Tente novamente mais tarde.',
          details: error.message 
        }, { status: 500 });
      }

      console.log('Email enviado com sucesso:', data?.id);
      return NextResponse.json({ 
        success: true, 
        message: 'Currículo enviado com sucesso! Entraremos em contato em breve.'
      });
    } catch (emailError: any) {
      console.error('Exceção ao enviar email:', emailError.message);
      // Adicionando mais detalhes ao log para diagnóstico
      if (emailError.response) {
        console.error('Detalhes do erro da API:', {
          status: emailError.response.status,
          data: emailError.response.data
        });
      }
      
      return NextResponse.json({ 
        error: 'Falha ao enviar currículo. Por favor, tente novamente mais tarde ou entre em contato por outro meio.',
        details: emailError.message 
      }, { status: 500 });
    }
  } catch (error: any) {
    console.error('Erro ao processar a requisição:', error);
    return NextResponse.json({ 
      error: 'Erro interno do servidor',
      details: error.message 
    }, { status: 500 });
  }
} 
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import logger from '@/utils/logger';

// Inicializar o cliente Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    logger.info('API send-curriculum chamada');
    
    // Obter os dados do formulário
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;
    
    // Validar dados obrigatórios
    if (!name || !email || !phone) {
      return NextResponse.json({
        success: false,
        message: 'Nome, email e telefone são obrigatórios'
      }, { status: 400 });
    }
    
    // Validar arquivo se presente
    if (file) {
      // Validar tamanho (máximo 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB em bytes
      if (file.size > maxSize) {
        logger.warn('Arquivo muito grande rejeitado', `${(file.size / 1024 / 1024).toFixed(2)}MB`);
        return NextResponse.json({
          success: false,
          message: 'Arquivo muito grande. Tamanho máximo permitido: 5MB',
          currentSize: `${(file.size / 1024 / 1024).toFixed(2)}MB`
        }, { status: 400 });
      }
      
      // Validar tipo de arquivo
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        logger.warn('Tipo de arquivo não permitido', file.type);
        return NextResponse.json({
          success: false,
          message: 'Tipo de arquivo não permitido. Use apenas PDF ou DOC/DOCX',
          receivedType: file.type
        }, { status: 400 });
      }
      
      logger.debug('Arquivo validado', `${file.name} (${(file.size / 1024).toFixed(2)}KB)`);
    }
    
    // Preparar o conteúdo do email
    let emailContent = `
      <h2>Novo Currículo Recebido</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
    `;
    
    if (message) {
      emailContent += `<p><strong>Mensagem:</strong> ${message}</p>`;
    }
    
    if (file) {
      emailContent += `<p><strong>Arquivo anexado:</strong> ${file.name} (${(file.size / 1024).toFixed(2)} KB)</p>`;
    }
    
    // Enviar email
    const emailData = {
      from: 'BV BoaVentura <onboarding@resend.dev>',
      to: ['contato@bvboaventura.com.br'],
      subject: `Novo Currículo: ${name}`,
      html: emailContent,
    };
    
    // Adicionar anexo se houver
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      
      // @ts-ignore - A tipagem do Resend não inclui attachments, mas a API suporta
      emailData.attachments = [
        {
          filename: file.name,
          content: buffer
        }
      ];
    }
    
    // Enviar o email
    const { data, error } = await resend.emails.send(emailData);
    
    if (error) {
      logger.error('Erro ao enviar email', error);
      return NextResponse.json({
        success: false,
        message: 'Erro ao enviar o currículo',
        error: error.message
      }, { status: 500 });
    }
    
    logger.success('Currículo enviado com sucesso');
    
    return NextResponse.json({
      success: true,
      message: 'Currículo enviado com sucesso',
      data
    });
    
  } catch (error) {
    logger.error('Erro ao processar envio de currículo', error);
    return NextResponse.json({
      success: false,
      message: 'Erro ao processar o envio do currículo',
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }, { status: 500 });
  }
}

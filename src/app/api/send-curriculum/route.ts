import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializar o cliente Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
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
      console.error('Erro ao enviar email:', error);
      return NextResponse.json({
        success: false,
        message: 'Erro ao enviar o currículo',
        error: error.message
      }, { status: 500 });
    }
    
    return NextResponse.json({
      success: true,
      message: 'Currículo enviado com sucesso',
      data
    });
    
  } catch (error) {
    console.error('Erro ao processar envio de currículo:', error);
    return NextResponse.json({
      success: false,
      message: 'Erro ao processar o envio do currículo',
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }, { status: 500 });
  }
}

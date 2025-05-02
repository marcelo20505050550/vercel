# BV BoaVentura - Site Institucional

Site institucional da empresa BV BoaVentura especializada em caldeiraria, implementos agrícolas e máquinas especiais.

## Configuração do Ambiente

### Variáveis de Ambiente

Para o correto funcionamento do formulário de contato, é necessário definir as seguintes variáveis de ambiente:


### Configuração na Vercel

Ao fazer deploy na Vercel, é necessário configurar as variáveis de ambiente no painel da Vercel:

1. Acesse o dashboard do projeto na Vercel
2. Vá para "Settings" > "Environment Variables"
3. Adicione a variável `RESEND_API_KEY` com o valor correto
4. Adicione a variável `NEXT_PUBLIC_CONTACT_EMAIL` com o email da empresa

Alternativamente, você pode usar o arquivo `vercel.json` (já configurado neste projeto).

## Resend - Serviço de Email

O projeto utiliza o serviço Resend para envio de emails do formulário de contato. Notas importantes:

- Em ambiente de desenvolvimento, os emails são enviados apenas para o email verificado no Resend (`marcelodiassanto@gmail.com`)
- Em produção, os emails são enviados para o email da empresa (`bvcaldeiraria@gmail.com`), desde que um domínio esteja verificado no Resend

Para mais detalhes sobre a configuração do Resend, consulte o arquivo [RESEND_SETUP.md](./RESEND_SETUP.md).

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Iniciar servidor de produção
npm start
```

## Tecnologias

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Resend (API de emails)
- React Hook Form + Zod (validação de formulários)

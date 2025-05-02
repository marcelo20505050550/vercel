# Configuração do Resend para Envio de Emails

Este documento descreve como configurar corretamente o serviço Resend para envio de emails do formulário de contato da BV Caldeiraria.

## Restrição do Resend em Ambiente de Teste

> **Por que não podemos enviar emails diretamente para bvcaldeiraria@gmail.com em ambiente de teste?**

O Resend impõe uma restrição de segurança: em contas gratuitas ou não verificadas, o serviço permite enviar emails **apenas para o endereço do proprietário da conta**. Esta é uma prática comum em serviços de email para evitar spam.

## Configuração Atual

Atualmente, o projeto está configurado com dois modos de operação:

1. **Modo de Teste/Desenvolvimento**: 
   - Envia emails apenas para o endereço verificado na conta do Resend (`marcelodiassanto@gmail.com`)
   - Ativo quando `NODE_ENV` não está definido como "production"
   - Permite testar o formulário sem erros

2. **Modo de Produção**: 
   - Enviará emails para o endereço da empresa (`bvcaldeiraria@gmail.com`)
   - Ativo quando `NODE_ENV=production` e um domínio está verificado

## Como Enviar para bvcaldeiraria@gmail.com

Para enviar emails diretamente para o endereço da empresa, há duas opções:

### Opção 1: Verificar bvcaldeiraria@gmail.com como Remetente

1. Acesse o painel do Resend (resend.com)
2. Vá em "Sending" > "Email Addresses"
3. Adicione e verifique o email `bvcaldeiraria@gmail.com`
4. Após a verificação, você poderá receber emails de teste neste endereço

### Opção 2: Verificar um Domínio (Recomendado para Produção)

1. Adquira um domínio para a empresa (ex: `bvcaldeiraria.com.br`)
2. No Resend, vá em "Sending" > "Domains"
3. Adicione e verifique o domínio seguindo as instruções
4. Atualize o arquivo `src/app/api/send-email/route.ts`:
   ```typescript
   from: "Contato <contato@bvcaldeiraria.com.br>"
   ```
5. Configure o servidor de produção com:
   ```
   NODE_ENV=production
   RESEND_API_KEY=re_7hJatVrC_ADLqgWrHg7KDsWputMybxxzc
   ```

## Dados da Empresa

Estes dados já estão configurados no sistema:

- **Nome**: BV Caldeiraria
- **Telefone**: (16) 99162-4446
- **Instagram**: @bvcaldeiraria
- **Facebook**: @bvcaldeiraria
- **Endereço**: Rua Antônio Stupelli, 676, São Joaquim da Barra - SP
- **E-mail**: bvcaldeiraria@gmail.com

## Observações Importantes

- O template de email já inclui os dados da empresa e uma apresentação visual profissional
- Para testes locais, o sistema continuará enviando para o email verificado, mas simulando o envio real
- A chave API do Resend deve ser mantida segura e nunca exposta publicamente
- Após a verificação do domínio, o sistema estará pronto para enviar emails em produção 
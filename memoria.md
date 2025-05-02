# Memória do Projeto BV BoaVentura

## 2024-06-01
- Iniciado projeto com estrutura básica Next.js e Tailwind CSS
- Configuração inicial do ambiente de desenvolvimento
- Adicionadas imagens no diretório public/image (logo.png, logo-white.png, mapa-empresa.png)

## 2024-06-01
- Criação da estrutura base do site institucional
- Implementação do layout principal com foco nas cores da identidade visual (amarelo, preto e cinza)
- Desenvolvimento das seções: Home, Sobre, Serviços, Portfólio, e Contato
- Configuração do formulário de contato direcionado para bvcaldeiraria@gmail.com

## 2024-06-02
- Criação do componente Header com menu responsivo e logo da empresa
- Implementação do Footer com informações de contato e links rápidos
- Desenvolvimento da página inicial (Home) com seções de apresentação, sobre, serviços e CTA
- Criação do serviço de email para o formulário de contato
- Desenvolvimento do componente ContactForm com validação usando Zod
- Implementação da página de contato completa com formulário e informações
- Ajustes de responsividade e melhorias visuais em toda a aplicação

## 2024-06-03
- Correção de erro de compilação: adicionada diretiva "use client" nos componentes que utilizam hooks do React
- Corrigidos os arquivos: Header.tsx, Footer.tsx, MainLayout.tsx e ContactForm.tsx
- Melhoria na separação entre Server Components e Client Components conforme as boas práticas do Next.js 14
- Atualização da versão do Next.js de 14.0.4 para 14.2.28
- Atualização da versão do eslint-config-next para manter compatibilidade
- Adicionada diretiva "use client" no serviço de email (emailService.ts) para compatibilidade com os componentes client-side

## 2024-06-04
- Integração com o serviço Resend para envio real de emails do formulário de contato
- Instalação do pacote Resend via npm
- Criação da API route `/api/send-email` para processar o envio de emails
- Atualização do componente ContactForm para usar a nova API
- Implementação de feedback visual de sucesso/erro no envio de mensagens

## 2024-06-05
- Correção do erro 403 na API de envio de emails
- Implementada lógica condicional para lidar com as restrições do Resend em modo de teste
- Ajustada a configuração para enviar emails para o endereço verificado em ambiente de desenvolvimento
- Melhorada a mensagem do remetente para melhor identificação
- Criado arquivo RESEND_SETUP.md com instruções detalhadas para configuração correta do serviço em produção

## 2024-06-06
- Melhorias no sistema de envio de email com template HTML personalizado 
- Adicionados dados completos da empresa: endereço, telefone, redes sociais
- Atualização do arquivo RESEND_SETUP.md com instruções mais claras sobre como enviar emails para bvcaldeiraria@gmail.com
- Adicionada explicação detalhada sobre as restrições do Resend em ambientes de teste
- Criada documentação com duas opções para habilitar envio para o email da empresa em produção

## 2024-06-07
- Atualização da seção "Solicite um orçamento sem compromisso!" na página de contato
- Design moderno com layout em duas colunas: informações de diferencial e horário de atendimento
- Adicionado botão de contato direto via WhatsApp
- Elementos visuais melhorados: ícones, cores e efeitos
- Inclusão de benefícios destacados: atendimento personalizado, preços competitivos, resposta rápida e qualidade garantida
- Melhorada experiência de usuário para facilitar o contato imediato

## 2024-06-08
- Modificados botões "Solicite um Orçamento" na página inicial para redirecionar diretamente ao WhatsApp
- Substituídos componentes Link para links externos com href apontando para o WhatsApp com número (16) 99162-4446
- Adicionada mensagem pré-formatada "Olá, gostaria de solicitar um orçamento" no link do WhatsApp
- Mantido o texto original "Solicite um Orçamento" conforme solicitado
- Melhorada a experiência do usuário permitindo contato imediato sem necessidade de navegar para a página de contato

## 2024-06-09
- Criada página "Sobre" completa com design moderno: /src/app/sobre/page.tsx
- Implementadas múltiplas seções interativas: Hero, História, Missão/Visão/Valores, Equipe, Números e CTA
- Adicionados elementos visuais modernos: padrões de fundo, ícones, divisores de seção e efeitos hover
- Mantida paleta de cores da identidade visual: amarelo, preto e cinza
- Utilização de componentes interativos com animações sutis e cards responsivos
- Layout totalmente responsivo para dispositivos móveis, tablets e desktops
- Integrado botão de contato direto via WhatsApp
- Seção de números com estatísticas relevantes da empresa
- Implementada seção de equipe com placeholders para futura adição de imagens reais dos colaboradores

## 2024-06-10
- Atualização da seção "Nossos Serviços" na página inicial e no rodapé
- Redução de 4 para 3 categorias de serviços, focando nas especialidades principais da empresa
- Implementados novos serviços: Caldeiraria, Implementos Agrícolas e Máquinas Especiais
- Melhorias nas descrições dos serviços com textos mais detalhados e específicos
- Atualização dos ícones para melhor representação visual de cada serviço
- Ajuste no layout para grid de 3 colunas em telas grandes, proporcionando melhor visualização
- Mantida consistência visual com a identidade da marca nas cores e estilos

## 2024-06-11
- Atualização do ano de fundação na página "Sobre" de 2010 para 2025
- Modificação feita no elemento decorativo que exibe o ano no arquivo src/app/sobre/page.tsx

## 2024-06-12
- Criação do componente reutilizável ServicesSection em src/components/ui/ServicesSection.tsx
- Substituição da seção de serviços na página inicial pelo novo componente modular
- Implementação de novo layout com design mais moderno e limpo para apresentação dos serviços
- Melhorias nas descrições dos serviços: Caldeiraria Industrial, Implementos Agrícolas e Máquinas Especiais
- Adição de efeitos hover para melhorar a interatividade dos cards de serviços
- Otimização da responsividade para todos os dispositivos
- Manutenção da consistência visual com a identidade da marca

## 2024-06-13
- Removidos os links "Saiba mais" dos cards de serviços na seção ServicesSection para simplificar a interface
- Ajustada a estrutura visual dos cards de serviço para uma apresentação mais direta das informações

## 2024-06-14
- Criada página completa de serviços em `src/app/servicos/page.tsx`
- Implementado design moderno com seções detalhadas para cada serviço (Caldeiraria Industrial, Implementos Agrícolas e Máquinas Especiais)
- Adicionada seção hero com efeito visual de grid para maior impacto visual
- Incluídas descrições detalhadas de subserviços para cada categoria principal
- Adicionada seção de FAQ com perguntas frequentes sobre os serviços
- Implementado CTA (Call to Action) com destaque para contato via WhatsApp para orçamentos
- Design responsivo adaptado para todos os dispositivos
- Mantida consistência visual com a identidade da marca (cores primárias e estilo de design)

## 2024-06-15
- Criadas páginas detalhadas de projetos:
  - Estrutura Metálica Industrial (`src/app/projetos/estrutura-metalica-industrial/page.tsx`)
  - Implemento Agrícola Personalizado (`src/app/projetos/implemento-agricola/page.tsx`)
  - Máquina Automatizada para Embalagem (`src/app/projetos/maquina-automatizada/page.tsx`)
- Cada página de projeto inclui seções completas:
  - Hero com título e descrição do projeto
  - Detalhes do projeto com descrição, desafios e soluções
  - Especificações técnicas
  - Galeria de imagens
  - Resultados com métricas de desempenho
  - Outros projetos relacionados
  - CTA para contato via WhatsApp
- Design responsivo com layout moderno e interativo
- Mantida consistência visual com a identidade da marca

## 2024-06-16
- Atualização dos menus no Header e Footer: alteração de "Portfólio" para "Projetos"
- Os links que antes apontavam para `/portfolio` agora apontam para `/projetos`
- Atualização realizada nos arquivos:
  - `src/components/layout/Header.tsx`
  - `src/components/layout/Footer.tsx`
- Mantida consistência na nomenclatura em todos os menus (desktop e mobile)

## 2024-06-17
- Simplificação da página de projetos (`src/app/projetos/page.tsx`)
- Removidas as seções "Outros Projetos" e "Métricas" conforme solicitação
- Mantidas apenas as seções principais:
  - Hero com título e descrição
  - Projetos em Destaque (3 cards com os projetos principais)
  - CTA para contato via WhatsApp
- Layout mais limpo e focado nos projetos principais da empresa
- Melhoria na experiência do usuário com foco nas informações essenciais

## 2024-06-18
- Continuação da simplificação da página de projetos (`src/app/projetos/page.tsx`)
- Removido o texto descritivo da seção "Projetos em Destaque", conforme solicitação
- Mantido apenas o título e a linha divisória decorativa
- Layout ainda mais limpo e direto, indo direto aos cards de projetos
- Foco visual direcionado para as imagens e informações dos projetos em destaque

## 2024-06-19
- Correção dos redirecionamentos na página de projetos (`src/app/projetos/page.tsx`)
- Atualizado o link do primeiro projeto (Caldeiraria) para redirecionar para `/projetos/caldeiraria-leve` em vez de `/projetos/estrutura-metalica-industrial`
- Atualizado o link do terceiro projeto (Máquinas Especiais) para redirecionar para `/projetos/maquinas-especiais` em vez de `/projetos/maquina-automatizada`
- Corrigido erro no título do terceiro projeto, onde constava "Máquina Especiais" (estava no singular)
- Garantida consistência entre os nomes dos projetos e seus destinos de navegação
- Melhorado o acompanhamento dos projetos pelos usuários, evitando confusão na navegação

## 2024-06-20
- Correção de problema de redirecionamento na página de projetos
- Identificado que o link para "Caldeiraria Leve" estava apontando para uma página não existente (`/projetos/caldeiraria-leve`)
- Modificado o link para utilizar a página existente de estrutura metálica (`/projetos/estrutura-metalica-industrial`)
- Atualizado `src/app/projetos/page.tsx` para manter a estrutura do site funcional
- Evitado erro 404 ao clicar no link "Ver detalhes" do projeto de caldeiraria
- Mantida consistência entre os links e as páginas realmente disponíveis no site

## 20 de junho de 2024

### Remoção da seção "Outros Projetos" da página de Implemento Agrícola

- Removida a seção "Outros Projetos" da página `/projetos/implemento-agricola/page.tsx` para manter o foco no projeto principal
- A remoção incluiu o título, os cards de projetos relacionados e o botão para ver todos os projetos
- Esta alteração foi feita para melhorar a experiência do usuário e a taxa de conversão, concentrando a atenção do visitante no projeto apresentado e nas CTAs principais

## 2024-06-21
- **Atualização da página de Máquinas Especiais**: Removida a seção "Outros Projetos" da página de detalhes do projeto de Máquinas Especiais para manter o foco no projeto principal e melhorar a experiência do usuário. A remoção desta seção também contribui para uma apresentação mais limpa e direta das informações relevantes sobre o projeto específico.

## 2024-06-22
- **Simplificação da página Sobre**: Removida a seção "Nossos Números" da página Sobre para criar uma apresentação mais direta e focada na história e valores da empresa. Esta alteração simplifica a página e mantém apenas as informações essenciais sobre a empresa, sua história, missão, visão, valores e equipe.

## 2024-07-05
- **Implementação de validação rigorosa no formulário de contato**: 
  - Melhorada a validação de email para rejeitar domínios falsos, temporários e inválidos
  - Adicionada lista abrangente de domínios válidos e extensões reconhecidas
  - Implementada verificação avançada que identifica e bloqueia padrões de emails como "teste@teste.teste"
  - Criada lista de domínios inválidos/comumente usados para testes
  - Implementada validação tanto no frontend (src/components/ui/ContactForm.tsx) quanto no backend (src/app/api/send-email/route.ts)
  - Melhoria nas mensagens de erro para informar adequadamente quando um email ou telefone é considerado inválido
  - Aumentada a segurança geral do formulário de contato contra spam e entradas maliciosas

## 2024-07-06
- **Implementação da seção "Trabalhe Conosco"**:
  - Criada nova página `/trabalhe-conosco` com formulário de envio de currículos
  - Adicionado link no menu principal, antes do item "Contato"
  - Implementado componente `PageHeader` para cabeçalho com imagem de fundo
  - Desenvolvido componente `CurriculumForm` com validações completas:
    - Campos obrigatórios: nome, email, telefone, cargo e currículo
    - Upload de arquivos PDF, DOC e DOCX (máximo 5MB)
    - Validação de formato e tamanho de arquivos
    - Mensagens de feedback para o usuário
  - Criada API route `/api/send-curriculum` para processar o envio de currículos
    - Validação rigorosa de dados no backend
    - Envio seguro de email com currículo anexado via Resend
    - Tratamento adequado de erros e respostas para o frontend
  - Adaptação visual do formulário para seguir a identidade visual do site (cores amarelo, preto e cinza)
  - Adicionada correta identificação client-side com a diretiva "use client"

## 2024-07-07
- **Correção da estrutura de layout na página "Trabalhe Conosco"**:
  - Corrigido problema onde o cabeçalho e rodapé não apareciam na página de "Trabalhe Conosco"
  - Adicionado o componente `MainLayout` à página, garantindo a consistência visual com o restante do site
  - Mantido o design interno da página, com a seção de informações e o formulário de envio de currículo
  - Agora a página segue o mesmo padrão visual do restante do site, proporcionando uma experiência de usuário mais consistente

## 2024-07-08
- **Correção de bug no envio de currículos**:
  - Corrigido problema que impedia o envio de currículos no formulário "Trabalhe Conosco"
  - Removida a dependência do pacote `tmp` para manipulação de arquivos temporários, que causava falhas no ambiente Windows
  - Implementada solução alternativa usando codificação Base64 para anexar arquivos ao email
  - Melhorada a detecção automática de tipos de arquivos para envio correto de currículos
  - Solução mais robusta e compatível com todos os sistemas operacionais

## 2024-07-09
- **Correção do erro 500 na rota de API para envio de currículos**:
  - Corrigido problema que causava erro 500 (Internal Server Error) ao tentar enviar currículos
  - Melhorada a tratativa de erros no arquivo `src/app/api/send-curriculum/route.ts`
  - Implementada validação mais robusta dos arquivos enviados
  - Adicionado fallback para ambiente de desenvolvimento que simula o envio com sucesso
  - Melhorada a verificação de erro 403 da API do Resend (problema comum quando o email de destino não está verificado)
  - Adicionado template HTML mais bonito e profissional para o email de currículo
  - Mensagens de erro mais claras e informativas para o usuário final
  - Melhoria geral na robustez da API para lidar com diferentes cenários de erro

## 2024-07-10
- **Aprimoramento no formulário de envio de currículos**:
  - Melhorado o tratamento de erros no componente `CurriculumForm`
  - Adicionada validação mais informativa para arquivos inválidos
  - Implementado log detalhado dos dados enviados (sem informações sensíveis)
  - Exibição de mensagens de erro mais claras e específicas
  - Melhor feedback ao usuário durante o processo de envio
  - Utilização correta da mensagem de sucesso retornada pela API
  - Limpeza completa do formulário após envio bem-sucedido
  - Compatibilidade aprimorada com a API corrigida de envio de currículos

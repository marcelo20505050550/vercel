# Banner com Fundo Personalizado - Instruções

Este documento explica como utilizar a nova funcionalidade de fundo personalizado nos banners rotativos do site BV BoaVentura.

## Nova Funcionalidade

Agora é possível configurar um banner para usar imagens de fundo personalizadas diferentes para desktop e mobile, sem a necessidade de uma imagem lateral separada. Isso permite maior flexibilidade na criação de layouts e garante uma experiência visual otimizada em qualquer dispositivo.

## Novas Propriedades

Foram adicionadas seis novas propriedades opcionais aos objetos de banner:

1. **customBackground**: Caminho para uma imagem de fundo personalizada para desktop
2. **mobileBgImage**: Caminho para uma imagem de fundo personalizada para dispositivos móveis
3. **useOnlyBackground**: Se definido como `true`, o banner mostrará apenas o fundo personalizado e não exibirá a imagem lateral
4. **contentPosition**: Define a posição do conteúdo quando `useOnlyBackground` é `true` - pode ser `'left'`, `'center'` ou `'right'`
5. **textColor**: Define a cor do texto quando usar fundo personalizado (formato: '#RRGGBB')
6. **hideText**: Se definido como `true`, esconde completamente todo o conteúdo de texto, exibindo apenas a imagem ou o fundo personalizado

## Como Usar

Para criar um banner com fundos personalizados para desktop e mobile:

1. Prepare duas versões da imagem de fundo:
   - Uma versão otimizada para desktop (recomendado: 1920x850px)
   - Uma versão otimizada para mobile (recomendado: 768x500px)
2. Adicione as imagens na pasta `public/banners/` (ou subpasta apropriada)
3. No arquivo `src/data/bannerData.ts`, configure o banner com as novas propriedades:

```typescript
{
  id: 1,
  title: "Seu Título",
  subtitle: "Seu Subtítulo",
  description: "Sua descrição detalhada aqui...",
  buttonText: "Texto do Botão",
  buttonLink: "/pagina-destino",
  imageSrc: "/caminho/para/imagem.jpg", // Ainda é necessário, mas não será exibida se useOnlyBackground for true
  customBackground: "/banners/desktop-background.jpg", // Imagem de fundo para desktop
  mobileBgImage: "/banners/mobile-background.jpg", // Imagem de fundo para dispositivos móveis
  useOnlyBackground: true, // Define para usar apenas o fundo, sem a imagem lateral
  contentPosition: 'right', // Posiciona o conteúdo à direita (opções: 'left', 'center', 'right')
  textColor: '#ffffff', // Define a cor do texto (útil para fundos escuros)
  hideText: false // Se true, esconde completamente todo o conteúdo textual
}
```

## Banner Somente com Imagem

Para criar um banner que exibe apenas as imagens de fundo, sem textos:

```typescript
{
  id: 1,
  title: "", // Mesmo com hideText, é necessário manter a estrutura do objeto
  subtitle: "",
  description: "",
  buttonText: "",
  buttonLink: "",
  imageSrc: "/caminho/para/imagem-padrao.jpg", // Necessário mesmo sem ser exibido
  customBackground: "/banners/desktop-background-with-text.jpg", // Imagem com texto incorporado para desktop
  mobileBgImage: "/banners/mobile-background-with-text.jpg", // Imagem com texto incorporado para mobile
  useOnlyBackground: true,
  hideText: true // Esconde completamente o conteúdo textual
}
```

## Comportamento Responsivo

- **Desktop**: 
  - Banner com altura aumentada (850px)
  - Exibe a imagem definida em `customBackground`
  - Imagens de fundo são exibidas com `background-size: cover` para preencher todo o espaço
- **Dispositivos móveis**: 
  - Banner com altura padrão (500px) 
  - Exibe a imagem definida em `mobileBgImage`
  - Imagens de fundo são exibidas com `background-size: cover` para preencher todo o espaço

O componente detecta automaticamente o tamanho da tela e alterna entre as imagens desktop e mobile conforme necessário.

## Dicas de Design

Para obter os melhores resultados com fundos personalizados:

- **Desktop**:
  - Use imagens com resolução de 1920x850px ou proporcionais
  - Posicione elementos importantes no centro da imagem
  - Deixe espaço para o conteúdo textual no lado definido em `contentPosition`

- **Mobile**:
  - Use imagens com resolução de 768x500px ou proporcionais
  - Simplifique elementos visuais para melhor visualização em telas pequenas
  - Deixe espaço para o conteúdo textual no lado definido em `contentPosition`

- **Geral**:
  - Considere a legibilidade do texto sobre o fundo
  - Use `textColor` para garantir contraste adequado
  - Para fundos com muitos detalhes, considere usar `hideText: true` e incorporar o texto diretamente na imagem
  - Teste o banner em diferentes tamanhos de tela para garantir boa aparência

## Exemplo

Um exemplo de banner com fundos personalizados para desktop e mobile foi adicionado ao array `bannerData` no arquivo `src/data/bannerData.ts`. Você pode usá-lo como referência:

```typescript
{
  id: 1,
  title: "Eficiência no Campo Começa Aqui",
  subtitle: "Implementos resistentes, pensados para o produtor.",
  description: "Grades, roçadeiras e guinchos com desempenho superior. Equipamentos robustos para aumentar sua produção.",
  buttonText: "Saíba mais",
  buttonLink: "/servicos",
  imageSrc: "/banners/inicio/implementos_agrícolas.png",
  customBackground: "/banners/inicio/banner01.jpg", // Imagem de fundo para desktop
  mobileBgImage: "/banners/inicio/banner01_mobile.jpg", // Imagem de fundo para dispositivos móveis
  useOnlyBackground: true,
  contentPosition: 'left',
  textColor: '#000000'
}
``` 
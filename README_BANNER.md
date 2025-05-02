# Banner Rotativo - Instruções

Este documento contém instruções sobre como editar o banner rotativo moderno implementado no site da BV BoaVentura.

## Visão Geral

O banner rotativo apresenta um design moderno com fundo cinza-prata e elementos tecnológicos. Exibe até 3 banners diferentes com efeitos de transição suaves e animações de entrada para os textos. Cada banner possui:

- Imagem de fundo (posicionada à direita)
- Título com animação de entrada
- Subtítulo com animação de entrada
- Descrição com animação de entrada
- Botão com efeito hover
- Gradiente de cores moderno em tons de cinza

## Como Editar os Banners

Para personalizar o conteúdo dos banners, edite o arquivo:

```
src/data/bannerData.ts
```

Neste arquivo, você encontrará um array de objetos onde cada objeto representa um banner. A estrutura é a seguinte:

```typescript
{
  id: 1, // Identificador único
  title: "Título do Banner", // Título principal
  subtitle: "Subtítulo do Banner", // Subtítulo
  description: "Descrição detalhada do conteúdo...", // Texto descritivo
  buttonText: "Texto do Botão", // Texto que aparece no botão
  buttonLink: "/pagina-destino", // Link para onde o botão direciona
  imageSrc: "/caminho/para/imagem.jpg" // Caminho da imagem de fundo
}
```

### Exemplos de Edição

#### Alterar o Título do Primeiro Banner

Encontre o primeiro objeto no array e altere a propriedade `title`:

```typescript
{
  id: 1,
  title: "Seu Novo Título Aqui", // <-- Modifique esta linha
  // ... outras propriedades
}
```

#### Alterar a Imagem de Fundo

Para trocar a imagem de um banner, modifique a propriedade `imageSrc`:

```typescript
{
  // ... outras propriedades
  imageSrc: "/image/sua-nova-imagem.jpg" // <-- Modifique esta linha
}
```

## Imagens dos Banners

### Adicionando Novas Imagens

1. Coloque suas imagens na pasta `public/banners/` ou `public/image/`
2. Referencie a imagem através do caminho `/banners/nome-da-imagem.jpg`

### Recomendações para Imagens

- **Dimensões recomendadas**: 1200x900 pixels
- **Formato**: PNG com transparência para melhor integração com o fundo
- **Tamanho do arquivo**: Idealmente menos de 500KB para melhor performance
- **Posicionamento**: As imagens são posicionadas à direita do banner para manter o layout consistente

## Efeitos de Animação

O banner inclui diversos efeitos de animação modernos:

1. **Animações de Entrada**:
   - Os textos entram com efeito de fade-in e deslizamento de baixo para cima
   - Cada elemento (título, subtítulo, descrição, botão) tem um tempo de atraso diferente
   - O divisor amarelo expande-se da esquerda para a direita

2. **Efeitos de Transição**:
   - Transição suave entre banners com escala e opacidade
   - Efeito de esmaecimento durante a transição

3. **Efeitos de Hover**:
   - Os botões de navegação têm efeito de hover com alteração de opacidade
   - Os indicadores na parte inferior mudam de tamanho e cor
   - O botão de ação tem um efeito de seta que se move

## Configurações Adicionais

Se necessário, você pode ajustar o componente de banner modificando o arquivo:

```
src/components/ui/RotatingBanner.tsx
```

Algumas configurações que podem ser ajustadas:

- **Altura do banner**: Procure por `h-[500px]` e ajuste conforme necessário
- **Velocidade da animação**: Procure por `duration-700` ou `duration-1000` e ajuste conforme necessário
- **Intervalo entre transições**: Modifique o valor `autoPlayInterval={5000}` na chamada do componente
- **Efeitos de entrada**: Procure por `delay-100`, `delay-200`, etc. para ajustar os tempos de atraso das animações
- **Fundo**: O fundo utiliza um gradiente de cinza que pode ser personalizado modificando as classes `from-gray-800 via-gray-700 to-gray-900`

## Implementação em Outras Páginas

Para adicionar o banner rotativo em outras páginas, importe o componente e os dados:

```tsx
import RotatingBanner from '@/components/ui/RotatingBanner';
import { bannerData } from '@/data/bannerData';

// Dentro do seu componente:
<RotatingBanner banners={bannerData} />
```

Você também pode criar um conjunto de dados específico para cada página. 
# 📸 Galeria de Serviços

## 🎯 Como adicionar imagens e vídeos

Para adicionar imagens e vídeos à galeria de cada serviço:

1. **Adicione o arquivo** na pasta do serviço correspondente
2. **Atualize o código** em `src/components/ui/ServicesPageContent.tsx`:
   - Localize a constante `MEDIA_CONFIG`
   - Adicione a nova imagem/vídeo no array do serviço correspondente
   
**Exemplo:**
```typescript
const MEDIA_CONFIG = {
  caldeiraria: [
    { type: 'image', src: '/servicos/caldeiraria/bv.png' },
    { type: 'image', src: '/servicos/caldeiraria/sua-nova-imagem.jpg' } // ← Adicione aqui
  ],
  // ...
};
```

### 📁 Pastas disponíveis

Para adicionar mídia, coloque os arquivos nas respectivas pastas:

- **Caldeiraria Leve**: `/public/servicos/caldeiraria/`
- **Máquinas Especiais**: `/public/servicos/maquinas/`
- **Ferramentaria**: `/public/servicos/ferramentaria/`
- **Peças de Reposição**: `/public/servicos/pecas-reposicao/`
- **Rebarba**: `/public/servicos/rebarba/`
- **Cilindros**: `/public/servicos/cilindros/`

## Formatos suportados

### Imagens
- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.webp`

### Vídeos
- `.mp4`
- `.webm`
- `.mov`

## 💡 Exemplos práticos

### Exemplo 1: Adicionar foto de caldeiraria
```
1. Acesse a pasta: /public/servicos/caldeiraria/
2. Copie sua imagem (ex: tanque-inox.jpg)
3. Acesse /servicos no site
4. A galeria aparecerá automaticamente abaixo do serviço "Caldeiraria Leve"
```

### Exemplo 2: Adicionar vídeo de máquinas
```
1. Acesse a pasta: /public/servicos/maquinas/
2. Copie seu vídeo (ex: maquina-funcionando.mp4)
3. A galeria mostrará o vídeo com um botão de play
```

## ⚙️ Observações importantes

- ✅ **Invisível se vazio:** Se uma pasta não tiver nenhum arquivo, a galeria não será exibida
- 📋 **Ordem automática:** Os arquivos aparecem na ordem do sistema de arquivos
- 🏷️ **Nomes descritivos:** Use nomes claros (ex: `caldeiraria-tanque-01.jpg`, `maquina-corte-video.mp4`)
- 🎨 **Centralizada:** A galeria sempre aparece centralizada após cada serviço
- 📱 **Responsiva:** Funciona em todos os dispositivos (celular, tablet, desktop)

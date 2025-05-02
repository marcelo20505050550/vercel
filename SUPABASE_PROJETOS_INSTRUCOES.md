# Configuração e Importação de Projetos no Supabase

Este documento contém instruções para configurar a tabela de projetos no Supabase e importar dados usando o arquivo CSV de exemplo.

## 1. Configuração da Tabela de Projetos

Acesse o painel do Supabase (https://app.supabase.com/) e faça login com sua conta.

1. Selecione o projeto `lcwzjehpjjgmekuculue`
2. No menu lateral, vá para **Table Editor**
3. Execute o SQL no arquivo `supabase_setup.sql` para criar a tabela:
   - Clique no botão **SQL Editor** no topo
   - Crie um novo script (New Query)
   - Cole o conteúdo do arquivo `supabase_setup.sql`
   - Clique em **Run** para executar

## 2. Importação de Dados via CSV

Para importar os dados de exemplo ou seus próprios dados:

1. No menu lateral, vá para **Table Editor**
2. Clique na tabela **projects**
3. No canto superior direito, clique em **Insert** e depois **Import data from CSV**
4. Clique em **Upload** e selecione o arquivo `projetos_exemplo.csv`
5. Na tela de preview:
   - Verifique se as colunas estão mapeadas corretamente
   - Certifique-se que as marcações de tipo de dados estão corretas
   - Para os campos de array (challenges, specifications, gallery), verifique se estão sendo reconhecidos como arrays
6. Clique em **Import** para finalizar a importação

## 3. Estrutura do CSV

O arquivo CSV deve conter as seguintes colunas:

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id | Integer | ID único do projeto (pode ser omitido para novos registros) |
| slug | Text | Identificador único para URL (ex: estrutura-metalica-industrial) |
| title | Text | Título completo do projeto |
| category | Text | Categoria do projeto (ex: Caldeiraria) |
| description | Text | Descrição curta para o hero da página |
| short_description | Text | Descrição para card de listagem |
| cover_image | Text | URL da imagem de capa |
| completion_date | Text | Data/período de conclusão |
| location | Text | Localização do projeto |
| client_sector | Text | Setor do cliente |
| project_scope | Text | Escopo do projeto |
| challenges | Text[] | Lista de desafios do projeto (array) |
| specifications | Text[] | Lista de especificações técnicas (array) |
| about | Text | Texto detalhado sobre o projeto |
| solution | Text | Descrição da solução implementada |
| results | Text | Resultados alcançados |
| gallery | Text[] | Lista de URLs de imagens para a galeria (array) |
| featured | Boolean | Se o projeto deve aparecer em destaque (true/false) |
| created_at | Timestamp | Data de criação (pode ser omitido para usar NOW()) |

## 4. Formatação de Arrays no CSV

Os arrays no CSV devem ser formatados como strings JSON:

```
"{""item1"",""item2"",""item3""}"
```

Por exemplo, para o campo challenges:
```
"{""Integração com estrutura existente"",""Prazo reduzido"",""Especificações técnicas rigorosas""}"
```

## 5. Dicas para Edição de Projetos

- Para editar projetos existentes, você pode exportar a tabela para CSV, fazer as edições e reimportar
- Para adicionar novos projetos, acrescente linhas ao final do arquivo CSV
- O campo `slug` deve ser único e composto apenas por letras minúsculas, números e hífens
- As imagens devem estar disponíveis nas URLs especificadas antes da importação

## 6. Teste da Integração

Após a importação:

1. Acesse o site em ambiente de desenvolvimento (`npm run dev`)
2. Verifique a página `/projetos` para ver a listagem
3. Clique em um projeto para verificar a página de detalhes em `/projetos/[slug]`

## 7. Solução de Problemas

Se você encontrar problemas após a importação, como:

- Mensagem "Nenhum projeto encontrado" mesmo quando existem projetos no banco
- Erros relacionados a campos de array nulos
- Problemas com a renderização das páginas de projetos

Consulte o documento [SUPABASE_ARRAYS_NULOS.md](./SUPABASE_ARRAYS_NULOS.md) que contém instruções detalhadas para resolver problemas comuns relacionados a campos de array no Supabase. 
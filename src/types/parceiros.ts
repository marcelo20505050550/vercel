export interface Parceiro {
  id: string;
  nome: string;
  descricao: string;
  website: string;
  logo: string;
  imagem: string;
  categoria: 'fornecedor' | 'cliente' | 'tecnologia' | 'distribuidor';
  ativo: boolean;
  dataInicio?: string;
}

export interface CategoriaParceiro {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
}
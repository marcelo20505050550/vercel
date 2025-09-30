import { Parceiro, CategoriaParceiro } from '@/types/parceiros';

export const categoriasParceiros: CategoriaParceiro[] = [
  {
    id: 'fornecedor',
    nome: 'Fornecedores',
    descricao: 'Empresas que fornecem matérias-primas e insumos de qualidade',
    icone: '🏭'
  },
  {
    id: 'cliente',
    nome: 'Clientes Estratégicos',
    descricao: 'Empresas que confiam em nossas soluções industriais',
    icone: '🤝'
  },
  {
    id: 'tecnologia',
    nome: 'Parceiros Tecnológicos',
    descricao: 'Empresas que nos ajudam com inovação e tecnologia',
    icone: '⚙️'
  },
  {
    id: 'distribuidor',
    nome: 'Distribuidores',
    descricao: 'Rede de distribuição para alcançar mais mercados',
    icone: '🚚'
  }
];

export const parceiros: Parceiro[] = [
  {
    id: '1',
    nome: 'PRESSMATIK',
    descricao: 'Parceria de Venda do conjunto Prensa Hidáulica e Ferramentas. - Confecção de Alimentadores, Desbobinadores e Endireitadores.',
    website: 'https://www.pressmatik.com.br/',
    logo: '/parceiros/logos/pressmatik.png',
    imagem: '/parceiros/pressmatik.png',
    categoria: 'fornecedor',
    ativo: true,
    dataInicio: '2025-09-29'
  },
  {
    id: '2',
    nome: 'AC Metalúrgica',
    descricao: 'Parceira de Desenvolvimento de Projetos para Forjaria, Usinagem e Estamparia.',
    website: 'https://acmetalurgica.com.br/',
    logo: '/parceiros/logos/ac.png',
    imagem: '/parceiros/ac.png',
    categoria: 'fornecedor',
    ativo: true,
    dataInicio: '2025-09-29'
  },
  {
    id: '3',
    nome: 'Prensas FANET',
    descricao: 'Parceria de Venda do conjunto Prensa Mecânica e Ferramentas. - Confecção de Alimentadores, Desbobinadores e Endireitadores.',
    website: 'https://fanet.com.br/',
    logo: '/parceiros/logos/fanet.png',
    imagem: '/parceiros/fanet.png',
    categoria: 'fornecedor',
    ativo: true,
    dataInicio: '2025-09-29'
  }
];

// Função para obter parceiros por categoria
export const getParceiroPorCategoria = (categoria: string): Parceiro[] => {
  return parceiros.filter(parceiro => parceiro.categoria === categoria && parceiro.ativo);
};

// Função para obter todos os parceiros ativos
export const getParceirosAtivos = (): Parceiro[] => {
  return parceiros.filter(parceiro => parceiro.ativo);
};
// Tipo para os dados do banner
interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
}

/**
 * DADOS DOS BANNERS
 * 
 * Edite os dados abaixo para personalizar os banners rotativos.
 * 
 * Cada banner possui:
 * - id: Identificador único
 * - title: Título principal
 * - subtitle: Subtítulo
 * - description: Texto descritivo
 * - buttonText: Texto do botão
 * - buttonLink: Link para onde o botão direciona
 * - imageSrc: Caminho da imagem (coloque as imagens na pasta public/banners/)
 */

// Banner da página inicial
export const bannerData: BannerItem[] = [
  {
    id: 1,
    title: "Eficiência no Campo Começa Aqui",
    subtitle: "Implementos resistentes, pensados para o produtor.",
    description: "Grades, roçadeiras e guinchos com desempenho superior. Equipamentos robustos para aumentar sua produção.",
    buttonText: "Saíba mais",
    buttonLink: "/servicos",
    imageSrc: "/banners/inicio/implementos_agrícolas.png"
  },
  {
    id: 2,
    title: "Produtos Únicos, Resultados Reais",
    subtitle: "Máquinas sob medida para sua necessidade.",
    description: "Desenvolvemos soluções técnicas para processos específicos. Alta performance com segurança e personalização.",
    buttonText: "Saíba mais",
    buttonLink: "/servicos",
    imageSrc: "/banners/inicio/maquinas_especiais.png"
  },
  {
    id: 3,
    title: "Soluções Integradas para Indústria",
    subtitle: "Tecnologia e precisão em cada detalhe",
    description: "Oferecemos soluções completas que unem tecnologia avançada e expertise técnica para atender às necessidades específicas do seu negócio.",
    buttonText: "Conheça nossos serviços",
    buttonLink: "/servicos",
    imageSrc: "/banners/inicio/maquinas_especiais.png"
  },
];

// Banner da página Sobre (removido - agora usando design moderno sem banner)
export const sobreBanners: BannerItem[] = [];

// Banner da página Serviços (removido - agora usando design moderno sem banner)
export const servicosBanners: BannerItem[] = [];

// Banner da página Produtos
export const produtosBanners: BannerItem[] = [
  {
    id: 1,
    title: "Produtos de Excelência",
    subtitle: "Portfólio de soluções em caldeiraria industrial",
    description: "Conheça os produtos que desenvolvemos com expertise técnica, qualidade e inovação para diversos setores industriais.",
    buttonText: "",
    buttonLink: "",
    imageSrc: "/produtos/01.png"
  },
];

// Banner da página Contato
export const contatoBanners: BannerItem[] = [
  {
    id: 1,
    title: "Fale com a BV BoaVentura",
    subtitle: "Estamos à disposição para atender você",
    description: "Entre em contato conosco e conheça nossas soluções em caldeiraria industrial, implementos agrícolas e máquinas especiais.",
    buttonText: "",
    buttonLink: "",
    imageSrc: "/contatos/01.png"
  },
];

export default bannerData; 
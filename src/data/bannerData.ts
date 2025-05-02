import { BannerItem } from '@/components/ui/RotatingBanner';

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
 * - customBackground: (Opcional) Caminho para uma imagem de fundo personalizada
 * - useOnlyBackground: (Opcional) Se true, mostra apenas o fundo personalizado sem a imagem
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
    imageSrc: "/banners/inicio/implementos_agrícolas.png",
    customBackground: "/banners/inicio/banner01.jpg", // Imagem de fundo para desktop
    mobileBgImage: "/banners/inicio/banner01_mob.jpg", // Imagem de fundo para dispositivos móveis
    useOnlyBackground: true, // Usar apenas o fundo personalizado, sem a imagem
    contentPosition: 'left', // Posiciona o conteúdo à direita
    textColor: '#000000' // Define a cor do texto como preto para melhor contraste
  },
  {
    id: 2,
    title: "Projetos Únicos, Resultados Reais",
    subtitle: "Máquinas sob medida para sua necessidade.",
    description: "Desenvolvemos soluções técnicas para processos específicos. Alta performance com segurança e personalização.",
    buttonText: "Saíba mais",
    buttonLink: "/servicos",
    imageSrc: "/banners/inicio/maquinas_especiais.png",
    customBackground: "/banners/inicio/banner02.jpg", // Imagem de fundo para desktop
    mobileBgImage: "/banners/inicio/banner02_mob.jpg", // Imagem de fundo para dispositivos móveis
    useOnlyBackground: true, // Usar apenas o fundo personalizado, sem a imagem
    contentPosition: 'left', // Posiciona o conteúdo à direita
    textColor: '#000000' // Define a cor do texto como preto para melhor contraste
  },
  {
    id: 3,
    title: "Soluções Integradas para Indústria",
    subtitle: "Tecnologia e precisão em cada detalhe",
    description: "Oferecemos soluções completas que unem tecnologia avançada e expertise técnica para atender às necessidades específicas do seu negócio.",
    buttonText: "Conheça nossos serviços",
    buttonLink: "/servicos",
    imageSrc: "/banners/inicio/maquinas_especiais.png", // Imagem padrão necessária, mas não será exibida
    customBackground: "/banners/inicio/banner03.jpg", // Imagem de fundo para desktop
    mobileBgImage: "/banners/inicio/banner03_mob.jpg", // Imagem de fundo para dispositivos móveis
    useOnlyBackground: true, // Usar apenas o fundo personalizado, sem a imagem
    contentPosition: 'left', // Posiciona o conteúdo à direita
    textColor: '#000000' // Define a cor do texto como preto para melhor contraste
  },
];

// Banner da página Sobre
export const sobreBanners: BannerItem[] = [
  {
    id: 1,
    title: "Conheça a BV BoaVentura",
    subtitle: "Excelência em caldeiraria",
    description: "Descubra nossa história, valores e compromisso com a qualidade que nos tornaram referência no setor de caldeiraria e serviços industriais.",
    buttonText: "",
    buttonLink: "",
    imageSrc: "/sobre/faxada.png"
  },
];

// Banner da página Serviços
export const servicosBanners: BannerItem[] = [
  {
    id: 1,
    title: "Engenharia e Força a Serviço do Produtor",
    subtitle: "Caldeiraria, Implementos Agrícolas e Máquinas Especiais em um só lugar.",
    description: "Na BV BoaVentura, unimos técnica, robustez e inovação em cada projeto. Fabricamos estruturas metálicas, equipamentos agrícolas e máquinas sob medida. Atendemos com agilidade, qualidade e soluções criadas para o campo e a indústria.",
    buttonText: "",
    buttonLink: "",
    imageSrc: "/banners/servicos/os_3_seguimentos.png"
  },
];

// Banner da página Projetos
export const projetosBanners: BannerItem[] = [
  {
    id: 1,
    title: "Projetos de Excelência",
    subtitle: "Portfólio de soluções em caldeiraria industrial",
    description: "Conheça os projetos que desenvolvemos com expertise técnica, qualidade e inovação para diversos setores industriais.",
    buttonText: "",
    buttonLink: "",
    imageSrc: "/projetos/01.png",
    customBackground: "/projetos/01.jpg", // Imagem de fundo para desktop
    mobileBgImage: "/projetos/01_mob.jpg", // Imagem de fundo para dispositivos móveis
    useOnlyBackground: true, // Usar apenas o fundo personalizado, sem a imagem
    contentPosition: 'right', // Posiciona o conteúdo à direita
    textColor: '#000000' // Define a cor do texto como preto para melhor contraste
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
    imageSrc: "/contatos/01.png",
    customBackground: "/contatos/01.jpg", // Imagem de fundo para desktop
    mobileBgImage: "/contatos/01_mob.jpg", // Imagem de fundo para dispositivos móveis
    useOnlyBackground: true, // Usar apenas o fundo personalizado, sem a imagem
    contentPosition: 'right', // Posiciona o conteúdo à direita
    textColor: '#000000' // Define a cor do texto como preto para melhor contraste
  },
];

export default bannerData; 
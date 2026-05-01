export type ImageInfo = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: ImageInfo;
  category?: string;
  featured?: boolean;
};

export type Combo = {
  id: string;
  name: string;
  description: string;
  price?: string;
  image?: ImageInfo;
};

export type Testimonial = {
  id: string;
  name: string;
  text: string;
  image?: ImageInfo;
  isPlaceholder?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const brandInfo = {
  name: "Cookies da Mavis",
  bakerName: "Uma estudante de vet apaixonada por bichos e cookies",
  shortDescription:
    "Cookies artesanais em Teresina-PI, feitos para adoçar momentos especiais com muito afeto, recheio e miados.",
  heroTitle: "Amor, cookies e miados em cada mordida",
  heroSubtitle:
    "Da bio ao cardápio, a Cookies da Mavis mistura carinho, estética fofa e cookies bem recheados para presentes, eventos e aquela vontade urgente de doce.",
  storyTitle: "Uma estudante de vet que também assa felicidade",
  story:
    "A Cookies da Mavis nasceu desse encontro bem próprio entre bichos, cookies e cuidado. A marca fala com leveza, usa o gatinho como parte da identidade e transforma cada fornada em um jeito carinhoso de presentear, celebrar e deixar o dia mais doce.",
  finalCtaTitle: "Bateu vontade de um cookie da Mavis?",
  finalCtaDescription:
    "Chama no WhatsApp, escolhe seus sabores e combina a entrega em Teresina. Se for para evento, lembrancinha ou presente, conta a ideia que a Mavis ajuda a montar.",
  whatsappNumber: "558699225426",
  whatsappDisplay: "(86) 99225-5426",
  instagramHandle: "@cookiesmavis",
  instagramUrl: "https://www.instagram.com/cookiesmavis/",
  linktreeUrl: "https://linktr.ee/cookiesmaviss",
  cardapioUrl:
    "https://drive.google.com/file/d/1ZgvTmLlGmkLf3HWaejXU03gdc73hI9Er/view?usp=sharing",
  serviceRegion: "Teresina-PI",
  serviceHours: "Atendimento e disponibilidade pelo WhatsApp",
  paymentMethods: ["Confirmar no WhatsApp"],
  deliveryInfo:
    "Atendimento em Teresina-PI com entregas via delivery. A taxa, o horário e a disponibilidade são combinados no WhatsApp.",
  logo: {
    src: "/images/brand/logo.jpeg",
    alt: "Logo da Cookies da Mavis com gato branco dentro de um cookie rosa"
  },
  heroImage: {
    src: "/images/brand/red-ninho-e-trad-nutella.jpeg",
    alt: "Cookies Red Ninho e Tradicional com Nutella empilhados"
  },
  aboutImage: {
    src: "/images/brand/post-12-DOOFv80DrR0.jpg",
    alt: "Embalagens e cookitos da Cookies da Mavis com identidade rosa"
  },
  palette: {
    background: "#fff1f3",
    surface: "#fffafa",
    surfaceStrong: "#ffd9df",
    text: "#351114",
    muted: "#7e4b51",
    primary: "#b9152a",
    primaryForeground: "#fff7f8",
    accent: "#ef6078",
    accentSoft: "#ffd7df"
  },
  analysis: {
    visualStyle:
      "Identidade fofa e afetiva, com logo de gato dentro do cookie, rosa blush, vermelho cereja e embalagens delicadas.",
    communicationTone:
      "Tom doce, próximo e carinhoso, com linguagem de afeto, presentes, eventos e momentos especiais.",
    audience:
      "Público de Teresina que busca cookies artesanais para consumo próprio, aniversários, eventos, lembrancinhas e presentes.",
    photoDirection:
      "Priorizar close-ups dos recheios nos sabores, fotos de mesa/embalagens para eventos e o logo como selo de confiança."
  },
  showEditingHints: false
} as const;

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sabores", href: "#sabores" },
  { label: "Sobre", href: "#sobre" },
  { label: "Como pedir", href: "#como-pedir" },
  { label: "Contato", href: "#contato" }
] as const;

export const products: Product[] = [
  {
    id: "tradicional",
    name: "Tradicional",
    description:
      "Massa tradicional com gotas de chocolate ao leite e meio amargo.",
    price: "R$ 8,00",
    image: {
      src: "/images/brand/cardapio-page1-image5-X15.jpg",
      alt: "Cookie tradicional da Cookies da Mavis com gotas de chocolate"
    },
    category: "Clássico",
    featured: true
  },
  {
    id: "tradicional-com-nutella",
    name: "Tradicional com Nutella",
    description:
      "Massa tradicional com gotas de chocolate e recheio de Nutella.",
    price: "R$ 12,00",
    image: {
      src: "/images/brand/tradicional-nutella.jpeg",
      alt: "Cookie Tradicional com Nutella da Cookies da Mavis"
    },
    category: "Recheado"
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    description:
      "Massa de red velvet com gotas de chocolate branco.",
    price: "R$ 8,00",
    image: {
      src: "/images/brand/cookies-red-velvet.jpeg",
      alt: "Cookies Red Velvet embalados da Cookies da Mavis"
    },
    category: "Clássico"
  },
  {
    id: "red-ninho",
    name: "Red Ninho",
    description:
      "Massa de red velvet com gotas de chocolate branco e recheio de Ninho.",
    price: "R$ 12,00",
    image: {
      src: "/images/brand/red-ninho.jpeg",
      alt: "Cookie Red Ninho da Cookies da Mavis"
    },
    category: "Recheado"
  },
  {
    id: "red-nutella",
    name: "Red Nutella",
    description:
      "Massa de red velvet com gotas de chocolate branco e recheio de Nutella.",
    price: "R$ 12,00",
    image: {
      src: "/images/brand/red-nutella.jpeg",
      alt: "Cookie Red Nutella da Cookies da Mavis com recheio cremoso"
    },
    category: "Recheado"
  },
  {
    id: "oreo",
    name: "Oreo",
    description:
      "Massa com chocolate black 100% cacau e gotas de chocolate branco.",
    price: "R$ 8,00",
    image: {
      src: "/images/brand/cookies-de-oreo.jpeg",
      alt: "Cookies de Oreo da Cookies da Mavis em uma assadeira"
    },
    category: "Lançamento"
  }
];

export const combos: Combo[] = [
  {
    id: "cookitos-com-nutella",
    name: "Cookitos com Nutella",
    description:
      "Mini cookies com potinho de Nutella, formato que apareceu no perfil como queridinho para eventos e momentos especiais.",
    image: {
      src: "/images/brand/post-12-DOOFv80DrR0.jpg",
      alt: "Cookitos com Nutella em embalagem da Cookies da Mavis"
    }
  },
  {
    id: "mini-cookies-eventos",
    name: "Mini cookies para eventos",
    description:
      "Opção vista no Instagram para aniversários, lembrancinhas e mesas doces. Quantidades e montagem são combinadas por encomenda.",
    image: {
      src: "/images/brand/post-02-DXFYwe7DzXx.jpg",
      alt: "Mesa de aniversário com mini cookies da Cookies da Mavis"
    }
  }
];

export const differentials = [
  {
    title: "Cookies artesanais",
    description:
      "Produção com estética própria, cuidado nos detalhes e sabores pensados para ficar bonitos e gostosos."
  },
  {
    title: "Recheios generosos",
    description:
      "Os recheados aparecem como protagonistas do cardápio, com Nutella e Ninho bem visíveis nas fotos."
  },
  {
    title: "Eventos e presentes",
    description:
      "O perfil mostra mini cookies, kits, embalagens e entregas para aniversários, simpósios e datas especiais."
  },
  {
    title: "Delivery em Teresina",
    description:
      "A bio informa atendimento em Teresina-PI com entregas via delivery combinadas pelo WhatsApp."
  }
] as const;

export const orderSteps = [
  {
    title: "Escolha seus cookies",
    description: "Veja os sabores reais cadastrados e escolha os favoritos."
  },
  {
    title: "Chame no WhatsApp",
    description: "O botao ja abre uma mensagem pronta com o sabor escolhido."
  },
  {
    title: "Confirme o pedido",
    description:
      "Ajuste quantidade, data, disponibilidade, taxa de entrega e pagamento."
  },
  {
    title: "Combine entrega ou retirada",
    description:
      "Finalize conforme a forma real de atendimento da confeiteira."
  }
] as const;

export const testimonials: Testimonial[] = [
  {
    id: "depoimento-placeholder-1",
    name: "Cliente autorizado",
    text: "Espaço reservado para um depoimento real recebido pelo WhatsApp ou Instagram.",
    isPlaceholder: true
  },
  {
    id: "depoimento-placeholder-2",
    name: "Cliente autorizado",
    text: "Substitua este texto por uma avaliação verdadeira antes de publicar.",
    isPlaceholder: true
  }
];

export const faq: FaqItem[] = [
  {
    question: "Faz entrega?",
    answer:
      "Sim. A Cookies da Mavis atende em Teresina-PI com entregas via delivery. Taxa e horário são confirmados no WhatsApp."
  },
  {
    question: "Precisa pedir com antecedencia?",
    answer:
      "Para sabores, kits e quantidades maiores, o ideal é chamar no WhatsApp e confirmar disponibilidade para a data desejada."
  },
  {
    question: "Quais formas de pagamento?",
    answer:
      "As formas de pagamento ainda precisam ser confirmadas pela marca. Deixei esse ponto centralizado em `brandInfo.paymentMethods` para edição rápida."
  },
  {
    question: "Posso montar uma caixa personalizada?",
    answer:
      "O perfil mostra kits, mini cookies e embalagens especiais. Para montar uma caixa, chame no WhatsApp e combine sabores, quantidade e ocasião."
  }
];

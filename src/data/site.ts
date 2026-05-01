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
    "Cookies artesanais em Teresina-PI, feitos para adoçar o dia com muito recheio, carinho e miados.",
  heroTitle: "Amor, cookies e miados em cada mordida",
  heroSubtitle:
    "Cookies recheados, cookitos e lembrancinhas para matar a vontade de doce ou deixar qualquer momento mais especial.",
  storyTitle: "Uma estudante de vet que também assa felicidade",
  story:
    "A Cookies da Mavis nasceu do amor por bichos e por cookies bem feitos. Cada fornada sai com aquele cuidado de quem quer entregar mais que um doce: um mimo gostoso, bonito e cheio de carinho.",
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
    alt: "Cookitos com Nutella e embalagens rosas da Cookies da Mavis"
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
      src: "/images/brand/poster-tradicional.jpeg",
      alt: "Card do sabor Tradicional da Cookies da Mavis"
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
      src: "/images/brand/poster-tradicional-nutella.jpeg",
      alt: "Card do sabor Tradicional com Nutella da Cookies da Mavis"
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
      src: "/images/brand/poster-red-velvet.jpeg",
      alt: "Card do sabor Red Velvet da Cookies da Mavis"
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
      src: "/images/brand/poster-red-ninho.jpeg",
      alt: "Card do sabor Red Ninho da Cookies da Mavis"
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
      src: "/images/brand/poster-red-nutella.jpeg",
      alt: "Card do sabor Red Nutella da Cookies da Mavis"
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
      src: "/images/brand/poster-oreo.jpeg",
      alt: "Card do sabor Oreo da Cookies da Mavis"
    },
    category: "Lançamento"
  }
];

export const combos: Combo[] = [
  {
    id: "cookitos-com-nutella",
    name: "Cookitos com Nutella",
    description:
      "Mini cookies com potinho de Nutella para presentear, dividir ou deixar a mesa mais gostosa.",
    image: {
      src: "/images/brand/post-12-DOOFv80DrR0.jpg",
      alt: "Cookitos com Nutella em embalagem da Cookies da Mavis"
    }
  },
  {
    id: "mini-cookies-eventos",
    name: "Mini cookies para eventos",
    description:
      "Perfeitos para aniversários, lembrancinhas e mesas doces. Você combina quantidade, sabores e montagem pelo WhatsApp.",
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
      "Feitos com cuidado em cada fornada, do sabor à embalagem."
  },
  {
    title: "Recheios generosos",
    description:
      "Nutella e Ninho aparecem sem timidez nos cookies recheados."
  },
  {
    title: "Eventos e presentes",
    description:
      "Cookitos, kits e embalagens que combinam com aniversário, mimo e mesa doce."
  },
  {
    title: "Delivery em Teresina",
    description:
      "Entrega via delivery em Teresina-PI, combinada direto no WhatsApp."
  }
] as const;

export const orderSteps = [
  {
    title: "Escolha seus cookies",
    description: "Escolha seus sabores favoritos no cardápio."
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
      "Combine o melhor horário e a forma de entrega."
  }
] as const;

export const testimonials: Testimonial[] = [
  {
    id: "depoimento-placeholder-1",
    name: "Cliente autorizado",
    text: "Espaço reservado para um depoimento real de cliente.",
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
      "As formas de pagamento são confirmadas no WhatsApp no fechamento do pedido."
  },
  {
    question: "Posso montar uma caixa personalizada?",
    answer:
      "Pode sim. Chame no WhatsApp e combine sabores, quantidade e ocasião."
  }
];

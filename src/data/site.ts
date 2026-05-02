export type ImageInfo = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  spotlightDescription?: string;
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
    "Cookies artesanais em Teresina-PI e Timon-MA, feitos para adoçar o dia com muito recheio, carinho e miados.",
  heroTitle: "Amor, cookies e miados em cada mordida",
  heroSubtitle:
    "Cookies recheados, cookitos e lembrancinhas para matar a vontade de doce ou deixar qualquer momento mais especial.",
  storyTitle: "Uma estudante de vet que também assa felicidade",
  story:
    "A Cookies da Mavis nasceu do amor por bichos e por cookies bem feitos. Cada fornada sai com aquele cuidado de quem quer entregar mais que um doce: um mimo gostoso, bonito e cheio de carinho.",
  finalCtaTitle: "Bateu vontade de um cookie da Mavis?",
  finalCtaDescription:
    "Chama no WhatsApp, escolhe seus sabores e combina a entrega em Teresina ou Timon. Se for para evento, lembrancinha ou presente, conta a ideia que a Mavis ajuda a montar.",
  whatsappNumber: "558699225426",
  whatsappDisplay: "(86) 99225-5426",
  instagramHandle: "@cookiesmavis",
  instagramUrl: "https://www.instagram.com/cookiesmavis/",
  linktreeUrl: "https://linktr.ee/cookiesmaviss",
  siteUrl: "https://cookies-da-mavis.vercel.app/",
  cardapioUrl:
    "https://drive.google.com/file/d/1ZgvTmLlGmkLf3HWaejXU03gdc73hI9Er/view?usp=sharing",
  serviceRegion: "Teresina-PI e Timon-MA",
  serviceHours: "Atendimento e disponibilidade pelo WhatsApp",
  paymentMethods: ["Confirmar no WhatsApp"],
  deliveryInfo:
    "Atendimento em Teresina-PI e Timon-MA com entregas via delivery. A taxa, o horário e a disponibilidade são combinados no WhatsApp.",
  logo: {
    src: "/images/brand/logo.jpeg",
    alt: "Logo da Cookies da Mavis com gato branco dentro de um cookie rosa"
  },
  heroImage: {
    src: "/images/brand/tradicional-nutella.jpeg",
    alt: "Cookie Tradicional com Nutella em prato vermelho"
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
      "Público de Teresina e Timon que busca cookies artesanais para consumo próprio, aniversários, eventos, lembrancinhas e presentes.",
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
      "O clássico cookie amanteigado, crocante por fora e macio por dentro, com gotas de chocolate ao leite e meio amargo.",
    spotlightDescription:
      "Aquele clássico que não falha: massa amanteigada, gotas de chocolate e textura macia por dentro.",
    price: "R$ 8,00",
    image: {
      src: "/images/brand/flavor-tradicional-clean.jpeg",
      alt: "Cookie Tradicional da Cookies da Mavis"
    },
    category: "Clássico",
    featured: false
  },
  {
    id: "tradicional-com-nutella",
    name: "Tradicional com Nutella",
    description:
      "Massa amanteigada do cookie tradicional com recheio irresistível de Nutella, crocância por fora e cremosidade por dentro.",
    spotlightDescription:
      "O destaque da Mavis: cookie tradicional com recheio de Nutella bem cremoso, perfeito para quem quer uma mordida mais chocolatuda.",
    price: "R$ 12,00",
    image: {
      src: "/images/brand/flavor-tradicional-nutella-clean.jpeg",
      alt: "Cookie Tradicional com Nutella da Cookies da Mavis"
    },
    category: "Recheado",
    featured: true
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    description:
      "Massa vibrante e delicada de Red Velvet, com gotas de chocolate branco que derretem na boca.",
    spotlightDescription:
      "Red Velvet delicado, com cor linda e gotas de chocolate branco para equilibrar cada mordida.",
    price: "R$ 8,00",
    image: {
      src: "/images/brand/flavor-red-velvet-clean.jpeg",
      alt: "Cookie Red Velvet da Cookies da Mavis"
    },
    category: "Clássico"
  },
  {
    id: "red-ninho",
    name: "Red Ninho",
    description:
      "Massa macia de Red Velvet com recheio cremoso de leite Ninho, equilibrando doçura e suavidade em cada mordida.",
    spotlightDescription:
      "Red Velvet macio com recheio de Ninho, uma opção cremosa, suave e bem queridinha.",
    price: "R$ 12,00",
    image: {
      src: "/images/brand/flavor-red-ninho-clean.jpeg",
      alt: "Cookie Red Ninho da Cookies da Mavis"
    },
    category: "Recheado"
  },
  {
    id: "red-nutella",
    name: "Red Nutella",
    description:
      "O clássico de Red Velvet ganha ainda mais sabor com recheio generoso de Nutella, criando uma combinação perfeita entre cacau e avelã.",
    spotlightDescription:
      "Red Velvet com Nutella para quem gosta de recheio mais intenso e aquela combinação de cacau com avelã.",
    price: "R$ 12,00",
    image: {
      src: "/images/brand/flavor-red-nutella-clean.jpeg",
      alt: "Cookie Red Nutella da Cookies da Mavis"
    },
    category: "Recheado"
  },
  {
    id: "oreo",
    name: "Oreo",
    description:
      "Massa macia e saborosa com chocolate Black 100% cacau, gotas de chocolate branco e um toque de baunilha.",
    spotlightDescription:
      "Massa de chocolate Black, gotas brancas e Oreo por cima: bonito, marcante e ótimo para presentear.",
    price: "R$ 8,00",
    image: {
      src: "/images/brand/flavor-oreo-packaged.jpeg",
      alt: "Cookie Oreo embalado da Cookies da Mavis"
    },
    category: "Lançamento"
  }
];

export const combos: Combo[] = [
  {
    id: "cookitos-com-nutella",
    name: "Cookitos com Nutella",
    description:
      "6 unidades de cookitos +1 potinho de 30g de Nutella para presentear, dividir ou deixar a mesa mais gostosa.",
    image: {
      src: "/images/brand/post-12-DOOFv80DrR0.jpg",
      alt: "Cookitos com Nutella em embalagem da Cookies da Mavis"
    }
  },
  {
    id: "mini-cookies-eventos",
    name: "Mini cookies para eventos",
    description:
      "Perfeitos para aniversários, lembrancinhas e mesa de doces. Você combina quantidade, sabores e montagem pelo WhatsApp.",
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
    title: "Delivery em Teresina e Timon",
    description:
      "Entrega via delivery em Teresina-PI e Timon-MA, combinada direto no WhatsApp."
  }
] as const;

export const orderSteps = [
  {
    title: "Escolha seus cookies",
    description: "Escolha seus sabores favoritos no cardápio."
  },
  {
    title: "Chame no WhatsApp",
    description:
      "O carrinho monta a mensagem com sabores e quantidades para enviar no WhatsApp."
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
    id: "feedback-whatsapp-cliente-fiel",
    name: "Feedback via WhatsApp",
    text: "Nossa, muito bons mesmo. Tô apaixonadaaa! Vou virar cliente fiel agora.",
    image: {
      src: "/images/brand/feedback-whatsapp-1.jpeg",
      alt: "Print de cliente elogiando os cookies e dizendo que vai virar cliente fiel"
    }
  },
  {
    id: "feedback-whatsapp-cookie-gostoso",
    name: "Feedback via WhatsApp",
    text: "Meu deus, o cookie mais gostoso do mundo. Tu arrasa.",
    image: {
      src: "/images/brand/feedback-whatsapp-2.jpeg",
      alt: "Print de cliente elogiando o sabor dos cookies da Cookies da Mavis"
    }
  }
];

export const faq: FaqItem[] = [
  {
    question: "Faz entrega?",
    answer:
      "Sim. A Cookies da Mavis atende em Teresina-PI e Timon-MA com entregas via delivery. Taxa e horário são confirmados no WhatsApp."
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

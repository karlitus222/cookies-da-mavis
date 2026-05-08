# Cookies da Mavis

Landing page profissional e responsiva para a **Cookies da Mavis**, feita com materiais reais da marca: logo, fotos dos cookies, cardápio, cores, Instagram, WhatsApp e feedbacks de clientes.

Site em produção: [cookies-da-mavis.vercel.app](https://cookies-da-mavis.vercel.app/)

## O Que O Site Faz

- Apresenta a marca, a proposta artesanal e os sabores reais da Cookies da Mavis.
- Mostra fotos reais dos cookies, especiais, feedbacks e informações de atendimento.
- Permite adicionar sabores, cookitos e mini cookies para eventos em um carrinho.
- Gera uma mensagem pronta para WhatsApp com itens, quantidades e total aproximado quando houver preço.
- Funciona bem em mobile e desktop, com layout estático otimizado para hospedagem em Vercel, Netlify, Cloudflare Pages ou GitHub Pages.

## Principais Funções

- `Carrinho inteligente`: soma quantidades, remove itens e monta a mensagem do pedido.
- `Pedido pelo WhatsApp`: abre `wa.me` com texto pré-preenchido e lista de produtos.
- `Controle de estoque simples`: mostra estoque quando informado e bloqueia produto com `stock: 0`.
- `Dados centralizados`: textos, contatos, sabores, preços, combos, FAQ e depoimentos ficam em `src/data/site.ts`.
- `Cards editáveis`: produtos e especiais são gerados por arrays, sem precisar duplicar HTML.
- `Identidade visual da marca`: paleta rosa/vermelho, estampa de cookies/gatinhos, fotos reais e logo da Mavis.
- `Site estático`: `next build` exporta a pasta `out/`, pronta para deploy.

## Tecnologias

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Next Image
- Static Export

## Estrutura Do Projeto

```text
src/
  app/
    globals.css        estilos globais, tema, animações e utilitários visuais
    layout.tsx         fontes, metadata e HTML base
    page.tsx           composição principal da landing page
  components/
    CartDrawer.tsx     carrinho flutuante e checkout por WhatsApp
    CartProvider.tsx   estado global do carrinho
    ProductCard.tsx    card dos sabores
    ComboCard.tsx      card dos produtos especiais
    FlavorShowcase.tsx destaque interativo dos sabores
    Hero.tsx           primeira dobra da página
    SiteHeader.tsx     barra superior e menu
  data/
    site.ts            dados editáveis da marca, produtos, combos e FAQ
  lib/
    assetPath.ts       ajuste de caminhos para deploy estático
    price.ts           parse e formatação de moeda brasileira
    productCategory.ts metadata visual dos chips de categoria
    stock.ts           regras de disponibilidade e limite do estoque
    whatsapp.ts        criação de mensagens e links do WhatsApp
public/
  images/brand/        logo, fotos, feedbacks e artes reais
```

## Como Rodar Localmente

```bash
npm install
npm run dev
```

Acesse:

```text
http://localhost:3000
```

## Comandos Úteis

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

`npm run build` gera a versão estática em `out/`.

## Onde Editar Textos, Sabores E Contatos

Edite [src/data/site.ts](src/data/site.ts).

- `brandInfo`: nome, WhatsApp, Instagram, região, horário, textos principais, links e paleta.
- `products`: sabores, descrições, preços, categorias e imagens.
- `combos`: cookitos, mini cookies para eventos e produtos especiais.
- `differentials`: diferenciais reais da produção.
- `testimonials`: prints e textos dos feedbacks.
- `faq`: perguntas frequentes e respostas.

Exemplo de produto:

```ts
{
  id: "red-ninho",
  name: "Red Ninho",
  description: "Massa macia de Red Velvet com recheio cremoso de leite Ninho.",
  price: "R$ 12,00",
  stock: 12,
  image: {
    src: "/images/brand/flavor-red-ninho-clean.jpeg",
    alt: "Cookie Red Ninho da Cookies da Mavis"
  },
  category: "Recheado"
}
```

### Como Editar Estoque

No `src/data/site.ts`, cada produto ou combo pode ter `stock`.

- `stock: null`: nao mostra estoque no site.
- `stock: 12`: mostra `12 em estoque` e limita o carrinho a 12 unidades.
- `stock: 0`: mostra `Indisponivel` e bloqueia o botao de adicionar.

Se nao quiser controlar estoque de um produto, deixe como `null`.

## Como Trocar Fotos

Coloque as imagens em:

```text
public/images/brand/
```

Depois atualize o caminho no `src/data/site.ts`:

```ts
image: {
  src: "/images/brand/nova-foto.jpeg",
  alt: "Descrição clara da foto para acessibilidade"
}
```

## Como O Carrinho Funciona

O carrinho fica em `CartProvider` e `CartDrawer`.

- `addItem`: adiciona produto ou aumenta quantidade se ele já existir, respeitando o estoque.
- `increment`: aumenta a quantidade ate o limite de estoque informado.
- `decrement`: diminui a quantidade e remove quando chega a zero.
- `removeItem`: remove um item específico.
- `clear`: limpa o carrinho.
- `createCartOrderMessage`: monta a mensagem final para WhatsApp.

Quando todos os itens têm preço, o carrinho mostra total aproximado. Quando algum item depende de orçamento, como mini cookies para evento, o total aparece como `a confirmar`.

## Deploy

### Vercel

O projeto já está publicado na Vercel.

Configuração:

```text
Build command: npm run build
Output directory: out
```

### Netlify

O arquivo `netlify.toml` já define build e pasta de publicação.

### GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` publica automaticamente quando houver push na branch `main`.

## Checklist Antes De Publicar Mudanças

```bash
npm run typecheck
npm run lint
npm run build
```

Depois faça commit, push e deploy.

## Observações

- Não use imagens aleatórias de cookies se houver fotos reais da Mavis.
- Não coloque avaliações fictícias como se fossem reais.
- Mantenha preços, sabores, WhatsApp e região de atendimento atualizados em `src/data/site.ts`.
- Para mudar a identidade visual, edite primeiro a paleta em `brandInfo.palette` e depois ajuste os estilos globais.

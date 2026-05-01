# Landing page para confeitaria de cookies

Projeto em Next.js, React, TypeScript, Tailwind CSS e App Router para a Cookies da Mavis, usando logo, fotos, Instagram, WhatsApp e sabores reais fornecidos.

## Como rodar

```bash
npm install
npm run dev
```

Depois acesse `http://localhost:3000`.

## Como gerar a versao estatica

```bash
npm run build
```

O Next.js vai gerar a pasta `out/`. Essa pasta pode ser publicada como site estatico.

Para testar a versao estatica localmente:

```bash
npm run build
npm run start
```

## Hospedagem

Vercel:

- Build command: `npm run build`
- Output directory: `out`

Netlify:

- O arquivo `netlify.toml` ja configura `npm run build` e publica `out`.

Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `out`

GitHub Pages:

- Build command: `npm run build`
- Publicar a pasta `out`
- O arquivo `public/.nojekyll` evita problema com a pasta `_next` no GitHub Pages.
- O workflow `.github/workflows/deploy-pages.yml` publica automaticamente quando houver push na branch `main`.
- Para repositórios de projeto, o workflow usa `NEXT_PUBLIC_BASE_PATH` para o site funcionar em `https://USUARIO.github.io/NOME-DO-REPO/`.

## Onde editar os dados reais

Edite o arquivo `src/data/site.ts`.

Ali ficam:

- `brandInfo`: nome da marca, WhatsApp, Instagram, horario, regiao, textos e paleta.
- `products`: sabores reais, descricoes, precos e fotos do cardapio.
- `combos`: combos ou produtos especiais, se existirem.
- `differentials`: diferenciais reais da producao.
- `testimonials`: depoimentos reais ou placeholders editaveis.
- `faq`: perguntas e respostas conforme a forma real de atendimento.

## Onde colocar imagens

Coloque logo e fotos reais em `public/images`.

Exemplos de caminhos para usar em `src/data/site.ts`:

```ts
logo: {
  src: "/images/logo.png",
  alt: "Logo da Nome da Marca"
}
```

```ts
image: {
  src: "/images/cookie-red-velvet.jpg",
  alt: "Cookie red velvet da Nome da Marca"
}
```

## Valores extraidos do cardapio

- Tradicional: R$ 8,00
- Tradicional com Nutella: R$ 12,00
- Red Velvet: R$ 8,00
- Red Ninho: R$ 12,00
- Red Nutella: R$ 12,00
- Oreo: R$ 8,00

## Observacao importante

Depoimentos e formas de pagamento ainda estao como campos editaveis porque nao foram confirmados nos materiais enviados.

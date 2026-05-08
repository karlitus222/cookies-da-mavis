import { combos, products } from "@/dados/conteudo-site";
import { CartaoCombo } from "./CartaoCombo";
import { DicaEdicao } from "./DicaEdicao";
import { DestaqueSabores } from "./DestaqueSabores";
import { CartaoProduto } from "./CartaoProduto";
import { TituloSecao } from "./TituloSecao";

export function SecaoProdutos() {
  return (
    <section
      className="section-wave scroll-reveal bg-[var(--color-surface)] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
      id="sabores"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <TituloSecao
            eyebrow="Sabores"
            title="Escolha seu cookie da Mavis"
            description="Tem clássico, red velvet, Oreo e versões bem recheadas para quem ama Nutella ou Ninho."
          />
          <DicaEdicao className="self-start sm:self-auto">
            cards editaveis
          </DicaEdicao>
        </div>

        <DestaqueSabores products={products} />

        <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <div
              className={`animate-rise-in ${
                index === 1 ? "stagger-1" : index === 2 ? "stagger-2" : ""
              }`}
              key={product.id}
            >
              <CartaoProduto product={product} />
            </div>
          ))}
        </div>

        {combos.length > 0 ? (
          <div className="sweet-panel mt-10 rounded-[1.5rem] border border-[var(--color-primary)]/10 bg-[var(--color-background)]/92 p-4 shadow-sm sm:mt-16 sm:rounded-[2rem] sm:p-8">
            <TituloSecao
              eyebrow="Especiais"
              title="Para eventos, presentes e lembrancinhas"
              description="Cookitos, kits e mini cookies para deixar aniversários, encontros e presentes mais doces."
            />
            <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-2">
              {combos.map((combo) => (
                <CartaoCombo combo={combo} key={combo.id} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

import Image from "next/image";
import { combos, products } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { EditingHint } from "./EditingHint";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";

export function ProductsSection() {
  return (
    <section
      className="bg-[var(--color-surface)] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      id="sabores"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Sabores"
            title="Escolha seu cookie da Mavis"
            description="Sabores extraídos do cardápio e das fotos reais da marca. Os recheados são os que fazem a tela quase virar vitrine."
          />
          <EditingHint className="self-start sm:self-auto">
            cards editaveis
          </EditingHint>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <div
              className={`animate-rise-in ${
                index === 1 ? "stagger-1" : index === 2 ? "stagger-2" : ""
              }`}
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {combos.length > 0 ? (
          <div className="mt-16 rounded-[2rem] border border-[var(--color-primary)]/10 bg-[var(--color-background)] p-6 sm:p-8">
            <SectionHeading
              eyebrow="Especiais"
              title="Para eventos, presentes e lembrancinhas"
              description="Formatos que aparecem no Instagram da Cookies da Mavis e podem ser combinados por encomenda."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {combos.map((combo) => (
                <article
                  className="overflow-hidden rounded-3xl bg-[var(--color-surface)] shadow-sm"
                  key={combo.id}
                >
                  {combo.image ? (
                    <Image
                      src={assetPath(combo.image.src)}
                      alt={combo.image.alt}
                      width={720}
                      height={520}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  ) : null}
                  <div className="p-5">
                    <h3 className="font-display text-2xl font-black">
                      {combo.name}
                    </h3>
                    <p className="mt-2 leading-7 text-[var(--color-muted)]">
                      {combo.description}
                    </p>
                    {combo.price ? (
                      <p className="mt-4 font-black text-[var(--color-primary)]">
                        {combo.price}
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

import Image from "next/image";
import { combos, products } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { EditingHint } from "./EditingHint";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./SectionHeading";

export function ProductsSection() {
  return (
    <section
      className="bg-[var(--color-surface)] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
      id="sabores"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Sabores"
            title="Escolha seu cookie da Mavis"
            description="Tem clássico, red velvet, Oreo e versões bem recheadas para quem ama Nutella ou Ninho."
          />
          <EditingHint className="self-start sm:self-auto">
            cards editaveis
          </EditingHint>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
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
          <div className="mt-10 rounded-[1.5rem] border border-[var(--color-primary)]/10 bg-[var(--color-background)] p-4 sm:mt-16 sm:rounded-[2rem] sm:p-8">
            <SectionHeading
              eyebrow="Especiais"
              title="Para eventos, presentes e lembrancinhas"
              description="Cookitos, kits e mini cookies para deixar aniversários, encontros e presentes mais doces."
            />
            <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-2">
              {combos.map((combo) => (
                <article
                  className="overflow-hidden rounded-2xl bg-[var(--color-surface)] shadow-sm sm:rounded-3xl"
                  key={combo.id}
                >
                  {combo.image ? (
                    <Image
                      src={assetPath(combo.image.src)}
                      alt={combo.image.alt}
                      width={720}
                      height={520}
                      className="aspect-[4/2.7] w-full object-cover sm:aspect-[4/3]"
                    />
                  ) : null}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-display text-xl font-black sm:text-2xl">
                      {combo.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
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

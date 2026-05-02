import { differentials } from "@/data/site";
import { EditingHint } from "./EditingHint";
import { SectionHeading } from "./SectionHeading";

export function DifferentialsSection() {
  return (
    <section className="mavis-pattern-soft px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <EditingHint>diferenciais reais</EditingHint>
            <SectionHeading
              eyebrow="Diferenciais"
              title="O jeitinho Mavis de adoçar momentos"
              description="Cookies bonitos, recheados e feitos com carinho para virar mimo, lembrancinha ou sobremesa do dia."
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {differentials.map((item, index) => (
              <article
                className="tap-soft rounded-[1.5rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/94 p-4 shadow-sm sm:rounded-[2rem] sm:p-6"
                key={`${item.title}-${index}`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-xs font-black text-[var(--color-primary)] sm:h-10 sm:w-10 sm:rounded-2xl sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-black sm:mt-5 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)] sm:mt-3 sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

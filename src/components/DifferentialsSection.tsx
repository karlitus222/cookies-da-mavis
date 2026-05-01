import { differentials } from "@/data/site";
import { EditingHint } from "./EditingHint";
import { SectionHeading } from "./SectionHeading";

export function DifferentialsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <EditingHint>diferenciais reais</EditingHint>
            <SectionHeading
              eyebrow="Diferenciais"
              title="O jeitinho Mavis de adoçar momentos"
              description="A identidade da marca aparece nos detalhes: rosa, gato, embalagens delicadas, cookies recheados e muita intenção de presente."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {differentials.map((item, index) => (
              <article
                className="rounded-[2rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)] p-6 shadow-sm"
                key={`${item.title}-${index}`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-sm font-black text-[var(--color-primary)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-2xl font-black">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--color-muted)]">
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

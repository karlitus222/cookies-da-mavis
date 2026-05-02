import Image from "next/image";
import { brandInfo } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { EditingHint } from "./EditingHint";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section className="mavis-pattern-soft px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24" id="sobre">
      <div className="mx-auto grid max-w-7xl gap-7 sm:gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[var(--color-accent-soft)]/45" />
          <Image
            src={assetPath(brandInfo.aboutImage.src)}
            alt={brandInfo.aboutImage.alt}
            width={720}
            height={780}
            className="relative aspect-[5/4] w-full rounded-[1.75rem] object-cover shadow-brand sm:aspect-[5/6] sm:rounded-[2rem]"
          />
        </div>

        <div>
          <EditingHint>historia real editavel</EditingHint>
          <SectionHeading
            eyebrow="Sobre"
            title={brandInfo.storyTitle}
            description={brandInfo.shortDescription}
          />
          <div className="tap-soft mt-5 rounded-[1.5rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)]/94 p-4 text-sm leading-7 text-[var(--color-muted)] shadow-sm sm:mt-8 sm:rounded-[2rem] sm:p-8 sm:text-base sm:leading-8">
            <p>{brandInfo.story}</p>
          </div>

          <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
            <div className="tap-soft rounded-2xl bg-[var(--color-surface-strong)]/70 p-4 shadow-sm sm:rounded-3xl sm:p-5">
              <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs">
                Confeiteira
              </p>
              <p className="mt-1 font-display text-xl font-black sm:mt-2 sm:text-2xl">
                {brandInfo.bakerName}
              </p>
            </div>
            <div className="tap-soft rounded-2xl bg-[var(--color-surface-strong)]/70 p-4 shadow-sm sm:rounded-3xl sm:p-5">
              <p className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-xs">
                Atendimento
              </p>
              <p className="mt-1 text-sm font-bold sm:mt-2 sm:text-base">
                {brandInfo.serviceHours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

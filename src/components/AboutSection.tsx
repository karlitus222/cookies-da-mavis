import Image from "next/image";
import { brandInfo } from "@/data/site";
import { assetPath } from "@/lib/assetPath";
import { EditingHint } from "./EditingHint";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24" id="sobre">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-[var(--color-accent-soft)]/45" />
          <Image
            src={assetPath(brandInfo.aboutImage.src)}
            alt={brandInfo.aboutImage.alt}
            width={720}
            height={780}
            className="relative aspect-[5/6] w-full rounded-[2rem] object-cover shadow-brand"
          />
        </div>

        <div>
          <EditingHint>historia real editavel</EditingHint>
          <SectionHeading
            eyebrow="Sobre"
            title={brandInfo.storyTitle}
            description={brandInfo.shortDescription}
          />
          <div className="mt-8 rounded-[2rem] border border-[var(--color-primary)]/10 bg-[var(--color-surface)] p-6 leading-8 text-[var(--color-muted)] shadow-sm sm:p-8">
            <p>{brandInfo.story}</p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[var(--color-surface-strong)]/60 p-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Confeiteira
              </p>
              <p className="mt-2 font-display text-2xl font-black">
                {brandInfo.bakerName}
              </p>
            </div>
            <div className="rounded-3xl bg-[var(--color-surface-strong)]/60 p-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Atendimento
              </p>
              <p className="mt-2 font-bold">{brandInfo.serviceHours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { brandInfo } from "@/data/site";
import { cn } from "@/lib/cn";

type EditingHintProps = {
  children: string;
  className?: string;
};

export function EditingHint({ children, className }: EditingHintProps) {
  if (!brandInfo.showEditingHints) {
    return null;
  }

  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)]/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]",
        className
      )}
    >
      {children}
    </span>
  );
}

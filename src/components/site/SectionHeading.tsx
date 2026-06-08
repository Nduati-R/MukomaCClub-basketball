import { cn } from "@/lib/utils";

interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
}

export const SectionHeading = ({ tag, title, subtitle, align = "center", invert = false }: Props) => {
  return (
    <div className={cn("max-w-3xl mb-12", align === "center" ? "mx-auto text-center" : "text-left")}>
      {tag && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
          {tag}
        </span>
      )}
      <h2 className={cn("font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight", invert ? "text-background" : "text-forest")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg", invert ? "text-background/70" : "text-muted-foreground")}>
          {subtitle}
        </p>
      )}
      <div className={cn("gold-divider mt-6 w-24", align === "center" && "mx-auto")} />
    </div>
  );
};

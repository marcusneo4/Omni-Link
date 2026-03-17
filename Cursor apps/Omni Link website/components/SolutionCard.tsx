import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface SolutionCardProps {
  title: string;
  features: string[];
  cta: string;
  href: string;
  icon?: LucideIcon;
  index?: number;
}

export default function SolutionCard({
  title,
  features,
  cta,
  href,
  icon: Icon,
  index = 0,
}: SolutionCardProps) {
  return (
    <article
      className="group relative rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] hover:shadow-premium hover:-translate-y-1 hover:border-surface-200 overflow-hidden"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="absolute top-0 right-0 w-36 h-36 bg-brand-100 rounded-bl-[100%] opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      {Icon && (
        <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      )}
      <h3 className="font-display text-xl font-semibold text-ink-900 relative">
        {title}
      </h3>
      <ul className="mt-4 space-y-2 relative">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-ink-600">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-6 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-ink-on-dark shadow-soft transition-all duration-250 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] hover:bg-brand-700 hover:shadow-premium hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
      >
        {cta}
      </Link>
    </article>
  );
}

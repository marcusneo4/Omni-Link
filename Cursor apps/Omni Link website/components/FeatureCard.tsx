import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  index?: number;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  index = 0,
}: FeatureCardProps) {
  return (
    <article
      className="group rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] hover:shadow-premium hover:-translate-y-1 hover:border-surface-200"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {Icon && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
      )}
      <h3 className="font-display text-lg font-semibold text-ink-900">
        {title}
      </h3>
      <p className="mt-3 text-ink-600 leading-relaxed">{description}</p>
    </article>
  );
}

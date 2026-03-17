import CTAButton from "./CTAButton";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  unit: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export default function PricingCard({
  title,
  subtitle,
  price,
  unit,
  features,
  cta,
  featured = false,
}: PricingCardProps) {
  return (
    <article
      className={`rounded-2xl p-6 border transition-all duration-300 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] ${
        featured
          ? "bg-brand-600 border-brand-600 text-ink-on-dark shadow-premium scale-[1.02] hover:shadow-premium-lg"
          : "bg-surface-elevated border-surface-200/80 shadow-soft hover:shadow-premium hover:-translate-y-1 hover:border-surface-200"
      }`}
    >
      <h3
        className={`font-display text-xl font-semibold ${
          featured ? "text-ink-on-dark" : "text-ink-900"
        }`}
      >
        {title}
      </h3>
      <p className={`mt-1 text-sm ${featured ? "text-brand-100" : "text-ink-600"}`}>
        {subtitle}
      </p>
      <div className="mt-6 flex items-baseline gap-1">
        <span
          className={`font-display text-4xl font-bold ${
            featured ? "text-ink-on-dark" : "text-ink-900"
          }`}
        >
          S$ {price}
        </span>
        <span className={featured ? "text-brand-100" : "text-ink-600"}>
          {unit}
        </span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                featured ? "bg-ink-on-dark" : "bg-brand-500"
              }`}
            />
            <span className={featured ? "text-brand-50" : "text-ink-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <CTAButton
          href="/contact"
          variant={featured ? "outline-light" : "primary"}
        >
          {cta}
        </CTAButton>
      </div>
    </article>
  );
}

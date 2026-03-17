import CTAButton from "./CTAButton";
import { homeContent } from "@/lib/content";

export default function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden bg-surface-50 py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-100/40 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute top-1/2 -left-32 w-64 h-64 rounded-full bg-brand-50/50 blur-3xl"
          aria-hidden
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-brand-600 animate-fade-in">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl animate-slide-up">
            {hero.title}
          </h1>
          <p
            className="mt-6 text-lg text-ink-600 leading-relaxed animate-slide-up max-w-2xl mx-auto"
            style={{ animationDelay: "100ms" }}
          >
            {hero.description}
          </p>
          <div
            className="mt-12 animate-slide-up"
            style={{ animationDelay: "150ms" }}
          >
            <CTAButton href="/contact">{hero.cta}</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

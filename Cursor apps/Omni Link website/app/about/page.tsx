import { aboutContent } from "@/lib/content";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "About OmniLink | AI-Powered Business Integration | Singapore",
  description:
    "Connecting systems and empowering teams. Deligo's OmniLink helps Singapore businesses streamline operations with practical AI and workflow automation.",
};

export default function AboutPage() {
  const {
    hero,
    deligo,
    whatIsOmniLink,
    approach,
    technicalCapability,
    lookingForward,
  } = aboutContent;

  return (
    <>
      <section className="bg-surface-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold text-ink-900 sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Deligo */}
      <section className="py-16 sm:py-20 bg-surface-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            {deligo.title}
          </h2>
          <p className="mt-6 text-ink-600 leading-relaxed max-w-3xl">
            {deligo.description}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deligo.timeline.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
              >
                <h3 className="font-display font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton href="/contact">Contact</CTAButton>
          </div>
        </div>
      </section>

      {/* What is OmniLink */}
      <section className="py-16 sm:py-20 bg-surface-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            {whatIsOmniLink.title}
          </h2>
          <div className="mt-8 flex flex-wrap gap-8 sm:gap-12">
            {whatIsOmniLink.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-brand-600">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-ink-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-8 max-w-3xl">
            {whatIsOmniLink.paragraphs.map((para) => (
              <div key={para.heading}>
                <h3 className="font-display text-lg font-semibold text-ink-900">
                  {para.heading}
                </h3>
                <p className="mt-2 text-ink-600 leading-relaxed">{para.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whatIsOmniLink.approaches.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
              >
                <h3 className="font-display font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-ink-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 sm:py-20 bg-surface-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            {approach.title}
          </h2>
          <p className="mt-2 text-ink-600">{approach.subtitle}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {approach.items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
              >
                <h3 className="font-display font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-ink-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capability */}
      <section className="py-16 sm:py-20 bg-surface-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            {technicalCapability.title}
          </h2>
          <p className="mt-2 text-ink-600">{technicalCapability.subtitle}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {technicalCapability.items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
              >
                <h3 className="font-display font-semibold text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-ink-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-16 sm:py-20 bg-ink-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-on-dark sm:text-3xl">
            {lookingForward.title}
          </h2>
          <p className="mt-6 text-surface-300 max-w-3xl">
            {lookingForward.description}
          </p>
          <div className="mt-8">
            <CTAButton href="/contact">Let&apos;s connect</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

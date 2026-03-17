import { pricingContent } from "@/lib/content";
import PricingCard from "@/components/PricingCard";
import FaqAccordion from "@/components/FaqAccordion";
import CTAButton from "@/components/CTAButton";
import {
  Phone,
  FileSignature,
  Search,
  Palette,
  Code2,
  TestTube,
  Rocket,
  Handshake,
} from "lucide-react";

const IMPLEMENTATION_ICONS = [
  Phone,
  FileSignature,
  Search,
  Palette,
  Code2,
  TestTube,
  Rocket,
  Handshake,
] as const;

export const metadata = {
  title: "Pricing & Services | OmniLink Singapore - Custom Business Automation",
  description:
    "Simple 2-tier pricing: S$200 or S$300 per month. Referral bonus scheme available. All prices in SGD.",
};

export default function PricingPage() {
  const {
    hero,
    services,
    referral,
    serviceFeatures,
    quote,
    implementation,
    highlights,
    faqs,
  } = pricingContent;

  return (
    <>
      <section className="bg-surface-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-4xl font-bold text-ink-900 sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-4 text-lg text-ink-600">{hero.subtitle}</p>
          </div>

          {/* Pricing cards */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <PricingCard
                key={service.title}
                title={service.title}
                subtitle={service.subtitle}
                price={service.price}
                unit={service.unit}
                features={service.features}
                cta={service.cta}
                featured={i === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Referral Bonus Scheme */}
      <section className="py-16 sm:py-20 bg-brand-50/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl text-center">
            {referral.title}
          </h2>
          <p className="mt-2 text-ink-600 text-center">{referral.subtitle}</p>
          <p className="mt-4 text-ink-600 text-center max-w-2xl mx-auto">
            {referral.description}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {referral.benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
              >
                <h3 className="font-display font-semibold text-ink-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-ink-600">{benefit.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/contact">{referral.cta}</CTAButton>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 sm:py-20 bg-surface-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl text-center">
            {serviceFeatures.title}
          </h2>
          <p className="mt-2 text-ink-600 text-center">
            {serviceFeatures.subtitle}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceFeatures.items.map((item) => (
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

      {/* Quote */}
      <section className="py-16 sm:py-20 bg-surface-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <blockquote className="rounded-2xl bg-ink-900 p-8 text-ink-on-dark">
            <p className="text-lg leading-relaxed">&ldquo;{quote.text}&rdquo;</p>
            <footer className="mt-6">
              <cite className="font-display font-semibold not-italic">
                {quote.author}
              </cite>
              <span className="text-surface-400"> — {quote.role}</span>
            </footer>
          </blockquote>
          <p className="mt-6 text-center text-ink-600 font-medium">
            A flexible, value-focused approach
          </p>
        </div>
      </section>

      {/* Implementation Process - Visual timeline */}
      <section className="py-16 sm:py-20 bg-surface-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            {implementation.title}
          </h2>
          <p className="mt-2 text-ink-600 max-w-2xl">{implementation.subtitle}</p>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {implementation.steps.map((step, i) => {
              const Icon = IMPLEMENTATION_ICONS[i];
              return (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-brand-600">
                      Step {i + 1}
                    </span>
                    <h3 className="font-display font-semibold text-ink-900 mt-1">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-600">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Implementation Highlights */}
      <section className="py-16 sm:py-20 bg-surface-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            {highlights.title}
          </h2>
          <p className="mt-2 text-ink-600">{highlights.subtitle}</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.items.map((item) => (
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

      {/* FAQs - Accordion */}
      <section
        className="py-16 sm:py-20 bg-surface-100"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="font-display text-2xl font-bold text-ink-900 sm:text-3xl mb-12"
          >
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-900 py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-on-dark sm:text-3xl">
            Ready to transform your operations?
          </h2>
          <p className="mt-4 text-surface-300">
            Let&apos;s discuss how OmniLink can help streamline your business
            processes
          </p>
          <div className="mt-8">
            <CTAButton href="/contact">Schedule a Consultation</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

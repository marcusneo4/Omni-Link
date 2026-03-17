import Link from "next/link";
import { homeContent } from "@/lib/content";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Solutions | OmniLink Singapore - Business Process Automation",
  description:
    "Discover how OmniLink helps Project Management, Sales, Customer Care, and AI Integration teams streamline operations.",
};

export default function SolutionsIndexPage() {
  const { solutions } = homeContent;

  return (
    <section className="bg-surface-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold text-ink-900 sm:text-5xl">
            {solutions.title}
          </h1>
          <p className="mt-4 text-lg text-ink-600">{solutions.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.items.map((solution) => (
            <Link
              key={solution.href}
              href={solution.href}
              className="group rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] hover:shadow-premium hover:-translate-y-1 block"
            >
              <h2 className="font-display text-xl font-semibold text-ink-900 group-hover:text-brand-600 transition-colors">
                {solution.title}
              </h2>
              <ul className="mt-4 space-y-2">
                {solution.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-ink-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600 group-hover:underline">
                {solution.cta} →
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAButton href="/contact">Let&apos;s connect</CTAButton>
        </div>
      </div>
    </section>
  );
}

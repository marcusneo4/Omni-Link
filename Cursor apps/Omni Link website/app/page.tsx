import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import SolutionCard from "@/components/SolutionCard";
import TestimonialStrip from "@/components/TestimonialStrip";
import CTAButton from "@/components/CTAButton";
import { homeContent } from "@/lib/content";
import {
  Workflow,
  Plug,
  Sparkles,
  BookOpen,
  FolderKanban,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

const CORE_FEATURE_ICONS = [Workflow, Plug, Sparkles, BookOpen] as const;
const SOLUTION_ICONS = [FolderKanban, TrendingUp, MessageCircle, Sparkles] as const;

export default function HomePage() {
  const { coreFeatures, solutions, flexibleImplementation } = homeContent;

  return (
    <>
      <Hero />
      <TestimonialStrip />

      {/* Core Features - Bento layout */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-surface-100"
        aria-labelledby="core-features-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="core-features-heading"
              className="font-display text-3xl font-bold text-ink-900 sm:text-4xl"
            >
              {coreFeatures.title}
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              {coreFeatures.subtitle}
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 animate-stagger">
            {coreFeatures.features.map((feature, i) => (
              <div
                key={feature.title}
                className={i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-1" : ""}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={CORE_FEATURE_ICONS[i]}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-surface-50"
        aria-labelledby="solutions-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="solutions-heading"
              className="font-display text-3xl font-bold text-ink-900 sm:text-4xl"
            >
              {solutions.title}
            </h2>
            <p className="mt-4 text-lg text-ink-600">{solutions.subtitle}</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 animate-stagger">
            {solutions.items.map((solution, i) => (
              <SolutionCard
                key={solution.title}
                title={solution.title}
                features={solution.features}
                cta={solution.cta}
                href={solution.href}
                icon={SOLUTION_ICONS[i]}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Implementation */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-ink-900 text-surface-200"
        aria-labelledby="flexible-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="flexible-heading"
                className="font-display text-3xl font-bold text-ink-on-dark sm:text-4xl"
              >
                {flexibleImplementation.title}
              </h2>
              <p className="mt-4 text-lg text-surface-300">
                {flexibleImplementation.subtitle}
              </p>
              <p className="mt-4 text-surface-300">
                {flexibleImplementation.description}
              </p>
              <div className="mt-8">
                <CTAButton href="/contact" variant="outline-light">
                  Let&apos;s connect
                </CTAButton>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {flexibleImplementation.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-ink-800/50 p-6 border border-ink-700/80 transition-colors duration-200 hover:border-ink-600"
                >
                  <h3 className="font-display font-semibold text-ink-on-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-surface-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

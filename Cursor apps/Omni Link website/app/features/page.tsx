import { featuresContent } from "@/lib/content";
import ExpandableFeatureCard from "@/components/ExpandableFeatureCard";
import CTAButton from "@/components/CTAButton";

const FEATURE_ICON_NAMES = [
  "Video",
  "MessageSquare",
  "Mic",
  "ListTodo",
  "Zap",
  "BarChart3",
  "Plug",
  "GitBranch",
  "ArrowRightLeft",
  "Sparkles",
  "Languages",
  "Database",
  "Users",
  "BookOpen",
  "Lightbulb",
] as const;

export const metadata = {
  title: "Features | OmniLink Singapore - AI-Powered Business Automation",
  description:
    "Discover the core capabilities that power OmniLink: meeting management, communication hub, AI integration, and more. Built for Singapore businesses.",
};

export default function FeaturesPage() {
  const { hero, sections, cta } = featuresContent;
  let featureIndex = 0;

  return (
    <>
      <section className="bg-surface-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold text-ink-900 sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed max-w-2xl mx-auto">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {sections.map((section, sectionIndex) => {
        const featuresWithIcons = section.features.map((feature) => {
          const idx = featureIndex++;
          return {
            ...feature,
            iconName: FEATURE_ICON_NAMES[idx],
            index: idx,
          };
        });

        return (
          <section
            key={section.title}
            className={
              sectionIndex % 2 === 0
                ? "py-16 sm:py-20 bg-surface-100"
                : "py-16 sm:py-20 bg-surface-50"
            }
            aria-labelledby={`section-${sectionIndex}-heading`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2
                  id={`section-${sectionIndex}-heading`}
                  className="font-display text-2xl font-bold text-ink-900 sm:text-3xl"
                >
                  {section.title}
                </h2>
                <p className="mt-2 text-ink-600 max-w-2xl">{section.subtitle}</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-stagger">
                {featuresWithIcons.map((feature) => (
                  <ExpandableFeatureCard
                    key={feature.title}
                    title={feature.title}
                    summary={feature.summary}
                    bullets={feature.bullets}
                    description={feature.description}
                    iconName={feature.iconName}
                    index={feature.index}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-ink-900 py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-on-dark sm:text-3xl">
            {cta.title}
          </h2>
          <p className="mt-4 text-surface-300">{cta.subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact">{cta.primary}</CTAButton>
            <CTAButton href="/solutions/project-management" variant="outline-light">
              {cta.secondary}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

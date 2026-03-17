import { notFound } from "next/navigation";
import { getSolutionBySlug, solutionSlugs } from "@/lib/solutions";
import CTAButton from "@/components/CTAButton";
import {
  SolutionKeyCapabilities,
  SolutionChallenges,
  SolutionHowWeSolved,
  SolutionWorkflows,
  SolutionDailyProcess,
  SolutionResults,
  SolutionFaqs,
} from "@/components/solution-sections";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: "Solution | OmniLink Singapore" };
  return {
    title: `${solution.title} | OmniLink Singapore`,
    description: solution.subtitle,
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) notFound();

  return (
    <>
      <section className="bg-surface-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl font-bold text-ink-900 sm:text-5xl">
              {solution.title}
            </h1>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              {solution.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/contact">Let&apos;s connect</CTAButton>
              <CTAButton href="/features" variant="secondary">
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <SolutionKeyCapabilities capabilities={solution.keyCapabilities} />

      {solution.challenges && (
        <SolutionChallenges challenges={solution.challenges} />
      )}

      {solution.howWeSolved && (
        <SolutionHowWeSolved howWeSolved={solution.howWeSolved} />
      )}

      {solution.workflows && (
        <SolutionWorkflows workflows={solution.workflows} />
      )}

      {solution.dailyProcess && (
        <SolutionDailyProcess dailyProcess={solution.dailyProcess} />
      )}

      {solution.results && (
        <SolutionResults results={solution.results} />
      )}

      <SolutionFaqs faqs={solution.faqs} />

      <section className="bg-ink-900 py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ink-on-dark sm:text-3xl">
            Ready to enhance your workflows?
          </h2>
          <p className="mt-4 text-surface-300">
            Let&apos;s talk about your specific needs and find practical ways to
            improve your operations.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact">Let&apos;s connect</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}

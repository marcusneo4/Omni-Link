import type { SolutionContent } from "@/lib/solutions";

interface SolutionResultsProps {
  results: NonNullable<SolutionContent["results"]>;
}

export default function SolutionResults({ results }: SolutionResultsProps) {
  return (
    <section className="py-16 sm:py-20 bg-surface-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl mb-12">
          {results.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {results.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
            >
              <h3 className="font-display font-semibold text-ink-900">
                {item.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-ink-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

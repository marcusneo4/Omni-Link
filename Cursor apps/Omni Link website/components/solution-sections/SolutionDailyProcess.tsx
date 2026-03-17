import type { SolutionContent } from "@/lib/solutions";

interface SolutionDailyProcessProps {
  dailyProcess: NonNullable<SolutionContent["dailyProcess"]>;
}

export default function SolutionDailyProcess({
  dailyProcess,
}: SolutionDailyProcessProps) {
  return (
    <section className="py-16 sm:py-20 bg-surface-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl mb-12">
          {dailyProcess.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {dailyProcess.items.map((item) => (
            <article
              key={item.phase}
              className="rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
            >
              <h3 className="font-display font-semibold text-ink-900">
                {item.phase}
              </h3>
              <p className="mt-2 text-ink-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

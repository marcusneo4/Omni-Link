import type { SolutionContent } from "@/lib/solutions";

interface SolutionChallengesProps {
  challenges: NonNullable<SolutionContent["challenges"]>;
}

export default function SolutionChallenges({ challenges }: SolutionChallengesProps) {
  return (
    <section className="py-16 sm:py-20 bg-surface-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl mb-8">
          {challenges.title}
        </h2>
        <ul className="space-y-4">
          {challenges.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-ink-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

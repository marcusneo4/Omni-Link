import type { SolutionContent } from "@/lib/solutions";

interface SolutionWorkflowsProps {
  workflows: NonNullable<SolutionContent["workflows"]>;
}

export default function SolutionWorkflows({ workflows }: SolutionWorkflowsProps) {
  return (
    <section className="py-16 sm:py-20 bg-surface-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl mb-8">
          {workflows.title}
        </h2>
        <div className="space-y-4">
          {workflows.steps.map((step) => (
            <div
              key={step}
              className="rounded-xl bg-surface-100 p-4 text-ink-800 border border-surface-200"
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

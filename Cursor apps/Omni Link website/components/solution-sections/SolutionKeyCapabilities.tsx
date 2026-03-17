import type { SolutionContent } from "@/lib/solutions";

interface SolutionKeyCapabilitiesProps {
  capabilities: SolutionContent["keyCapabilities"];
}

export default function SolutionKeyCapabilities({
  capabilities,
}: SolutionKeyCapabilitiesProps) {
  return (
    <section
      className="py-16 sm:py-20 bg-surface-100"
      aria-labelledby="capabilities-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="capabilities-heading"
          className="font-display text-2xl font-bold text-ink-900 sm:text-3xl mb-12"
        >
          Key Capabilities
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80 transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
            >
              <h3 className="font-display font-semibold text-ink-900">
                {capability.title}
              </h3>
              {capability.description && (
                <p className="mt-2 text-ink-600">{capability.description}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

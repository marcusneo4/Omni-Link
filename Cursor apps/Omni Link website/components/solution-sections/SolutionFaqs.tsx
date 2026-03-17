import type { SolutionContent } from "@/lib/solutions";

interface SolutionFaqsProps {
  faqs: SolutionContent["faqs"];
}

export default function SolutionFaqs({ faqs }: SolutionFaqsProps) {
  return (
    <section
      className="py-16 sm:py-20 bg-surface-100"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="font-display text-2xl font-bold text-ink-900 sm:text-3xl mb-12"
        >
          Common Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl bg-surface-elevated p-6 shadow-soft border border-surface-200/80"
            >
              <h3 className="font-display font-semibold text-ink-900">
                {faq.question}
              </h3>
              <p className="mt-3 text-ink-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

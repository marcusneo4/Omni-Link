import { homeContent } from "@/lib/content";

export default function TestimonialStrip() {
  const { quote, attribution, stats } = homeContent.testimonialStrip;

  return (
    <section
      className="py-12 sm:py-16 bg-surface-100 border-y border-surface-200/80"
      aria-labelledby="testimonial-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
          <blockquote className="max-w-2xl text-center lg:text-left">
            <p
              id="testimonial-heading"
              className="text-lg font-medium text-ink-800 sm:text-xl leading-relaxed"
            >
              &ldquo;{quote}&rdquo;
            </p>
            <cite className="mt-3 block text-sm text-ink-600 not-italic">
              — {attribution}
            </cite>
          </blockquote>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:flex-shrink-0">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-bold text-brand-600 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-ink-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

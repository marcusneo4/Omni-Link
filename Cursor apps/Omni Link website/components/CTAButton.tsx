import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-light";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-50 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] active:scale-[0.98]";

  const variantClasses = {
    primary:
      "bg-brand-600 text-ink-on-dark shadow-soft hover:bg-brand-700 hover:shadow-premium focus-visible:ring-brand-500",
    secondary:
      "bg-surface-200 text-ink-900 hover:bg-surface-300 hover:shadow-soft focus-visible:ring-ink-600",
    outline:
      "border-2 border-ink-800 text-ink-900 hover:bg-ink-900 hover:text-ink-on-dark focus-visible:ring-ink-600",
    "outline-light":
      "border-2 border-ink-on-dark text-ink-on-dark hover:bg-ink-on-dark hover:text-ink-900 focus-visible:ring-ink-on-dark",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

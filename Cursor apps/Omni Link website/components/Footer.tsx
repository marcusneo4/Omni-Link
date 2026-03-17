import Link from "next/link";
import { MapPin, Shield } from "lucide-react";

const solutionLinks = [
  { label: "Solutions Overview", href: "/" },
  { label: "Project Management", href: "/solutions/project-management" },
  { label: "Sales Teams", href: "/solutions/sales" },
  { label: "Customer Care", href: "/solutions/customer-care" },
  { label: "AI Integration", href: "/solutions/ai-integration" },
];

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const trustBadges = [
  { label: "Singapore-based", Icon: MapPin },
  { label: "18+ years automation", Icon: Shield },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-surface-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-wrap gap-6 pb-8 mb-8 border-b border-ink-700">
          {trustBadges.map(({ label, Icon }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-sm text-surface-400"
            >
              <Icon className="h-4 w-4 shrink-0 text-brand-400" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="font-display text-xl font-semibold text-ink-on-dark hover:text-brand-400 transition-colors duration-200"
            >
              OmniLink
            </Link>
            <Link
              href="/privacy-policy"
              className="mt-4 block text-sm text-surface-300 hover:text-ink-on-dark transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-on-dark">
              Solutions
            </h3>
            <ul className="mt-4 space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-300 hover:text-ink-on-dark transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-on-dark">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-300 hover:text-ink-on-dark transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-on-dark">
              Contact
            </h3>
            <p className="mt-4 text-sm text-surface-300">
              Singapore
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-block text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-700 pt-8">
          <p className="text-sm text-surface-400">
            A project of{" "}
            <a
              href="https://deligo.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-300 hover:text-ink-on-dark transition-colors underline duration-200"
            >
              Deligo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

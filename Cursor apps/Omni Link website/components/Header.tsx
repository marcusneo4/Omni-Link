"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Project Management", href: "/solutions/project-management" },
      { label: "Sales Teams", href: "/solutions/sales" },
      { label: "Customer Care", href: "/solutions/customer-care" },
      { label: "AI Integration", href: "/solutions/ai-integration" },
    ],
  },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface-50/95 backdrop-blur-sm border-b border-surface-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display text-xl font-semibold text-ink-900 transition-colors hover:text-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded"
        >
          OmniLink
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded py-2"
                  aria-expanded={solutionsOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {solutionsOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="rounded-xl bg-surface-elevated py-2 shadow-premium border border-surface-200 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-ink-700 hover:bg-surface-100 hover:text-ink-900 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded py-2"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-ink-on-dark shadow-soft transition-all duration-250 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] hover:bg-brand-700 hover:shadow-premium hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            Let&apos;s connect
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-ink-700 hover:bg-surface-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-200 ease-out-snappy ${mobileMenuOpen ? "max-h-[500px]" : "max-h-0"}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="border-t border-surface-200 bg-surface-50 px-4 py-4 space-y-2">
          <Link
            href="/features"
            className="block py-3 text-ink-700 hover:text-ink-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/about"
            className="block py-3 text-ink-700 hover:text-ink-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/pricing"
            className="block py-3 text-ink-700 hover:text-ink-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="block py-3 text-ink-700 hover:text-ink-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-2 border-t border-surface-200">
            <p className="text-xs font-medium text-ink-600 uppercase tracking-wider mb-2">Solutions</p>
            <Link
              href="/solutions/project-management"
              className="block py-2 text-ink-700 hover:text-ink-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Project Management
            </Link>
            <Link
              href="/solutions/sales"
              className="block py-2 text-ink-700 hover:text-ink-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sales Teams
            </Link>
            <Link
              href="/solutions/customer-care"
              className="block py-2 text-ink-700 hover:text-ink-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Customer Care
            </Link>
            <Link
              href="/solutions/ai-integration"
              className="block py-2 text-ink-700 hover:text-ink-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Integration
            </Link>
          </div>
          <Link
            href="/contact"
            className="mt-4 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-ink-on-dark shadow-soft hover:bg-brand-700 hover:shadow-premium transition-all duration-250"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let&apos;s connect
          </Link>
        </div>
      </div>
    </header>
  );
}

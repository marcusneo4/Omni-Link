"use client";

import { useState, useCallback } from "react";
import { submitContactForm, type ContactFormPayload } from "@/lib/contact-form";

type FormSubmissionStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] =
    useState<FormSubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFormSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setErrorMessage(null);
      setSubmissionStatus("loading");

      const formElement = event.currentTarget;
      const formData = new FormData(formElement);

      const payload: ContactFormPayload = {
        name: (formData.get("name") as string) ?? "",
        email: (formData.get("email") as string) ?? "",
        message: (formData.get("message") as string) ?? "",
      };

      const result = await submitContactForm(payload);

      if (result.success) {
        setSubmissionStatus("success");
        formElement.reset();
        return;
      }

      setSubmissionStatus("error");
      setErrorMessage(result.error);
    },
    []
  );

  const isFormDisabled = submissionStatus === "loading";

  return (
    <>
      <section className="bg-surface-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="font-display text-4xl font-bold text-ink-900 sm:text-5xl">
                Let&apos;s Connect!
              </h1>
              <p className="mt-6 text-lg text-ink-600">
                I&apos;d love to connect and discuss how we can help streamline
                your business processes. Please find a convenient time in my
                calendar above, or reach out using the form to schedule a
                conversation.
              </p>
              <p className="mt-4 text-ink-600">
                <strong>Singapore</strong> — Serving businesses across the region
              </p>
            </div>

            <div className="rounded-2xl bg-surface-100 p-8 border border-surface-200">
              <div
                className="mb-8 rounded-xl bg-surface-200/50 border-2 border-dashed border-surface-300 p-12 text-center"
                aria-hidden="true"
              >
                <p className="text-ink-600 font-medium">
                  Calendar embed placeholder
                </p>
                <p className="mt-2 text-sm text-ink-500">
                  Integrate Calendly, Cal.com, or your preferred scheduling tool
                </p>
              </div>

              <form
                onSubmit={handleFormSubmit}
                className="space-y-6"
                aria-label="Contact form"
                noValidate
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-ink-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 block w-full rounded-xl border border-surface-300 bg-surface-elevated px-4 py-3 text-ink-900 placeholder-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
                    placeholder="Your name"
                    disabled={isFormDisabled}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-ink-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    autoComplete="email"
                    className="mt-2 block w-full rounded-xl border border-surface-300 bg-surface-elevated px-4 py-3 text-ink-900 placeholder-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
                    placeholder="you@company.com"
                    disabled={isFormDisabled}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-ink-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 block w-full rounded-xl border border-surface-300 bg-surface-elevated px-4 py-3 text-ink-900 placeholder-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200"
                    placeholder="Tell us about your project..."
                    disabled={isFormDisabled}
                  />
                </div>

                {submissionStatus === "success" && (
                  <p
                    className="text-brand-600 font-medium"
                    role="status"
                    aria-live="polite"
                  >
                    Thank you! We&apos;ll be in touch soon.
                  </p>
                )}
                {submissionStatus === "error" && (
                  <p
                    className="text-red-600 font-medium"
                    role="alert"
                    aria-live="assertive"
                  >
                    {errorMessage ?? "Something went wrong. Please try again."}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isFormDisabled}
                  className="inline-flex min-h-[44px] min-w-[120px] items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-ink-on-dark shadow-soft transition-all duration-250 [transition-timing-function:cubic-bezier(0.25,1,0.5,1)] hover:bg-brand-700 hover:shadow-premium hover:scale-[1.03] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  {submissionStatus === "loading" && (
                    <svg
                      className="h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  )}
                  {submissionStatus === "loading" ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

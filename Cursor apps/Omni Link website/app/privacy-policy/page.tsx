export const metadata = {
  title: "Privacy Policy | OmniLink Singapore",
  description:
    "Privacy policy for OmniLink. PDPA-compliant data handling for Singapore and regional businesses.",
};

export default function PrivacyPolicyPage() {
  return (
    <article className="bg-surface-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold text-ink-900">
          Privacy Policy
        </h1>
        <p className="mt-4 text-ink-600">
          Last updated: March 2025
        </p>

        <div className="mt-12 space-y-8 text-ink-600 leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-ink-900 mb-4">
              1. Introduction
            </h2>
            <p>
              OmniLink (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
              committed to protecting your personal data. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our services. We operate in compliance
              with the Personal Data Protection Act 2012 (PDPA) of Singapore and
              applicable data protection laws in the regions we serve.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-900 mb-4">
              2. Data Controller and Data Intermediary
            </h2>
            <p>
              When you engage OmniLink for business automation services, your
              organization typically acts as the <strong>Data Controller</strong>
              — determining the purposes and means of processing personal data.
              OmniLink may act as a <strong>Data Intermediary</strong> when
              processing data on your behalf. Our Service Agreements specify the
              respective roles and responsibilities for data protection.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-900 mb-4">
              3. Information We Collect
            </h2>
            <p>We may collect:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Contact information (name, email, phone number)</li>
              <li>Business information (company name, role, industry)</li>
              <li>Communication and correspondence</li>
              <li>Usage data related to our services</li>
              <li>Technical data (IP address, browser type, device information)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-900 mb-4">
              4. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="mt-2 list-disc pl-6 space-y-1">
              <li>Provide and improve our services</li>
              <li>Communicate with you about projects and support</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and the security of our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-900 mb-4">
              5. PDPA Compliance (Singapore)
            </h2>
            <p>
              We adhere to the PDPA&apos;s key obligations: consent, purpose
              limitation, notification, access and correction, accuracy,
              protection, retention, and transfer. We do not sell your personal
              data. For inquiries or complaints regarding your personal data,
              you may contact us or the Personal Data Protection Commission
              (PDPC) of Singapore.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-900 mb-4">
              6. Data Retention
            </h2>
            <p>
              We retain your personal data only for as long as necessary to
              fulfill the purposes for which it was collected, or as required by
              law or contractual obligations.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-900 mb-4">
              7. Your Rights
            </h2>
            <p>
              Under the PDPA, you have the right to access, correct, or withdraw
              consent for the collection, use, or disclosure of your personal
              data. To exercise these rights, please contact us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink-900 mb-4">
              8. Contact Us
            </h2>
            <p>
              For privacy-related questions or to exercise your rights, please
              contact us through our{" "}
              <a href="/contact" className="text-brand-600 hover:text-brand-700 underline">
                contact page
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}

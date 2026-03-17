import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | OmniLink Singapore - Schedule a Consultation",
  description:
    "Get in touch with OmniLink. Schedule a consultation to discuss how we can streamline your business processes.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

/**
 * Contact form submission service for OmniLink Singapore.
 * Abstracts form submission logic for testability and future API integration.
 * Replace submitContactForm implementation with Formspree, Netlify Forms, or your API.
 *
 * @module lib/contact-form
 */

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

export type ContactFormSubmitResult =
  | { success: true }
  | { success: false; error: string };

/**
 * Submits contact form data. Currently a placeholder for Formspree/Netlify/API.
 * Replace this implementation with your actual submission endpoint.
 *
 * @param payload - Validated contact form data
 * @returns Promise resolving to success or error result
 * @throws Never throws; returns { success: false } on failure
 */
export async function submitContactForm(
  payload: ContactFormPayload
): Promise<ContactFormSubmitResult> {
  if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
    return {
      success: false,
      error: "[ContactForm] Invalid payload: name, email, and message are required",
    };
  }

  try {
    // Placeholder: Replace with Formspree, Netlify Forms, or your API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown submission error";
    return {
      success: false,
      error: `[ContactForm] Failed to submit: ${errorMessage}`,
    };
  }
}

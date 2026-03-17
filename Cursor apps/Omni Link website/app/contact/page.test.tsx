import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactPage from "./page";
import { submitContactForm } from "@/lib/contact-form";

vi.mock("@/lib/contact-form");

describe("ContactPage", () => {
  beforeEach(() => {
    vi.mocked(submitContactForm).mockReset();
  });

  it("renders contact form with required fields", () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
  });

  it("shows success message after successful submit (happy path)", async () => {
    vi.mocked(submitContactForm).mockResolvedValue({ success: true });
    const user = userEvent.setup({ delay: null });

    render(<ContactPage />);
    await user.type(screen.getByLabelText(/name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.type(screen.getByLabelText(/message/i), "Interested in OmniLink");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    });
  });

  it("shows error message when submit fails", async () => {
    vi.mocked(submitContactForm).mockResolvedValue({
      success: false,
      error: "Network error",
    });
    const user = userEvent.setup({ delay: null });

    render(<ContactPage />);
    await user.type(screen.getByLabelText(/name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.type(screen.getByLabelText(/message/i), "Message");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/network error/i)).toBeInTheDocument();
    });
  });

  it("disables submit button while loading", async () => {
    vi.mocked(submitContactForm).mockImplementation(
      () => new Promise((resolve) => setTimeout(() => resolve({ success: true }), 100))
    );
    const user = userEvent.setup({ delay: null });

    render(<ContactPage />);
    await user.type(screen.getByLabelText(/name/i), "Jane");
    await user.type(screen.getByLabelText(/email/i), "jane@test.com");
    await user.type(screen.getByLabelText(/message/i), "Hello");
    const submitButton = screen.getByRole("button", { name: /send message/i });
    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
    expect(screen.getByRole("button", { name: /sending/i })).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByText(/thank you/i)).toBeInTheDocument();
      },
      { timeout: 500 }
    );
  });
});

import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  submitContactForm,
  type ContactFormPayload,
} from "./contact-form";

describe("submitContactForm", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns success for valid payload (happy path)", async () => {
    const validPayload: ContactFormPayload = {
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Interested in OmniLink for our team.",
    };

    const resultPromise = submitContactForm(validPayload);
    await vi.runAllTimersAsync();
    const result = await resultPromise;

    expect(result).toEqual({ success: true });
  });

  it("returns error for empty name", async () => {
    const invalidPayload: ContactFormPayload = {
      name: "",
      email: "jane@example.com",
      message: "Message here",
    };

    const result = await submitContactForm(invalidPayload);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error).toContain("Invalid payload");
      expect(result.error).toContain("required");
    }
  });

  it("returns error for whitespace-only name", async () => {
    const invalidPayload: ContactFormPayload = {
      name: "   ",
      email: "jane@example.com",
      message: "Message here",
    };

    const result = await submitContactForm(invalidPayload);

    expect(result.success).toBe(false);
  });

  it("returns error for empty email", async () => {
    const invalidPayload: ContactFormPayload = {
      name: "Jane Doe",
      email: "",
      message: "Message here",
    };

    const result = await submitContactForm(invalidPayload);

    expect(result.success).toBe(false);
  });

  it("returns error for empty message", async () => {
    const invalidPayload: ContactFormPayload = {
      name: "Jane Doe",
      email: "jane@example.com",
      message: "",
    };

    const result = await submitContactForm(invalidPayload);

    expect(result.success).toBe(false);
  });

  it("returns error for null/undefined name (edge case)", async () => {
    const invalidPayload = {
      name: null as unknown as string,
      email: "jane@example.com",
      message: "Message",
    };

    const result = await submitContactForm(invalidPayload);

    expect(result.success).toBe(false);
  });

  it("resolves with defined result for valid payload", async () => {
    const validPayload: ContactFormPayload = {
      name: "Test",
      email: "test@test.com",
      message: "Test message",
    };

    const resultPromise = submitContactForm(validPayload);
    await vi.runAllTimersAsync();
    const result = await resultPromise;
    expect(result).toBeDefined();
    expect(result.success).toBe(true);
  });
});

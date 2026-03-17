import { describe, it, expect } from "vitest";
import {
  isValidSolutionSlug,
  getSolutionBySlug,
  solutionSlugs,
  solutionsData,
  type SolutionSlug,
} from "./solutions";

describe("isValidSolutionSlug", () => {
  it("returns true for all known solution slugs (happy path)", () => {
    for (const slug of solutionSlugs) {
      expect(isValidSolutionSlug(slug)).toBe(true);
    }
  });

  it("returns false for unknown slug", () => {
    expect(isValidSolutionSlug("unknown-solution")).toBe(false);
    expect(isValidSolutionSlug("project-management-extra")).toBe(false);
  });

  it("returns false for null", () => {
    expect(isValidSolutionSlug(null)).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isValidSolutionSlug(undefined)).toBe(false);
  });

  it("returns false for number", () => {
    expect(isValidSolutionSlug(123)).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(isValidSolutionSlug("")).toBe(false);
  });

  it("returns false for object", () => {
    expect(isValidSolutionSlug({ slug: "project-management" })).toBe(false);
  });
});

describe("getSolutionBySlug", () => {
  it("returns solution content for valid slug (happy path)", () => {
    const solution = getSolutionBySlug("project-management");
    expect(solution).not.toBeNull();
    expect(solution?.title).toBe("Project Management");
    expect(solution?.slug).toBe("project-management");
    expect(solution?.faqs.length).toBeGreaterThan(0);
  });

  it("returns null for invalid slug", () => {
    expect(getSolutionBySlug("invalid")).toBeNull();
    expect(getSolutionBySlug(null)).toBeNull();
    expect(getSolutionBySlug(undefined)).toBeNull();
  });

  it("returns correct solution for each known slug", () => {
    const expectedTitles: Record<SolutionSlug, string> = {
      "project-management": "Project Management",
      sales: "Sales Operations",
      "customer-care": "Customer Care",
      "ai-integration": "AI Integration",
    };

    for (const slug of solutionSlugs) {
      const solution = getSolutionBySlug(slug);
      expect(solution).not.toBeNull();
      expect(solution?.title).toBe(expectedTitles[slug]);
    }
  });
});

describe("solutionsData integrity", () => {
  it("has entry for every solutionSlug", () => {
    for (const slug of solutionSlugs) {
      expect(solutionsData[slug]).toBeDefined();
      expect(solutionsData[slug].slug).toBe(slug);
    }
  });

  it("each solution has required faqs array", () => {
    for (const slug of solutionSlugs) {
      const solution = solutionsData[slug];
      expect(Array.isArray(solution.faqs)).toBe(true);
      expect(solution.faqs.length).toBeGreaterThan(0);
      solution.faqs.forEach((faq) => {
        expect(faq.question).toBeDefined();
        expect(faq.answer).toBeDefined();
      });
    }
  });
});

import { expect } from "@assertive-ts/core";
import { it, suite } from "vitest";

suite("[Integration] main.test.ts", () => {
  it("re-exports the library exports", async () => {
    const web = await expect(import("../../src/main")).toBeResolved();

    expect(web).toHaveKeys(
      "Form",
      "Input",
      "Select",
      "Textarea",
      "inputOf",
      "selectOf",
      "textareaOf",
    );
  });
});
